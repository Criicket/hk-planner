'use strict';

angular.module('hkp.controllers').
    controller('DollopTableCtrl', ['$scope', 'openerpService', 'calcService', 'Json2D', function ($scope, openerpService, calcService, Json2D) {
        $scope.orderPredicate = 'key';
        $scope.orderReverse = false;

        $scope.event = {};
        $scope.eventSortTableByRowName = function(){
            $scope.handleSortState();
            $scope.sortDataByRowName();
        }

        $scope.init = function () {
//            this.groupByDay();
            $scope.data = {
                "row4": {"col1": 0, "col2": 0, "col3": 0, "col4": 0},
                "row2": {"col1": 1, "col2": 1, "col3": 0, "col4": 0},
                "row3": {"col1": 2, "col2": 2, "col3": 0, "col4": 0},
                "row1": {"col1": 3, "col2": 3, "col3": 0, "col4": 0}
            };
        }

        $scope.setDollopData = function setDollopData(data) {
            $scope.rawData = data;
            $scope.data = _.clone($scope.rawData);
            $scope.dataColumnsCount = _.keys(_.values($scope.data)[0]).length;
        };

        $scope.groupByDay = function () {
            openerpService.getDollopOperationsByDay().then($scope.setDollopData);
        };
        $scope.groupByWeek = function () {
            $scope.data = openerpService.getDollopOperationsByWeek();
        };

        $scope.getSumArray = function () {
            return calcService.getSumArray($scope.data);
        }

        $scope.orderByKey = function (cell) {
            debugger
        }

//        $scope.handleSortState = function(){
//            $scope.sortOrder++;
//            if ($scope.sortOrder == 2) {
//                $scope.sortOrder = -1;
//            }
//        }
//
//        $scope.sortDataByRowName = function () {
//            var newData = Json2D.sortByKey($scope.data, $scope.sortOrder);
//            $scope.data = newData;
//        }
//
//        $scope.sortDataByColumn = function () {
//            $scope.data = Json2D.sortByColumn($scope.data, $scope.sortOrder);
//        }

        $scope.init();
    }]);
