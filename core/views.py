# django
from django.views.generic import TemplateView


class TipTemplateView(TemplateView):
    template_name = 'index.html'
