module.exports = {
    // Specifies the ESLint parser
    parser: "@typescript-eslint/parser",
    extends: [
        "react-app",
        "react-app/jest",

        // Uses the recommended rules from @eslint-plugin-react
        "plugin:react/recommended",

        // Uses the recommended rules from @typescript-eslint/eslint-plugin
        "plugin:@typescript-eslint/recommended"
    ],
    parserOptions: {
        // Allows for the parsing of modern ECMAScript features
        ecmaVersion: 2018,

        // Allows for the use of imports
        sourceType: "module",

        // Allows for the parsing of JSX
        ecmaFeatures: {jsx: true}
    },
    rules: {
        // Place to specify ESLint rules.
        // Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        /* tslint default */
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        /* common */
        indent: [2, 4, { SwitchCase: 1 }],
        'no-unused-vars': 'warn',
        'comma-dangle': ['error', 'never'],
        'arrow-body-style': ['error', 'as-needed'],
        'global-require': 'off',
        'max-len': ['warn', { code: 100, tabWidth: 4, ignoreUrls: true }],
        'object-curly-newline': ['error', { multiline: true }],
        'no-underscore-dangle': 'off',
        camelcase: 'off',
        'no-continue': 'off',
        'linebreak-style': 'off',
        'object-shorthand': 'off',
        'no-nested-ternary': 'off',

        /* import */
        'import/newline-after-import': 'off',
        'import/prefer-default-export': 'off',

        /* react */
        'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4]
    },
    settings: {
        react: {
            // Tells eslint-plugin-react to automatically detect the version of React to use
            version: "detect"
        }
    }
};
