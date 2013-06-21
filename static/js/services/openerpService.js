'use strict';

angular.module('hkp.services').
    factory('openerpService', function($q, $rootScope, handyman){
        var instance = angular.oeinstance;
        var prepareDollopOperations = function(data){
            var dates = _.sortBy(_.uniq(JSONSelect.match('.date',data)),function(date){return date}),
                dollops = _.sortBy(_.uniq(JSONSelect.match('.dollop_id :last-child',data)),function(name){return name}),
                res = handyman.arraysToAssociativeObject(dollops,dates);
            for(var i in data){
                var date = data[i].date,
                    dollop = data[i].dollop_id[1],
                    qty = data[i].ok;
                res[dollop][date] = qty;
            }
            return res;
        }
        return {
            getDollop: function (id) {
                var deferred = $q.defer();
                new instance.web.Model('hk.dollop').call("read", [id, []], {})
                    .pipe(function (data) {
                        deferred.resolve(data);
                        $rootScope.$apply();
                    });
                return deferred.promise;
            },
            getDollopOperations: function(){
                var deferred = $q.defer();
                new instance.web.Model('hk.operation.dollop').query([])
                    .all()
                    .then(function (data) {
                        deferred.resolve(prepareDollopOperations(data));
                        $rootScope.$apply();
                    });
                return deferred.promise;
            }
        }
    }
);
