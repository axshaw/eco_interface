ecoApp.controller('comCompassCtrl', function ($scope, EcoWebSocketService, comCompassSvc)  {

	$scope.sensor = {
		value: 0
	}

	$scope.bearing = function(){
		return comCompassSvc.CalculateBearing($scope.sensor.value);
	}

	EcoWebSocketService.RegisterListener($scope, 'compass');

});