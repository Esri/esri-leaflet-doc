module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'eslint-config-semistandard'
  ],
  plugins: [
    'eslint-plugin-markdown',
    'eslint-plugin-html'
  ],
  globals: {
    L: 'readonly',
    turf: 'readonly',
    cedar: 'readonly',
    Chart: 'readonly',
    apiKey: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "no-var": 0
  }
}
