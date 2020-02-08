module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'class-methods-use-this': 'off'
  },
  settings: {
    'import/resolver': {
      alias: [
        ['~', './src'],
        ['@controllers', './src/app/controllers'],
        ['@routes', './src/app/routes']
      ]
    }
  }
};
