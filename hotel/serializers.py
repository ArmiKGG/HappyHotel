from rest_framework import serializers

from .models import Feedback, Standard, LuxePremium, Luxe, LuxePlus, Room, BookingDate


class RequestSerializer(serializers.Serializer):
    start_date = serializers.DateField()
    end_date = serializers.DateField()
    persons = serializers.IntegerField()


class BookedSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookingDate
        fields = "__all__"

class FeedBackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'


class StandardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Standard
        fields = '__all__'


class LuxePremiumSerializer(serializers.ModelSerializer):
    class Meta:
        model = LuxePremium
        fields = '__all__'


class LuxeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Luxe
        fields = '__all__'


class LuxePlusSerializer(serializers.ModelSerializer):
    class Meta:
        model = LuxePlus
        fields = '__all__'


class RoomSerializer(serializers.ModelSerializer):
    booked = BookedSerializer(many=True)

    class Meta:
        model = Room
        fields = '__all__'
