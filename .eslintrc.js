module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint",
    ],
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    "rules": {
      "max-len": [
        "error",
        {
            "code": 120
        }
      ],
      "@typescript-eslint/indent": [
        "error",
        2
    ],
    "@typescript-eslint/typedef": "error",
    }
};
