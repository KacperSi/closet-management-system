from rest_framework import generics
from .models import Garment
from .serializers import GarmentSerializer

class GarmentList(generics.ListCreateAPIView):
	queryset=Garment.objects.all()
	serializer_class=GarmentSerializer