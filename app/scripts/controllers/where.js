'use strict';

/**
 * @ngdoc function
 * @name rCaririApp.controller:WhereCtrl
 * @description
 * # WhereCtrl
 * Controller of the rCaririApp
 */
angular.module('rCaririApp')
  .controller('WhereCtrl', function ($scope, $rootScope) {
    $rootScope.pageTitle = 'Como chegar';
    $rootScope.pageIcon = 'map';

    $scope.origin = {};
    $scope.destiny = {
      lat: -7.3764983,
      lng: -39.3465500
    };

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

    var map = new google.maps.Map(document.getElementById('map'), {
      center: $scope.destiny,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.HYBRID,
      streetViewControl: false,
      zoom: 17
    });

    var marker = new google.maps.Marker({
      map: map,
      position: $scope.destiny,
      animation: google.maps.Animation.BOUNCE,
      title: 'Hotel das Fontes'
    });

    $scope.generateRoute = function() {
      marker.setMap(null);
      navigator.geolocation.getCurrentPosition(function(position) {
        directionsDisplay.setMap(map);
        $scope.origin.lat  = position.coords.latitude;
        $scope.origin.lng = position.coords.longitude;

        directionsService.route({
          origin: $scope.origin,
          destination: $scope.destiny,
          travelMode: google.maps.TravelMode.DRIVING
        }, function(response, status) {
          if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }, function(error) {
        alert('Houve algum problema com a geolocalização do seu dispositivo. Verifique se está ativada e reinicie o aplicativo!');
      });
    };

  });
