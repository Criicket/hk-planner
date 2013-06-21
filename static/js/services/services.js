'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('hkp.services', []).
    value('version', '0.1').

    factory('handyman', function() {
        return {
            arraysToAssociativeObject: function(arr1,arr2,defValue) {
                var obj = {};
                for(var i = 0; i < arr1.length; i++){
                    var arr1Key = arr1[i];
                    if(arr1Key in obj == false){
                        obj[arr1Key] = {}; // must initialize the sub-object, otherwise will get 'undefined' errors
                    }

                    for(var j = 0; j < arr2.length; j++){
                        var arr2Key = arr2[j];
                        obj[arr1Key][arr2Key] = defValue || 0;
                    }
                }
                return obj;
            }
        };
    });
