from django.urls import path
from .views import *


app_name = 'core'


urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('new/', NewProductsView.as_view(), name='new'),
    path('products/<slug:slug>', ProductDetailView.as_view(), name='product-detail'),
    path('butget-products/', CheapProductsView.as_view(), name='budget-products'),
]