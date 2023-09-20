'use strict';

const test = require('tape');
const isFunction = require('lodash.isfunction');
const heaviside = require('../');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(heaviside));
});

test('returns 1 for positive numbers', function(t) {
  t.plan(2);
  t.equal(heaviside(1), 1);
  t.equal(heaviside(2), 1);
});

test('returns 0 for negative numbers', function(t) {
  t.plan(2);
  t.equal(heaviside(-1), 0);
  t.equal(heaviside(-2), 0);
});

test('returns 1 for 0', function(t) {
  t.plan(1);
  t.equal(heaviside(0), 1);
});
