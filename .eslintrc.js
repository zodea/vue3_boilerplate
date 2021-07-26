const { defineConfig } = require("eslint-define-config");
module.exports = defineConfig({
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 12,
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
    // 'plugin:jest/recommended',
  ],
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-var-requires": "off",
  },
});
