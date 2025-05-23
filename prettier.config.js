/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
export default {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    printWidth: 140,
    plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
    overrides: [
        {
            files: ['*.yml'],
            options: {
                useTabs: true,
                tabWidth: 2,
            },
        },
    ],
}
