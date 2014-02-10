ecoApp.controller('ecEcoRobotCtrl', function ($scope)  {

	$scope.sensor1 = 0.0;
	$scope.sensor2 = 0.0;
	$scope.sensor3 = 0.0;
	$scope.sensor4 = 0.0;
	$scope.sensor5 = 0.0;
	$scope.sensor6 = 0.0;
	$scope.sensor7 = 0.0;
	$scope.sensor8 = 0.0;

	$scope.temperatureState = function(){
		return ($scope.currentTemperature < 15) ? 'blue' : 'red';
	}

	for(var i = 1; i < 9; i++){
		$scope.$on('sensor' + i, function(event, data) {
			//Need to use apply because its async callback
			$scope.$apply(function(){
				$scope[event.name] = data;
			})
		});
	}


});