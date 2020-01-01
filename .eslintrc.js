const path = require('path');

module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: null,
  },
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks'],
  rules: {
    'no-useless-constructor': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'react/no-danger': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/destructuring-assignment': 0,
    'react/button-has-type': 0,
    'react/jsx-wrap-multilines': 0,
    'react/jsx-fragments': 2,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': 0,
    'react/jsx-curly-brace-presence': [
      1,
      { props: 'never', children: 'ignore' },
    ],
    'import/named': 0,
    'import/no-cycle': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/label-has-for': [
      1,
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-associated-control': 1,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    'jsx-a11y/aria-proptypes': 0,
    'no-return-assign': ['error', 'except-parens'],
    'consistent-return': 0,
    'max-len': [
      'error',
      { code: 100, ignorePattern: '^(import|export)\\W.*', ignoreUrls: true },
    ],
    'no-case-declarations': 0,
    'no-async-promise-executor': 1,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname)],
      },
    },
    react: {
      version: '16.11',
    },
  },
  env: {
    browser: true,
    jest: true,
  },
  overrides: [
    {
      files: ['**/*.tsx'],
    },
  ],
};
