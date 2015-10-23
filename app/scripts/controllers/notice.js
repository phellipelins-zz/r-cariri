'use strict';

/**
 * @ngdoc function
 * @name rCaririApp.controller:NoticeCtrl
 * @description
 * # NoticeCtrl
 * Controller of the rCaririApp
 */
angular.module('rCaririApp')
  .controller('NoticeCtrl', function ($scope, $rootScope, $routeParams, Notices, $filter, $location) {
    $rootScope.pageTitle = 'Notícia';
    $rootScope.pageIcon = 'paper';
    var noticeFilter = $filter;

    $scope.loadNotices = function() {
      Notices.getNotices(function(data) {
        $scope.notice = noticeFilter('filter')(data.posts, {
          id: $routeParams.id
        })[0];
      });
    };

    $scope.backNotices = function() {
      $location.path('/notices/');
    };
    
  });
