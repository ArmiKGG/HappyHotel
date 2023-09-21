from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import FeedBackSerializer
from .models import Feedback


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



        return Response(status=200)