from django.urls import path
#from . import views
from .views import GarmentList, GarmentDetail, CathegoryList, CollectionList, CollectionDetail

app_name='clothes'

urlpatterns = [
	path('list/', GarmentList.as_view(), name='clothes_list'),
	path('<int:pk>/', GarmentDetail.as_view(), name='clothes_detail'),
	path('list/<cathegory>', CathegoryList.as_view(), name='cathegory_list'),
	path('collection/', CollectionList.as_view(), name='collection'),
	path('collection/<int:pk>', CollectionDetail.as_view(), name='collection_detail')
]