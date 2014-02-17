ecoApp.directive('ecoLineGraph', function($http, DateTimeService) {
	return {
		restrict: 'A',
		replace: true,
		template: '<div class="graph"><svg></svg></div>',
		link: function(scope, element, attrs) {

			attrs.max = attrs.max || 30;

			var defaults = {
				axisLabel: '',
				axisYLabel: '',
				noData: 'Waiting for sensor data...',
				key: '',
				lineColor: '#ff0000',
				limit: 20
			};

			attrs = $.extend(defaults, attrs);

			//element is getting replaced, set new element id
			element.attr('id', attrs.id);

			var data = [{
				key: attrs.key,
				color: attrs.lineColor,
				values: []
			}];

			$http({
				method: 'GET',
				url: '/getSensorData?max=' + attrs.max
			}).
			success(function(_data, status, headers, config) {
				data[0].values = _data;
				redraw();
			}).
			error(function(data, status, headers, config) {
				console.log("Failed")
			});

			var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']


			var redraw = function() {

				nv.addGraph(function() {
					var chart = nv.models.lineWithFocusChart()
						.x(function(d) {
							return d.label
						})
						.y(function(d) {
							return d.value
						})
						.noData(attrs.noData)
						.margin({
							left: 40,
							bottom:50
						})
						.width(element.parent().width() - 30)

					//Setup XAxis
					chart.xAxis
						.tickFormat(function(date, i) {
							var d = new Date(date);
							return days[d.getDay()] + ' - ' + DateTimeService.formatDate(d);
						})
						.axisLabel(attrs.axisXLabel);

						//Setup XAxis
					chart.x2Axis
						.tickFormat(function(date, i) {
							var d = new Date(date);
							return days[d.getDay()] + ' - ' + DateTimeService.formatDate(d);
						})
						.axisLabel(attrs.axisXLabel);

					//Setup YAxis
					chart.yAxis
						.axisLabel(attrs.axisYLabel)
						.axisLabelDistance(50);

						//Setup YAxis
					chart.y2Axis
						.axisLabel(attrs.axisYLabel)
						.axisLabelDistance(50);

					//Render chart
					d3.select('#' + attrs.id + ' svg')
						.datum(data)
						.transition().duration(500)
						.call(chart);

					nv.utils.windowResize(chart.update);

					return chart;
				});
			}

			redraw();

		}
	}
});