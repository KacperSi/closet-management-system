from django.shortcuts import render
import requests

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authtoken.models import Token
from rest_framework import viewsets, response
from weather.models import current_weather

def weather(request):

    if 'city' in request.POST:
        city = request.POST['city']
    else:
        city = 'London'
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
@permission_classes([AllowAny])
def weatherApi(request):
    if request.method == 'POST':
        if 'city' in request.POST:
            city = request.POST['city']
        else:
            city = 'London'
    else:
        city = 'London'
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
