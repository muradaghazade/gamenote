from django.shortcuts import render
from django.views.generic import TemplateView, ListView , DetailView , CreateView
from .models import Product, Slider, FAQ


class IndexView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['products'] = Product.objects.order_by("-id")
        context['sliders'] = Slider.objects.order_by("-id")
        return context


class NewProductsView(ListView):
    model = Product
    context_object_name = 'products'
    template_name = 'new.html'
    paginate_by = 8
    queryset = Product.objects.order_by("-id")


class ProductDetailView(DetailView):
    template_name = 'product-details.html'
    model = Product
    context_object_name = "product"


class CheapProductsView(ListView):
    model = Product
    context_object_name = 'products'
    template_name = 'budget-products.html'
    paginate_by = 8
    queryset = Product.objects.order_by("price")


class ExpensiveProductsView(ListView):
    model = Product
    context_object_name = 'products'
    template_name = 'expensive-products.html'
    paginate_by = 8
    queryset = Product.objects.order_by("-price")

class AboutView(TemplateView):
    template_name = 'about.html'

class FaqView(ListView):
    model = FAQ
    template_name = 'faq.html'
    context_object_name = 'faqs'
    queryset = FAQ.objects.order_by("id")

class ReviewsView(TemplateView):
    template_name = 'reviews.html'