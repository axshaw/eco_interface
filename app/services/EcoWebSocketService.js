 ecoApp.service('EcoWebSocketService', function($rootScope) {

 	//Make connection to websocket
 	var socket = io.connect('http://localhost');

 	//listen for any data being pushed
  	socket.on('eco-data', function (data) {
  		//broadcast data across Angular for all subscribers listening
 		$rootScope.$broadcast(data.key, data.value); 
  	});

 });