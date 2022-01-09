from rest_framework import generics
from rest_framework.permissions import BasePermission, IsAuthenticated

from .models import Garment
from .serializers import GarmentSerializer


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