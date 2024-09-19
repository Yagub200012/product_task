from django.urls import path
from .views import ProductListView, ProductCreateView

urlpatterns = [
    path('products/', ProductListView.as_view(), name = 'products'),
    path('product_create/', ProductCreateView.as_view(), name = 'product_create'),
]
