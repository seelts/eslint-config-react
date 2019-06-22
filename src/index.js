module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    '@filtu/eslint-config',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier/react',
  ],
  plugins: ['react', 'jsx-a11y'],
  settings: { react: { version: 'detect' } },
};
