module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'semi': 0,
    'comma-dangle': 0,
    'space-before-function-paren': 0,
    'yoda': 0,
  },
  globals: {}
};
