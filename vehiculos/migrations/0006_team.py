# Generated by Django 4.2.1 on 2023-06-23 14:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vehiculos', '0005_rename_image_vehiculo_imagen_principal'),
    ]

    operations = [
        migrations.CreateModel(
            name='team',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
    ]