ecoApp.directive('ecoLightRealtimeGraph', function () {
  return {
    restrict: 'E',
    replace:true,
    templateUrl:'./app/modules/LightRealTimeGraph/li-light-realtime-graph.html',
    controller:'liLightCtrl',
    scope:{}
   }
 });
