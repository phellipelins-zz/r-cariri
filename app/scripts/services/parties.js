'use strict';

/**
 * @ngdoc service
 * @name rCaririApp.parties
 * @description
 * # parties
 * Factory in the rCaririApp.
 */
angular.module('rCaririApp')
  .factory('Parties', function ($http) {

    var parties,
        obj = {
          getParties: function (callback) {
            if(parties) {
              callback(parties);
              return false;
            }
            else {
              $http({
                method: 'GET',
                url: 'http://rcariri.com.br/novo/?json=get_posts&post_type=parties',
              }).success(function(data) {
                obj.saveParties(data);
                callback(data);
              });
            }
          },
          saveParties: function (data) {
            parties = data;
          }
        };

    return obj;
  });
