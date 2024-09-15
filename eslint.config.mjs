import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: 
    { globals: 
      {
        ...globals.browser, 
        ...globals.node,
      }
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {ignores: ['client/build/', 'playwright.config.js', 'node_modules']},
  {rules: {
    'react/prop-types':'off',
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
      },
    ],
  }
}
];