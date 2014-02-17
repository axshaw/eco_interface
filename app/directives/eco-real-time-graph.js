//TODO: move this to directive file?
ecoApp.directive('ecoRealTimeLineGraph', function(DateTimeService) {
  return {
    restrict: 'A',
    replace: true,
    template: '<div class="graph"><svg></svg></div>',
    link: function(scope, element, attrs) {



      var defaults = {
        axisLabel: '',
        axisYLabel: '',
        noData: 'Waiting for sensor readings...',
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

      //Watch for changes on the value pushed, and graph it!
      scope.$watch('sensor.value', function(value) {

        if (value) {

          var _data = data[0].values;

          if (_data.length > attrs.limit) {
            _data.shift();
          }

          var time = new Date();

          _data.push({
            'label': new Date(),
            'value': value
          });

          if (_data.length > 1) {
            redraw();
          }
        }

      })


      var redraw = function() {

        nv.addGraph(function() {
          var chart = nv.models.lineChart()
            .x(function(d) {
              return d.label
            })
            .y(function(d) {
              return d.value
            })
            .noData(attrs.noData)
            .margin({
              left: 40
            })
            .width(490)


          //Setup XAxis
          chart.xAxis
            .tickFormat(function(date, i) {
              return DateTimeService.formatDate(new Date(date));
            })
            .axisLabel(attrs.axisXLabel);

          //Setup YAxis
          chart.yAxis
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