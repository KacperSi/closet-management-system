from django.shortcuts import render
import requests
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authtoken.models import Token
from rest_framework import viewsets, response
from weather.models import current_weather
from clothes import models
import random
from clothes.serializers import GarmentSerializer
from rest_framework import serializers,generics

def weather(request):

    if 'city' in request.POST:
        city = request.POST['city']
    else:
        city = 'Poznań'
    appid='e3ba2b287dabacd8d9d5acf1ee02a718'
    URL='http://api.openweathermap.org/data/2.5/weather'
    PARAMS={'q':city,'appid':appid,'units':'metric'}
    r = requests.get(url=URL, params=PARAMS)
    res= r.json()
    description = res['weather'][0]['description']
    icon = res['weather'][0]['icon']
    temp = res['main']['temp']
    return render(request,'weather/weather.html',{'description':description,
    'icon':icon,'temp':temp, 'city':city})


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def weatherApi(request):
    if request.method == 'POST':
        if 'city' in request.POST:
            city = request.POST['city']
        else:
            city = 'Poznań'
    else:
        city = 'Poznań'
    appid='e3ba2b287dabacd8d9d5acf1ee02a718'
    URL='http://api.openweathermap.org/data/2.5/weather'
    PARAMS={'q':city,'appid':appid,'units':'metric'}
    r = requests.get(url=URL, params=PARAMS)
    res= r.json()
    description = res['weather'][0]['description']
    icon = res['weather'][0]['icon']
    current_weather.temperature = res['main']['temp']
    current_weather.windy = str((lambda x: x >2.5 )(res['wind']['speed']))
    current_weather.cloudy = str((lambda x: x >50 )(res['clouds']['all']))
    current_weather.rainy = str("rain" in description)
    current_weather.snowy = str("snow" in description)
    current_weather.sunny = str(not (lambda x: x >50 )(res['clouds']['all']))
    return response.Response({'description':description,'icon':icon,'temp':current_weather.temperature, 'city':city,'sunny':current_weather.sunny,
                              'cloudiness':current_weather.cloudy,'rain':current_weather.rainy,'snow':current_weather.snowy,'wind':current_weather.windy,})


class clothesSet(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class=GarmentSerializer

    def get_queryset(self):
        tshirt = checkGarment("t-shirt")
        trousers = checkGarment("trousers")
        hoodie = checkGarment("hoodie")
        jacket = checkGarment("jacket")
        shorts = checkGarment("shorts")
        shirt = checkGarment("shirt")
        list_of_ids=[tshirt.id,trousers.id,hoodie.id,jacket.id,shorts.id,shirt.id]
        generated = models.Garment.objects.filter(id__in=list_of_ids)
        return generated

def checkGarment(garment):
    one_type_clothes = list(models.Garment.objects.filter(cathegory=garment))
    one_type_clothes = checkWeatherType(one_type_clothes)
    if one_type_clothes:
        return random.choice(one_type_clothes)
    else:
        return models.Garment()

def checkWeatherType(clothes_list):
    new_list= []
    for garment in clothes_list:
        if isTypeAppropriate(garment):
            new_list.append(garment)
    return new_list;

def isTypeAppropriate(garment):
    licznik = 0
    for type in garment.weather_type:
        for c in current_weather.listFormat():
            if c == type:
                licznik=licznik+1
    if licznik==len(current_weather.listFormat()):
        return True;
    else:
        return False;