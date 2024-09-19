from django.shortcuts import render
from django.views.decorators.http import require_http_methods


@require_http_methods(["GET"])
def product_create(request):
    return render(request, 'product_create.html')
