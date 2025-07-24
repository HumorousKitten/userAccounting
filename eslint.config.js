import { tseslint } from 'typescript-eslint';
import js from '@eslint/js';
import globals from 'globals';
import * as reactHooks from 'eslint-plugin-react-hooks';
import * as reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config([
  {
    ignores: ['dist'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      import: importPlugin, // ← подключаем плагин
    },
    rules: {
      'import/no-internal-modules': [
        'error',
        {
          allow: [
            '**/index',
            '**/index.ts',
            '**/index.tsx',
            '**/index.js',
          ],
        },
      ],
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
