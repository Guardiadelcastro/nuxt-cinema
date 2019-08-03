module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "eslint:recommended",
    "@nuxtjs",
    "plugin:vue/recommended",
  ],
  plugins: [
    "vue",
  ],
  // add your custom rules here
  rules: {
    "no-console": "off",
    "vue/no-duplicate-attributes": "off",
    "vue/max-attributes-per-line": ["error", {
			"singleline": 10,
    }],
    "vue/html-indent": "off",
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always"
      }
    }]
  }
}
