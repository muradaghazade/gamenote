from django.db import models
from gamenote.commons import slugify


class Product(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField("Description")
    price = models.DecimalField("Price", max_digits=6, decimal_places=2)
    operative_system = models.CharField(max_length=200)
    has_cd_drive = models.BooleanField(default=False)
    video_card = models.CharField(max_length=40)
    screen_size = models.CharField(max_length=50)
    manufacturer_country = models.CharField(max_length=50)
    slug = models.SlugField(max_length=255, null=True, blank=True)
    brand = models.ForeignKey("Brand", on_delete=models.CASCADE, blank=True, null=True, related_name="products")
    colors = models.ManyToManyField("Color", verbose_name=("Color"), db_index=True, related_name='products', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def __str__(self):
        return f"{self.title}"

    def save(self, *args, **kwargs):
        super(Product, self).save(*args, **kwargs)
        self.slug = f'{slugify(self.title)}-{self.id}'
        super(Product, self).save(*args, **kwargs)


class Image(models.Model):
    image = models.ImageField('Image',upload_to='images/', null=True, blank=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, db_index=True, related_name='images', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Image'
        verbose_name_plural = 'Images'

    def __str__(self):
        return self.product.title

    
class Ram(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField('Image',upload_to='images/', null=True, blank=True)
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
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Brand'
        verbose_name_plural = 'Brands'

    def __str__(self):
        return f"{self.title}"


class Color(models.Model):
    title = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Color'
        verbose_name_plural = 'Colors'

    def __str__(self):
        return f"{self.title}"


class SSD(models.Model):
    title = models.CharField(max_length=50)
    image = models.ImageField('Image',upload_to='images/', null=True, blank=True)
    added_price = models.DecimalField("Price", max_digits=6, decimal_places=2)
    amount = models.CharField(max_length=50)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, db_index=True, related_name="ssds", null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    class Meta:
        verbose_name = 'SSD'
        verbose_name_plural = 'SSDs'

    def __str__(self):
        return f"{self.title}"


class HDD(models.Model):
    title = models.CharField(max_length=50)
    image = models.ImageField('Image',upload_to='images/', null=True, blank=True)
    added_price = models.DecimalField("Price", max_digits=6, decimal_places=2)
    amount = models.CharField(max_length=50)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, db_index=True, related_name="hdds", null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    class Meta:
        verbose_name = 'HDD'
        verbose_name_plural = 'HDDs'

    def __str__(self):
        return f"{self.title}"


class Processor(models.Model):
    title = models.CharField(max_length=50)
    image = models.ImageField('Image',upload_to='images/', null=True, blank=True)
    added_price = models.DecimalField("Price", max_digits=6, decimal_places=2)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, db_index=True, related_name="processors", null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Processor'
        verbose_name_plural = 'Processors'

    def __str__(self):
        return f"{self.title}"


class Slider(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField("Description")
    image = models.ImageField('Image',upload_to='images/', null=True, blank=True)
    btn_text = models.CharField(max_length=50)
    btn_url = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Slider'
        verbose_name_plural = 'Sliders'

    def __str__(self):
        return f"{self.title}"


class FAQ(models.Model):
    questions = models.CharField(max_length=100)
    answer = models.CharField(max_length=200)


class ProductVersion(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, db_index=True, related_name='product_versions', null=True, blank=True)
    ram = models.ForeignKey(Ram, on_delete=models.CASCADE, db_index=True, related_name='product_versions', null=True, blank=True)
    hdd = models.ForeignKey(HDD, on_delete=models.CASCADE, db_index=True, related_name='product_versions', null=True, blank=True)
    ssd = models.ForeignKey(SSD, on_delete=models.CASCADE, db_index=True, related_name='product_versions', null=True, blank=True)
    color = models.CharField(max_length=500)
    processor = models.ForeignKey(Processor, on_delete=models.CASCADE, db_index=True, related_name='product_versions', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'ProductVersion'
        verbose_name_plural = 'ProductVersions'

    def __str__(self):
        return f"{self.product.title}"

class Review(models.Model):
    author_name = models.CharField(max_length=50)
    comments = models.TextField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Review'
        verbose_name_plural = 'Reviews'

    def __str__(self):
        return f"{self.author_name}"


class Game(models.Model):
    title = models.CharField(max_length=50)
    image = models.ImageField('Image',upload_to='images/', null=True, blank=True)
    description = models.CharField(max_length=500)
    products = models.ManyToManyField(Product, db_index=True, related_name='games', null=True, blank=True)
    slug = models.SlugField(max_length=255, null=True, blank=True)

    def __str__(self):
        return f"{self.title}"

    def save(self, *args, **kwargs):
        super(Game, self).save(*args, **kwargs)
        self.slug = f'{slugify(self.title)}-{self.id}'
        super(Game, self).save(*args, **kwargs)

    class Meta:
        verbose_name = 'Game'
        verbose_name_plural = 'Games'



