from django import template
from django.template.defaultfilters import stringfilter

register = template.Library()

@register.filter
@stringfilter
def my_cut(value, arg):
    """
    This cuts out all values of "arg" from the string
    """
    return value.replace(arg, '')
