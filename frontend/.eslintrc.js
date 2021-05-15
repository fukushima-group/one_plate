module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true // <- 追加
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {},
  settings: {
    // <- 追加
    react: {
      version: 'detect'
    }
  }
};
