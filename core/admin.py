from re import search
from django.contrib import admin
from .models import *

admin.site.register([Ram, SSD, HDD, Brand, Color, Processor, Image, Slider, FAQ, ProductVersion, Review])

class ProductImageInline(admin.TabularInline):
    model = Image

class RamInline(admin.TabularInline):
    model = Ram

class SSDInline(admin.TabularInline):
    model = SSD

class HDDInline(admin.TabularInline):
    model = HDD

class ProcessorInline(admin.TabularInline):
    model = Processor

class ReviewInLine(admin.TabularInline):
    model = Review

class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImageInline, RamInline, SSDInline, HDDInline, ProcessorInline]
    raw_id_fields = ['brand']
    search_fields = ['title']



admin.site.register(Product, ProductAdmin)