from Tasks.models import Task
from django.db import models
from Users.models import GenerationUser

class TaskMessage(models.Model):
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    user = models.ForeignKey(GenerationUser, on_delete=models.CASCADE)
    attached = models.FileField(upload_to='./uploaded/files', blank=True, null=True)
    message = models.CharField(max_length=3000, blank=True, null=True)

    objects = models.Manager()