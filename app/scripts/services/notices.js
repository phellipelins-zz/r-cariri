'use strict';

/**
 * @ngdoc service
 * @name rCaririApp.notices
 * @description
 * # notices
 * Factory in the rCaririApp.
 */
angular.module('rCaririApp')
  .factory('Notices', function ($http) {

    var notices,
        obj = {
          getNotices: function (callback) {
            if(notices) {
              callback(notices);
              return false;
            }
            else {
              $http({
                method: 'GET',
                url: 'http://rcariri.com.br/novo/?json=get_posts&post_type=post',
              }).success(function(data) {
                obj.saveNotices(data);
                callback(data);
              });
            }
          },
          saveNotices: function (data) {
            notices = data;
          }
        };

    return obj;
  });
