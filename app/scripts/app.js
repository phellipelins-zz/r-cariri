'use strict';

/**
 * @ngdoc overview
 * @name rCaririApp
 * @description
 * # rCaririApp
 *
 * Main module of the application.
 */
angular
  .module('rCaririApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/program.html',
        controller: 'ProgramCtrl',
        controllerAs: 'program'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .when('/parties', {
        templateUrl: 'views/parties.html',
        controller: 'PartiesCtrl',
        controllerAs: 'parties'
      })
      .when('/notices', {
        templateUrl: 'views/notices.html',
        controller: 'NoticesCtrl',
        controllerAs: 'notices'
      })
      .when('/notice/:id', {
        templateUrl: 'views/notice.html',
        controller: 'NoticeCtrl',
        controllerAs: 'notice'
      })
      .when('/where', {
        templateUrl: 'views/where.html',
        controller: 'WhereCtrl',
        controllerAs: 'where'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
