from django.db import models
from django.conf import settings

class Garment(models.Model):
	#garment_id=models.IntegerField()
	# moim zdaniem niepotrzebne, zobacz tabele w xampp
	user_id = models.ForeignKey(settings.AUTH_USER_MODEL, models.DO_NOTHING) #zmieniłem
	weather_type_id = models.ForeignKey('WeatherType', models.DO_NOTHING) #zmieniłem

	cathegory_choice=[
		('none','None'),
		('t-shirt','T-Shirt'),
		('trousers','Trousers'),
		('hoodie','Hoodie'),
		('jacket','Jacket'),
		('shorts','Shorts'),
		('shirt','Shirt'),
	]
	cathegory=models.CharField(
		max_length=20,
		choices=cathegory_choice,
		default='none',
		blank=False,
		)

	name=models.CharField(max_length=200, blank=False,)
	image_address=models.ImageField()
	preference_index=models.IntegerField()

	class Meta:
		managed = False
		db_table = 'c_garment'

#rozbiłem na mniejsze klasy

class WeatherType(models.Model):

	weather_choice=[
		('none','None'),
		('sun','Sun'),
		('rain','Rain'),
		('wind','Wind'),
		('snow','Snow'),
	]
	weather_type=models.CharField(
		max_length=20,
		choices=weather_choice,
		default='none',
		blank=False,
		)

	class Meta:
		managed = False
		db_table = 'weather_type'