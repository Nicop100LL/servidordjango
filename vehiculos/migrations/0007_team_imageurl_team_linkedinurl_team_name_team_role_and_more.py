# Generated by Django 4.2.1 on 2023-06-24 22:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vehiculos', '0006_team'),
    ]

    operations = [
        migrations.AddField(
            model_name='team',
            name='imageUrl',
            field=models.ImageField(null=True, upload_to='imagenes'),
        ),
        migrations.AddField(
            model_name='team',
            name='linkedinUrl',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='team',
            name='name',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AddField(
            model_name='team',
            name='role',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AddField(
            model_name='team',
            name='twitterUrl',
            field=models.CharField(max_length=200, null=True),
        ),
    ]