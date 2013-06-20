'use strict';

//angular.module('hkp.controllers', []).
//    controller('hkTableCtrl', ['$scope',function ($scope, Dollop) {
//        $scope.dollop = Dollop.query();
//    }]);

function hkTableCtrl($scope, Dollop){
        $scope.dollop = Dollop.query();
}