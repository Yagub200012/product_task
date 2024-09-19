from django.contrib import admin
from .models import Product


@admin.register(Product)
class SubSectorAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'price')