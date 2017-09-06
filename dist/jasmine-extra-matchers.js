
/*
  Jasmine extra matchers 0.2.1

  Copyright (c) 2014-2016 Tomasz Jakub Rup

  https://github.com/tomi77/jasmine-extra-matchers

  Released under the MIT license
 */
beforeEach(function() {
  jasmine.addMatchers({
    toBeInstanceOf: function() {
      return {
        compare: function(actual, expected) {
          return {
            pass: actual instanceof expected
          };
        }
      };
    },
    toBeInfinity: function() {
      return {
        compare: function(actual) {
          return {
            pass: actual === Infinity
          };
        }
      };
    },
    hasOwnProperty: function() {
      return {
        compare: function(obj, key) {
          return {
            pass: obj != null ? obj.hasOwnProperty(key) : void 0
          };
        }
      };
    },
    toBeEven: function() {
      return {
        compare: function(actual) {
          return {
            pass: actual % 2 === 0
          };
        }
      };
    },
    toBeOdd: function() {
      return {
        compare: function(actual) {
          return {
            pass: actual % 2 !== 0
          };
        }
      };
    },
    toBeNumeric: function() {
      return {
        compare: function(actual) {
          return {
            pass: !isNaN(parseFloat(actual)) && isFinite(actual)
          };
        }
      };
    },
    toBeInteger: function() {
      return {
        compare: function(actual) {
          return {
            pass: !isNaN(parseFloat(actual)) && isFinite(actual) && actual % 1 === 0
          };
        }
      };
    },
    toBeFloat: function() {
      return {
        compare: function(actual) {
          return {
            pass: !isNaN(parseFloat(actual)) && isFinite(actual) && actual % 1 !== 0
          };
        }
      };
    },
    toBePositive: function() {
      return {
        compare: function(actual) {
          return {
            pass: actual > 0
          };
        }
      };
    },
    toBeNegative: function() {
      return {
        compare: function(actual) {
          return {
            pass: actual < 0
          };
        }
      };
    }
  });
});
