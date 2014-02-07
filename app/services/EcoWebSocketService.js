 ecoApp.service('EcoWebSocketService', function($rootScope) {

 	var socket = io.connect('http://localhost');

 	var self = this;
  	
  	socket.on('eco-data', function (data) {
 		$rootScope.$broadcast(data.key, data.value); 
  	});

 });