###
  Jasmine extra matchers 0.1.0

  Copyright (c) 2014-2016 Tomasz Jakub Rup

  https://github.com/tomi77/jasmine-extra-matchers

  Released under the MIT license
###

((window, jasmine) ->
  beforeEach () ->
    jasmine.addMatchers
      toBeInstanceOf: () ->
        compare: (actual, expected) ->
          pass = actual instanceof expected

          pass: pass
          message: if pass then "Expected #{ actual } not to be instance of #{ expected }" else "Expected #{ actual } to be instance of #{ expected }"

      toBeInfinity: () ->
        compare: (actual) ->
          pass = actual is Infinity

          pass: pass
          message: if pass then "Expected #{ actual } not to be infinity" else "Expected #{ actual } to be infinity"

    return
  return
)(window, window.jasmine)
