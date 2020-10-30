# django
from django.urls import path

# local
from .views import UserAPIView

urlpatterns = [
    path('users/current', UserAPIView.as_view(), name='current_user')
]
