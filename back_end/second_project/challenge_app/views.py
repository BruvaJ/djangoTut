from django.shortcuts import render
from django.http import HttpResponse
from challenge_app.models import User
from challenge_app.my_form import MyForm

# Create your views here.
def index(request):
     return HttpResponse('index page')
def help(request):
     return render(request, 'challenge_app/help.html', {'help_page': 'This is helpful'})

def users(request):
    user_set = User.objects.all()
    user_dict = {'users': user_set}
    return render(request, 'challenge_app/challenge.html', context=user_dict)

# Create your views here.
def form(request):
    if request.method == 'POST':
        challenge_form = MyForm(request.POST, request.FILES)
        if challenge_form.is_valid():
            challenge_form.save()
    else:
        challenge_form = MyForm()
    return render(request, 'challenge_app/coming_soon.html', {'challenge_form': challenge_form})
    # date_dict = {'access_records': webpage_list}
    # my_dictionary = {'insert_me': "Now I'm coming from first_app/index.html!"}
    # return render(request, 'first_app/index.html', context=date_dict)
