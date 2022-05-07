from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.views.generic import TemplateView, ListView , DetailView , CreateView
from .models import Game, News, Product, ProductVersion, Review, Slider, FAQ
from django.views.generic.edit import FormMixin
from .forms import ProductVersionForm
from django.urls import reverse


class IndexView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['products'] = Product.objects.order_by("-id")
        context['sliders'] = Slider.objects.order_by("-id")
        context['games'] = Game.objects.order_by("-id")
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

    def get_success_url(self):
        return reverse('core:product-detail', kwargs={'slug': self.object.slug})

    def get_context_data(self, **kwargs):
        self.object = self.get_object()
        context = super(ProductDetailView, self).get_context_data(**kwargs)
        context['form'] = ProductVersionForm(initial={'product': self.object}, product=self.object)
        return context

    def post(self, request, *args, **kwargs):
        self.object = self.get_object()
        form = self.get_form()
        if form.is_valid():
            return self.form_valid(form)
        else:
            return self.form_invalid(form)

    def form_valid(self, form):
        form.instance.product = self.object
        form.save()

        if "cart" not in self.request.session:
            products = []
            products.append(form.instance.id)
            self.request.session["cart"] = products
            print(self.request.session["cart"], "well ma nigga")

        else:        
            products = self.request.session["cart"]
            products.append(form.instance.id)
            print(self.request.session["cart"], "hey ma nigga")
        return super(ProductDetailView, self).form_valid(form)



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

class GameViewDetail(DetailView):
    model = Game
    template_name = 'game-products.html'
    context_object_name = "game"
    

class SupportView(TemplateView):
    template_name = 'support.html'


class DeliveryView(TemplateView):
    template_name = 'delivery.html'


class GuarantyView(TemplateView):
    template_name = 'guaranty.html'


class CardView(TemplateView):
    template_name = 'card.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        products = self.request.session["cart"]
        queryset = ProductVersion.objects.all()
        for product in products:
            queryset |= ProductVersion.objects.filter(pk=product)
        context["products"] = queryset
        return context


class ContactView(TemplateView):
    template_name = 'contact.html'


class NewsView(ListView):
    model = News
    template_name = 'news.html'
    queryset = News.objects.order_by('-id')
    context_object_name = 'news'
    

class NewsDetailView(DetailView):
    model = News
    template_name = 'news-detail.html'
    context_object_name = "new"