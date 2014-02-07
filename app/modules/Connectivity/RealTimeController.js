ecoApp.controller('ConncetivityWidgetCtrl', function ($scope)  {

	$scope.power = true;

	$scope.powerLabel = function(){
		return ($scope.power) ? 'on' : 'off';
	};

	$scope.powerLabel = 'on';

	$scope.$on('power', function(event, data) {
		//Need to use apply because its async callback
		$scope.$apply(function(){
			$scope.power = data;
		})
	});

});