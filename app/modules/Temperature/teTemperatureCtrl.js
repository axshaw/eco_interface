ecoApp.controller('teTemperatureCtrl', function ($scope, EcoWebSocketService)  {

	$scope.sensor = {
		value:'0',
		unit:'C'
	}

	EcoWebSocketService.RegisterListener($scope, 'temperature');

});