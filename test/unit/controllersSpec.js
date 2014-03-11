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

describe('Sensor Controllers', function(){

    var rootScope, createController, ecoWebSocketService;

    beforeEach(module('ecoApp'));

    beforeEach(inject(function($injector, $window){

        rootScope = $injector.get('$rootScope');
        $controller = $injector.get('$controller');


        createController = function(ctrlName, ctrlScope) {
            return $controller(ctrlName, {
                '$scope': ctrlScope
            });
        };

        $window.io = {
            connect: function(){
                return {
                    on: function(key, callback){
                        return true;
                    }
                }
            }
        }
    }));

    beforeEach(inject(function(EcoWebSocketService){
        ecoWebSocketService = EcoWebSocketService;
    }));

    describe('CarbonCtrl', function(){
        it('Should set carbon sensor value when root scope sends carbon data', function(){

            var scope = rootScope.$new(),
                ctrl = createController('coCarbonCtrl', scope);

            ecoWebSocketService.BroadCastEvent('carbon', {value:25});

            expect(scope.sensor.value).toBe(25);

        });
    });

    describe('CompassCtrl', function(){
        it('Should set compass sensor value when root scope sends compass data', function(){

            var scope = rootScope.$new(),
                ctrl = createController('comCompassCtrl', scope),
                compassValue = 250;

            ecoWebSocketService.BroadCastEvent('compass', {value:compassValue});

            expect(scope.sensor.value).toBe(compassValue);

        });
    });

    describe('conConnectivityCtrl', function(){
        it('Should set connectivity sensor value when root scope sends connectivity data', function(){

            var scope = rootScope.$new(),
                ctrl = createController('conConnectivityCtrl', scope),
                connectivityValue = 1;

            ecoWebSocketService.BroadCastEvent('connectivity', {value:connectivityValue});

            //Mock out play function.
            expect(scope.sensor.value).toBe(connectivityValue);

        });
    });

});