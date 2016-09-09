# Jasmine Extra Matchers

[![Code Climate](https://codeclimate.com/github/tomi77/jasmine-extra-matchers/badges/gpa.svg)](https://codeclimate.com/github/tomi77/jasmine-extra-matchers)
[![devDependencies Status](https://david-dm.org/tomi77/jasmine-extra-matchers/dev-status.svg)](https://david-dm.org/tomi77/jasmine-extra-matchers?type=dev)
[![Dependency Status](https://www.versioneye.com/user/projects/578ea15c88bf880039f7e576/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/578ea15c88bf880039f7e576)

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
