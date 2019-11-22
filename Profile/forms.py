from django import forms

from .models import TaskMessage

class MessageForm(forms.ModelForm):
    class Meta:
        model = TaskMessage
        fields = '__all__'
        widgets = {
            'task': forms.HiddenInput()
        }