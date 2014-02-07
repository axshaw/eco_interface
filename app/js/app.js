var ecoApp = angular.module('ecoApp', ['ngRoute']);

//TODO:
// Setup routes for sidebar and change the main view

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