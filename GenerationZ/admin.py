from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from Users.models import GenerationUser

admin.site.register(GenerationUser, UserAdmin)