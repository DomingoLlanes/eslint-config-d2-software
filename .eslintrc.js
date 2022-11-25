module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["eslint-config-codely", "plugin:sonarjs/recommended", "plugin:unicorn/recommended"],
  plugins: ["sonarjs", "unicorn", "write-good-comments"],
  rules: {
    // Rules override
    "prettier/prettier": ["error", { printWidth: 100, useTabs: false }],
    "unicorn/prefer-module": "off",
    // Write good comments rules
    "write-good-comments/write-good-comments": "warn",
  },
  ignorePatterns: ["coverage/*"],
  overrides: [
    {
      env: {
        "jest/globals": true,
      },
      plugins: ["jest", "jest-formatting"],
      files: ["tests/*.spec.(j|t)s", "tests/*.test.(j|t)s", "tests/*.mock.(j|t)s"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest/style",
        "plugin:jest-formatting/recommended",
      ],
    },
    {
      files: ["jest.config.js"],
      rules: {
        // Write good comments rules
        "write-good-comments/write-good-comments": "off",
      },
    },
  ],
};
