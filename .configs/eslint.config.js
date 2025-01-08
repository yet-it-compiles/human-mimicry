/**
 * @file eslint.config.js
 *
 * @version 1.0.0
 *
 * @summary ESLint linting configuration file.
 *
 * @description Defines the code styling and file formatting configuration
 * across the projects stack using ESLint and integrated Prettier.
 *
 * @requires js - ESLint's default configuration for JavaScript.
 * @requires react - ESLint plugin for React-specific linting rules.
 * @requires globals - Provides global variables for browser environments.
 * @requires react-hooks - ESLint plugin for enforcing React Hooks rules.
 * @requires react-refresh - ESLint plugin for React Refresh during development
 *
 * @see @see https://vitejs.dev/ link to official vite documentation
 * @see https://eslint.org/docs/latest/ link to official eslint documentation
 *
 * @exports Object - ESLint configuration object
 */
import reactPlugin from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';

export default [
    {
        files: ['**/*.{js,jsx,html,css,scss}'],
        languageOptions: {
            ecmaVersion: 2024,
            sourceType: 'module',
            globals: {
                window: 'readonly',
                document: 'readonly',
                console: 'readonly',
                global: true,
            },
        },
        settings: {
            react: { version: 'detect' },
        },
        plugins: {
            'html': htmlPlugin,
            'react': reactPlugin,
            'prettier': prettierPlugin,
            'stylelint': stylelintPlugin,
            'react-hooks': reactHooksPlugin,
            'css-modules': cssModulesPlugin,
            'react-refresh': reactRefreshPlugin,
        },
        rules: {
            'react/jsx-no-target-blank': 'off',
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            'indent': ['error', 4],
            'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            'prettier/prettier': 'error',
            'css-modules/no-unused-class': 'warn',
            'stylelint/declaration-no-important': 'error',
        },
    },
];
