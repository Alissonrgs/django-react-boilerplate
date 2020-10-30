# python
import time

# django
from django.conf import settings
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect
from django.shortcuts import redirect
from django.shortcuts import resolve_url
from django.urls import reverse
from django.urls import reverse_lazy

# third party
from allauth.account.forms import LoginForm as AllauthLoginForm
from allauth.account.utils import passthrough_next_redirect_url
from allauth.account.views import PasswordResetView
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from two_factor.views import LoginView
from two_factor.views import PhoneSetupView
from two_factor.views import SetupView

# local
from .serializers import UserSerializer


class CustomLoginView(LoginView):

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

        self.user = None
        self.form_list['auth'] = AllauthLoginForm
        self.is_2fa_enabled = getattr(settings, 'TWO_FACTOR_ENABLED', True)

        if not self.is_2fa_enabled:
            self.form_list = {'auth': AllauthLoginForm}

    def done(self, form_list, **kwargs):
        """
        Login the user and redirect to the desired page.
        """
        redirect_to = super().done(form_list, **kwargs)

        device = getattr(self.get_user(), 'otp_device', None)
        if self.is_2fa_enabled and not device:
            return redirect(reverse('two_factor:setup'))
        return redirect_to

    def process_step(self, form):
        """
        Process an individual step in the flow
        """
        # To prevent saving any private auth data to the session store, we
        # validate the authentication form, determine the resulting user, then
        # only store the minimum needed to login that user (the user's primary
        # key and the backend used)
        if self.steps.current == 'auth':
            user = form.is_valid() and form.user
            self.storage.reset()
            self.storage.authenticated_user = user
            self.storage.data["authentication_time"] = int(time.time())

            # By returning None when the user clicks the "back" button to the
            # auth step the form will be blank with validation warnings
            return None

        return super().process_step(form)

    def get_user(self):
        """
        Returns the user authenticated by the AuthenticationForm. Returns False
        if not a valid user; see also issue #65.
        """
        if not self.user:
            self.user = self.storage.authenticated_user
        return self.user

    def get_context_data(self, form, **kwargs):
        context = super().get_context_data(form, **kwargs)
        context['cancel_url'] = ''
        return context


class CustomSetupView(SetupView):

    def get_context_data(self, form, **kwargs):
        context = super().get_context_data(form, **kwargs)
        context['cancel_url'] = resolve_url('account_logout')
        return context


class CustomPhoneSetupView(PhoneSetupView):
    success_url = reverse_lazy('two_factor:profile')


class CustomPasswordResetView(PasswordResetView):
    """
    Redirects to success url even if the email provided doesn't exist in our DB
    """

    def form_invalid(self, form):
        users = getattr(form, 'users', False)
        if not users:
            return HttpResponseRedirect(self.get_success_url())
        return super().form_invalid(form)

    def get_context_data(self, **kwargs):
        ret = super(PasswordResetView, self).get_context_data(**kwargs)
        login_url = passthrough_next_redirect_url(self.request,
                                                  reverse('two_factor:login'),
                                                  self.redirect_field_name)
        # NOTE: For backwards compatibility
        ret['password_reset_form'] = ret.get('form')
        # (end NOTE)
        ret.update({"login_url": login_url})
        return ret


class UserAPIView(GenericAPIView):

    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        instance = request.user
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
