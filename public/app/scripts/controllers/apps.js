'use strict';

App.controller('AppsController', function ($scope, $state, AppModel) {
  console.log('AppsController');
  $scope.apps = AppModel.query();
  $scope.edit = function (app) {
    $state.go('apps-edit', {
      id: app._id
    });
  }
});
