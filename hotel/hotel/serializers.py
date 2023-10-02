from rest_framework import serializers

from .models import Feedback, Standard, LuxePremium, Luxe, LuxePlus, Room, BookingDate


class RequestSerializer(serializers.Serializer):
    start_date = serializers.DateField()
    end_date = serializers.DateField()
    persons = serializers.IntegerField()
    type = serializers.ChoiceField(choices=["standard", "luxe", "luxe plus", "luxe premium"], required=False)


class RequestBronSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=256)
    last_name = serializers.CharField(max_length=256)
    phone_number = serializers.CharField(max_length=256)
    comment = serializers.CharField(max_length=1024, required=False)

    start_date = serializers.DateField()
    end_date = serializers.DateField()

    amount = serializers.IntegerField(max_value=3)

    type = serializers.ChoiceField(choices=["standard", "luxe", "luxe plus", "luxe premium"])

    nights = serializers.IntegerField()


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
