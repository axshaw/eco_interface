var ecoBotMockData = function(eventEmitter){

	return {
		getMockSensorData:function(numberOfHistoricDays, numberOfReadingsPerDay, maxValue){
			
			var data = [];
			var now = new Date();
			var numberOfReadingsPerDay = numberOfReadingsPerDay || 3;
			var numberOfHistoricDays = numberOfHistoricDays || 7;
			var maxValue = maxValue || 100;
			var lastWeek = now.setDate(now.getDate()-numberOfHistoricDays);

			//loop through the number of days between now and the historic startdate (a week)
			for(var i = 0; i < numberOfHistoricDays; i++ ){

				var reading = (23 / numberOfReadingsPerDay);

				//How many readings a day?
				for(var x = 0; x < numberOfReadingsPerDay; x++){

					//Create date and random time
					var date = new Date();
					date.setDate(date.getDate()-(numberOfHistoricDays - i));

					date.setHours(Math.floor(reading));

					data.push({
						label:date.getTime(),
						value: Math.floor(Math.random() * (parseInt(maxValue) + 1))
					});

					reading = reading + (23 / numberOfReadingsPerDay);

				}
			}

			return data;

		}
	}
}


module.exports = ecoBotMockData;

