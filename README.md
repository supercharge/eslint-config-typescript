# @supercharge/eslint-config-typescript
A shareable ESLint config for projects using TypeScript.


## Installation

```bash
npm i -D eslint@8 @supercharge/eslint-config-typescript
```


### Compatibility
| `eslint` | `@supercharge/eslint-config-typescript` |
| -------- | --------------------------------------- |
| `8.x`    | `2.x`                                   |
| `7.x`    | `1.x`                                   |


## Usage
Update your ESLint configuration file (for example the `.eslintrc.js` file) and extend `@supercharge/typescript`:

**`.eslintrc.js`**

```js
module.exports = {
  extends: '@supercharge/typescript'
}
```


## Related

- [@supercharge/eslint-config](https://github.com/supercharge/eslint-config) - ESLint config for JavaScript projects
