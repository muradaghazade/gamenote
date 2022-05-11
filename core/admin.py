from re import search
from django.contrib import admin
from .models import *

admin.site.register([Ram, SSD, HDD, Brand, Color, Processor, ProductVersion, Image, Slider, FAQ, Review, Game, GPU, News, Order])

class ProductImageInline(admin.TabularInline):
    model = Image

class RamInline(admin.TabularInline):
    model = Ram

class SSDInline(admin.TabularInline):
    model = SSD

class HDDInline(admin.TabularInline):
    model = HDD

class GPUInline(admin.TabularInline):
    model = GPU

class ProcessorInline(admin.TabularInline):
    model = Processor

class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImageInline, RamInline, SSDInline, HDDInline, ProcessorInline, GPUInline]
    raw_id_fields = ['brand']
    search_fields = ['title']


admin.site.register(Product, ProductAdmin)