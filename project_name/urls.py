"""project_name URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

# django
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include
from django.urls import path
from django.views.decorators.cache import cache_page

# third party
from django_js_reverse.views import urls_js
from two_factor.admin import AdminSiteOTPRequired
from two_factor.gateways.twilio.urls import urlpatterns as tf_twilio_urls

# project
from accounts.allauth_urls import urlpatterns as allauth_urls
from accounts.tf_urls import urlpatterns as tf_urls
from core import views as core_views

admin.site.__class__ = AdminSiteOTPRequired


urlpatterns = [
    # admin
    path('admin/', admin.site.urls),

    # auth
    path('', include(allauth_urls)),
    path('', include(tf_urls)),
    path('', include(tf_twilio_urls)),

    # third party
    path('jsreverse/', cache_page(3600)(urls_js), name='js_reverse'),

    # project
    path('', core_views.landing_view, name='landing'),
    path('project/', core_views.index_view, name='index'),
    path('api/accounts/', include('accounts.urls'), name='accounts'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
