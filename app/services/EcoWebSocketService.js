 ecoApp.service('EcoWebSocketService', function($rootScope) {

 	//Make connection to websocket
 	var socket = io.connect('http://localhost');

 	//listen for any data being pushed
  	socket.on('eco-data', function (data) {
  		//broadcast data across Angular for all subscribers listening
 		$rootScope.$broadcast(data.key, data.value); 
  	});

  	/**
  	 * Method registers real time listner to given key.
  	 * You can override the scope value it maps back to by passing a map key
  	 */
  	this.RegisterListener = function(scope, key, map){
  		map = (map) ? map : key;
  		scope.$on(key, function(event, data) {
			//Need to use apply because its async callback
			scope.$apply(function(){
				scope[map] = data;
			})
		});
  	}

 });