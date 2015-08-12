'use strict';

App.controller('AppEditController', function ($scope, $state, $stateParams, AppModel) {

  $scope.app = AppModel.get({ id: $stateParams.id });
  $scope.submit = function (form) {
    if (form.$invalid) {
      return;
    }
    $scope.app.$update().then(function () {
      alert('updated');
    });
  };
  $scope.delete = function () {
    console.log($scope.app.$delete());
    $scope.app.$delete().then(function () {
      alert('app deleted');
      $state.go('apps');
    });
  };
});
