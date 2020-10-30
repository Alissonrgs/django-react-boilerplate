# Third Party Imports
from rest_framework.permissions import BasePermission


class IsOTPVerified(BasePermission):
    """
    Allows access only to users logged using OTP.
    """

    def has_permission(self, request, view):
        return bool(request.user and request.user.is_verified())