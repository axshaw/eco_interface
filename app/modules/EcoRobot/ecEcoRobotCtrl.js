ecoApp.controller('ecEcoRobotCtrl', function ($scope, EcoWebSocketService)  {

	for(var i = 1; i < 9; i++){
		$scope['sensor' + i] = 0.0;
		EcoWebSocketService.RegisterListener($scope, 'sensor' + i);
	}

});