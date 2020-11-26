from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('address/', views.address_from_postcode, name='address_from_postcode'),
]