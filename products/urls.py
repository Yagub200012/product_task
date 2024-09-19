from django.urls import path, include
from products.views import product_create

urlpatterns = [
    path('api/', include('products.api.urls')),
    path('product_create', product_create, name = 'product_create'),
]
