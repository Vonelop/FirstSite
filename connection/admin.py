from django.contrib import admin
from .models import Form_for_private_house, Form_for_bisnues

# Register your models here.

class FormForHouseAdmin(admin.ModelAdmin):
    list_display = ("locality", 
                    "name_street", 
                    "home_number", 
                    "apartment_number", 
                    "first_name", 
                    "second_name", 
                    "phone_number", 
                    "time_create")

class FormForBisnues(admin.ModelAdmin):
    list_display = ("name_bisnues",
                    "locality_for_bisnues",
                    "number_for_bisnues",
                    "time_create_for_bisnues")

admin.site.register(Form_for_private_house, FormForHouseAdmin)  
admin.site.register(Form_for_bisnues, FormForBisnues)
