'use strict';

describe('DateTimeService', function(){

    var dateTimeService;

    beforeEach(module('ecoApp'));

    beforeEach(inject(function(DateTimeService){
        dateTimeService = DateTimeService;
    }));

    it('Should return hours minutes and seconds as a string', function(){

        var date = new Date('05-05-2014 15:45:30');

        var result = dateTimeService.formatDate(date);

        expect(result).toBe('15:45:30');

    });

    it('Should add zero infront of  any hour, minute or seconds less then 10', function(){

        var date = new Date('05-05-2014 9:3:2');

        var result = dateTimeService.formatDate(date);

        expect(result).toBe('09:03:02');

    })
});

describe('EcoWebSocketService', function(){

    var ecoWebSocketService, scope, window, rootScope;

    beforeEach(module('ecoApp'));

    beforeEach(inject(function($window, $rootScope){
        window = $window;

        window.io = {
            connect: function(){
                return {
                    on: function(key, callback){
                        return true;
                    }
                }
            },
            emit: function(key, data){

            }
        }

        rootScope = $rootScope;

    }));

    beforeEach(inject(function(EcoWebSocketService, $rootScope){
        scope = $rootScope.$new();
        ecoWebSocketService = EcoWebSocketService;

    }));

    it('Should set object onto scope when event sent from root scope', function(){

        var randomEmitKey = 'sensor';
        var sensorValue = 1;

        //register listener onto service and pass the scope to map back too.
        ecoWebSocketService.RegisterListener(scope, randomEmitKey);

        //Simulate the broadcast that gets called from socket io.
        rootScope.$broadcast(randomEmitKey, {value:sensorValue});

        expect(scope.sensor.value).toBe(sensorValue);

    });

    it('Should not set object onto scope when event sent from root scope', function(){

        var randomEmitKey = 'sensor';
        var otherSocketValue = 'test';
        var sensorValue = 1;

        //register listener onto service and pass the scope to map back too.
        ecoWebSocketService.RegisterListener(scope, randomEmitKey);

        //Simulate the broadcast that gets called from EcoService
        rootScope.$broadcast(otherSocketValue, {value:sensorValue});

        expect(scope.sensor).toBe(undefined);

    });

});