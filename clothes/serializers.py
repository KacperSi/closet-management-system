from rest_framework import serializers, fields
from .models import Garment, WEATHER, Collection


class GarmentSerializer(serializers.ModelSerializer):

	class Meta:
		model = Garment
		fields = ('id', 'user', 'weather_type', 'cathegory', 'name', 'image', 'preference_index', 'max_temp', 'min_temp')

	weather_type = fields.MultipleChoiceField(choices=WEATHER)


class CollectionSerializer(serializers.ModelSerializer):

	class Meta:
		model = Collection
		fields = ('id', 'name', 'clothes')
		depth = 1