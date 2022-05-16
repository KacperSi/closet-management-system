"""mycms URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from general import views as general_views
from users import views as user_views
from weather import views as weather_views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('admin/', admin.site.urls),

    #path('', general_views.home, name='home'),
    #path('about/', general_views.about, name='about'),
    #path('register/', user_views.register, name='register'),
    path('weather/',weather_views.weather, name= 'weather'),
    

    #path('login/', auth_views.LoginView.as_view(template_name='users/login.html'), name='login'),
    #path('logout/', auth_views.LogoutView.as_view(template_name='users/logout.html'), name='logout'),

    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),

    path('users/', include('users.urls')),

    path('weather_api/',weather_views.weatherApi, name= 'weather_api'),
    path('clothes_set/',weather_views.clothesSet.as_view(), name= 'find_set_of_clothes'),

    path('clothes/', include('clothes.urls')),
    
]
