'use strict';

/* jasmine specs for services go here */

describe('service', function () {
    beforeEach(module('hkp.services'));

    describe('version', function () {
        it('should return current version', inject(function (version) {
            expect(version).toEqual('0.1.1');
        }));
    });

    describe('openerp service', function(){

    });
});