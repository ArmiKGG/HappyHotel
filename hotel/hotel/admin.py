from django.contrib import admin

from .models import *


class PersonAdmin(admin.ModelAdmin):
    readonly_fields = ('free_rooms', 'type')
    list_filter = ["status"]

    def save_model(self, request, obj, form, change):
        super().save_model(request, obj, form, change)

        number = int(str(form["number"]).split('value="')[1].split('"')[0])

        num = Room.objects.get(number=number)
        for bd in BookingDate.objects.filter(number=number, status=True):
            num.booked.add(bd)
        num.save()


class PostAdmin(admin.ModelAdmin):
    list_display = ('number',)
    readonly_fields = ('number',)

    def formfield_for_manytomany(self, db_field, request, **kwargs):
        if db_field.name == "booked":
            pk = dict(request.__dict__).get("resolver_match").kwargs.get("object_id", 0)
            num = Room.objects.get(pk=pk)
            kwargs["queryset"] = BookingDate.objects.filter(number=num.number)
            for bd in BookingDate.objects.filter(number=num, status=True):
                num.booked.add(bd)
        return super(PostAdmin, self).formfield_for_manytomany(db_field, request, **kwargs)

    def save_model(self, request, obj, form, change):
        pass


admin.site.register(Feedback)
admin.site.register(BookingDate, PersonAdmin)
admin.site.register(Room, PostAdmin)
