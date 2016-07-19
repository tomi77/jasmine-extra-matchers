###
  Jasmine extra matchers 1.0.0

  Copyright (c) 2014-2016 Tomasz Jakub Rup

  https://github.com/tomi77/jasmine-extra-matchers

  Released under the MIT license
###

((root, factory) ->
  switch
    when typeof define is 'function' and define.amd
      define ['jasmine'], factory
    when typeof exports is 'object'
      factory require('jasmine')
    else
      factory root.jasmine
  return
) @, (jasmine) ->
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
