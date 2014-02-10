ecoApp.controller('liLightCtrl', function ($scope)  {

	$scope.lightValue = 1;

	$scope.lightLabel = function(){
		if($scope.lightValue <= 3){
			return 'dim'
		}
		if($scope.lightValue >3 && $scope.lightValue <= 7){
			return 'normal'
		}
		return 'bright';
	}

	$scope.lightState = function(){
		return ($scope.lightValue/10);
	}

	$scope.$on('light', function(event, data) {
		//Need to use apply because its async callback
		$scope.$apply(function(){
			$scope.lightValue = data;
		})
	});

});