from django.db.models import Q
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Feedback, Standard, Luxe, LuxePremium, LuxePlus
from .serializers import FeedBackSerializer, RequestSerializer, RoomSerializer
from .utils.sms import send_email, sender_email


class FeedBack(APIView):
    serializer_class = FeedBackSerializer

    def post(self, request, *args, **kwargs):
        validated_data = self.serializer_class(data=self.request.data)
        validated_data.is_valid(raise_exception=True)
        validated_data = validated_data.validated_data

        obj = Feedback.objects.create(
            first_name=validated_data["first_name"],
            last_name=validated_data["last_name"],
            phone_number=validated_data["phone_number"]
        )

        msg = f"свяжитесь с клиентом: {validated_data['first_name']} {validated_data['last_name']} по номеру телефона.\n" \
              f"Номер телефона: {validated_data['phone_number']}\n" \
              f"Уникальный ИД-идентификатор в админке у данной заявки - {obj.id}"
        send_email(sender_email, f"{validated_data['first_name']} {validated_data['last_name']}", msg)

        return Response(status=200)


class ReturnFreeRooms(APIView):
    request_serializer = RequestSerializer

    def post(self, request, *args, **kwargs):
        validated_data = self.request_serializer(data=self.request.data)
        validated_data.is_valid(raise_exception=True)
        validated_data = validated_data.validated_data

        standard = 0
        lux = 0
        luxplus = 0
        luxpremium = 0

        if validated_data["persons"] == 1:
            stand_obj = Standard.objects.get(pk=1)
            free_standart_rooms = stand_obj.rooms.filter(~Q(booked__start_date__range=[validated_data["start_date"],
                                                                                       validated_data["end_date"]]),
                                                         ~Q(booked__end_date__range=[validated_data["start_date"],
                                                                                     validated_data["end_date"]]))

            vklyuchitelno = stand_obj.rooms.filter(booked__end_date=validated_data["start_date"])

            serilized1 = RoomSerializer(many=True, instance=vklyuchitelno).data

            serialized_data = RoomSerializer(many=True, instance=free_standart_rooms).data
            standard += len(serialized_data + serilized1)

        if validated_data["persons"] in [1, 3, 2]:
            stand_obj = LuxePremium.objects.get(pk=1)
            free_luxepremium_rooms = stand_obj.rooms.filter(~Q(booked__start_date__range=[validated_data["start_date"],
                                                                                          validated_data["end_date"]]),
                                                            ~Q(booked__end_date__range=[validated_data["start_date"],
                                                                                        validated_data["end_date"]]))

            vklyuchitelno = stand_obj.rooms.filter(booked__end_date=validated_data["start_date"])

            serilized1 = RoomSerializer(many=True, instance=vklyuchitelno).data

            serialized_data = RoomSerializer(many=True, instance=free_luxepremium_rooms).data

            luxpremium += len(serialized_data + serilized1)

        if validated_data["persons"] in [1, 2]:
            stand_obj = Luxe.objects.get(pk=1)
            free_luxepremium_rooms = stand_obj.rooms.filter(~Q(booked__start_date__range=[validated_data["start_date"],
                                                                                          validated_data["end_date"]]),
                                                            ~Q(booked__end_date__range=[validated_data["start_date"],
                                                                                        validated_data["end_date"]]))
            serialized_data = RoomSerializer(many=True, instance=free_luxepremium_rooms).data
            vklyuchitelno = stand_obj.rooms.filter(booked__end_date=validated_data["start_date"])

            serilized1 = RoomSerializer(many=True, instance=vklyuchitelno).data

            lux += len(serialized_data + serilized1)

            stand_obj = LuxePlus.objects.get(pk=1)
            free_luxepremium_rooms = stand_obj.rooms.filter(~Q(booked__start_date__range=[validated_data["start_date"],
                                                                                          validated_data["end_date"]]),
                                                            ~Q(booked__end_date__range=[validated_data["start_date"],
                                                                                        validated_data["end_date"]]))
            serialized_data = RoomSerializer(many=True, instance=free_luxepremium_rooms).data
            vklyuchitelno = stand_obj.rooms.filter(booked__end_date=validated_data["start_date"])

            serilized1 = RoomSerializer(many=True, instance=vklyuchitelno).data

            luxplus += len(serialized_data + serilized1)

        return Response(data={"standard": standard,
                              "lux": lux,
                              "luxplus": luxplus,
                              "luxpremium": luxpremium}, status=200)
