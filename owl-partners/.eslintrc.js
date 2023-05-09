module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier',
    "eslint:recommended",
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        parser: "@typescript-eslint/parser",
        project: "./tsconfig.config.json",
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: "@typescript-eslint/parser",
    project: ["./tsconfig.json"],
  },
  plugins: [
    'react',
    "@typescript-eslint"
  ],
  rules: {
    "react/tsx-filename-extension": [
      "warn",
      {"extension": [".ts", ".tsx"]}
    ],
    "react/react-in-tsx-scope": "off",
    "comma-dangle": "off",
    '@typescript-eslint/no-unnecessary-type-assertion': 2
  }
}
