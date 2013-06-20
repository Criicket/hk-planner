'use strict';

angular.module('hkp.dollopServices', ['ngResource']).
    factory('Dollop', function ($resource) {
        return $resource('data/:dollopId.json', {}, {
            query: {method: 'GET', params: {dollopId: 'dollop_01'}, isArray: true}
        });
    });
