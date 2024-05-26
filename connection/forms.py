from django import forms
from .models import Form_for_private_house, Form_for_bisnues

class FormForPrivateHouse(forms.ModelForm):
    name_street = forms.CharField(max_length=20, required=False)
    home_number = forms.CharField(max_length=10, required=False)
    apartment_number = forms.CharField(max_length=10, required=False)
    second_name = forms.CharField(max_length=15, required=False)


    class Meta:
        model = Form_for_private_house
        fields = ['locality', 'name_street', 'home_number', 'apartment_number', 'first_name', 'second_name', 'phone_number']
    

class FormForBisnues(forms.ModelForm):

    class Meta:
        model = Form_for_bisnues
        fields = ['name_bisnues', 'locality_for_bisnues', 'number_for_bisnues']