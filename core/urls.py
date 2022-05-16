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
    path('games/<slug:slug>', GameViewDetail.as_view(), name="game-product"),
    path('support/', SupportView.as_view(), name='support'),
    path('delivery/', DeliveryView.as_view(), name='delivery'),
    path('guaranty/', GuarantyView.as_view(), name='guaranty'),
    path('cart/', CardView.as_view(), name='cart'),
    path('delete-from-cart/', delete_from_cart, name='delete-from-cart'),
    path('contact/', ContactView.as_view(), name='contact'),
    path('news/', NewsView.as_view(), name="news"),
    path('news/<slug:slug>', NewsDetailView.as_view(), name="news-detail"),
]