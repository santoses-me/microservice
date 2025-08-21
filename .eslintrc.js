export default {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        // Your custom rules here
        'prettier/prettier': 'error', // Format issues = lint errors
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                js: 'never',
            },
        ],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts'],
            },
        },
    },
};
