from rest_framework.generics import ListAPIView

from quickAPI.models import Data, Test
from .serializers import DataSerializer, TestSerializer

class DataListView(ListAPIView):
    queryset = Data.objects.all()
    serializer_class = DataSerializer

class TestListView(ListAPIView):
    queryset = Test.objects.all()
    serializer_class = TestSerializer
