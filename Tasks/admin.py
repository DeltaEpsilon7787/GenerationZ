from django.contrib import admin
from .models import Task, TaskComplete

admin.site.register(Task)
admin.site.register(TaskComplete)