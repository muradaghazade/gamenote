# Generated by Django 4.0.3 on 2022-04-11 12:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_brand_created_at_brand_updated_at_color_created_at_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='HDD',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/', verbose_name='Image')),
                ('added_price', models.DecimalField(decimal_places=2, max_digits=6, verbose_name='Price')),
                ('amount', models.CharField(max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'HDD',
                'verbose_name_plural': 'HDDs',
            },
        ),
        migrations.CreateModel(
            name='SSD',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/', verbose_name='Image')),
                ('added_price', models.DecimalField(decimal_places=2, max_digits=6, verbose_name='Price')),
                ('amount', models.CharField(max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'SSD',
                'verbose_name_plural': 'SSDs',
            },
        ),
        migrations.AddField(
            model_name='processor',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='images/', verbose_name='Image'),
        ),
        migrations.AddField(
            model_name='product',
            name='operative_system',
            field=models.CharField(default='', max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='ram',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='images/', verbose_name='Image'),
        ),
        migrations.DeleteModel(
            name='Storage',
        ),
        migrations.AddField(
            model_name='ssd',
            name='product',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='ssds', to='core.product'),
        ),
        migrations.AddField(
            model_name='hdd',
            name='product',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='hdds', to='core.product'),
        ),
    ]
