module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.js', '*.ts', '*.jsx', '*.tsx'],
      rules: {
        "semi": "off",
        "@typescript-eslint/semi": ["off"]
      },
    },
  ],
};
