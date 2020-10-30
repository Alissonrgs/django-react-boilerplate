# django
from django.views.generic import TemplateView

# third party
from two_factor.views import OTPRequiredMixin
from allauth.account.decorators import verified_email_required

# project
from core.decorators import auth_verified


class LandingTemplateView(TemplateView):
    template_name = 'landing.html'


class IndexTemplateView(OTPRequiredMixin, TemplateView):
    template_name = 'index.html'


landing_view = \
    LandingTemplateView.as_view()

index_view = \
    auth_verified(viewname='landing')(verified_email_required(IndexTemplateView.as_view()))
