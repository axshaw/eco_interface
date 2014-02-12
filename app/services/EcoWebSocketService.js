 ecoApp.service('EcoWebSocketService', function($rootScope) {

 	//Make connection to websocket
 	var socket = io.connect('http://localhost');

 	//listen for any data being pushed
   socket.on('eco-data', function (data) {
  		//broadcast data across Angular for all subscribers listening
      console.log(data);//
      $rootScope.$broadcast(data.sensor, data); 
    });

  	/**
  	 * Method registers real time listner to given key.
  	 */
    this.RegisterListener = function(scope, eventId, map){

      map = (map) ? map : 'sensor';

      scope.$on(eventId, function(event, data) {

  		  //Need to use apply because its async callback
        scope.$apply(function(){
          scope[map] = data;
        });

      });
    }

  });