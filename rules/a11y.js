module.exports = {
	plugins: [
		'jsx-a11y'
	],
	rules: {
		// Enforce that all elements that require alternative text
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md
		'jsx-a11y/alt-text': 2,

		// Elements cannot use an invalid ARIA attribute.
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md
		'jsx-a11y/aria-props': 2,

		// ARIA state and property values must be valid.
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md
		'jsx-a11y/aria-proptypes': 2,

		// Elements with ARIA roles must use a valid
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
		'jsx-a11y/aria-role': 2,

		// Certain reserved DOM elements do not support ARIA roles, states and properties.
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md
		'jsx-a11y/aria-unsupported-elements': 2,

		// Enforce that heading elements (h1, h2, etc.) have content and that the content is accessible to screen readers. 
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md
		'jsx-a11y/heading-has-content': 2,

		// Elements must have the lang prop.
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md
		'jsx-a11y/html-has-lang': 2,

		// Enforce img alt attribute does not contain the word image, picture, or photo
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md
		'jsx-a11y/img-redundant-alt': 2,

		// Enforce label tags have associated control.
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
		'jsx-a11y/label-has-for': [ 2, {
			"required": {
				"every": ["id"]
			}
		}],

		// The lang prop on the <html> element must have a valid value based on ISO country and language codes.
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md
		'jsx-a11y/lang': 2,

		// Enforce onmouseover/onmouseout are accompanied by onfocus/onblur. 
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
		'jsx-a11y/mouse-events-have-key-events': 2,

		// Enforce no accessKey prop on element.
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md
		'jsx-a11y/no-access-key': 2,

		// Enforce usage of onBlur over/in parallel with onChange on select menu elements for accessibility.
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md
		'jsx-a11y/no-onchange': 0,

		// Elements with ARIA roles must have all required attributes for that role.
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md
		'jsx-a11y/role-has-required-aria-props': 2,

		// Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role. 
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md
		'jsx-a11y/role-supports-aria-props': 2,

		// The scope scope should be used only on <th> elements.
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md
		'jsx-a11y/scope': 2,

		// Avoid positive tabIndex property values to synchronize the flow of the page with keyboard tab order.
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md
		'jsx-a11y/tabindex-no-positive': 2,
	}
};
