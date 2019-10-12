"""GenerationZ URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
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
from django.contrib import admin
from django.urls import include, path, re_path
from django_registration.backends.activation.views import RegistrationView

from django.contrib.auth import views as auth_views

import Auth.views
from Auth.forms import RegisterForm

import Profile.views

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^auth/register/$', RegistrationView.as_view(form_class=RegisterForm), name='django_registration_register'),
    re_path(r'^auth/', include('django_registration.backends.activation.urls')),
    re_path(r'^auth/login/$', auth_views.LoginView.as_view(template_name='django_registration/auth.html', )),
    re_path(r'^auth/', include('django.contrib.auth.urls')),
    re_path(r'^accounts/profile/$', Profile.views.profile_view),
]
