ecoApp.controller('liLightCtrl', function ($scope, EcoWebSocketService)  {

	$scope.light = 1;

	//Does this belong to a service?
	$scope.lightLabel = function(){
		if($scope.light <= 3){
			return 'dim'
		}
		if($scope.light >3 && $scope.light <= 7){
			return 'normal'
		}
		return 'bright';
	}

	//does this belong in a service?
	$scope.lightState = function(){
		return ($scope.light/10);
	}

	EcoWebSocketService.RegisterListener($scope, 'light');

});