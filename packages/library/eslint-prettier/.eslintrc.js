/** @type {import("eslint").Linter.Config} */
module.exports = {
	env: {
		browser: true,
		es2022: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"eslint-config-turbo",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"plugin:react-hooks/recommended",
		"prettier",
		"turbo",
	],
	ignorePatterns: ["build", "dist", "node_modules", "public"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		babelOptions: {
			presets: [],
		},
	},
	plugins: ["@typescript-eslint", "prettier", "react", "react-refresh"],
	root: true,
	rules: {
		"@typescript-eslint/no-var-requires": "off",
		"no-console": "warn",
		"react-refresh/only-export-components": [
			"warn",
			{
				allowConstantExport: true,
			},
		],
		"prettier/prettier": [
			"error",
			{
				endOfLine: "lf",
				singleQuote: false,
			},
		],
	},
};
