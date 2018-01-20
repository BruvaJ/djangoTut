from django.conf.urls import url
from django.contrib import admin
from django.conf.urls import include
from challenge_app import views

urlpatterns = [
    url(r'^$', views.help, name='help'),
    url(r'^users/', views.users, name='help'),
    url(r'^index/', views.index, name='index'),
]
