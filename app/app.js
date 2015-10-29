'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view2',
  'myApp.version',
  'myApp.home',
  'myApp.menu',
  'myApp.niclas'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
