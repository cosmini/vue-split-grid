module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/prettier',
    'plugin:jest/all',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: [2, 'single', 'avoid-escape'],
    'vue/html-closing-bracket-newline': 0,
    'vue/max-attributes-per-line': {
      singleline: 1,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    },
    'array-callback-return': 'warn',
    'block-scoped-var': 'warn',
    complexity: ['warn', { max: 10 }],
    'consistent-return': 'warn',
    curly: 'error',
    'default-case': 'warn',
    'default-param-last': 'warn',
    'dot-location': ['warn', 'property'],
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-eq-null': 'error',
    'no-eval': ['error'],
    eqeqeq: ['warn', 'always'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: '**/__tests__/*.(js|jsx|ts|tsx)',
      env: {
        jest: true,
      },
    },
  ],
}
