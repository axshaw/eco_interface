'use strict';

//Test date service functions, and expect the dates to be formatted.

var $scope, $controller, $location, $rootScope, createController;




describe('nbSideBarCtrl', function(){

    beforeEach(module('ecoApp'));

    beforeEach(inject(function($injector){

        $location = $injector.get('$location');
        $rootScope = $injector.get('$rootScope');
        $controller = $injector.get('$controller');

        //create new scope
        $scope = $rootScope.$new();

        createController = function(ctrlName) {
            return $controller(ctrlName, {
                '$scope': $scope
            });
        };
    }));

    beforeEach(function(){
       createController('nbSideNavBarCtrl');
    });

    it('IsActive should return true when it matches the location url', function(){

        $location.path('/Graphs');
        expect($scope.isActive('/Graphs')).toEqual(true);

        $location.path('/');
        expect($scope.isActive('/Graphs')).toEqual(false);

    });

});