const { defaults } = require("jest-config");

module.exports = {
  verbose: true,
  globals: {
    'ts-jest': {
      packageJson: 'package.json',
    },
  },
  roots: ["./src/", "./node_modules"],
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts"],
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|ts?)$"
};
