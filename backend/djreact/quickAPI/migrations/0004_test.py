# Generated by Django 3.2.8 on 2021-10-26 09:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quickAPI', '0003_auto_20211026_0904'),
    ]

    operations = [
        migrations.CreateModel(
            name='Test',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('test', models.TextField()),
            ],
        ),
    ]
