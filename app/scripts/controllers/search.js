'use strict';

/**
 * @ngdoc function
 * @name rCaririApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the rCaririApp
 */
angular.module('rCaririApp')
  .controller('SearchCtrl', function ($scope, $mdDialog, $filter, $rootScope, Programs) {
    $rootScope.pageTitle = 'Busca na Programação';
    $rootScope.pageIcon = 'search';
    $scope.talks = {};
    var talkFilter = $filter;
    $scope.loading = {
      status: 'indeterminate'
    };

    Programs.getPrograms(function(data) {
      $scope.talks = data.posts;
      $scope.loading.status = 'null';
    });

    $scope.openContent = function(talkID, event) {
      var talk = talkFilter('filter')($scope.talks, {
        id:talkID
      })[0];

      $mdDialog.show(
        $mdDialog.alert()
          .title(talk.title)
          .content(talk.content)
          .ariaLabel('Person inspect demo')
          .ok('Fechar')
          .targetEvent(event)
      );
    };

  });
