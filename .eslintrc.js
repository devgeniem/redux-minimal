module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "env": {
        "browser": true,
        "mocha": true,
    },
    "parser": "babel-eslint",
    "rules": {
        "strict": 0,
        "react/prefer-stateless-function": 0
    },
};
