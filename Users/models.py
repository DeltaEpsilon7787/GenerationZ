from django.db import models
from django.forms.widgets import ChoiceWidget
from django.contrib.auth.models import AbstractUser

class GenerationUser(AbstractUser):
    age = models.PositiveIntegerField(name="age", null=True, blank=True)
    work_place = models.CharField(name="work_place", max_length=200, null=True, blank=True)

    group = models.CharField(max_length=200, choices=(
        ('H', 'Hyesosi'),
        ('RN', 'Rabotat Nado')
    ))

    class Meta:
        db_table = "user"
