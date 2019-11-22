# Generated by Django 2.2.5 on 2019-10-26 05:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Tasks', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='name',
            field=models.CharField(default='Задача', max_length=200),
        ),
        migrations.AlterField(
            model_name='task',
            name='description',
            field=models.CharField(blank=True, max_length=3000, null=True),
        ),
    ]