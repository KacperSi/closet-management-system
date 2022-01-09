from django.db import models

class weatherStatus:
		sunny = False
		cloudy = False
		rainy = False
		snowy = False
		windy = False
		temperature = 0

		def listFormat(self):
			new_list= []
			if self.sunny:
				new_list.append("sunny")
			if self.cloudy:
				new_list.append("cloudy")
			if self.rainy:
				new_list.append("rainy")
			if self.snowy:
				new_list.append("snowy")
			if self.windy:
				new_list.append("windy")
			return new_list


current_weather = weatherStatus()

# Przenieś później do clothes:


