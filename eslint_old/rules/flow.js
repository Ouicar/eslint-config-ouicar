module.exports = {
	plugins: [
		'flowtype'
	],
	rules: {
		// This rule validates Flow file annotations.
		// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-valid-file-annotation
		'flowtype/require-valid-file-annotation': [2, 'always']
	}
};
