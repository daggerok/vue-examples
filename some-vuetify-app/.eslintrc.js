module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'standard',
  plugins: [
    'html'
  ],
  'rules': {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': 0,
    'semi': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': 0,
    'no-undef': 0,
    'no-labels': 0,
    'comma-dangle': 0,
    'space-before-function-paren': 0,
    'indent': 0,
    'no-multiple-empty-lines': 0,
    'import/first': 0,
    'standard/computed-property-even-spacing': 0,
    'spaced-comment': 0,
    'padded-blocks': 0,
    'no-new': 0,
    'curly': 0,
  }
};
