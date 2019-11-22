from Tasks.models import Task
from django.db import models

class TaskMessage(models.Model):
    task = models.ForeignKey(Task, models.CASCADE)
    attached = models.FileField(upload_to='C:/GenerationZ/uploaded/files', blank=True, null=True)
    message = models.CharField(max_length=3000)
