'use strict';

App.config(function ($httpProvider) {
  $httpProvider.defaults.headers.common['Authorization'] = 'Basic ' + 'YWJvbmRhcmVua286cXdlcnR5';
});
