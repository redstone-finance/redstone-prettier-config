module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  overrides: [
    {
      files: ["**/*.jsonc"],
      options: {
        trailingComma: "none",
      },
    },
  ],
};
