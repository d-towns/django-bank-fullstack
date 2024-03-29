

from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from app_bank import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)



urlpatterns = [
    path('bank/', include('app_bank.urls')),
    path('users/', include('users.urls', namespace='users')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('admin/', admin.site.urls),
]
