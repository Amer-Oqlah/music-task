from .models import Artist,Song,Album
from rest_framework import viewsets,permissions
from .serializers import ArtistSerializer,SongSerializer,AlbumSerializer

# Artist viewset
class ArtistViewSet(viewsets.ModelViewSet):
    queryset=Artist.objects.all()
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class= ArtistSerializer

# Album viewset
class AlbumViewSet(viewsets.ModelViewSet):
    queryset=Album.objects.all()
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class= AlbumSerializer

# Song viewset
class SongViewSet(viewsets.ModelViewSet):
    queryset=Song.objects.all()
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class= SongSerializer
