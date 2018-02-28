module.exports = {
	plugins: [
		'sorting'
	],
	rules: {
		// ESLint plugin for sorting of various things.
		// https://github.com/jacobrask/eslint-plugin-sorting
		'sorting/sort-object-props': [2, {
			'customSortOrder': {
				'start': ['type']
			},
			'ignoreCase': true,
			'ignoreMethods': false
		}],
	}
};
