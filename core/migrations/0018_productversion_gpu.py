# Generated by Django 4.0.3 on 2022-05-07 15:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0017_remove_product_video_card'),
    ]

    operations = [
        migrations.AddField(
            model_name='productversion',
            name='gpu',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='product_versions', to='core.gpu'),
        ),
    ]
