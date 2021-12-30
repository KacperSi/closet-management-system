# Generated by Django 2.2.25 on 2021-12-30 13:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clothes', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Garment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('garment_id', models.IntegerField()),
                ('user_id', models.IntegerField()),
                ('weather_type', models.CharField(choices=[('none', 'None'), ('sun', 'Sun'), ('rain', 'Rain'), ('wind', 'Wind'), ('snow', 'Snow')], default='none', max_length=20)),
                ('cathegory', models.CharField(choices=[('none', 'None'), ('t-shirt', 'T-Shirt'), ('trousers', 'Trousers'), ('hoodie', 'Hoodie'), ('jacket', 'Jacket'), ('shorts', 'Shorts'), ('shirt', 'Shirt')], default='none', max_length=20)),
                ('name', models.CharField(max_length=200)),
                ('image_address', models.ImageField(upload_to='')),
                ('preference_index', models.IntegerField()),
            ],
        ),
        migrations.DeleteModel(
            name='Item',
        ),
    ]