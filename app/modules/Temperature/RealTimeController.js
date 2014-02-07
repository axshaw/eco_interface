ecoApp.controller('TemparetureWidgetCtrl', function ($scope, EcoWebSocketService)  {

	$scope.currentTemperature = 0;

	$scope.temperatureState = function(){
		return ($scope.currentTemperature < 15) ? 'blue' : 'red';
	}

	$scope.$on('temperature', function(event, data) {
		//Need to use apply because its async callback
		$scope.$apply(function(){
			$scope.currentTemperature = data;
		})
	});

});