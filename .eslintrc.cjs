/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/recommended',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:tailwindcss/recommended'
    // "@vue/eslint-config-prettier",
  ],
  plugins: ['vue', 'prettier', 'tailwindcss'],
  env: {
    'vue/setup-compiler-macros': true
  },
  overrides: [],
  rules: {
    semi: ['error', 'never'],
    'quote-props': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', {before: false, after: true}],
    'object-curly-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'key-spacing': ['error', {beforeColon: false, afterColon: true}],
    'no-multi-spaces': ['error', {ignoreEOLComments: false}],
    quotes: ['error', 'single'],
    'eol-last': ['error', 'always'],
    indent: ['error', 2, {SwitchCase: 1}],
    'spaced-comment': ['error', 'always'],
    'no-unused-vars': ['error', {argsIgnorePattern: '^_'}],

    'vue/multi-word-component-names': 'off',
    'tailwindcss/no-custom-classname': 'off'
  }
}
