ecoApp.controller('teTemperatureCtrl', function ($scope, EcoWebSocketService)  {

	$scope.currentTemperature = 0;

	EcoWebSocketService.RegisterListener($scope, 'temperature', 'currentTemperature');

});