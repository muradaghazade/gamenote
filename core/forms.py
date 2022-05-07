from itertools import product
from django import forms
from core.models import *
from django.db import models
from django.forms import widgets



class ProductVersionForm(forms.ModelForm):
    ram = forms.ModelChoiceField(queryset=Ram.objects.all(),widget=forms.Select(attrs={'class': 'mur-form'}),empty_label="Seçilməyib")
    ssd = forms.ModelChoiceField(queryset=SSD.objects.all(),widget=forms.Select(attrs={'class': 'mur-form'}),empty_label="Seçilməyib")
    hdd = forms.ModelChoiceField(queryset=HDD.objects.all(),widget=forms.Select(attrs={'class': 'mur-form'}),empty_label="Seçilməyib")
    processor = forms.ModelChoiceField(queryset=Processor.objects.all(),widget=forms.Select(attrs={'class': 'mur-form'}),empty_label="Seçilməyib")


    class Meta:
        model = ProductVersion
        fields = ('product', 'ram', 'ssd', 'hdd', 'processor')

    # color: #8490a4;
    # background-color: #151a22;
    # padding: 8px;
    # border-radius: 3px;
        
        
        