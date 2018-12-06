module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'no-console': 'off',
    quotes: [2, 'single'],
    'linebreak-style': 0,
  },
};
