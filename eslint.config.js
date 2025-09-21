import globals from "globals";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
        console: "readonly",
        URL: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn"
    }
  }
];
