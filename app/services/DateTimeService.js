 ecoApp.service('DateTimeService', function() {

  	 this.formatDate = function(date){

  	 	var d = date || new Date();

  	 	var time = ['Hours', 'Minutes', 'Seconds'];

  	 	for(var i = 0; i < time.length; i++){

  	 		var value = d['get' + time[i]]();

  	 		if(value <= 9){
  	 			value = "0" + value;
  	 		}

  	 		time[i] = value;

  	 	}

  	 	return time[0] + ":" + time[1] + ":" + time[2];
  	 }


 });