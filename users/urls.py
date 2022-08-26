from django.urls import path,include
from . import views
urlpatterns =[
    path("",views.home,name="landing"),
    path("login",views.login,name="landing"),
]