'use strict';

/**
 * @ngdoc service
 * @name rCaririApp.programs
 * @description
 * # programs
 * Factory in the rCaririApp.
 */
angular.module('rCaririApp')
  .factory('Programs', function ($http) {

    var programs,
        obj = {
          getPrograms: function (callback) {
            if(programs) {
              callback(programs);
              return false;
            }
            else {
              $http({
                method: 'GET',
                url: 'http://rcariri.com.br/novo/?json=get_posts&post_type=programming',
              }).success(function(data) {
                obj.savePrograms(data);
                callback(data);
              });
            }
          },
          savePrograms: function (data) {
            programs = data;
          }
        };

    return obj;
  });
