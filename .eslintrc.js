// eslint-disable-next-line @typescript-eslint/no-var-requires
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
  plugins: [
    '@typescript-eslint',
    'prettier',
    'react',
    'react-hooks',
    'simple-import-sort',
  ],
  rules: {
    '@typescript-eslint/no-use-before-define': [1],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react/require-default-props': 0,
    'no-use-before-define': [0],
    'no-useless-constructor': 0,
    'max-classes-per-file': 0,
    'class-methods-use-this': 0,
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
    'react/no-array-index-key': 0,
    'react/jsx-curly-brace-presence': [
      1,
      { props: 'never', children: 'ignore' },
    ],
    'import/named': 0,
    'import/no-cycle': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'simple-import-sort/sort': [
      1, // as warning for now
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],
          // Internal packages.
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything that does not start with a dot.
          [
            '^(src/assets)(/.*|$)',
            '^(src/constants)(/.*|$)',
            '^(src/helpers)(/.*|$)',
            '^(src/hooks)(/.*|$)',
            '^(src/store)(/.*|$)',
            '^(src/types)(/.*|$)',
            '^(src/styles)(/.*|$)',
            '^(src/components)(/.*|$)',
            '^[^.]',
          ],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.'],
        ],
      },
    ],
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
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname)],
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
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
