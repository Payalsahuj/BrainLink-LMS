# Generated by Django 4.1.10 on 2023-09-01 17:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('brainlink_fro', '0002_instructor_password'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='password',
            field=models.CharField(default='', max_length=100),
        ),
    ]
