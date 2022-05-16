from django import forms
from core.models import *

PAYMENT_CHOICES = (
        ("Nəğd", ("Nəğd")),
        ("Kartla", ("Kartla"))
    )
class ProductVersionForm(forms.ModelForm):
    ram = forms.ModelChoiceField(queryset=Ram.objects.all(),widget=forms.Select(attrs={'class': 'mur-form'}),empty_label="Seçilməyib")
    ssd = forms.ModelChoiceField(queryset=SSD.objects.all(),widget=forms.Select(attrs={'class': 'mur-form'}),empty_label="Seçilməyib")
    hdd = forms.ModelChoiceField(queryset=HDD.objects.all(),widget=forms.Select(attrs={'class': 'mur-form'}),empty_label="Seçilməyib")
    gpu = forms.ModelChoiceField(queryset=GPU.objects.all(),widget=forms.Select(attrs={'class': 'mur-form'}),empty_label="Seçilməyib")
    processor = forms.ModelChoiceField(queryset=Processor.objects.all(),widget=forms.Select(attrs={'class': 'mur-form'}),empty_label="Seçilməyib")
    color = forms.ModelChoiceField(queryset=Color.objects.all(),widget=forms.Select(attrs={'class': 'mur-form'}),empty_label="Seçilməyib")

    class Meta:
        model = ProductVersion
        fields = ('product', 'ram', 'ssd', 'hdd', 'processor', 'color', 'gpu')

    def __init__(self, *args, **kwargs):
        user = kwargs.pop('product', None)
        print(user)
        super().__init__(*args, **kwargs)
        if user:
            self.fields['ram'].queryset = Ram.objects.filter(product=user)
            self.fields['ssd'].queryset = SSD.objects.filter(product=user)
            self.fields['hdd'].queryset = HDD.objects.filter(product=user)
            self.fields['processor'].queryset = Processor.objects.filter(product=user)
            self.fields['gpu'].queryset = GPU.objects.filter(product=user)
            self.fields['color'].queryset = Product.objects.filter(id=user.id).first().colors.all()
        
        
class OrderForm(forms.ModelForm):
    payment_type = forms.ChoiceField(choices=PAYMENT_CHOICES,
    widget=forms.RadioSelect)
    class Meta:
        model = Order
        fields = ['full_name', 'number', 'email', 'comment', 'delivery', 'payment_type']

        widgets = {
            'full_name': forms.TextInput(attrs={'id': 'question', 'class': 'input__text'}),
            'number': forms.TextInput(attrs={'id': 'question', 'class': 'input__text'}),
            'comment': forms.Textarea(attrs={'id': 'question', 'class': 'input__textarea'}),
            'email': forms.EmailInput(attrs={'id': 'question', 'class': 'input__text'}),
            'delivery': forms.CheckboxInput(attrs={'id': 'conditionAndTerms'}),
            'payment_type': forms.RadioSelect(attrs={'id': 'conditionAndTerms', 'class': 'radio__input'})
        }  