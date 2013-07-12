'use strict';

angular.module('hkp.controllers').
    controller('DollopTableCtrl', ['$scope', 'openerpService', 'calcService', function ($scope, openerpService, calcService) {

        $scope.init = function () {
            this.groupByDay();
        }

        $scope.setDollopData = function setDollopData(data) {
            $scope.data = data;
            $scope.dataColumnsCount = _.keys(_.values($scope.data)[0]).length;
        };

        $scope.groupByDay = function () {
            openerpService.getDollopOperationsByDay().then($scope.setDollopData);
        };
        $scope.groupByWeek = function () {
            $scope.data = openerpService.getDollopOperationsByWeek();
        };

        $scope.getSumArray = function() {
            return calcService.getSumArray($scope.data);
        }

        $scope.init();
    }]);
