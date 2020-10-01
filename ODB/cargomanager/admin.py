from django.contrib import admin
from .models import Staff,Order
# Register your models here.

@admin.register(Staff)
class staffAdmin(admin.ModelAdmin):
    list_display = ('username','password', 'role')    

@admin.register(Order)
class orderAdmin(admin.ModelAdmin):
    list_display = ('info','product','expnum' )    