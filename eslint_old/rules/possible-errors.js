module.exports = {
	rules: {
		// Treat var as Block Scoped (block-scoped-var)
		// http://eslint.org/docs/rules/block-scoped-var
		'block-scoped-var': 2,

		// Disallow assignment operators in conditional statements (no-cond-assign)
		// http://eslint.org/docs/rules/no-cond-assign
		'no-cond-assign': [2, 'always'],

		// Disallow the use of console (no-console)
		// http://eslint.org/docs/rules/no-console
		'no-console': 1,

		// Disallow the use of debugger (no-debugger)
		// http://eslint.org/docs/rules/no-debugger
		'no-debugger': 1,

		// Disallow Use of Alert (no-alert)
		// http://eslint.org/docs/rules/no-alert
		'no-alert': 1,

		// Disallow constant expressions in conditions (no-constant-condition)
		// http://eslint.org/docs/rules/no-constant-condition
		'no-constant-condition': 1,

		// Disallow duplicate keys in object literals (no-dupe-keys)
		// http://eslint.org/docs/rules/no-dupe-keys
		'no-dupe-keys': 2,

		// Rule to disallow a duplicate case label (no-duplicate-case)
		// http://eslint.org/docs/rules/no-duplicate-case
		'no-duplicate-case': 2,

		// Disallow empty block statements (no-empty)
		// http://eslint.org/docs/rules/no-empty
		'no-empty': 2,

		// Disallow reassigning exceptions in catch clauses (no-ex-assign)
		// http://eslint.org/docs/rules/no-ex-assign
		'no-ex-assign': 2,

		// Disallow unnecessary boolean casts (no-extra-boolean-cast)
		// http://eslint.org/docs/rules/no-extra-boolean-cast
		'no-extra-boolean-cast': 0,

		// Disallow reassigning function declarations (no-func-assign)
		// http://eslint.org/docs/rules/no-func-assign
		'no-func-assign': 2,

		// Disallow variable or function declarations in nested blocks (no-inner-declarations)
		// http://eslint.org/docs/rules/no-inner-declarations
		'no-inner-declarations': 2,

		// Disallow invalid regular expression strings in RegExp constructors (no-invalid-regexp)
		// http://eslint.org/docs/rules/no-invalid-regexp
		'no-invalid-regexp': 2,

		// Disallow irregular whitespace (no-irregular-whitespace)
		// http://eslint.org/docs/rules/no-irregular-whitespace
		'no-irregular-whitespace': 2,

		// Disallow calling global object properties as functions (no-obj-calls)
		// http://eslint.org/docs/rules/no-obj-calls
		'no-obj-calls': 2,

		// Disallow sparse arrays (no-sparse-arrays)
		// http://eslint.org/docs/rules/no-sparse-arrays
		'no-sparse-arrays': 2,

		// Disallow unreachable code after return, throw, continue, and break statements (no-unreachable)
		// http://eslint.org/docs/rules/no-unreachable
		'no-unreachable': 2,

		// Require calls to isNaN() when checking for NaN (use-isnan)
		// http://eslint.org/docs/rules/use-isnan
		'use-isnan': 2,
	}
};
