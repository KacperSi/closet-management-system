from django.urls import path
from .views import GarmentList

app_name='clothes'

urlpatterns = [
	path('list/', GarmentList.as_view(), name='listcreate'),
]