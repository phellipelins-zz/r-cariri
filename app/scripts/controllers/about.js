'use strict';

/**
 * @ngdoc function
 * @name rCaririApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the rCaririApp
 */
angular.module('rCaririApp')
  .controller('AboutCtrl', function ($scope, $rootScope) {
    $rootScope.pageTitle = 'Sobre o R';
    $rootScope.pageIcon = 'compass';

  });
