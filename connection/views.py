from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound, JsonResponse
from .forms import FormForPrivateHouse, FormForBisnues
from .models import Form_for_private_house
from django.core.mail import EmailMultiAlternatives, send_mail
from django.template.loader import render_to_string



# Create your views here.

def private_house(request):
    if request.method == "POST":
        form = FormForPrivateHouse(request.POST)
        if form.is_valid():
            data = {
                'locality': form.cleaned_data['locality'], 
                'name_street': form.cleaned_data['name_street'], 
                'home_number': form.cleaned_data['home_number'], 
                'apartment_number': form.cleaned_data['apartment_number'], 
                'first_name': form.cleaned_data['first_name'], 
                'second_name': form.cleaned_data['second_name'], 
                'phone_number': form.cleaned_data['phone_number']
            }

            subject= "Заявка на подключение"
            to = ['polenovsasa1@gmail.com', 'tehmaster.tver@mail.ru']
            html_body = render_to_string("connection/email_templates.html", data)
            msg = EmailMultiAlternatives(subject=subject, to=to)
            msg.attach_alternative(html_body, "text/html")
            msg.send()

            form.save()
            return JsonResponse({'success': data}, status=200)
        else:
            errors = form.errors.as_json()
            return JsonResponse({"errors": errors}, status=400)
    
    return render(request, 'connection/private_house.html')

def for_business(request):
    if request.method == "POST":
        form = FormForBisnues(request.POST)
        if form.is_valid():

            data = {
                'name_bisnues': form.cleaned_data['name_bisnues'], 
                'locality_for_bisnues': form.cleaned_data['locality_for_bisnues'], 
                'number_for_bisnues': form.cleaned_data['number_for_bisnues'], 
            }

            subject= "Заявка на подключение БИЗНЕСА"
            to = ['polenovsasa1@gmail.com']
            html_body = render_to_string("connection/email_templates_for_bisnues.html", data)
            msg = EmailMultiAlternatives(subject=subject, to=to)
            msg.attach_alternative(html_body, "text/html")
            msg.send()

            form.save()
            return JsonResponse({}, status=200)
        else:
            errors = form.errors.as_json()
            print(errors)
            return JsonResponse({"errors": errors}, status=400)

    return render(request, 'connection/for_bisnues.html')

def interactiv_tv(request):
    return render(request, 'connection/interactiv_tv.html')

def career(request):
    return render(request, 'connection/career.html')

def map(request):
    return render(request, 'connection/map.html')

def PageNotFound(request, exception):
    return HttpResponseNotFound('<h1>Страница не найдена</h1>')

