from django.db import models

# Create your models here.
class Data(models.Model):
    mainId = models.TextField()
    timestamp = models.IntegerField()
    srcId = models.TextField()
    metric_1 = models.FloatField()
    metric_2 = models.FloatField()

    def __str__(self):
        return self.mainId

class Test(models.Model):
    test = models.TextField()

    def __str__(self):
        return self.test
