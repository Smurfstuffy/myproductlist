import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import pluginReactRefresh from 'eslint-plugin-react-refresh';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], // Lint all relevant file extensions
    languageOptions: {
      parser, // Use TypeScript parser for TypeScript files
      globals: {...globals.browser, ...globals.node, ...globals.es2021}, // Enable browser globals like `window` and `document`
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      'jsx-a11y': pluginJsxA11y,
      prettier, // Prettier integration
      'react-refresh': pluginReactRefresh, // React Fast Refresh for HMR
    },
    ignores: ['node_modules', 'dist'],
    rules: {
      ...tseslint.configs.recommended.rules, // TypeScript recommended rules
      ...pluginReact.configs.flat.recommended.rules, // React recommended rules
      ...pluginReactHooks.configs.recommended.rules, // React Hooks best practices
      ...pluginJsxA11y.configs.recommended.rules, // Accessibility best practices
      'prettier/prettier': 'error', // Prettier rules as errors
      'react-refresh/only-export-components': [
        'warn',
        {allowConstantExport: true},
      ], // Warn for invalid React component exports
      'react/react-in-jsx-scope': 'off',
      'prefer-const': 'error',
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
  },
  pluginJs.configs.recommended, // Include JavaScript recommended rules
];
