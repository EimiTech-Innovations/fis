import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    extends: [
      "next/core-web-vitals",
      "airbnb",
      "airbnb-typescript",
      "airbnb/hooks",
      "prettier",
    ],
    plugins: {
      "eslint-plugin-js": pluginJs.configs.recommended,
      "typescript-eslint": tseslint.configs.recommended,
      react: pluginReact.configs.flat.recommended,
    },
    rules: {
      // You can add custom rules here
    },
  },
];
