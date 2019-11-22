from django import forms

from .models import TaskMessage

class MessageForm(forms.ModelForm):
    class Meta:
        model = TaskMessage
        fields = ['task', 'attached', 'message']
        exclude = ['user']
        widgets = {
            'task': forms.HiddenInput()
        }