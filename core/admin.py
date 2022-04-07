from re import search
from django.contrib import admin
from .models import *

admin.site.register([Ram, Storage, Brand, Color, Processor, Image])

class ProductImageInline(admin.TabularInline):
    model = Image

class RamInline(admin.TabularInline):
    model = Ram

class StorageInline(admin.TabularInline):
    model = Storage

class ProcessorInline(admin.TabularInline):
    model = Processor

class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImageInline, RamInline, StorageInline, ProcessorInline]
    raw_id_fields = ['brand']
    search_fields = ['title']


admin.site.register(Product, ProductAdmin)