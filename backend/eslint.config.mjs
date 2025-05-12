// backend/eslint.config.mjs
import globals from 'globals';
import baseConfig from '../eslint.base.mjs';

export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'generated/**', 'coverage/**', 'eslint.config.mjs'],
  },
  ...baseConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      sourceType: 'commonjs',
    },
  },
];
