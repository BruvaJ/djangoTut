from django import forms
from django.core import validators

# def check_for_z(value):
#     if value[0].lower != 'z':
#         raise forms.ValidationError("Need to start with z")

class FormName(forms.Form):
    name = forms.CharField(max_length=254)
    email = forms.EmailField(max_length=254)
    verify_email = forms.EmailField(label='Enter your email again:')
    text = forms.CharField(widget=forms.Textarea)
    botcatcher = forms.CharField(required=False,
                                widget=forms.HiddenInput,
                                validators=[validators.MaxLengthValidator(0)])
#entire form
    def clean(self):
        all_clean_data = super().clean()
        email = all_clean_data['email']
        vmail = all_clean_data['verify_email']

        if email != vmail:
            raise forms.ValidationError("Make sure emails match")

## never actually done. Just use django.core builtin validators
# single form
    # def clean_botcatcher(self):
    #     botcatcher = self.cleaned_data['botcatcher']
    #     if len(botcatcher) > 0:
    #         raise forms.ValidationError("GOTCHA BOT")
    #     return botcatcher
