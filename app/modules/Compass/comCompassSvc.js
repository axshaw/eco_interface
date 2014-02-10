ecoApp.service('comCompassSvc', function ()  {

	return{
		CalculateBearing: function(value){
			
			var resolution = 8,
			maxAngle = 360 / resolution,
			angleOffset = maxAngle / 2;	

			var bearing = Math.floor(((value + angleOffset) % 360) / maxAngle) % resolution;

			switch (bearing) {
				case 0:
				return 'N';
				break;
				case 1:
				return 'NE';
				break;
				case 2:
				return 'E';
				break;
				case 3:
				return 'SE';
				break;
				case 4:
				return 'S';
				break;
				case 5:
				return 'SW';
				break;
				case 6:
				return 'W';
				break;
				case 7:
				return 'NW';
				break;
			}

		}
	}

});