module.exports = {
    root: true,
    env: { browser: true, es2021: true },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: [
        'react',
        'react-refresh',
        'prettier',
    ],
    rules: {
        'react/react-in-jsx-scope': 0,
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        "react/jsx-uses-react": ["off"],
        "react/jsx-props-no-spreading": ["warn"],
        "no-shadow": "off",
        "react/function-component-definition": [
            2,
            {
                "namedComponents": "arrow-function",
                "unnamedComponents": "arrow-function"
            }
        ],
        "import/no-extraneous-dependencies": ["off"],
        "prettier/prettier": [
            "error",
            {
                "endOfLine": "auto"
            }
        ],
        "react/no-children-prop": ["off"],
        "react/jsx-filename-extension": ["off"],
        "react/no-array-index-key": ["off"],
        "jsx-a11y/anchor-is-valid": ["off"],
    },
}