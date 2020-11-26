from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, 'index.html')

def address_from_postcode(request):
    if request.method == 'GET':
        postcode = request.GET.get('postcode', None)
        address = 'Unknown Address'
        if postcode == '48':
            address = 'Wamunyu'
        if postcode == '1':
            address = 'Nairobi'
        if postcode:
            return HttpResponse(address)
    return render(request, 'address_from_postcode.html')