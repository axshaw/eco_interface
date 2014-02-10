      
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
      otherwise({
        redirectTo: '/'
      });
  }]);