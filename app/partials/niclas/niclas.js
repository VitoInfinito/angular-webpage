'use strict';

angular.module('myApp.partials')

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/niclas', {
    templateUrl: 'partials/niclas/niclas.html',
    controller: 'NiclasCtrl'
  });
}])

.controller('NiclasCtrl', function ($scope, NiclasService) {
	$scope.approveList = {
		simple: NiclasService.get("simple"),
		more: NiclasService.get("more")
	};
	$scope.approve = "more";

	$scope.update = function () {
		NiclasService.add($scope.approve);
		$scope.approveList[$scope.approve] = NiclasService.get($scope.approve);
	};



	
});