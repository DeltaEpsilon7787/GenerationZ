from django.db import models
from django.forms.widgets import ChoiceWidget
from django.contrib.auth.models import AbstractUser

class GenerationUser(AbstractUser):
    age = models.PositiveIntegerField(name="age", null=True, blank=True)
    work_place = models.CharField(name="work_place", max_length=200, null=True, blank=True)
    points = models.PositiveIntegerField(name="points", null=False, default=0)

    class Meta:
        db_table = "user"

    def __str__(self):
        return self.username