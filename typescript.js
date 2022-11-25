module.exports = {
  extends: ["./.eslintrc.js", "eslint-config-codely/typescript"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/typescript",
      ],
    },
    {
      env: {
        "jest/globals": true,
      },
      plugins: ["jest", "jest-formatting"],
      files: ["tests/*.spec.ts", "tests/*.test.ts", "tests/*.mock.ts"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest/style",
        "plugin:jest-formatting/recommended",
      ],
    },
  ],
};
