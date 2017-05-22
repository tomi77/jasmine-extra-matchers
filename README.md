# Jasmine Extra Matchers

[![Code Climate](https://codeclimate.com/github/tomi77/jasmine-extra-matchers/badges/gpa.svg)](https://codeclimate.com/github/tomi77/jasmine-extra-matchers)
[![devDependencies Status](https://david-dm.org/tomi77/jasmine-extra-matchers/dev-status.svg)](https://david-dm.org/tomi77/jasmine-extra-matchers?type=dev)
[![Dependency Status](https://www.versioneye.com/user/projects/578ea15c88bf880039f7e576/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/578ea15c88bf880039f7e576)
![Downloads](https://img.shields.io/npm/dt/jasmine-extra-matchers.svg)

A set of [Jasmine](http://jasmine.github.io/) 2.x matchers

## Installation and usage

### Bower

~~~bash
bower install jasmine-extra-matchers
~~~

~~~html
<script src="/bower_components/jasmine-extra-matchers/dist/jasmine-extra-matchers.js"></script>
~~~

~~~js
it('should be a Backbone.Model', function() {
    expect(value).toBeInstanceOf(Backbone.Model)
});
~~~

###NPM

~~~bash
npm install jasmine-extra-matchers --save-dev
~~~

~~~coffeescript
require 'jasmine-extra-matchers'

it 'should be infinity', () ->
  expect(value).toBeInfinity()
~~~

## Matchers

### toBeInstanceOf

Checks whether a value is the instance of type

~~~js
expect(value).toBeInstanceOf(Backbone.Model)
expect(value).not.toBeInstanceOf(Backbone.Model)
~~~

### toBeInfinity

Checks whether a value is infinity

~~~js
expect(value).toBeInfinity()
expect(value).not.toBeInfinity()
~~~

### hasOwnProperty

Checks whether a value has own property

~~~js
expect(value).hasOwnProperty('type')
expect(value).not.hasOwnProperty('type')
~~~

### toBeEven

Checks whether the value is an even number

~~~js
expect(2).toBeEven()
expect(3).not.toBeEven()
~~~

### toBeOdd

Checks whether the value is an odd number

~~~js
expect(3).toBeOdd()
expect(2).not.toBeOdd()
~~~

### toBeNumeric

Checks whether the value contains a numeric value, regardless of its type. It can be a string containing a numeric value, exponential notation, a Number object, etc.

~~~js
expect('14').toBeNumeric()
expect('fourteen').not.toBeNumeric()
~~~

### toBeInteger

Checks whether the value is a numeric integer. A numeric value can be a string containing a number, a Number object, etc.

~~~js
expect(18).toBeInteger()
expect('18').toBeInteger()
expect(2.5).not.toBeInteger()
expect(-1).toBeInteger()
~~~

### toBeFloat

Checks whether the value is a "float"

~~~js
expect(1.1).toBeFloat()
expect(1).not.toBeFloat()
expect(1.0).not.toBeFloat()
expect('2.15').toBeFloat()
~~~

### toBePositive

Checks whether the value is a positive number

~~~js
expect(21).toBePositive()
expect(-1).not.toBePositive()
~~~

### toBeNegative

Checks whether the value is a negative number

~~~js
expect(-2).toBeNegative()
expect(5).not.toBeNegative()
~~~
