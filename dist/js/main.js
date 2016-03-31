'use strict';

var russianApp = angular.module('russian', []);

russianApp.controller('mainCtrl', ['$scope', '$http', function scope($scope, $http) {
  $scope.json = {};

  $http.get('./words.json').then(function callback(response) {
    $scope.json = response.data;
  });

}]);
