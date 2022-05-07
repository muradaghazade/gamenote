# Generated by Django 4.0.3 on 2022-05-07 11:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0014_alter_game_options_alter_productversion_options_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/', verbose_name='Image')),
                ('description', models.CharField(max_length=500)),
                ('slug', models.SlugField(blank=True, max_length=255, null=True)),
            ],
        ),
    ]
