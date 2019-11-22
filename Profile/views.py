from datetime import datetime
from json import dumps

from django.http import JsonResponse, HttpResponseNotFound, HttpResponse
from django.core.serializers import serialize
from django.shortcuts import render
from django.contrib.auth import get_user
from django.contrib.auth.decorators import login_required

from Users.models import GenerationUser
from Tasks.models import Task, TaskComplete
from .forms import MessageForm
from .models import TaskMessage

@login_required
def profile_view(request):
    user = get_user(request)

    all_tasks = Task.objects.all()
    completed_tasks = TaskComplete.objects.filter(user_key=user)
    completed_tasks_as_tasks = {
        task.task_key: task for task in completed_tasks
    }

    return render(request, 'profile.html', {
        'user': user,
        'tasks': [
            {
                'task': task,
                'task_key': task.pk,
                'name': task.name,
                'desc': task.description,
                'deadline': task.deadline,
                'done_on': task in completed_tasks_as_tasks and completed_tasks_as_tasks[task].done_on or None,
                'is_complete': task in completed_tasks_as_tasks,
                'is_outdated': datetime.now().date() > task.deadline
            }
            for task in all_tasks
        ]
    })

@login_required
def message_upload(request):
    user = get_user(request)
    if request.method == 'POST':
        form = MessageForm(request.POST, request.FILES)
        if form.is_valid():
            TaskMessage(
                user=user,
                task=form.cleaned_data['task'],
                message=form.cleaned_data['message'],
                attached=form.cleaned_data['attached']
            ).save()
            return JsonResponse({
                'is_success': True
            }, status=200)
        else:
            return JsonResponse({
                'is_success': False,
                'reasons': form.errors
            }, status=400)
