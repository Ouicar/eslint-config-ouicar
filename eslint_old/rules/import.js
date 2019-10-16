module.exports = {
	plugins: [
		'import'
	],
	rules: {
		// Enforce a convention in module import order 
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
		'import/order': [2, {
			'groups': [
				['builtin', 'external'],
				['internal'],
				['parent', 'sibling', 'index']
			],
			'newlines-between': 'always-and-inside-groups'
		}],

		// Enforce a newline after import statements
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
		'import/newline-after-import': 2,

		// Forbid import of modules using absolute paths
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
		'import/no-absolute-path': 2,

		// Ensure all imports appear before other statements 
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
		'import/first': [
			2, 'absolute-first'
		],

		// 
		'import/imports-first': 1,

		// Report repeated import of the same module in multiple places
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
		'import/no-duplicates': 2,

		// Report namespace imports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
		'import/no-namespace': 1,
	}
};
