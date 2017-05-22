###
  Jasmine extra matchers 0.1.1

  Copyright (c) 2014-2016 Tomasz Jakub Rup

  https://github.com/tomi77/jasmine-extra-matchers

  Released under the MIT license
###

beforeEach () ->
  jasmine.addMatchers
    toBeInstanceOf: () ->
      compare: (actual, expected) -> pass: actual instanceof expected

    toBeInfinity: () ->
      compare: (actual) -> pass: actual is Infinity

    hasOwnProperty: () ->
      compare: (obj, key) -> pass: obj?.hasOwnProperty key

    toBeEven: () ->
      compare: (actual) -> pass: actual % 2 is 0

    toBeOdd: () ->
      compare: (actual) -> pass: actual % 2 isnt 0

    toBeNumeric: () ->
      compare: (actual) -> pass: not isNaN(parseFloat(actual)) and isFinite(actual)

    toBeInteger: () ->
      compare: (actual) -> pass: not isNaN(parseFloat(actual)) and isFinite(actual) and actual % 1 is 0

    toBeFloat: () ->
      compare: (actual) -> pass: not isNaN(parseFloat(actual)) and isFinite(actual) and actual % 1 isnt 0

    toBePositive: () ->
      compare: (actual) -> pass: actual > 0

    toBeNegative: () ->
      compare: (actual) -> pass: actual < 0

  return
