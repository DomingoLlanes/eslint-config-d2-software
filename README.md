# 🔧 ESLint and Prettier configuration for projects

Based and extended from: [eslint-config-codely](https://github.com/CodelyTV/eslint-config-codely)

## Install

First of all, you need to install package:

```shell
npm install -D eslint-config-d2-software
```

And then, you should add this code to you `.eslintrc.js` file:

```javascript
module.exports = {
  extends: ["eslint-config-d2-software"],
};
```

If your project uses TypeScript, then you should add this code:

```javascript
module.exports = {
  extends: ["eslint-config-d2-software/typescript"],
  parserOptions: {
    project: ["./tsconfig.json"],
  },
};
```

## Plugins

This config enables:

- [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs)
- [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)
- [eslint-plugin-write-good-comments](https://www.npmjs.com/package/eslint-plugin-write-good-comments)
- [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest) (Only for test files)
- [eslint-plugin-jest-formatting](https://www.npmjs.com/package/eslint-plugin-jest-formatting) (Only for test files)

## Rules overrides

```javascript
module.exports = {
  // ...
  rules: {
    // Rules override
    "prettier/prettier": ["error", { printWidth: 100, useTabs: false }], // Disabled codely useTabs (sorry I prefer spaces)
    "unicorn/prefer-module": "off", // Disable ESModule error from unicorn
    // Write good comments rules
    "write-good-comments/write-good-comments": "warn", // Neccesary for write-good-comments plugin
  },
  // ...
};
```

Some extras:

```javascript
module.exports = {
  // ...
  overrides: [
    // ...
    {
      files: ["jest.config.js"],
      rules: {
        // Write good comments rules
        "write-good-comments/write-good-comments": "off", // Disable comments check in Jest config file
      },
    },
  ],
};
```

## Credits

- [Course "Garantiza la calidad de código en JavaScript y TypeScript con ESLint" (ES)](https://pro.codely.com/library/garantiza-la-calidad-de-codigo-en-javascript-y-typescript-con-eslint-188432)
- [ESLint](https://eslint.org/)
