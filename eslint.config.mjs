import importPlugin from 'eslint-plugin-import';
import neostandard from 'neostandard';

export default neostandard({
  semi: true,
  ts: true,
  ignores: ['node_modules/**', 'lib/**', 'coverage/**', 'dist/**'],
}).concat([
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 0,
      'no-console': 1,
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
]);
