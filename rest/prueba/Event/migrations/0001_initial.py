# Generated by Django 2.2.7 on 2019-11-28 09:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Profile', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_event', models.CharField(max_length=200, verbose_name='Motivo')),
                ('email1', models.EmailField(max_length=254, verbose_name='Primer invitado')),
                ('email2', models.EmailField(max_length=254, verbose_name='Segundo invitado')),
                ('email3', models.EmailField(max_length=254, verbose_name='Tercer invitado')),
                ('email4', models.EmailField(blank=True, max_length=254, verbose_name='Cuarto invitado')),
                ('email5', models.EmailField(blank=True, max_length=254, verbose_name='Quinto invitado')),
                ('email6', models.EmailField(blank=True, max_length=254, verbose_name='Sexto invitado')),
                ('street', models.CharField(max_length=50, verbose_name='Calle')),
                ('col', models.CharField(blank=True, default='Sin nombre', max_length=50, verbose_name='Colonia')),
                ('cp', models.CharField(default='44100', max_length=50, verbose_name='C.P')),
                ('references', models.TextField(verbose_name='Referencias')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('day1', models.DateField(max_length=12, verbose_name='Primer Fecha')),
                ('day2', models.DateField(max_length=12, verbose_name='Segunda Fecha')),
                ('day3', models.DateField(max_length=12, verbose_name='Tercera Fecha')),
                ('date', models.DateField(default='0000-00-00', max_length=12, verbose_name='Fecha Final')),
                ('hour', models.TimeField()),
                ('creator', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Profile.Profile')),
            ],
            options={
                'verbose_name_plural': 'Eventos',
            },
        ),
        migrations.CreateModel(
            name='Results',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('final_date', models.DateField(max_length=12, verbose_name='Fecha Final')),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Event.Event')),
            ],
            options={
                'verbose_name_plural': 'Resultados',
            },
        ),
        migrations.CreateModel(
            name='DayEvent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vote', models.DateField(max_length=12, null=True, verbose_name='Que fecha sera la carnita')),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Event.Event')),
            ],
            options={
                'verbose_name_plural': 'Votos',
            },
        ),
    ]
