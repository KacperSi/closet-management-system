from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import UserRegisterForm

from django.contrib.auth.models import User
from rest_framework import viewsets, response, generics
from .serializers import UserSerializer, CustomUserSerializer
from .models import CustomUser

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authtoken.models import Token

from django.contrib.auth import get_user_model

User = get_user_model()


def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Your account has been created! You are now able to log in')
            return redirect('login')
    else:
        form = UserRegisterForm()
    return render(request, 'users/register.html', {'form': form})

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserLocation(generics.RetrieveUpdateAPIView):

    permission_classes = [IsAuthenticated]
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    #serializer = CustomUserSerializer(queryset, context={'fields': ['id', 'username', 'location']})

    def get_object(self):
        queryset = self.filter_queryset(self.get_queryset())
        obj = queryset.filter(username=self.request.user).get()
        self.check_object_permissions(self.request, obj)
        return obj



#@api_view(['GET'])
#@permission_classes([AllowAny])
#def returnUserProfile(request):
#    username=request.user.username
#    return response.Response({"username": username})

#@api_view(['GET', 'POST'])
#@permission_classes([IsAuthenticated])
#def returnUserProfile(request):
#    if request.method == 'POST':
#        return response.Response({"message": "Got some data!", "data": request.data})
#    return response.Response({"message": "Hello, world!"})