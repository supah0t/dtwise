from django.urls import path

from .views import DataListView, TestListView

urlpatterns = [
    path('', DataListView.as_view()),
    path('test/', DataListView.as_view())
]
