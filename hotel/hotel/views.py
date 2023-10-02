from django.db.models import Q
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Feedback, Standard, Luxe, LuxePremium, LuxePlus, BookingDate
from .serializers import FeedBackSerializer, RequestSerializer, RoomSerializer, RequestBronSerializer
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

        msg = f"Cвяжитесь с клиентом: {validated_data['first_name']} {validated_data['last_name']} по номеру телефона.\n" \
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
        luxe = 0
        luxeplus = 0
        luxepremium = 0
        if not validated_data.get("type"):
            if validated_data["persons"] in [1, 2]:
                stand_obj = Standard.objects.get(pk=1)
                free_standart_rooms = stand_obj.rooms.filter(~Q(booked__start_date__range=[validated_data["start_date"],
                                                                                           validated_data["end_date"]]),
                                                             ~Q(booked__end_date__range=[validated_data["start_date"],
                                                                                         validated_data["end_date"]]))

                inclusive_date = stand_obj.rooms.filter(booked__end_date=validated_data["start_date"])

                inclusive_date_serializer = RoomSerializer(many=True, instance=inclusive_date).data

                serialized_data = RoomSerializer(many=True, instance=free_standart_rooms).data
                standard += len(serialized_data + inclusive_date_serializer)

            if validated_data["persons"] in [1, 3, 2, 4]:
                stand_obj = LuxePremium.objects.get(pk=1)
                free_luxepremium_rooms = stand_obj.rooms.filter(
                    ~Q(booked__start_date__range=[validated_data["start_date"],
                                                  validated_data["end_date"]]),
                    ~Q(booked__end_date__range=[validated_data["start_date"],
                                                validated_data["end_date"]]))

                inclusive_date = stand_obj.rooms.filter(booked__end_date=validated_data["start_date"])

                inclusive_date_serializer = RoomSerializer(many=True, instance=inclusive_date).data

                serialized_data = RoomSerializer(many=True, instance=free_luxepremium_rooms).data

                luxepremium += len(serialized_data + inclusive_date_serializer)

            if validated_data["persons"] in [1, 2, 3]:
                stand_obj = Luxe.objects.get(pk=1)
                free_luxepremium_rooms = stand_obj.rooms.filter(
                    ~Q(booked__start_date__range=[validated_data["start_date"],
                                                  validated_data["end_date"]]),
                    ~Q(booked__end_date__range=[validated_data["start_date"],
                                                validated_data["end_date"]]))
                serialized_data = RoomSerializer(many=True, instance=free_luxepremium_rooms).data
                inclusive_date = stand_obj.rooms.filter(booked__end_date=validated_data["start_date"])

                inclusive_date_serializer = RoomSerializer(many=True, instance=inclusive_date).data

                luxe += len(serialized_data + inclusive_date_serializer)

                stand_obj = LuxePlus.objects.get(pk=1)
                free_luxepremium_rooms = stand_obj.rooms.filter(
                    ~Q(booked__start_date__range=[validated_data["start_date"],
                                                  validated_data["end_date"]]),
                    ~Q(booked__end_date__range=[validated_data["start_date"],
                                                validated_data["end_date"]]))
                serialized_data = RoomSerializer(many=True, instance=free_luxepremium_rooms).data
                inclusive_date = stand_obj.rooms.filter(booked__end_date=validated_data["start_date"])

                inclusive_date_serializer = RoomSerializer(many=True, instance=inclusive_date).data

                luxeplus += len(serialized_data + inclusive_date_serializer)
        else:
            if validated_data.get("type") == "standard" and validated_data["persons"] in [1,2]:
                stand_obj = Standard.objects.get(pk=1)
                free_standart_rooms = stand_obj.rooms.filter(~Q(booked__start_date__range=[validated_data["start_date"],
                                                                                           validated_data["end_date"]]),
                                                             ~Q(booked__end_date__range=[validated_data["start_date"],
                                                                                         validated_data["end_date"]]))
                inclusive_date = stand_obj.rooms.filter(booked__end_date=validated_data["start_date"])

                inclusive_date_serializer = RoomSerializer(many=True, instance=inclusive_date).data

                serialized_data = RoomSerializer(many=True, instance=free_standart_rooms).data
                standard += len(serialized_data + inclusive_date_serializer)
            if validated_data.get("type") == "luxe premium" and validated_data["persons"] in [1, 3, 2, 4]:
                stand_obj = LuxePremium.objects.get(pk=1)
                free_luxepremium_rooms = stand_obj.rooms.filter(
                    ~Q(booked__start_date__range=[validated_data["start_date"],
                                                  validated_data["end_date"]]),
                    ~Q(booked__end_date__range=[validated_data["start_date"],
                                                validated_data["end_date"]]))

                inclusive_date = stand_obj.rooms.filter(booked__end_date=validated_data["start_date"])

                inclusive_date_serializer = RoomSerializer(many=True, instance=inclusive_date).data

                serialized_data = RoomSerializer(many=True, instance=free_luxepremium_rooms).data

                luxepremium += len(serialized_data + inclusive_date_serializer)
            if validated_data.get("type") == "luxe" and validated_data["persons"] in [1, 2, 3]:
                stand_obj = Luxe.objects.get(pk=1)
                free_luxepremium_rooms = stand_obj.rooms.filter(
                    ~Q(booked__start_date__range=[validated_data["start_date"],
                                                  validated_data["end_date"]]),
                    ~Q(booked__end_date__range=[validated_data["start_date"],
                                                validated_data["end_date"]]))
                serialized_data = RoomSerializer(many=True, instance=free_luxepremium_rooms).data
                inclusive_date = stand_obj.rooms.filter(booked__end_date=validated_data["start_date"])

                inclusive_date_serializer = RoomSerializer(many=True, instance=inclusive_date).data

                luxe += len(serialized_data + inclusive_date_serializer)
            if validated_data.get("type") == "luxe plus" and validated_data["persons"] in [1, 2, 3]:
                stand_obj = LuxePlus.objects.get(pk=1)
                free_luxepremium_rooms = stand_obj.rooms.filter(
                    ~Q(booked__start_date__range=[validated_data["start_date"],
                                                  validated_data["end_date"]]),
                    ~Q(booked__end_date__range=[validated_data["start_date"],
                                                validated_data["end_date"]]))
                serialized_data = RoomSerializer(many=True, instance=free_luxepremium_rooms).data
                inclusive_date = stand_obj.rooms.filter(booked__end_date=validated_data["start_date"])

                inclusive_date_serializer = RoomSerializer(many=True, instance=inclusive_date).data

                luxeplus += len(serialized_data + inclusive_date_serializer)

        return Response(data={"standard": standard,
                              "luxe": luxe,
                              "luxe plus": luxeplus,
                              "luxe premium": luxepremium}, status=200)


class Book(APIView):
    serializer_class = RequestBronSerializer

    def post(self, request, *args, **kwargs):
        validated_data = self.serializer_class(data=self.request.data)
        validated_data.is_valid(raise_exception=True)
        validated_data = validated_data.validated_data

        rooms = []
        if validated_data["type"] == "standard":
            stand_obj = Standard.objects.get(pk=1)
            free_standart_rooms = stand_obj.rooms.filter(~Q(booked__start_date__range=[validated_data["start_date"],
                                                                                       validated_data["end_date"]]),
                                                         ~Q(booked__end_date__range=[validated_data["start_date"],
                                                                                     validated_data["end_date"]]))
            if not free_standart_rooms:
                free_standart_rooms = stand_obj.rooms.filter(booked__end_date=validated_data["start_date"])

            if not free_standart_rooms:
                return Response(status=404, data={"message": "no free rooms"})

            for i in free_standart_rooms:
                rooms.append(i.number)


        elif validated_data["type"] == "luxe":
            stand_obj = Luxe.objects.get(pk=1)
            free_standart_rooms = stand_obj.rooms.filter(~Q(booked__start_date__range=[validated_data["start_date"],
                                                                                       validated_data["end_date"]]),
                                                         ~Q(booked__end_date__range=[validated_data["start_date"],
                                                                                     validated_data["end_date"]]))
            if not free_standart_rooms:
                free_standart_rooms = stand_obj.rooms.filter(booked__end_date=validated_data["start_date"])

            if not free_standart_rooms:
                return Response(status=404, data={"message": "no free rooms"})

            for i in free_standart_rooms:
                rooms.append(i.number)

        elif validated_data["type"] == "luxe plus":
            stand_obj = LuxePlus.objects.get(pk=1)
            free_standart_rooms = stand_obj.rooms.filter(~Q(booked__start_date__range=[validated_data["start_date"],
                                                                                       validated_data["end_date"]]),
                                                         ~Q(booked__end_date__range=[validated_data["start_date"],
                                                                                     validated_data["end_date"]]))
            if not free_standart_rooms:
                free_standart_rooms = stand_obj.rooms.filter(booked__end_date=validated_data["start_date"])

            if not free_standart_rooms:
                return Response(status=404, data={"message": "no free rooms"})

            for i in free_standart_rooms:
                rooms.append(i.number)

        else:
            stand_obj = LuxePremium.objects.get(pk=1)
            free_standart_rooms = stand_obj.rooms.filter(~Q(booked__start_date__range=[validated_data["start_date"],
                                                                                       validated_data["end_date"]]),
                                                         ~Q(booked__end_date__range=[validated_data["start_date"],
                                                                                     validated_data["end_date"]]))
            if not free_standart_rooms:
                free_standart_rooms = stand_obj.rooms.filter(booked__end_date=validated_data["start_date"])

            if not free_standart_rooms:
                return Response(status=404, data={"message": "no free rooms"})

            for i in free_standart_rooms:
                rooms.append(i.number)

        msg = f"Cвяжитесь с клиентом: {validated_data['first_name']} {validated_data['last_name']}\n" \
              f"Номер телефона: {validated_data['phone_number']}\n" \
              f"Комментарий клиента к заказу: {validated_data['comment']}\n" \
              f"Даты бронирования {validated_data['start_date']} - {validated_data['end_date']}\n" \
              f"Количество взрослых гостей: {validated_data['amount']}\n" \
              f"Тип номера: {validated_data['type']}\n" \
              f"Количество ночей: {validated_data['nights']}\n" \
              f"Цена: {validated_data['nights'] * stand_obj.price}\n" \
              f"Номера которые свободные на эти даты: {rooms}"

        send_email(sender_email, f"{validated_data['first_name']} {validated_data['last_name']}", msg)
        BookingDate.objects.create(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            phone_number=validated_data['phone_number'],
            start_date=validated_data['start_date'],
            end_date=validated_data['end_date'],
            comment=validated_data['comment'],
            amount=validated_data['amount'],
            type=validated_data['type'],
            nights=validated_data['nights'],
            price=validated_data['nights'] * stand_obj.price,
            free_rooms=", ".join([str(i) for i in rooms])
        )

        return Response(status=200, data={"available_rooms": rooms})
