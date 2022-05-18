'use strict'

const config = require('../dist')
const { expect } = require('expect')
const { test } = require('@japa/runner')
const { isObject } = require('./helpers/utils')

test('test basic properties of config', () => {
  expect(config.extends).toEqual('@supercharge')

  expect(isObject(config.overrides)).toBe(true)
  expect(isObject(config.overrides[0].rules)).toBe(true)
  expect(isObject(config.overrides[0].parserOptions)).toBe(true)
})
