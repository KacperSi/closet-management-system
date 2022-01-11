from rest_framework import generics
from rest_framework.permissions import BasePermission, IsAuthenticated
from rest_framework.response import Response

from .models import Garment, Collection
from .serializers import GarmentSerializer, CollectionSerializer


# my custom permission class to check if logged user is an author of the data we want to retrive
class UserObjectsReadWritePermission(BasePermission):
	message = "Only author can read and write his data."

	def has_object_permission(self, request, view, obj):
		if request.user == obj.user:
			return True


class GarmentList(generics.ListCreateAPIView):
	permission_classes = [IsAuthenticated]
	serializer_class=GarmentSerializer

	# retrive only logged user data
	def get_queryset(self):
		if self.request.user.is_superuser:
			return Garment.objects.all()
		else:
			return Garment.objects.all().filter(user=self.request.user)


class GarmentDetail(generics.RetrieveUpdateDestroyAPIView, UserObjectsReadWritePermission):
	permission_classes = [UserObjectsReadWritePermission]
	queryset=Garment.objects.all()
	serializer_class=GarmentSerializer


class CathegoryList(generics.ListAPIView):
	permission_classes = [IsAuthenticated]
	serializer_class = GarmentSerializer

	def get_queryset(self):
		return Garment.objects.all().filter(user=self.request.user, cathegory=self.kwargs['cathegory'])


class CollectionList(generics.ListCreateAPIView):
	permission_classes = [IsAuthenticated]
	serializer_class = CollectionSerializer

	# retrive only logged user data
	def get_queryset(self):
		if self.request.user.is_superuser:
			return Collection.objects.all()
		else:
			return Collection.objects.all().filter(user=self.request.user)

	#create collection by specifing clothes id that are in it
	def create(self, request, *args, **kwargs):
		data = request.data
		new_collection = Collection.objects.create(user_id=self.request.user.id, name=data['name'])

		new_collection.save()

		for cloth in data['clothes']:
			cloth_obj = Garment.objects.get(id=cloth['id'])
			if cloth_obj.user == self.request.user:
				new_collection.clothes.add(cloth_obj)
			else:
				return Response('No permisson to that object', status=403)
			

		serializer = CollectionSerializer(new_collection)

		return Response(serializer.data)


class CollectionDetail(generics.RetrieveUpdateDestroyAPIView, UserObjectsReadWritePermission):
	permission_classes = [UserObjectsReadWritePermission]
	queryset=Collection.objects.all()
	serializer_class=CollectionSerializer