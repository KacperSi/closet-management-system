from django.db import models
from django.conf import settings
from multiselectfield import MultiSelectField

WEATHER=(
		('none','None'),
		('sunny','Sunny'),
		('cloudy','Cloudy'),
		('rainy','Rainy'),
		('snowy','Snowy'),
		('windy','Windy'),
	)

CATHEGORY_CHOICE=(
		('none','None'),
		('hat', 'Hat'),
		('cover1','Outer layer'),
		('cover2','Mid layer'),
		('tshirt','T-Shirt'),
		('trousers','Trousers'),
		('boots', 'Boots'),
	)

def user_directory_path(instance, filename):
  	return 'clothes/{filename}'.format(filename=filename)


class Garment(models.Model):

	user = models.ForeignKey(settings.AUTH_USER_MODEL, models.DO_NOTHING, default=1, verbose_name="User ID")

	weather_type = MultiSelectField(choices=WEATHER)

	cathegory=models.CharField(
		max_length=20,
		choices=CATHEGORY_CHOICE,
		default='none',
		blank=False,
		)

	name=models.CharField(max_length=200, blank=False, default='', verbose_name="Cloth name")
	image=models.ImageField(
		upload_to=user_directory_path,
		default='clothes/default.jpg')
	preference_index=models.IntegerField(default=1, verbose_name="Preference")
	max_temp = models.IntegerField(default=0, verbose_name="Maximum temperature")
	min_temp = models.IntegerField(default=0, verbose_name="Minimum temperature")

	class Meta:
	#	managed = False
		db_table = 'clothes_garment'

#rozbiłem na mniejsze klasy
'''
class WeatherType(models.Model):
	
	sunny = models.BooleanField(default=False)
	cloudy = models.BooleanField(default=False)
	rainy = models.BooleanField(default=False)
	snowy = models.BooleanField(default=False)
	windy = models.BooleanField(default=False)

	temperature = models.IntegerField(default=10)

	class Meta:
	#	managed = False
		db_table = 'weather_type'
'''
