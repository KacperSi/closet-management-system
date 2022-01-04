from rest_framework import routers
from django.urls import path, include
import users.views

#router = routers.DefaultRouter()
#router.register(r'users', users.views.UserViewSet)
#router.register(r'profile', UserViewSet)

urlpatterns = [
    #path('profile/', users.views.returnUserProfile, name='profile'),
    #path('all', include(router.urls)),
    #path('all/', users.views.UserViewSet, name='all_users'),
    path('api-auth/',include('rest_framework.urls', namespace='rest_framework')),
]