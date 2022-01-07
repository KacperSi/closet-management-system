from django.urls import path
#from . import views
from .views import GarmentList, GarmentDetail

app_name='clothes'

urlpatterns = [
	#path('list/', views.clothes_list, name='clothes_list'),
	#path('<int:pk>/', views.clothes_detail, name='clothes_detail')
	path('list/', GarmentList.as_view(), name='clothes_list'),
	path('<int:pk>/', GarmentDetail.as_view(), name='clothes_detail')
]