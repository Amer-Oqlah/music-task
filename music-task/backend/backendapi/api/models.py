from django.db import models

class Artist(models.Model):
    name=models.CharField(max_length=100)
    country=models.CharField(max_length=100)

    def __str__(self):
        ret = self.name
        return ret
    class Meta:
        unique_together = ['name']   
class Album(models.Model):
    title=models.CharField(max_length=100)
    date_released=models.CharField(max_length=100)
    artist_name = models.ForeignKey('Artist',on_delete=models.CASCADE,default=1)

    def __str__(self):
        ret = self.title
        return ret

    class Meta:
        unique_together = ['title']  

class Song(models.Model):
    title=models.CharField(max_length=100)
    artist_name=models.ForeignKey('Artist',on_delete=models.CASCADE,default=1)
    album_name=models.ForeignKey('Album',on_delete=models.CASCADE,default=1)

    def __str__(self):
        ret = self.title
        return ret
    class Meta:
        unique_together = ['title']  
    
