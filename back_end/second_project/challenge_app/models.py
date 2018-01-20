from django.db import models

class User(models.Model):
    email      = models.EmailField(max_length=254, unique=True)
    first_name = models.CharField(max_length=254)
    last_name  = models.CharField(max_length=254)

    def __str__(self):
        return self.first_name + ' ' + self.last_name
