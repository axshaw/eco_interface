ecoApp.directive('ecoTemperature', function () {
  return {
    restrict: 'E',
    replace:true,
    templateUrl:'./app/modules/Temperature/te-eco-temperature.html',
    controller:'teTemperatureCtrl',
    scope:{}
   }
 });
