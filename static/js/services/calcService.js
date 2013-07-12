'use strict';

angular.module('hkp.services').
    factory('calcService', ['Json2D',function( Json2D) {
        return {
            sum: function(arr){
                var ret = 0;
                for(var i = 0; i < arr.length; i++){
                    if(typeof arr[i] == "number"){
                        ret += arr[i];
                    }
                }
                return ret;
            },

            getSumArray : function(data){
                var that = this;
                data = Json2D.removeColumn(data,'$$hashKey');
                var cols = Json2D.getColumns(data);
                var sumArr = _.map(cols,function(arr){return that.sum(arr)});
                return sumArr;
            }

        };
    }]);
