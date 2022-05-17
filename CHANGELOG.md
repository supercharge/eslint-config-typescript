# Changelog


## 2.0.0 - 2022-05-18

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
