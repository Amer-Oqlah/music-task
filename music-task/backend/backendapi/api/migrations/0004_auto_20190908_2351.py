# Generated by Django 2.2.5 on 2019-09-08 20:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20190908_2346'),
    ]

    operations = [
        migrations.AlterField(
            model_name='album',
            name='date_released',
            field=models.IntegerField(),
        ),
    ]
