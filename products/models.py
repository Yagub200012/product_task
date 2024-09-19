from django.db import models


class Product(models.Model):
    name = models.CharField(null = False, max_length = 255)
    description = models.TextField(null = False)
    price = models.FloatField(null = False)


