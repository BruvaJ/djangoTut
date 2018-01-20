import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'second_project.settings')

import django
django.setup()

## FAKE POP SCRIPT
import random
from challenge_app.models import User
from faker import Faker

fakegen = Faker()

def generate_user():
    # Create the fake data for that entry
    fake_email = fakegen.email()
    fake_first_name = fakegen.first_name()
    fake_last_name = fakegen.last_name()

    User.objects.get_or_create(email=fake_email, first_name=fake_first_name, last_name=fake_last_name)

if __name__ == '__main__':
    for entry in range(5):
        generate_user()
    print("populating complete")
