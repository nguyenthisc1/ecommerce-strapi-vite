module.exports = {
  arrowParens: 'always',
  embeddedLanguageFormatting: 'auto',
  htmlWhitespaceSensitivity: 'css',
  printWidth: 500,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  semi: true,
  singleQuote: true,
  tabWidth: 4,
  trailingComma: 'es5',
  overrides: [
    {
      files: ["./src/**/*.{js,ts,jsx,tsx}"],
      options: {
        singleQuote: true,
      },
    },
  ],
  tailwindFunctions: ['className'],
  plugins: [require('prettier-plugin-tailwindcss')],
};
