'use strict';

angular.module('hkp.services').
    factory('openerpService', function($q, $rootScope, Json2D){
        var instance = angular.oeinstance;
        var dollopDailyPreparator = function(data){
            var dates = _.sortBy(_.uniq(JSONSelect.match('.date',data)),function(date){return date}),
                dollops = _.sortBy(_.uniq(JSONSelect.match('.dollop_id :last-child',data)),function(name){return name}),
                res = Json2D.createJson2D(dollops,dates);
            for(var i in data){
                var date = data[i].date,
                    dollop = data[i].dollop_id[1],
                    qty = data[i].ok;
                res[dollop][date] = qty;
            }

            return res;
        }
        var dollopWeeklyPreparator = function(data){
            var dailyQuery = dollopDailyPreparator(data);
            var weeklyQuery = {};
            for(var dollopName in dailyQuery){
                for(var dayDate in dailyQuery[dollopName]){
                    var calendarWeek = new Date(dayDate).getWeek();
                    if(!weeklyQuery[dollopName]){
                        weeklyQuery[dollopName] = {};
                    }
                    if(!weeklyQuery[dollopName][calendarWeek]){
                        weeklyQuery[dollopName][calendarWeek] = 0;
                    }
                    weeklyQuery[dollopName][calendarWeek] += dailyQuery[dollopName][dayDate];
                }
            }
            return weeklyQuery;
        }
        var getDollopOperations = function getDollopOperations(preparatorFunc){
            var deferred = $q.defer();
            new instance.web.Model('hk.operation.dollop').query([])
                .all()
                .then(function (data) {
                    var preparedData;
                    deferred.resolve(preparatorFunc(data));
                    $rootScope.$apply();
                });
            return deferred.promise;
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
            getDollopOperationsByDay: function(){
                return getDollopOperations(dollopDailyPreparator);
            },
            getDollopOperationsByWeek: function(){
                return getDollopOperations(dollopWeeklyPreparator);
            }
        }
    }
);
