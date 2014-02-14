ecoApp.directive('ecoRobot', function () {
  return {
    restrict: 'E',
    replace:true,
    templateUrl:'./app/modules/EcoRobot/ec-eco-robot.html',
    controller:'ecEcoRobotCtrl',
    scope:{},
    link: function(scope, element, attrs){
    	scope.$watch('compass.value', function(value){
    		$(element.find('.panel-body')).css('-webkit-transform', 'rotate(' + value + 'deg)')
    	})
    }
   }
 });
