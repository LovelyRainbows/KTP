#coding:utf-8
from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
# def home(request):
    # return HttpResponse('Привет, Мир!')
# def home(request):
    # return render(request, 'templates/index.html')


def home(request):
    return render(request, 'index.html')
def home2(request):
    return render(request, 'static_handler.html')
