# Generated by Django 2.2.7 on 2019-11-28 22:27

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('Event', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='unique_id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, unique=True),
        ),
    ]
