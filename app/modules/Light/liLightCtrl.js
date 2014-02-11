ecoApp.controller('liLightCtrl', function ($scope, EcoWebSocketService)  {

	$scope.sensor = {
		value:0
	};

	//Does this belong to a service?
	$scope.lightLabel = function(){
		if($scope.sensor.value <= 3){
			return 'dim'
		}
		if($scope.sensor.value >3 && $scope.sensor.value <= 7){
			return 'normal'
		}
		return 'bright';
	}

	//does this belong in a service?
	$scope.lightState = function(){
		return ($scope.sensor.value/10);
	}

	EcoWebSocketService.RegisterListener($scope, 'light');

});