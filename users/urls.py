from rest_framework import routers
from django.urls import path, include
from .views import UserViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('all', include(router.urls)),
    path('api-auth/',include('rest_framework.urls', namespace='rest_framework')),
]