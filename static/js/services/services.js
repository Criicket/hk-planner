'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('hkp.services', []).
    value('version', '0.1.2').

    factory('Json2D', function () {
        var self = {};

        self.convertJson2DToArrayWithKeys = function (json2d){
            var arr = [];
            for (var i in json2d) {
                var rowItem = json2d[i];
                rowItem['key'] = i;
                arr.push(rowItem);
            }
            return arr;
        }

        self.convertArrayWithKeysToJson2D = function (arr){
            var json2d = {};
            for (var i in arr) {
                var key = arr[i]['key'];
                json2d[key] = self.omit(arr[i], 'key');
            }
            return json2d;
        }

        self.omit = function(obj, key) {
            var ret = {};
            for (var i in obj){
                if(i != key){
                    ret[i] = obj[i];
                }
            }
            return ret;
        };

        return {
            createJson2D: function (arr1, arr2, defValue) {
                var obj = {};
                for (var i = 0; i < arr1.length; i++) {
                    var arr1Key = arr1[i];
                    if (arr1Key in obj == false) {
                        obj[arr1Key] = {}; // must initialize the sub-object, otherwise will get 'undefined' errors
                    }

                    for (var j = 0; j < arr2.length; j++) {
                        var arr2Key = arr2[j];
                        obj[arr1Key][arr2Key] = defValue || 0;
                    }
                }
                return obj;
            },

            getColumnKeys: function (json2d) {
                return _.keys(json2d[_.keys(json2d)[0]]);
            },

            getRowKeys: function (json2d) {
                return _.keys(json2d);
            },

            removeColumn: function (json2d, key) {
                var ret = {};
                for (var row in json2d) {
                    ret[row] = {};
                    for (var col in json2d[row]) {
                        if (col != key) {
                            ret[row][col] = json2d[row][col];
                        }
                    }
                }
                return ret;
            },

            getColumns: function (json2d) {
                var ret = [];
                var rowInd = 0;
                for (var row in json2d) {
                    var colInd = 0;
                    for (var col in json2d[row]) {
                        if (!ret[colInd]) ret[colInd] = [];
                        ret[colInd][rowInd] = json2d[row][col];
                        colInd++;
                    }
                    rowInd++;
                }

                return ret;
            },

            sortByColumn: function (json2d, col, dir) {
                var arr = self.convertJson2DToArrayWithKeys(json2d);
                arr = arr.sort(function (a, b) {
                        if (a[col] < b[col]) {
                            return -1 * dir;
                        }
                        if (a[col] > b[col]) {
                            return dir;
                        }
                    }
                )
                json2d = self.convertArrayWithKeysToJson2D(arr);
                return json2d;
            },

            sortByKey: function (json2d, dir){
                return this.sortByColumn(json2d,'key',dir);
            }
        };
    });
