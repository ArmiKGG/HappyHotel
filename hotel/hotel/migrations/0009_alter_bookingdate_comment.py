# Generated by Django 4.2.5 on 2023-10-05 11:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotel', '0008_alter_bookingdate_comment'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookingdate',
            name='comment',
            field=models.CharField(blank=True, max_length=512, null=True, unique=True),
        ),
    ]
