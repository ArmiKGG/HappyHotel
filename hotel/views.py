from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Feedback
from .serializers import FeedBackSerializer
from .utils.sms import sender_email


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

        msg = f"свяжитесь с - {validated_data['first_name']} {validated_data['last_name']} по номеру телефона." \
              f"Номер телефона: {validated_data['phone_number']}" \
              f"Уникальный ИД-идентификатор в админке у данной заявки {obj.id}"
        sender_email(f"{validated_data['first_name']} {validated_data['last_name']}", msg)

        return Response(status=200)
