# django
from django.conf import settings

# third party
from django_otp.middleware import OTPMiddleware


class CustomOTPMiddleware(OTPMiddleware):

    def __init__(self, get_response=None):
        self.get_response = get_response

    def _verify_user(self, request, user):
        """
        Sets OTP-related fields on an authenticated user.
        """
        is_2fa_enabled = getattr(settings, 'TWO_FACTOR_ENABLED', True)

        if user.is_authenticated and not is_2fa_enabled:
            user.otp_device = None
            user.is_verified = lambda: True
            return user
        return super()._verify_user(request, user)
