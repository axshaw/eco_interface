ecoApp.controller('coConnectivityCtrl', function ($scope, EcoWebSocketService)  {

	$scope.power = true;

	EcoWebSocketService.RegisterListener($scope, 'power');

});