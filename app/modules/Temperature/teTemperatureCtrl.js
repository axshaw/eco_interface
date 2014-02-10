ecoApp.controller('teTemperatureCtrl', function ($scope, EcoWebSocketService)  {

	var el = document.querySelector('.odometer');

	$scope.currentTemperature = 0;

	EcoWebSocketService.RegisterListener($scope, 'temperature', 'currentTemperature');

});