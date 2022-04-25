from itertools import product
from django import forms
from core.models import *
from django.db import models
from django.forms import widgets



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


    # def __init__(self, *args, **kwargs):
    #         super().__init__(*args, **kwargs)
    #         self.fields['processor'].widget = widgets.ChoiceWidget(attrs={"class": "select2-selection select2-selection--single"})    
        
        
        