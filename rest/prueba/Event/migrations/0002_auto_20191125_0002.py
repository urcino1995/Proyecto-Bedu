# Generated by Django 2.2.7 on 2019-11-25 06:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Event', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dayevent',
            name='vote',
            field=models.CharField(choices=[(1, 1), (2, 2), (3, 3)], max_length=15, verbose_name='Que fecha sera la carnita'),
        ),
        migrations.CreateModel(
            name='Results',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('final_date', models.DateField(max_length=12, verbose_name='Fecha Final')),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Event.Event')),
            ],
        ),
    ]