# Generated by Django 5.0.6 on 2024-07-25 15:53

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0002_initial'),
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='test',
            name='school',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='tests', to='users.school'),
        ),
    ]
