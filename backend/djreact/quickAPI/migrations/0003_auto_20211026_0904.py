# Generated by Django 3.2.8 on 2021-10-26 09:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quickAPI', '0002_auto_20211026_0820'),
    ]

    operations = [
        migrations.AddField(
            model_name='data',
            name='id',
            field=models.BigAutoField(auto_created=True, default=1, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='data',
            name='mainId',
            field=models.TextField(),
        ),
    ]
