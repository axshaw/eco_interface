      
var ecoApp = angular.module('ecoApp', ['ngRoute']);

//TODO:
// Setup routes for sidebar and change the main view
// Write jasmine/karma tests for controllers and services. Maybe use sinon to stub out depen
// Look and use d3 to create visuals for the data
// Mock out the data used for the d3 parts
// 
// Connect to Bens backend and get real/stubbed data
// 
// Find out what else needs doing
// 
// Maybe use service for the widget controllers, converting data 

ecoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'app/views/Dashboard.html'
    }).
    when('/Graphs', {
      templateUrl: 'app/views/Graphs.html'
    }).
    otherwise({
      redirectTo: '/'
    });
  }]);

//TODO: move this to directive file?
ecoApp.directive('angularOdometer', function () {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {	
     new Odometer({el: element[0], value: scope[attrs.odometer]});
     scope.$watch(attrs.odometer, function(val) {
      element.text(val);
    });
   }
 };
});

//TODO: move this to directive file?
ecoApp.directive('angularGage', function () {
  return {
    restrict: 'A',
    scope:{
      value: '@',
      levelColors : '@',
      min:'@',
      max:'@'
    },
    link: function(scope, element, attrs) { 

      scope.levelColors = scope.levelColors || "#a9d70b,#f9c802,#ff0000";

      var gage = new JustGage({
        id: attrs.id, 
        value: scope.value, 
        min: scope.min,
        max: scope.max,
        levelColors:scope.levelColors.split(',')
      }); 

      scope.$watch('value', function(value){
        gage.refresh(value);
      });

    }
  }
});

