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
      for (var i = 0; i < data.posts.length ; i++) {
        var talk = {
          id: data.posts[i].id,
          title: data.posts[i].title,
          thumbnail: data.posts[i].thumbnail,
          content: data.posts[i].content,
          date: data.posts[i].custom_fields.meta_box_date[0],
          hour: data.posts[i].custom_fields.meta_box_hour[0],
          local: data.posts[i].custom_fields.meta_box_local[0],
          talker: data.posts[i].custom_fields.meta_box_talker[0]
        }
        $scope.talks.push(talk);
      }
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
