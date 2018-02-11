module.exports = {
  "globals": { // $question - why in quotes?
    server: true,
    "Cleave": true,
  },
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    browser: true
  },
  rules: {
  }
};
