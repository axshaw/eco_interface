ecoApp.controller('comCompassCtrl', function ($scope, EcoWebSocketService)  {

	$scope.compass = 0;

	//TODO: remove this and replace with service/factory to calculate
	//Also need to replace this with d3 visual
	$scope.direction = function(){
		if($scope.compass === 0){
			return 'N';
		}
		if($scope.compass <= 89){
			return 'NE';
		}
		if($scope.compass <= 90){
			return 'E';
		}
		if($scope.compass <= 179){
			return 'SE';
		}
		if($scope.compass <= 180){
			return 'S';
		}
		if($scope.compass <= 269){
			return 'SW';
		}
		if($scope.compass <= 270){
			return "W";
		}
		if($scope.compass <= 359){
			return "NW";
		}
		if($scope.compass <= 360){
			return "NW"
		}
	}

	EcoWebSocketService.RegisterListener($scope, 'compass');

});