import django.forms as forms
from django_registration.forms import RegistrationForm
from Users.models import GenerationUser

class RegisterForm(RegistrationForm):
    class Meta(RegistrationForm.Meta):
        model = GenerationUser
        fields = ['username', 'email', 'first_name', 'last_name', 'group', 'age', 'work_place']
        labels = {
            "first_name": "Имя",
            "last_name": "Фамилия",
            "age": "Возраст",
            "work_place": "Место работы / учёбы",
            "group": "Группа"
        }

    privacy_policy_agreement = forms.BooleanField(label='Подтверждаю использование персональных данных')
