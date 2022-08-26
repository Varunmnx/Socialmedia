from django.shortcuts import render

# Create your views here.


def home(request):
     
     return render(request,"users/content.html")

def login(request):
     
     return render(request,"users/login.html")     

def about(request):
    
    return render(request,"users/profile.html")
