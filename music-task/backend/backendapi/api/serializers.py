from rest_framework import serializers 
from .models import Artist,Song,Album

class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model=Artist
        fields='__all__'

class AlbumSerializer(serializers.ModelSerializer):
    title = serializers.CharField()  
    artist_name= ArtistSerializer()
    date_released=serializers.CharField()
    class Meta:
        model=Album
        fields=('title','date_released','artist_name')       
class SongSerializer(serializers.ModelSerializer):
    title=serializers.CharField()
    artist_name= ArtistSerializer()
    album_name= AlbumSerializer() 
  
    class Meta:
        model=Song
        fields=('title','album_name','artist_name')