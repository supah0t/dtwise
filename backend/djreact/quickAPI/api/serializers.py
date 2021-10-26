from rest_framework import serializers
from quickAPI.models import Data, Test

class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Data
        fields = ('mainId', 'timestamp', 'srcId', 'metric_1', 'metric_2')

class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ('test')

