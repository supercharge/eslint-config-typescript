# eslint-config-supercharge-with-typescript
A shareable ESLint config for projects using TypeScript.


## Installation

```bash
npm i -D eslint@7 @supercharge/eslint-config-typescript
```


### Compatibility
| `eslint` | `@supercharge/eslint-config-typescript` |
| -------- | --------------------------------------- |
| `7.x`    | `1.x`                                   |


## Usage

**`.eslintrc.js`**

```js
module.exports = {
  extends: '@supercharge/typescript',
  parserOptions: {
    project: './tsconfig.json'
  }
}
```
