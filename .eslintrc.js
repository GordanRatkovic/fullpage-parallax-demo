module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'plugin:react-hooks/recommended'],
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // 'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'always' }],
    'react/jsx-one-expression-per-line': 0,
    'react/button-has-type': 0,
    // 'react/prop-types': 0,
    'react/no-danger': 0,
    'react/no-array-index-key': 0,
    'react/destructuring-assignment': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-bind': 'off',
    'react/function-component-definition': [
      1,
      {
        namedComponents: 'arrow-function',
      },
    ],
    // 'jsx-a11y/media-has-caption': 'off',
    // 'jsx-a11y/anchor-is-valid': 'off',
    // 'jsx-a11y/click-events-have-key-events': 'off',
    // 'jsx-a11y/no-static-element-interactions': 'off',
    // 'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'prettier/prettier': 'error',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-expressions': ['error', { allowTernary: true, allowTaggedTemplates: true }],
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'no-use-before-define': ['error', 'nofunc'],
  },
};
