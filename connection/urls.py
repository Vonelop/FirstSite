from django.urls import path

from .views import *

urlpatterns = [
    path('', private_house, name='private_house'),
    path('business/', for_business, name="connection_for_business"),
    path('tv/', interactiv_tv, name="interactiv_tv"),
    path('career/', career, name="career"),
    path('map/', map, name="map"),
]