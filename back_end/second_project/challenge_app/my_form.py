from django import forms
from challenge_app.models import User

class MyForm(forms.ModelForm):
    class Meta:
        model = User
        # fields = "__all__"
        exclude = ["last_name",]
        # fields = ("first_name",)
