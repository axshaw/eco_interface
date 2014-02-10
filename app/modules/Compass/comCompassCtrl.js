ecoApp.controller('comCompassCtrl', function ($scope, EcoWebSocketService, comCompassSvc)  {

	$scope.compass = 0;

	$scope.bearing = function(){
		return comCompassSvc.CalculateBearing($scope.compass);
	}

	EcoWebSocketService.RegisterListener($scope, 'compass');

});