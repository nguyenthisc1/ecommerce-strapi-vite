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
    tailwindFunctions: ['className'],
    plugins: [require('prettier-plugin-tailwindcss')],
};
