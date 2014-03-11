ecoApp.controller('conConnectivityCtrl', function ($scope, EcoWebSocketService)  {

	$scope.sensor = {
		value:0
	};

	$scope.$watch('sensor.value', function(value){
		if(value){
			document.getElementById('ConnectivityAlert').play()
		}
	});

        EcoWebSocketService.RegisterListener($scope, 'connectivity');

});