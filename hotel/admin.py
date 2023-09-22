from django.contrib import admin
from .models import *


class AuthorAdmin(admin.ModelAdmin):
    pass


admin.site.register(Feedback)
admin.site.register(BookingDate)
admin.site.register(Room)
admin.site.register(Standard)
admin.site.register(LuxePlus)
admin.site.register(LuxePremium)