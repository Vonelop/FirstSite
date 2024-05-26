# Generated by Django 5.0.1 on 2024-03-10 14:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Form_for_bisnues',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Form_for_private_house',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('locality', models.CharField(max_length=15)),
                ('name_street', models.CharField(max_length=20)),
                ('home_number', models.CharField(max_length=10)),
                ('apartment_number', models.CharField(max_length=10)),
                ('first_name', models.CharField(max_length=10)),
                ('second_name', models.CharField(max_length=10)),
                ('phone_number', models.CharField(max_length=10)),
            ],
        ),
    ]
