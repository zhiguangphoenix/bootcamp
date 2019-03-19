from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.views.generic import TemplateView
from django.views import defaults as default_views
from django.urls import path, include

from graphene_django.views import GraphQLView

urlpatterns = [
    path('',
        TemplateView.as_view(template_name='pages/home.html'), name='home'),
    path('about/',
        TemplateView.as_view(template_name='pages/about.html'), name='about'),
    # Django Admin, use {% url 'admin:index' %}
    path(settings.ADMIN_URL, admin.site.urls),
    # User management
    path('users/', include('bootcamp.users.urls', namespace='users')),
    path('accounts/', include('allauth.urls')),
    # Third party apps here
    path('comments/', include('django_comments.urls')),
    path('graphql', GraphQLView.as_view(graphiql=True)),
    path('markdownx/', include('markdownx.urls')),
    # Local apps here
    path('notifications/',
        include('bootcamp.notifications.urls', namespace='notifications')),
    path('articles/',
        include('bootcamp.articles.urls', namespace='articles')),
    path('news/', include('bootcamp.news.urls', namespace='news')),
    path('messages/',
        include('bootcamp.messager.urls', namespace='messager')),
    path('qa/', include('bootcamp.qa.urls', namespace='qa')),
    path('search/', include('bootcamp.search.urls', namespace='search')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    # This allows the error pages to be debugged during development
    urlpatterns += [
        url('400/$', default_views.bad_request, kwargs={'exception': Exception('Bad Request!')}),
        url('403/$', default_views.permission_denied, kwargs={'exception': Exception('Permission Denied')}),
        url('404/$', default_views.page_not_found, kwargs={'exception': Exception('Page not Found')}),
        url('500/$', default_views.server_error),
    ]
    if 'debug_toolbar' in settings.INSTALLED_APPS:
        import debug_toolbar
        urlpatterns = [
            url('^__debug__/', include(debug_toolbar.urls)),
        ] + urlpatterns
