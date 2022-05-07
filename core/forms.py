from django import forms
from core.models import *

class ProductVersionForm(forms.ModelForm):
    ram = forms.ModelChoiceField(queryset=Ram.objects.all(),widget=forms.Select(attrs={'class': 'mur-form'}),empty_label="Seçilməyib")
    ssd = forms.ModelChoiceField(queryset=SSD.objects.all(),widget=forms.Select(attrs={'class': 'mur-form'}),empty_label="Seçilməyib")
    hdd = forms.ModelChoiceField(queryset=HDD.objects.all(),widget=forms.Select(attrs={'class': 'mur-form'}),empty_label="Seçilməyib")
    processor = forms.ModelChoiceField(queryset=Processor.objects.all(),widget=forms.Select(attrs={'class': 'mur-form'}),empty_label="Seçilməyib")

    class Meta:
        model = ProductVersion
        fields = ('product', 'ram', 'ssd', 'hdd', 'processor')

    def __init__(self, *args, **kwargs):
        user = kwargs.pop('product', None)
        print(user)
        super().__init__(*args, **kwargs)
        if user:
            self.fields['ram'].queryset = Ram.objects.filter(product=user)
            self.fields['ssd'].queryset = SSD.objects.filter(product=user)
            self.fields['hdd'].queryset = HDD.objects.filter(product=user)
            self.fields['processor'].queryset = Processor.objects.filter(product=user)
        
        
        