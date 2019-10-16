module.exports = {
	rules: {
		// Enforce consistent spacing before and after keywords (keyword-spacing)
		// https://eslint.org/docs/rules/keyword-spacing
		'keyword-spacing': [2, {
			'before': true,
			'after': true,
			'overrides': {}
		}],

		// Require constructor names to begin with a capital letter (new-cap)
		// http://eslint.org/docs/rules/new-cap
		'new-cap': [2, {
			'newIsCap': true,
			'capIsNew': false
		}],

		// Disallow nested ternary expressions (no-nested-ternary)
		// http://eslint.org/docs/rules/no-nested-ternary
		'no-nested-ternary': 2,

		// Disallow Object constructors (no-new-object)
		// http://eslint.org/docs/rules/no-new-object
		'no-new-object': 2,

		// Disallow specific imports (no-restricted-imports)
		// https://eslint.org/docs/rules/no-restricted-imports
		'no-restricted-imports': [2, {
			'patterns': ['.*']
		}],

		// Disallow dangling underscores in identifiers (no-underscore-dangle)
		// http://eslint.org/docs/rules/no-underscore-dangle
		'no-underscore-dangle': 0,

		// Require Object Literal Shorthand Syntax (object-shorthand)
		// https://eslint.org/docs/rules/object-shorthand
		'object-shorthand': [2, 'always'],

		// Enforce variables to be declared either together or separately in functions (one-var)
		// http://eslint.org/docs/rules/one-var
		'one-var': [2, 'never'],

		// Requires or disallows a whitespace (space or tab) beginning a comment (spaced-comment)
		// https://eslint.org/docs/rules/spaced-comment
		'spaced-comment': [2, 'always'],
	}
};
