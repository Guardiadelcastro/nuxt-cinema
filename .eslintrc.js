module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/max-attributes-per-line': 'off',
    "vue/html-indent": "off",
    'no-tabs': 'off'
  }
}
