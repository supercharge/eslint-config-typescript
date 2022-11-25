# Changelog


## [2.3.3](https://github.com/supercharge/eslint-config-typescript/compare/v2.3.2...v2.3.3) - 2022-11-25

### Updated
- bump dependencies


## [2.3.2](https://github.com/supercharge/eslint-config-typescript/compare/v2.3.1...v2.3.2) - 2022-11-17

### Updated
- bump dependencies


## [2.3.1](https://github.com/supercharge/eslint-config-typescript/compare/v2.3.0...v2.3.1) - 2022-09-17

### Updated
- bump dependencies


## [2.3.0](https://github.com/supercharge/eslint-config-typescript/compare/v2.2.0...v2.3.0) - 2022-06-13

### Added
- added `no-constant-binary-expression: 'error'` rule in `@supercharge/eslint-config`

### Updated
- bump dependencies

### Removed
- removed the rule for `method-signature-style` allowing users to use shorthand method definitions


## [2.2.0](https://github.com/supercharge/eslint-config-typescript/compare/v2.1.0...v2.2.0) - 2022-06-01

### Updated
- bump dependencies

### Removed
- removed the rule for `method-signature-style` allowing users to use shorthand method definitions


## [2.1.0](https://github.com/supercharge/eslint-config-typescript/compare/v2.0.0...v2.1.0) - 2022-05-25

### Added
- support TypeScript 4.7

### Updated
- bump dependencies


## [2.0.0](https://github.com/supercharge/eslint-config-typescript/compare/v1.0.0...v2.0.0) - 2022-05-18

### Added
- enrolled our own rule set to avoid the dependency on `standard-with-typescript`
  - `standard-with-typescript` is not actively maintained at the moment and their peer dependencies don’t support ESLint 8.x (and related dependencies). This also blocks updating to new TypeScript versions because new versions of the `@typescript-eslint` plugin are incompatible with the outdated `standard-with-typescript` package
- the ESLint rule set of this package is based on `standard-with-typescript` and we’re refining the rules over time
- added the `@supercharge/eslint-config` as a dependency for base linting rules

### Removed
- removed ESLint config dependencies for `standard-with-typescript`

### Breaking Changes
- require ESLint `8.x`


## 1.0.0 - 2021-12-21

### Added
- `1.0.0` release 🚀 🎉
