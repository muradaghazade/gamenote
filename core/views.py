from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.views.generic import TemplateView, ListView , DetailView , CreateView
from .models import Game, Product, ProductVersion, Review, Slider, FAQ
from django.views.generic.edit import FormMixin
from .forms import ProductVersionForm



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


class ProductDetailView(FormMixin,DetailView):
    template_name = 'product-details.html'
    model = Product
    form_class = ProductVersionForm
    context_object_name = "product"

    # def post(self, request, *args, **kwargs):
    #     form = self.get_form()
    #     if form.is_valid():
	#         return self.form_valid(form)
    #     else:
    #         return self.form_invalid(form)



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

class ReviewsView(ListView):
    model = Review
    template_name = 'reviews.html'
    queryset = Review.objects.order_by("-id")
    context_object_name = 'reviews'

class GameView(ListView):
    model = Game
    template_name = 'games.html'
    queryset = Game.objects.order_by("-id")
    context_object_name = 'games'
