module.exports = {
  plugins: ["prettier"],
  env: {
    es2021: true,
    node: true,
  },
  extends: ["google", "plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "quote-props": ["error", "consistent-as-needed"],
  },
};
