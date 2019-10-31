# Generated by Django 2.2.6 on 2019-10-28 05:42

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
                ('email7', models.EmailField(blank=True, max_length=254, verbose_name='Septimo invitado')),
                ('street', models.CharField(max_length=50, verbose_name='Calle')),
                ('col', models.CharField(blank=True, default='Sin nombre', max_length=50, verbose_name='Colonia')),
                ('cp', models.CharField(default='SN', max_length=50, verbose_name='C.P')),
                ('references', models.TextField(verbose_name='Referencias')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('date', models.CharField(default='00:00:0000T', max_length=12, verbose_name='Fecha Final')),
                ('creator', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Profile.Profile')),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product', models.CharField(choices=[('Chorizo', 'Chorizo'), ('Carbon', 'Carbon')], max_length=15, verbose_name='Que llevas')),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Event.Event')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Profile.Profile')),
            ],
        ),
        migrations.CreateModel(
            name='DayEvent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vote', models.CharField(choices=[('Fecha 1', 'Fecha 1'), ('Fecha 2', 'Fecha 2'), ('Fecha 3', 'Fecha3')], max_length=15, verbose_name='Que fecha sera la carnita')),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Event.Event')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Profile.Profile')),
            ],
        ),
        migrations.CreateModel(
            name='Attendance',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('atendance', models.BooleanField(default=False, verbose_name='Asistencia')),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Event.Event')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Profile.Profile')),
            ],
        ),
    ]