/* globals describe, ddescribe, beforeEach, inject, it, expect, iit, module */
'use strict';

describe('JSON Viewer directive', function () {
    var $compile;
    var $rootScope;
    var scope;

    beforeEach(module('jv.json-viewer'));
    beforeEach(inject(function (_$compile_, _$rootScope_, $injector) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        scope = $rootScope;
    }));

    describe('JSON Viewer is instantiating', function () {
        it('Should... ', function () {

        });
    });
});
