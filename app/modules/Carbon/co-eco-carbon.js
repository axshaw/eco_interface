ecoApp.directive('ecoCarbon', function () {
  return {
    restrict: 'E',
    replace:true,
    templateUrl:'./app/modules/Carbon/co-eco-carbon.html',
    controller:'coCarbonCtrl',
    scope:{}
   }
 });
