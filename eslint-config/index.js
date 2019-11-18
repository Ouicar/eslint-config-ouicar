module.exports = {
  extends: ['airbnb', 'plugin:flowtype/recommended', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['immutable', 'sorting', 'jsx-a11y', 'react', 'react-hooks', 'flowtype', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'no-bitwise': 'off',
    'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],

    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-unescaped-entities': 'off',
    'react/require-default-props': 'off',
    'react/button-has-type': 'off',
    'import/prefer-default-export': 'off',
    'prefer-template': 'off',
    'prefer-destructuring': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-no-comment-textnodes': 'off',
    'import/no-named-as-default': 'off',
    'no-unused-vars': 'off',
    'immutable/no-let': 'off',
    'import/no-cycle': 'off',
    'global-require': 'off',
    'camelcase': 'off',
    'sorting/sort-object-props': 'off',
    'immutable/no-mutation': 'off',
    'func-names': 'off',
    'no-return-await': 'off',
    'no-param-reassign': 'off',
    'no-restricted-properties': 'off',
    'radix': 'off',
    'array-callback-return': 'off',
    'lines-between-class-members': 'off',
    'prefer-promise-reject-errors': 'off',
    'no-lonely-if': 'off',
    'no-multi-assign': 'off',
    'no-unused-expressions': 'off',
    'flowtype/generic-spacing': 'off',
    'no-restricted-syntax': 'off',
    'no-useless-computed-key': 'off',
    'flowtype/space-after-type-colon': 'off',
    'no-useless-escape': 'off',
    'no-restricted-globals': 'off',
    'valid-typeof': 'off',
    'class-methods-use-this': 'off',
    'no-continue': 'off',
    'prefer-spread': 'off',
    'no-prototype-builtins': 'off',
    'no-case-declarations': 'off',
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-unsafe-finally': 'off',
    'react/sort-comp': 'off',
    'no-useless-return': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
    'react/no-array-index-key': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/static-property-placement': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/state-in-constructor': 'off',
    'no-extra-boolean-cast': 'off',
    'jsx-a11y/alt-text': 'off',
    'react/no-string-refs': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/no-unused-prop-types': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-redundant-roles': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-wrap-multilines': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'no-unneeded-ternary': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'react/jsx-curly-newline': 'off',
    'react/no-danger': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'spaced-comment': 'off',
    'react/no-find-dom-node': 'off',
    'no-async-promise-executor': 'off',
    'no-empty-pattern': 'off',
    'jsx-a11y/iframe-has-title': 'off',
    'import/newline-after-import': 'off',
    'react/no-will-update-set-state': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'import/no-named-default': 'off',
    'max-classes-per-file': 'off',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jquery: true,
  },
  globals: {
    ActiveXObject: false,
    _context: true,
    $Diff: false,
    $ElementType: true,
    $Keys: false,
    $PropertyType: false,
    $Values: true,
    $Shape: false,
    before: false,
    beforeEach: false,
    Class: false,
    context: false,
    cy: false,
    Cypress: false,
    describe: false,
    expect: false,
    express$Middleware: false,
    express$NextFunction: false,
    express$Request: false,
    express$Response: false,
    FB: false,
    ga: false,
    Generator: false,
    GeocoderAddressComponent: false,
    GeocoderGeometry: false,
    GeocoderLocationType: false,
    GeocoderRequest: false,
    GeocoderResult: false,
    GeocoderStatus: false,
    google: false,
    intlTelInputUtils: false,
    it: false,
    jest: false,
    loadImage: false,
    LatLngBoundsLiteral: false,
    LatLngLiteral: false,
    PlaceAspectRating: false,
    PlaceGeometry: false,
    PlaceResult: false,
    Raven: false,
    ReactClass: false,
    ReactComponent: false,
    ReactElement: false,
    React$Element: false,
    RequestOptions: false,
    Royalslider: false,
    ScalarPoiKinds: false,
    SyntheticClipboardEvent: false,
    SyntheticCompositionEvent: false,
    SyntheticDragEvent: false,
    SyntheticEvent: false,
    SyntheticFocusEvent: false,
    SyntheticInputEvent: false,
    SyntheticKeyboardEvent: false,
    SyntheticMouseEvent: false,
    SyntheticTouchEvent: false,
    SyntheticUIEvent: false,
    SyntheticWheelEvent: false,
    test: false,
    TimeoutID: false,
    WOW: false,
  },
};