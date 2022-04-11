from re import search
from django.contrib import admin
from .models import *

admin.site.register([Ram, SSD, HDD, Brand, Color, Processor, Image, Slider,])

class ProductImageInline(admin.TabularInline):
    model = Image

class RamInline(admin.TabularInline):
    model = Ram

class SSDInline(admin.TabularInline):
    model = SSD

class SSDInline(admin.TabularInline):
    model = HDD

class ProcessorInline(admin.TabularInline):
    model = Processor

class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImageInline, RamInline, SSDInline, SSDInline, ProcessorInline]
    raw_id_fields = ['brand']
    search_fields = ['title']


admin.site.register(Product, ProductAdmin)