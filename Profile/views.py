from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.contrib.auth import get_user
from django.contrib.auth.decorators import login_required

from Users.models import GenerationUser

@login_required
def profile_view(request):
    return render(request, 'personalaccount.html', {
        'user': get_user(request),
    })