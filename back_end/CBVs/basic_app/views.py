from django.shortcuts import render
from django.views.generic import (View, TemplateView, ListView, DetailView, CreateView, UpdateView, DeleteView)
from django.http import HttpResponse
from django.core.urlresolvers import reverse_lazy
from . import models

# Create your views here.
# def index(request):
#     return render(request, 'index.html')

# Class based view
# class CBView(View):
#     def get(self, request):
#         return HttpResponse("CBV time baby")

# Template Views
class IndexView(TemplateView):
                    # or sub-directory of templates folder
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['injectme'] = 'BASIC INJECTION!'
        return context

class SchoolListView(ListView):
# this creates school_list for you
# unless we give it the below override
    context_object_name = 'schools'
    model = models.My_School

class SchoolDetailView(DetailView):
# this creates context_object_name = school as variable for you
# unless we give it the below override
    context_object_name = 'school_detail'
    model = models.My_School
    template_name = 'basic_app/school_detail.html'

class SchoolCreateView(CreateView):
    fields = ('name', 'principal', 'location')
    model = models.My_School

class SchoolUpdateView(CreateView):
    fields = ('name', 'principal')
    model = models.My_School

class SchoolDeleteView(DeleteView):
    model = models.My_School
    success_url = reverse_lazy("basic_app:list")
