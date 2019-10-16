module.exports = {
	extends: [
		'./rules/es6',
		'./rules/variables',
		'./rules/possible-errors',
		'./rules/best-practices',
		'./rules/style',
		'./rules/react',
		'./rules/a11y',
		'./rules/immutable',
		'./rules/import',
		'./rules/classes',
		'./rules/prettier',
	].map(require.resolve),
	rules: {
		strict: 'error'
	}
}
