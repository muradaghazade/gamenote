from urllib import request
from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.views.generic import TemplateView, ListView , DetailView , CreateView
from .models import Game, News, Order, Product, ProductVersion, Review, Slider, FAQ
from django.views.generic.edit import FormMixin
from .forms import OrderForm, ProductVersionForm
from django.urls import reverse, reverse_lazy


class IndexView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        if "cart" not in self.request.session:
            products = []
            self.request.session["cart"] = products
        context = super().get_context_data(**kwargs)
        context['products'] = Product.objects.order_by("-id")[:4]
        context['sliders'] = Slider.objects.order_by("-id")
        context['games'] = Game.objects.order_by("-id")
        return context


class NewProductsView(ListView):
    model = Product
    context_object_name = 'products'
    template_name = 'new.html'
    paginate_by = 8
    queryset = Product.objects.order_by("-id")

    def get_queryset(self):
        queryset = Product.objects.order_by("-id")
        title = self.request.GET.get('title')
        price = self.request.GET.get('price')
        print(price)
        if title:
            queryset = queryset.filter(title__icontains=title)
        if price:
            queryset = queryset.filter(price__lte=price)
        return queryset


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

        else:        
            products = self.request.session["cart"]
            products.append(form.instance.id)
            self.request.session["cart"] = products
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

    def get_context_data(self, **kwargs):
        self.object = self.get_object()
        context = super(GameViewDetail, self).get_context_data(**kwargs)
        context['best'] = self.object.products.order_by("-price").first()
        print(self.object.products.order_by("-price").first())
        return context
    

class SupportView(TemplateView):
    template_name = 'support.html'


class DeliveryView(TemplateView):
    template_name = 'delivery.html'


class GuarantyView(TemplateView):
    template_name = 'guaranty.html'


class CardView(CreateView):
    model = Order
    form_class = OrderForm
    template_name = 'card.html'
    success_url = reverse_lazy('core:index')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        products = self.request.session["cart"]
        queryset = ProductVersion.objects.none()
        price = 0
        for product in products:
            queryset |= ProductVersion.objects.filter(pk=product)
        for product in queryset:
            price+=product.final_price
        context["sum"] = price
        context["products"] = queryset
        return context

    def form_valid(self, form):
        self.request.session['cart'] = []
        form.save()
        return super().form_valid(form)


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


def delete_from_cart(request):
    if request.method == 'POST':
        products = request.session['cart']
        print(products, "im heeeereeeee")
        products.remove(int(request.POST.get('id')))
        request.session["cart"] = products
        return redirect('core:cart')