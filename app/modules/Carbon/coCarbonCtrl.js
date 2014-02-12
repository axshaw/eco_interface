ecoApp.controller('coCarbonCtrl', function ($scope, EcoWebSocketService)  {

	$scope.sensor = {
		value: 0
	}

	EcoWebSocketService.RegisterListener($scope, 'carbon');

});