'use strict'

import { Linter } from 'eslint'

const config: Linter.Config = {
  extends: '@supercharge',

  plugins: [
    '@typescript-eslint'
  ],

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
      },

      rules: {
        // TypeScript has this functionality by default:
        'no-undef': 'off',

        // Rules replaced by @typescript-eslint versions:
        camelcase: 'off',

        quotes: 'off',
        '@typescript-eslint/quotes': ['error', 'single', {
          avoidEscape: true,
          allowTemplateLiterals: false,
        }],

        semi: 'off',
        '@typescript-eslint/semi': ['error', 'never'],

        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': ['error', 'always'],

        'space-infix-ops': 'off',
        '@typescript-eslint/space-infix-ops': 'error',

        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],

        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': ['error', {
          allowKeywords: true
        }],

        'brace-style': 'off',
        '@typescript-eslint/brace-style': ['error', '1tbs', {
          allowSingleLine: true
        }],

        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': ['error', 'never'],

        'keyword-spacing': 'off',
        '@typescript-eslint/keyword-spacing': ['error', {
          before: true, after: true
        }],

        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': ['error', 'always', {
          exceptAfterSingleLine: true
        }],

        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',

        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'error',

        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'error',

        'no-throw-literal': 'off',
        '@typescript-eslint/no-throw-literal': 'error',

        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',

        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': ['error', {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        }],

        'no-unused-vars': 'off',
        /**
     * TypeScript already catches unused variables. We may add this rule later if
     * there’s something this rule would catch that TypeScript doesn’t. For now,
     * we’re leaving this rule turned off and just rely on TypeScript’s help.
     */
        // '@typescript-eslint/no-unused-vars': ['error', {
        //   args: 'none',
        //   caughtErrors: 'none',
        //   ignoreRestSiblings: true,
        //   vars: 'all'
        // }],

        indent: 'off',
        '@typescript-eslint/indent': ['error', 2, {
          SwitchCase: 1,
          VariableDeclarator: 1,
          outerIIFEBody: 1,
          MemberExpression: 1,
          FunctionDeclaration: { parameters: 1, body: 1 },
          FunctionExpression: { parameters: 1, body: 1 },
          CallExpression: { arguments: 1 },
          ArrayExpression: 1,
          ObjectExpression: 1,
          ImportDeclaration: 1,
          flatTernaryExpressions: false,
          ignoreComments: false,
          ignoredNodes: ['TemplateLiteral *', 'JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
          offsetTernaryExpressions: true,
        }],

        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': ['error', {
          before: false,
          after: true,
        }],

        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', {
          functions: false,
          classes: false,
          enums: false,
          variables: false,
          typedefs: false, // Only the TypeScript rule has this option.
        }],

        // Exclusive rules for Supercharge TypeScript:
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': ['error', {
          default: 'array-simple'
        }],
        '@typescript-eslint/consistent-type-assertions': ['error', {
          assertionStyle: 'as',
          objectLiteralTypeAssertions: 'never',
        }],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/explicit-function-return-type': ['error', {
          allowExpressions: true,
          allowHigherOrderFunctions: true,
          allowTypedFunctionExpressions: true,
          allowDirectConstAssertionInArrowFunctions: true,
        }],
        '@typescript-eslint/member-delimiter-style': ['error', {
          multiline: { delimiter: 'none' },
          singleline: { delimiter: 'comma', requireLast: false },
        }],
        '@typescript-eslint/naming-convention': ['error', {
          selector: 'variableLike',
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        }],
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-empty-interface': ['error', {
          allowSingleExtends: true
        }],
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-extraneous-class': ['error', {
          allowWithDecorator: true
        }],
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-invalid-void-type': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-this-alias': ['error', {
          allowDestructuring: true
        }],
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': ['error', {
          ignoreConditionalTests: false,
          ignoreMixedLogicalExpressions: false,
        }],
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/require-array-sort-compare': ['error', {
          ignoreStringArrays: true
        }],
        '@typescript-eslint/restrict-plus-operands': ['error'],
        '@typescript-eslint/restrict-template-expressions': ['error', {
          allowNumber: true
        }],
        '@typescript-eslint/return-await': ['error', 'always'],
        '@typescript-eslint/strict-boolean-expressions': ['error', {
          allowString: false,
          allowNumber: false,
          allowNullableObject: false,
          allowNullableBoolean: false,
          allowNullableString: false,
          allowNullableNumber: false,
          allowAny: false,
        }],
        '@typescript-eslint/triple-slash-reference': ['error', {
          lib: 'never',
          path: 'never',
          types: 'never',
        }],
        '@typescript-eslint/type-annotation-spacing': 'error',
        'no-void': ['error', {
          allowAsStatement: true
        }],

        // The rule is buggy with TS and it's not needed as TS already enforces valid imports and references at compile-time.
        'import/namespace': 'off'
      },
    }
  ],
}

export = config
