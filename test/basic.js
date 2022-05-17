'use strict'

const config = require('../dist')
const { expect } = require('expect')
const { test } = require('@japa/runner')
const { isObject } = require('./helpers/utils')

test('test basic properties of config', () => {
  // expect(isObject(config.env)).toBe(true)
  expect(isObject(config.rules)).toBe(true)
  // expect(isObject(config.globals)).toBe(true)
  expect(isObject(config.parserOptions)).toBe(true)
})
