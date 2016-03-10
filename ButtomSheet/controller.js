var app = angular.module('app', ['ngMaterial']);
app.controller('MyController', function($scope, $mdBottomSheet) {
  $scope.openBottomSheet = function() {
    $mdBottomSheet.show({
      template: '<md-bottom-sheet>Hello!</md-bottom-sheet>'
    });
  };
});