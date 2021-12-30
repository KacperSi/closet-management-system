from django.db import models

class Garment(models.Model):
	garment_id=models.IntegerField()
	user_id=models.IntegerField()

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