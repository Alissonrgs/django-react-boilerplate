# django
from django.contrib.auth.models import User

# third party
from rest_framework.serializers import ModelSerializer

# local


class UserSerializer(ModelSerializer):

    class Meta:
        model = User
        exclude = [
            'id',
            'date_joined',
            'groups',
            'password',
            'user_permissions',
            'last_login'
            ]
