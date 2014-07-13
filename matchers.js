(function (window, jasmine) {
    "use strict";
    beforeEach(function () {
        jasmine.addMatchers({
            toBeInstanceOf: function () {
                return {
                    compare: function (actual, expected) {
                        var result = {
                            pass: actual instanceof expected
                        };
                        if (result.pass) {
                            result.message = 'Expected ' + actual + ' not to be instance of ' + expected;
                        } else {
                            result.message = 'Expected ' + actual + ' to be instance of ' + expected;
                        }
                        return result;
                    }
                };
            },

            toBeInfinity: function () {
                return {
                    compare: function (actual) {
                        var result = {
                            pass: actual === Infinity
                        };
                        if (result.pass) {
                            result.message = 'Expected ' + actual + ' not to be infinity';
                        } else {
                            result.message = 'Expected ' + actual + ' to be infinity';
                        }
                        return result;
                    }
                };
            }
        });
    });
})(window, window.jasmine);