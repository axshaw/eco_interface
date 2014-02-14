//TODO: move this to directive file?
ecoApp.directive('ecoCompass', function () {
  return {
    restrict: 'E',
    replace:true,
    templateUrl:'./app/modules/Compass/com-eco-compass.html',
    controller:'comCompassCtrl',
    scope:{}
   }
 });
