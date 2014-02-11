ecoApp.controller('poPowerCtrl', function ($scope, EcoWebSocketService)  {

	$scope.power = true;

	EcoWebSocketService.RegisterListener($scope, 'power');

});