# Python Imports
from functools import wraps

# Django Imports
from django.shortcuts import redirect
from django.urls import reverse


def auth_verified(viewname=None):

    def decorator(view_func):
        @wraps(view_func)
        def _wrapped_view(request, *args, **kwargs):
            if request.user.is_authenticated:
                return view_func(request, *args, **kwargs)
            return redirect(reverse(viewname))
        return _wrapped_view
    return decorator
