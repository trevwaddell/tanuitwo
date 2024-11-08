module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  rules: {
    strict: ["error", "never"],
  },
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
