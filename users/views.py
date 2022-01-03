from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import UserRegisterForm

from django.contrib.auth.models import User
from rest_framework import viewsets
from .serializers import UserSerializer


def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account created for {username}!')
            return redirect('home')
    else:
        form = UserRegisterForm()
    return render(request, 'users/register.html', {'form': form})

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
