module.exports = {
	plugins: [
		'prettier'
	],
	rules: {
		"prettier/prettier": ["error", {
			"bracketSpacing": false,
			"singleQuote": true,
			"printWidth": 120,
			"tabWidth": 2,
			"trailingComma": "all"
		}]
	}
};
