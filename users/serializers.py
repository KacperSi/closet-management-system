from django.contrib.auth.models import User
from .models import CustomUser
from rest_framework import serializers

from allauth.account.adapter import get_adapter

from rest_auth.registration.serializers import RegisterSerializer


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'location']


class CustomRegisterSerializer(RegisterSerializer):
    location = serializers.CharField(max_length=20)

    def get_cleaned_data(self):
        data_dict = super().get_cleaned_data()
        data_dict['location'] = self.validated_data.get(
            'location', '')
        return data_dict

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'
'''
    def get_field_names(self, *args, **kwargs):
        field_names = self.context.get('fields', None)
        if field_names:
            return field_names

        return super(CustomUserSerializer, self).get_field_names(*args, **kwargs)'''