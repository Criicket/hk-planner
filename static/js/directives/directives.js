'use strict';

/* Directives */


angular.module('hkp.directives', []).
    directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }]).
    directive('scrollBind', function () {
        return function (scope, elm, attrs) {
            elm.bind('scroll', function () {
                $('.hkscroll-x').scrollLeft(elm.scrollLeft());
            });
        }
    });
