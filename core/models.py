from django.db import models
from gamenote.commons import slugify


class Product(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField("Description")
    price = models.DecimalField("Price", max_digits=6, decimal_places=2)
    video_card = models.CharField(max_length=100)
    screen_size = models.CharField(max_length=50)
    manufacturer_country = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    slug = models.SlugField(max_length=255, null=True, blank=True)
    brand = models.ForeignKey("Brand", on_delete=models.CASCADE, blank=True, null=True, related_name="products")
    colors = models.ManyToManyField("Color", verbose_name=("Color"), db_index=True, related_name='products', null=True, blank=True)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def __str__(self):
        return f"{self.title}"

    def save(self, *args, **kwargs):
        super(Product, self).save(*args, **kwargs)
        self.slug = f'{slugify(self.title)}-{self.id}'
        super(Product, self).save(*args, **kwargs)

    
class Ram(models.Model):
    title = models.CharField(max_length=200)
    added_price = models.DecimalField("Price", max_digits=6, decimal_places=2)
    amount = models.CharField(max_length=50)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, db_index=True, related_name="rams", null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Ram'
        verbose_name_plural = 'Rams'

    def __str__(self):
        return f"{self.title}"


class Brand(models.Model):
    title = models.CharField(max_length=50)
    logo = models.ImageField('Image',upload_to='images/', null=True, blank=True)

    class Meta:
        verbose_name = 'Brand'
        verbose_name_plural = 'Brands'

    def __str__(self):
        return f"{self.title}"


class Color(models.Model):
    title = models.CharField(max_length=50)

    class Meta:
        verbose_name = 'Color'
        verbose_name_plural = 'Colors'

    def __str__(self):
        return f"{self.title}"


class Storage(models.Model):
    title = models.CharField(max_length=50)
    added_price = models.DecimalField("Price", max_digits=6, decimal_places=2)
    amount = models.CharField(max_length=50)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, db_index=True, related_name="storages", null=True, blank=True)


    class Meta:
        verbose_name = 'Storage'
        verbose_name_plural = 'Storages'

    def __str__(self):
        return f"{self.title}"


class Processor(models.Model):
    title = models.CharField(max_length=50)
    added_price = models.DecimalField("Price", max_digits=6, decimal_places=2)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, db_index=True, related_name="processors", null=True, blank=True)

    class Meta:
        verbose_name = 'Processor'
        verbose_name_plural = 'Processors'

    def __str__(self):
        return f"{self.title}"