'use strict';

App.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/index");

  $stateProvider.state('layout', {
    templateUrl: 'templates/layouts/wrapper.html'
  }).state('layout.container', {
    templateUrl: 'templates/layouts/container.html'
  }).state('main', {
    parent: 'layout.container',
    views: {
      header: {
        templateUrl: 'templates/partials/header.html'
      },
      footer: {
        templateUrl: 'templates/partials/footer.html'
      },
      container: {
        templateUrl: 'templates/partials/container.html'
      }
    }
  });

  $stateProvider.state('index', {
    url: '/index',
    parent: 'main'
  }).state('apps', {
    url: '/apps',
    parent: 'main',
    templateUrl: 'templates/views/apps.html',
    controller: 'AppsController'
  }).state('apps-create', {
    url: '/apps/create',
    parent: 'main',
    templateUrl: 'templates/views/apps-create.html',
    controller: 'AppCreateController'
  }).state('apps-edit', {
    url: '/apps/:id',
    parent: 'main',
    templateUrl: 'templates/views/apps-edit.html',
    controller: 'AppEditController'
  });
});
