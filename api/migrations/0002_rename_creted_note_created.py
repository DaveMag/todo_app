# Generated by Django 3.2.18 on 2023-03-22 15:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='note',
            old_name='creted',
            new_name='created',
        ),
    ]
