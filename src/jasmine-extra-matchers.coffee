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

  return
