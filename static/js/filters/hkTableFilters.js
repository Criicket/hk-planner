angular.module('filters').filter('first', function() {
    return function(input, n) {
        return _.first(input, n);
    };
});

angular.module('filters').filter('firstByKeys', function() {
    return function(input, keyArray, n) {
        var ret = {};
        for (var i = 0; i<n; i++){
            var key = keyArray[i];
            ret[key] = input[key];
        }
        return ret;
    };
});

angular.module('filters').filter('rest', function() {
    return function(input, n) {
        return _.rest(input, n);
    };
});

angular.module('filters').filter('restByKeys', function() {
    return function(input, keyArray, n) {
        var ret = {};
        for (var i = n; i<keyArray.length; i++){
            var key = keyArray[i];
            ret[key] = input[key];
        }
        return ret;
    };
});