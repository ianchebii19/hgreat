from django.contrib import admin
from .models import*
# Register your models here.
@admin.register(Announcement)
class AnnouncementModelAdmin(admin.ModelAdmin):
    list_display = ['user', 'content', 'posted_at']

@admin.register(Profile)
class profileModelAdmin(admin.ModelAdmin):
    list_display = ['user','avatar', 'first_name', 'last_name', 'email', 'phonenumber', 'birth_date', 'bio', 'city', 'state', 'country', 'favorite_animal', 'hobby'
]