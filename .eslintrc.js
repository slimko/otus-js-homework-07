module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "eslint-config-prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "import/prefer-default-export": "off",
    "no-console": "off",
    "no-prompt": "off",
    "no-alert": "off",
    "no-plusplus": "off",
    "max-len": [
      "error",
      {
        ignoreComments: true,
        code: 120,
      },
    ],
  },
  plugins: ["jest"],
};
