module.exports = {
	rules: {
		// Disallow variable declarations from shadowing variables declared in the outer scope (no-shadow)
		// http://eslint.org/docs/rules/no-shadow
		'no-shadow': 2,

		// Disallow Shadowing of Restricted Names (no-shadow-restricted-names)
		// http://eslint.org/docs/rules/no-shadow-restricted-names
		'no-shadow-restricted-names': 2,

		// Disallow Undeclared Variables (no-undef)
		// https://eslint.org/docs/rules/no-undef
		'no-undef': 2,

		// Disallow Unused Variables (no-unused-vars)
		// http://eslint.org/docs/rules/no-unused-vars
		'no-unused-vars': [2, {
			"vars": "local",
			"args": "none",
			"ignoreRestSiblings": true
		}],

		// Disallow Early Use (no-use-before-define)
		// http://eslint.org/docs/rules/no-use-before-define
		'no-use-before-define': 2
	}
};
