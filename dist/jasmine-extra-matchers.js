
/*
  Jasmine extra matchers 0.1.0

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
    }
  });
});
