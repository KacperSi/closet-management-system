from rest_framework import serializers, fields
from .models import Garment, WEATHER

class GarmentSerializer(serializers.ModelSerializer):
	class Meta:
		model = Garment
		fields = ('user', 'weather_type', 'cathegory', 'name', 'image', 'preference_index', 'max_temp', 'min_temp')

	weather_type = fields.MultipleChoiceField(choices=WEATHER)