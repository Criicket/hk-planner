'use strict';

angular.module('hkp.controllers')
    .controller('TableCtrl', function ($scope, openerpService) {
        $scope.data;

        $scope.getEmptyHeaderArray = function() {
            return new Array($scope.dataColumnsCount);
        }

    });