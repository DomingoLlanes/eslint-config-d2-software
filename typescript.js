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
  ],
};
