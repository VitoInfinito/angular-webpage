'use strict';

angular.module('myApp.niclas', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/niclas', {
    templateUrl: 'partials/niclas/niclas.html',
    controller: 'NiclasCtrl'
  });
}])

.controller('NiclasCtrl', [function() {

}]);