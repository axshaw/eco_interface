ecoApp.controller('ecEcoRobotCtrl', function ($scope, EcoWebSocketService)  {

	for(var i = 1; i < 9; i++){

		$scope['range' + i] = {
			value:0,
			unit:'cm'
		};

		EcoWebSocketService.RegisterListener($scope, 'range' + i, 'range' + i);

	}

	EcoWebSocketService.RegisterListener($scope, 'compass',  'compass');


});