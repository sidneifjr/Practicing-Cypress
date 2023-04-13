module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"node": true // https://stackoverflow.com/questions/70058316/eslintrc-js-module-is-not-defined
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"overrides": [
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"@typescript-eslint"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"never"
		],
		"padding-line-between-statements": [
			"error",
			{ blankLine: "always", prev: "*", next: "return" }
		]
	}
}
