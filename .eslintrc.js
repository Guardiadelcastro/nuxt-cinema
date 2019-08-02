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
    'prettier',
    'prettier/vue',
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'vue',
  ],
  // add your custom rules here
  rules: {
  }
}
