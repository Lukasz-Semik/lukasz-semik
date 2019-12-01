const path = require('path');

module.exports = {
  extends: [
    'airbnb',
    'prettier/react',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  rules: {
    'import/prefer-default-export': 0,
    'arrow-parens': 0,
    'comma-dangle': 0,
    'object-curly-newline': 0,
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    'no-confusing-arrow': 0,
    'react/button-has-type': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
  },
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname)],
      },
    },
  },
};
