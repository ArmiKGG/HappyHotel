from django.db import models


class Feedback(models.Model):
    first_name = models.CharField(max_length=512)
    last_name = models.CharField(max_length=512)
    phone_number = models.CharField(max_length=32)


class BookingDate(models.Model):
    start_date = models.DateField()
    end_date = models.DateField()


class Room(models.Model):
    number = models.IntegerField(unique=True)
    booked = models.ManyToManyField(BookingDate)


class Standard(models.Model):
    rooms = models.ManyToManyField(Room)
    price = models.IntegerField(default=2200)


class Luxe(models.Model):
    rooms = models.ManyToManyField(Room)
    price = models.IntegerField(default=3400)


class LuxePlus(models.Model):
    rooms = models.ManyToManyField(Room)
    price = models.IntegerField(default=3700)


class LuxePremium(models.Model):
    rooms = models.ManyToManyField(Room)
    price = models.IntegerField(default=4200)
