module.exports = {
	rules: {
		// Require return statements to either always or never specify values (consistent-return)
		// http://eslint.org/docs/rules/consistent-return
		'consistent-return': 2,

		// Require Following Curly Brace Conventions (curly)
		// http://eslint.org/docs/rules/curly
		'curly': 2,

		// Require Default Case in Switch Statements (default-case)
		// http://eslint.org/docs/rules/default-case
		'default-case': 2,

		// Require Dot Notation (dot-notation)
		// http://eslint.org/docs/rules/dot-notation
		'dot-notation': [2, {
		  'allowKeywords': true
		}],

		// Require === and !== (eqeqeq)
		// http://eslint.org/docs/rules/eqeqeq
		'eqeqeq': 2,

		// Disallow Use of caller/callee (no-caller)
		// http://eslint.org/docs/rules/no-caller
		'no-caller': 2,

		// Disallow return before else (no-else-return)
		// http://eslint.org/docs/rules/no-else-return
		'no-else-return': 2,

		// Disallow Null Comparisons (no-eq-null)
		// http://eslint.org/docs/rules/no-eq-null
		'no-eq-null': 2,

		// Disallow eval() (no-eval)
		// http://eslint.org/docs/rules/no-eval
		'no-eval': 2,

		// Disallow Extending of Native Objects (no-extend-native)
		// http://eslint.org/docs/rules/no-extend-native
		'no-extend-native': 2,

		// Disallow unnecessary function binding (no-extra-bind)
		// http://eslint.org/docs/rules/no-extra-bind
		'no-extra-bind': 2,

		// Disallow Case Statement Fallthrough (no-fallthrough)
		// http://eslint.org/docs/rules/no-fallthrough
		'no-fallthrough': 2,

		// Disallow Implied eval() (no-implied-eval)
		// http://eslint.org/docs/rules/no-implied-eval
		'no-implied-eval': 2,

		// Disallow Unnecessary Nested Blocks (no-lone-blocks)
		// http://eslint.org/docs/rules/no-lone-blocks
		'no-lone-blocks': 2,

		// Disallow Functions in Loops (no-loop-func)
		// http://eslint.org/docs/rules/no-loop-func
		'no-loop-func': 2,

		// Disallow Multiline Strings (no-multi-str)
		// http://eslint.org/docs/rules/no-multi-str
		'no-multi-str': 2,

		// Disallow Reassignment of Native Objects (no-native-reassign)
		// http://eslint.org/docs/rules/no-native-reassign
		'no-native-reassign': 2,

		// Disallow new For Side Effects (no-new)
		// http://eslint.org/docs/rules/no-new
		'no-new': 2,

		// Disallow Function Constructor (no-new-func)
		// http://eslint.org/docs/rules/no-new-func
		'no-new-func': 2,

		// Disallow Primitive Wrapper Instances (no-new-wrappers)
		// http://eslint.org/docs/rules/no-new-wrappers
		'no-new-wrappers': 2,

		// Disallow octal literals (no-octal)
		// http://eslint.org/docs/rules/no-octal
		'no-octal': 2,

		// Disallow octal escape sequences in string literals (no-octal-escape)
		// http://eslint.org/docs/rules/no-octal-escape
		'no-octal-escape': 2,
		
		// Disallow Reassignment of Function Parameters (no-param-reassign)
		// http://eslint.org/docs/rules/no-param-reassign
		'no-param-reassign': 2,

		// Disallow Use of __proto__ (no-proto)
		// http://eslint.org/docs/rules/no-proto
		'no-proto': 2,

		// Disallow variable redeclaration (no-redeclare)
		// http://eslint.org/docs/rules/no-redeclare
		'no-redeclare': 2,

		// Disallow Assignment in return Statement (no-return-assign)
		// http://eslint.org/docs/rules/no-return-assign
		'no-return-assign': 2,

		// Disallow Script URLs (no-script-url)
		// http://eslint.org/docs/rules/no-script-url
		'no-script-url': 2,

		// Disallow Self Compare (no-self-compare)
		// http://eslint.org/docs/rules/no-self-compare
		'no-self-compare': 2,

		// Disallow Use of the Comma Operator (no-sequences)
		// http://eslint.org/docs/rules/no-sequences
		'no-sequences': 2,

		// Restrict what can be thrown as an exception (no-throw-literal)
		// http://eslint.org/docs/rules/no-throw-literal
		'no-throw-literal': 2,

		// Disallow with statements (no-with)
		// http://eslint.org/docs/rules/no-with
		'no-with': 2,

		// Require Variable Declarations to be at the top of their scope (vars-on-top)
		// http://eslint.org/docs/rules/vars-on-top
		'vars-on-top': 2,

		// Require or disallow Yoda Conditions (yoda)
		// http://eslint.org/docs/rules/yoda
		'yoda': 2,
	}
};
