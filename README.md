# eslint-config-supercharge-with-typescript
A shareable ESLint config for projects using TypeScript.


## Installation

```bash
npm i -D eslint@7 @supercharge/eslint-config-typescript
```


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
