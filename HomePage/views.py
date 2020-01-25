from django.contrib.auth import get_user
from django.shortcuts import render
from Users.models import GenerationUser

def home_page_view(request):
    leaderboards = GenerationUser.objects.order_by('-points')

    best = leaderboards[:10]

    return render(request, 'index.html', {
        'best_10': best,
        'is_logged_in': get_user(request).is_authenticated
    })