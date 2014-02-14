ecoApp.controller('liLightCtrl', function ($scope, EcoWebSocketService)  {

	$scope.sensor = {};

	EcoWebSocketService.RegisterListener($scope, 'light');

});