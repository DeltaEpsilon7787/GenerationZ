from django.db import models
from django.conf import settings

class Task(models.Model):
    name = models.CharField(name="name", max_length=200, default='Задача', blank=False, null=True)
    description = models.CharField(name="description", max_length=3000, blank=True, null=True)
    deadline = models.DateField(name="deadline", blank=False, null=False)

    objects = models.Manager()

    def __str__(self):
        return f"{self.name} --> {self.description} UNTIL {self.deadline}"

class TaskComplete(models.Model):
    task_key = models.ForeignKey(Task, on_delete=models.CASCADE)
    user_key = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    done_on = models.DateField(name='done_on', blank=False, null=False)

    objects = models.Manager()

    def __str__(self):
        return f"{self.task_key} DONE BY {self.user_key} ON {self.done_on}"
