from django.db import models


class Ocupations(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True)  # Field name made lowercase.
    name = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'ocupations'
    
    def __str__(self):
        return self.name


class Users(models.Model):
    name = models.CharField(max_length=45)
    surname = models.CharField(max_length=45)
    phone = models.IntegerField()
    date_of_birth = models.DateField()
    email = models.CharField(max_length=45)
    image = models.ImageField(upload_to='users')
    ocupations = models.ForeignKey(Ocupations, models.DO_NOTHING, db_column='Ocupations_Id')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'users'

    def __str__(self):
        return self.name
