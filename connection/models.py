from django.db import models


# Create your models here.

class Form_for_private_house(models.Model):
    locality = models.CharField(max_length=20, default='')
    name_street = models.CharField(max_length=20, default='')
    home_number = models.CharField(max_length=10, default='')
    apartment_number = models.CharField(max_length=10, default='')
    first_name = models.CharField(max_length=15, default='')
    second_name = models.CharField(max_length=15, default='')
    phone_number = models.CharField(max_length=15, default='')
    time_create = models.DateTimeField(auto_now=True)


class Form_for_bisnues(models.Model):
    name_bisnues = models.CharField(max_length=50, default='')
    locality_for_bisnues = models.CharField(max_length=20, default='')
    number_for_bisnues = models.CharField(max_length=15, default='')
    time_create_for_bisnues = models.DateTimeField(auto_now_add=True)

