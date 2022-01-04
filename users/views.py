from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import UserRegisterForm

from django.contrib.auth.models import User
from rest_framework import viewsets, response
from .serializers import UserSerializer

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authtoken.models import Token


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