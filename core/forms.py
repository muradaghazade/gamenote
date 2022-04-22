from django import forms
from core.models import *
from django.db import models


class ProductVersionForm(forms.ModelForm):

    product = forms.ModelChoiceField(queryset=Product.objects.all())
    ram = forms.ModelChoiceField(queryset=Ram.objects.all())
    ssd = forms.ModelChoiceField(queryset=SSD.objects.all())
    hdd = forms.ModelChoiceField(queryset=HDD.objects.all())
    color = forms.ModelChoiceField(queryset=Color.objects.all())
    processor = forms.ModelChoiceField(queryset=Processor.objects.all())


    class Meta:
        model = ProductVersion
        fields = ['product', 'ram', 'ssd', 'hdd', 'color', 'processor']

        
        
        