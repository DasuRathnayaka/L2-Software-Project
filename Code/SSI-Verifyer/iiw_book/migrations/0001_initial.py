# Generated by Django 2.2.28 on 2023-01-03 03:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Attendee',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('connection_id', models.UUIDField()),
                ('email', models.EmailField(max_length=100)),
                ('fname', models.CharField(max_length=30, verbose_name='First Name')),
                ('lname', models.CharField(max_length=30, verbose_name='Last Name')),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated_at', models.DateTimeField(auto_now=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='SessionState',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('connection_id', models.UUIDField()),
                ('state', models.TextField()),
            ],
        ),
    ]
