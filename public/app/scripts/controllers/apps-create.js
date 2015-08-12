'use strict';

App.controller('AppCreateController', function ($scope, $state, AppModel) {

  $scope.app = new AppModel();
  $scope.submit = function (form) {
    if (form.$invalid) {
      return;
    }
    AppModel.save($scope.app).$promise.then(function () {
      alert('App created');
      $state.go('apps');
    })
  }
});
