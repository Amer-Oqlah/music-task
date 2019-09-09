from rest_framework import routers
from .api import ArtistViewSet,AlbumViewSet,SongViewSet

router = routers.DefaultRouter()
router.register('api/Artists',ArtistViewSet,'Artists')
router.register('api/Albums',AlbumViewSet,'Albums')
router.register('api/Songs',SongViewSet,'Songs')

urlpatterns = router.urls
