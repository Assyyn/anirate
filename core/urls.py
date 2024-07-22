from django.urls import path

from .views import index, browse, rate

app_name = 'core'
urlpatterns = [
    path('', index, name='index'),
    path('browse/', browse, name='browse'),
    path('rate/', rate, name='rate')
]
