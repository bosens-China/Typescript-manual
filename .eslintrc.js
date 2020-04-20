module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ["airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "linebreak-style": "off",
    "import/prefer-default-export": "off",
    "no-restricted-syntax": "off",
    "no-continue": "off",
    "import/no-dynamic-require": "off",
  },
};
