module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  printWidth: 100,
  overrides: [
    {
      files: ["**/*.jsonc"],
      options: {
        trailingComma: "none",
      },
    },
  ],
};
