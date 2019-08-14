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
    L: false
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
  }
}
