'use strict';

/* Controllers */

angular.module('hkp.controllers', []).
    controller('HomeCtrl', function ($scope) {
        $scope.hello = "Sanyi";
    })
    .controller('RawCtrl', function ($scope) {
        $scope.hello = "Nyers";
    });
