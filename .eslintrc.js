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
	// override "simple-import-sort" config
	// "overrides": [
	// 	{
	// 		"files": ["*.js", "*.ts"],
	// 		"rules": {
	// 			"simple-import-sort/imports": [
	// 				"error",
	// 				{
	// 					"groups": [
	// 						// Packages `react` related packages come first.
	// 						["^react", "^@?\\w"],
	// 						// Internal packages.
	// 						["^(@|components)(/.*|$)"],
	// 						// Side effect imports.
	// 						["^\\u0000"],
	// 						// Parent imports. Put `..` last.
	// 						["^\\.\\.(?!/?$)", "^\\.\\./?$"],
	// 						// Other relative imports. Put same-folder imports and `.` last.
	// 						["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
	// 						// Style imports.
	// 						["^.+\\.?(css)$"]
	// 					]
	// 				}
	// 			]
	// 		}
	// 	}
	// ],
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
		"linebreak-style": 0,
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
