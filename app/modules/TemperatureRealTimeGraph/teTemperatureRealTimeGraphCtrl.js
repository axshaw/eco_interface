ecoApp.controller('teTemperatureRealTimeGraphCtrl', function ($scope, EcoWebSocketService)  {

	EcoWebSocketService.RegisterListener($scope, 'temperature');

	var data = [ 
	{
		key: "Temperature",
		color: '#ff0000',
		values: []
	}];

	//Watch for changes on the value pushed, and graph it!
	$scope.$watch('sensor.value', function(value){
		if(value){
			var _data = data[0].values;
			if(_data.length > 20){
				_data.shift();
			}
			
			var time = new Date();
			_data.push({
				'label': new Date(),
				'value': value
			});

			if(_data.length > 1){
				redraw();
			}
		}
		
	})
	

	redraw = function(){
		nv.addGraph(function() {
			var chart = nv.models.lineChart()
				.x(function(d) { return d.label })
				.y(function(d) { return d.value })
				.noData('Waiting for a collection of temperature readings')


           	chart.xAxis
	           	.tickFormat(function(date, i){
	           		var d = new Date(date);
	           		console.log(d);
	    			return d.getHours()  + ":" + d.getMinutes() + ":" + d.getSeconds();
				})
				.axisLabel('Time (H:M:S)');


				 chart.yAxis
      			.axisLabel('Temperature')

      			chart.yAxis.axisLabelDistance(50);

      			chart.margin({left: 40})
      			chart.width(490)

			d3.select('.chart svg')
				.datum(data)
				.transition().duration(500)
				.call(chart);

			nv.utils.windowResize(chart.update);

			return chart;
		});
	}

	redraw();

});