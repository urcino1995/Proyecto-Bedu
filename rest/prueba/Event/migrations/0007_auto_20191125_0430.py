# Generated by Django 2.2.7 on 2019-11-25 10:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Event', '0006_auto_20191125_0022'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dayevent',
            name='user',
            field=models.CharField(max_length=35, verbose_name='Nombre'),
        ),
    ]
