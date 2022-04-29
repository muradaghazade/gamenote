from django.urls import path
from .views import *


app_name = 'core'


urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('new/', NewProductsView.as_view(), name='new'),
    path('products/<slug:slug>', ProductDetailView.as_view(), name='product-detail'),
    path('budget-products/', CheapProductsView.as_view(), name='budget-products'),
    path('power-products/', ExpensiveProductsView.as_view(), name='power-products'),
    path('about/', AboutView.as_view(), name='about'),
    path('faq/', FaqView.as_view(), name='faq'),
    path('reviews/', ReviewsView.as_view(), name='reviews'),
    path('games/', GameView.as_view(), name="games"),
    path('games/<slug:slug>', GameViewDetail.as_view(), name="game-product")
]