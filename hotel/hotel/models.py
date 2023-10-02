from django.db import models


class Feedback(models.Model):
    first_name = models.CharField(max_length=512)
    last_name = models.CharField(max_length=512)
    phone_number = models.CharField(max_length=32)
    status = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.first_name} {self.last_name} {self.phone_number} {self.status}"


class BookingDate(models.Model):
    first_name = models.CharField(max_length=512, null=True, blank=True)
    last_name = models.CharField(max_length=512, null=True, blank=True)
    phone_number = models.CharField(max_length=32, null=True, blank=True)
    comment = models.CharField(max_length=512, null=True, blank=True)
    amount = models.IntegerField(default=1)
    nights = models.IntegerField(default=1)
    price = models.IntegerField(default=0)
    type = models.CharField(max_length=512, null=True, blank=True)
    number = models.CharField(max_length=32, null=True, blank=True)

    free_rooms = models.CharField(max_length=512, null=True, blank=True)

    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)

    status = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.number} {self.first_name} {self.last_name} {self.start_date}: {self.end_date} {self.status}"


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
