from django.shortcuts import render
from django.views.generic import TemplateView, ListView , DetailView , CreateView
from .models import Product


class IndexView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['products'] = Product.objects.order_by("-id")
        return context
