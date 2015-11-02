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

    document.addEventListener("offline", isOffline, false);

    function isOffline() {
      window.alert('Houve algum problema de conexão à internet. Certifique-se que você está conectado!');
    }
    
    $scope.toggleMenu = function() {
      $mdSidenav('left').toggle();
    };

    $scope.goto = function(path) {
      $mdSidenav('left').toggle();
      $location.path(path);
    };

  });
