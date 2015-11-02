'use strict';

/**
 * @ngdoc function
 * @name rCaririApp.controller:ProgramCtrl
 * @description
 * # ProgramCtrl
 * Controller of the rCaririApp
 */
angular.module('rCaririApp')
  .controller('ProgramCtrl', function ($scope, $mdDialog, $filter, Programs, $rootScope) {
    $rootScope.pageTitle = 'Programação';
    $rootScope.pageIcon = 'list';
    $scope.talks = [];
    $scope.loading = {
      status: 'indeterminate'
    };
    var talkFilter = $filter;

    Programs.getPrograms(function(data) {
      $scope.talks = data.posts;
      $scope.loading.status = 'null';
    });

    $scope.filterByDate = function(date) {
      return function (talk) {
        return talk.custom_fields.meta_box_date[0] === date;
      };
    };

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
