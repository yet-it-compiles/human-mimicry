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
import htmlPlugin from 'eslint-plugin-html';
import reactPlugin from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import cssModulesPlugin from 'eslint-plugin-css-modules';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';

export default [
    {
        files: ['**/*.{js,jsx,html,css,scss}'],
        ignores: ['dist/**', '**/*.css', 'coverage/**', 'node_modules/**'],
        languageOptions: {
            ecmaVersion: 2024,
            sourceType: 'module',
            globals: {
                global: 'readonly',
                window: 'readonly',
                console: 'readonly',
                document: 'readonly',
            },
        },
        settings: {
            react: { version: 'detect' },
        },
        plugins: {
            'html': htmlPlugin,
            'react': reactPlugin,
            'prettier': prettierPlugin,
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
        },
    },
];
