from django.shortcuts import render


def index(request):
    return render(request, 'base.template.html')


def browse(request):
    return render(request, 'browse.html')


def rate(request):
    return render(request, 'rate.html')
