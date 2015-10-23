'use strict';

/**
 * @ngdoc function
 * @name rCaririApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the rCaririApp
 */
angular.module('rCaririApp')
  .controller('MainCtrl', function ($scope, $mdSidenav, $location) {
    
    $scope.toggleMenu = function() {
      $mdSidenav('left').toggle();
    };

    $scope.goto = function(path) {
      $mdSidenav('left').toggle();
      $location.path(path);
    };

  });
