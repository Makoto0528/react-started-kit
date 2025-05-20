import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import typescriptEsLint from 'typescript-eslint'
import prettier from 'eslint-config-prettier';

export default typescriptEsLint.config(
    {
        ignores: ['vendor', 'node_modules', 'public', 'bootstrap/ssr'],
    },
    {
        extends: [js.configs.recommended, ...typescriptEsLint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                {allowConstantExport: true},
            ],
        },
    },
    prettier
)
