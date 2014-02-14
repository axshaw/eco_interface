ecoApp.controller('teTemperatureCtrl', function ($scope, EcoWebSocketService)  {

	$scope.sensor = {}

	EcoWebSocketService.RegisterListener($scope, 'temperature');

});