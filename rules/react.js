module.exports = {
	plugins: [
		'react'
	],
	rules: {
		// Prevent missing displayName in a React component definition (react/display-name)
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
		'react/display-name': 0,

		// Enforce boolean attributes notation in JSX (react/jsx-boolean-value)
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
		'react/jsx-boolean-value': 2,

		// Detect missing key prop (react/jsx-key)
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
		'react/jsx-key': 0,

		// Limit maximum of props on a single line in JSX (react/jsx-max-props-per-line)
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
		'react/jsx-max-props-per-line': [0, {
			'maximum': 1
		}],

		// No .bind() or Arrow Functions in JSX Props (react/jsx-no-bind)
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
		'react/jsx-no-bind': [2, {
			'ignoreRefs': true,
			'allowArrowFunctions': true,
			'allowBind': false,
		}],

		// Prevent duplicate properties in JSX (react/jsx-no-duplicate-props)
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
		'react/jsx-no-duplicate-props': [0, {
			'ignoreCase': false
		}],

		// Disallow undeclared variables in JSX (react/jsx-no-undef)
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
		'react/jsx-no-undef': 2,

		// Enforce PascalCase for user-defined JSX components (react/jsx-pascal-case)
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
		'react/jsx-pascal-case': [2, {
			'allowAllCaps': true,
			'ignore': []
		}],

		'react/jsx-sort-prop-types': 0,

		// Enforce props alphabetical sorting (react/jsx-sort-props)
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
		'react/jsx-sort-props': [2, {
			'ignoreCase': true
		}],

		// Validate whitespace in and around the JSX opening and closing brackets (react/jsx-tag-spacing)
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
		'react/jsx-tag-spacing': [2, {
			'beforeSelfClosing': 'always',
			'closingSlash': 'never'
		}],

		// Prevent React to be incorrectly marked as unused (react/jsx-uses-react)
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
		'react/jsx-uses-react': 2,

		// Prevent variables used in JSX to be incorrectly marked as unused (react/jsx-uses-vars)
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
		'react/jsx-uses-vars': 2,

		// Prevent usage of setState in componentDidMount (react/no-did-mount-set-state)
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
		'react/no-did-mount-set-state': [2],

		// Prevent usage of setState in componentDidUpdate (react/no-did-update-set-state)
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
		'react/no-did-update-set-state': 2,

		// Prevent usage of unknown DOM property (react/no-unknown-property)
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
		'react/no-unknown-property': 2,

		// Prevent missing React when using JSX (react/react-in-jsx-scope)
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
		'react/react-in-jsx-scope': 2,

		// Prevent extra closing tags for components without children (react/self-closing-comp)

		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
		'react/self-closing-comp': 2,

		// Enforce component methods order (react/sort-comp)
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
		'react/sort-comp': [2, {
			'order': [
				'defaultProps',
				'state',
				'constructor',
				'everything-else',
				'lifecycle',
				'rendering'
			],
			'groups': {
				'rendering': [
					'/^render.+$/',
					'render'
				]
			}
		}]
	}
};
