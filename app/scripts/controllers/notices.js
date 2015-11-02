'use strict';

/**
 * @ngdoc function
 * @name rCaririApp.controller:NoticesCtrl
 * @description
 * # NoticesCtrl
 * Controller of the rCaririApp
 */
angular.module('rCaririApp')
  .controller('NoticesCtrl', function ($scope, $rootScope, Notices, $location) {
    $rootScope.pageTitle = 'Notícias';
    $rootScope.pageIcon = 'paper';
    $scope.notices = [];
    $scope.loading = {
      status: 'indeterminate'
    };

    $scope.loadNotices = function() {
      Notices.getNotices(function(data) {
        $scope.notices = data.posts;
        for (var i =0; i < $scope.notices.length; i++) {
          $scope.notices[i].date = new Date($scope.notices[i].date);
        }
        $scope.loading.status = 'null';
      });
    };

    $scope.openNotice = function(noticeId) {
      $location.path('/notice/' + noticeId);
    };

  });
