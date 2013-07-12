'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function () {
    beforeEach(module('hkp.controllers'));

    describe('HomeCtrl',function(){
        var scope, ctrl;

        beforeEach(inject(function($rootScope, $controller){
            scope = $rootScope.$new();
            ctrl = $controller('HomeCtrl',{$scope:scope});
        }));

        it('should init a hello attribute', inject(function ($rootScope, $controller) {
            expect(scope.hello).toEqual("Sanyi");
        }));
    })

    describe('HomeCtrl',function(){
        var scope, ctrl;

        beforeEach(inject(function($rootScope, $controller){
            scope = $rootScope.$new();
            ctrl = $controller('HomeCtrl',{$scope:scope});
        }));

        it('should init a hello attribute', inject(function ($rootScope, $controller) {
            expect(scope.hello).toEqual("Sanyi");
        }));
    })

});
