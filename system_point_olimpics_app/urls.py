from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from system_point_olimpics_app.views import cadastrar_usuario, register_system


urlpatterns = [
    path('', cadastrar_usuario, name="salvar_usuario"),
    path('register_success/', register_system, name='register')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
