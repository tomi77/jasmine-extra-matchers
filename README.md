# Jasmine Extra Matchers

[![Code Climate](https://codeclimate.com/github/tomi77/jasmine-extra-matchers/badges/gpa.svg)](https://codeclimate.com/github/tomi77/jasmine-extra-matchers)
[![devDependency Status](https://david-dm.org/tomi77/jasmine-extra-matchers/dev-status.svg)](https://david-dm.org/tomi77/jasmine-extra-matchers#info=devDependencies)
[![Dependency Status](https://www.versioneye.com/user/projects/578ea15c88bf880039f7e576/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/578ea15c88bf880039f7e576)

A set of [Jasmine](http://jasmine.github.io/) 2.x matchers

## Installation

~~~bash
bower install jasmine-extra-matchers
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
