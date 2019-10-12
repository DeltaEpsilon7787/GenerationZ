import django.forms as forms
from django_registration.forms import RegistrationForm
from Users.models import GenerationUser

class RegisterForm(RegistrationForm):
    class Meta(RegistrationForm.Meta):
        model = GenerationUser
        fields = ['username', 'email', 'first_name', 'last_name', 'age', 'work_place']
        labels = {
            "first_name": "First Name",
            "last_name": "Last Name",
            "age": "Age",
            "work_place": "Work Place",
        }

