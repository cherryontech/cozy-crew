import { defineConfig } from "eslint/config";
import eslintReact from "@eslint-react/eslint-plugin";
import tseslint from "typescript-eslint";
import globals from "globals";
import js from "@eslint/js";
import tailwind from "eslint-plugin-tailwindcss";
import eslintPluginAstro from "eslint-plugin-astro"

export default defineConfig([
	{
	  files: ["**/*.{js,ts,tsx}"],
	  languageOptions: {
		globals: globals.browser,
	  },
	  ...eslintPluginAstro.configs.recommended,
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
	  files: ["**/*.{js,ts,tsx}"],
	  plugins: {
		tailwind,
		eslintReact,
	  },
	  rules: {
		// your custom rules here
	  },
	},
  ]);