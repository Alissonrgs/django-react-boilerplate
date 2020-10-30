# django
from django.urls import path

# third party
from two_factor import views as tf_views

# local
from .views import CustomLoginView
from .views import CustomPhoneSetupView
from .views import CustomSetupView

core = [
    # path('account/login/',
    #      tf_views.LoginView.as_view(),
    #      name='login'),
    path('login/',
         CustomLoginView.as_view(),
         name='login'),
    # path('account/two_factor/setup/',
    #      tf_views.SetupView.as_view(),
    #      name='setup'),
    path('two_factor/setup/',
         CustomSetupView.as_view(),
         name='setup'),
    path('two_factor/qrcode/',
         tf_views.QRGeneratorView.as_view(),
         name='qr'),
    path('two_factor/setup/complete',
         tf_views.SetupCompleteView.as_view(),
         name='setup_complete'),
    path('two_factor/backup/tokens',
         tf_views.BackupTokensView.as_view(),
         name='backup_tokens'),
    path('two_factor/backup/phone/register',
         CustomPhoneSetupView.as_view(),
         name='phone_create'),
    path('two_factor/backup/phone/unregister/<int:pk>',
         tf_views.PhoneDeleteView.as_view(),
         name='phone_delete')
]

profile = [
    path('two_factor',
         tf_views.ProfileView.as_view(),
         name='profile'),
    path('two_factor/disable',
         tf_views.DisableView.as_view(),
         name='disable')
]

urlpatterns = (core + profile, 'two_factor')
