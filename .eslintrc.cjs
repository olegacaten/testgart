module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json'], 
    tsconfigRootDir: __dirname,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/no-unescaped-entities': 'off',
    semi: ['error', 'always'],
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    "no-warning-comments": [1, { "terms": ["todo", "fixme", "xxx"], "location": "anywhere" }],
        "spaced-comment": ["error", "always", { "exceptions": ["-", "+"] }]

  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['*.js', 'node_modules/', '.eslintrc.cjs'], 
  overrides: [
    {
      files: ['*.ts', '*.tsx', 'vite.config.ts'], 
      parserOptions: {
        project: ['./tsconfig.json'], 
      },
    },
  ],
};
