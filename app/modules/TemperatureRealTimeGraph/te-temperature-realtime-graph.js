ecoApp.directive('ecoTemperatureRealtimeGraph', function () {
  return {
    restrict: 'E',
    replace:true,
    templateUrl:'./app/modules/TemperatureRealTimeGraph/te-temperature-realtime-graph.html',
    controller:'teTemperatureRealTimeGraphCtrl',
    scope:{}
   }
 });
