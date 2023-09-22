from django.db import models


class Feedback(models.Model):
    first_name = models.CharField(max_length=512)
    last_name = models.CharField(max_length=512)
    phone_number = models.CharField(max_length=32)
    status = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.first_name} {self.last_name} {self.phone_number} {self.status}"


class BookingDate(models.Model):
    start_date = models.DateField()
    end_date = models.DateField()


class Room(models.Model):
    number = models.IntegerField(unique=True)
    booked = models.ManyToManyField(BookingDate, blank=True)

    def __str__(self):
        return f"{self.number}"


class Standard(models.Model):
    rooms = models.ManyToManyField(Room)
    price = models.IntegerField(default=2200)
    persons = models.IntegerField(default=1)

    def __str__(self):
        return f"Standard - {self.price}"


class Luxe(models.Model):
    rooms = models.ManyToManyField(Room)
    price = models.IntegerField(default=3400)
    persons = models.IntegerField(default=2)

    def __str__(self):
        return f"Luxe - {self.price}"


class LuxePlus(models.Model):
    rooms = models.ManyToManyField(Room)
    price = models.IntegerField(default=3700)
    persons = models.IntegerField(default=2)

    def __str__(self):
        return f"LuxePlus - {self.price}"


class LuxePremium(models.Model):
    rooms = models.ManyToManyField(Room)
    price = models.IntegerField(default=4200)
    persons = models.IntegerField(default=3)

    def __str__(self):
        return f"LuxePremium - {self.price}"
