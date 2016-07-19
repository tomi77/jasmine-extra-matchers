
/*
  Jasmine extra matchers 1.0.0

  Copyright (c) 2014-2016 Tomasz Jakub Rup

  https://github.com/tomi77/jasmine-extra-matchers

  Released under the MIT license
 */
(function(root, factory) {
  switch (false) {
    case !(typeof define === 'function' && define.amd):
      define(['jasmine'], factory);
      break;
    case typeof exports !== 'object':
      factory(require('jasmine'));
      break;
    default:
      factory(root.jasmine);
  }
})(this, function(jasmine) {
  return beforeEach(function() {
    jasmine.addMatchers({
      toBeInstanceOf: function() {
        return {
          compare: function(actual, expected) {
            var pass;
            pass = actual instanceof expected;
            return {
              pass: pass,
              message: pass ? "Expected " + actual + " not to be instance of " + expected : "Expected " + actual + " to be instance of " + expected
            };
          }
        };
      },
      toBeInfinity: function() {
        return {
          compare: function(actual) {
            var pass;
            pass = actual === Infinity;
            return {
              pass: pass,
              message: pass ? "Expected " + actual + " not to be infinity" : "Expected " + actual + " to be infinity"
            };
          }
        };
      }
    });
  });
});
