# CREATIVE NEPAL

```sh
pnpm dlx create-next-app@latest
```

## CONFIGURING DEVELOPMENT ENVIROMENT

```sh
pnpm add --save-dev eslint-config-prettier
pnpm add --save-dev @trivago/prettier-plugin-sort-imports
pnpm add --save-dev prettier prettier-plugin-tailwindcss
pnpm add --save-dev eslint-plugin-check-file
```

```js
import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    plugins: ["check-file"],
    rules: {
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      semi: ["error"],
      quotes: ["error", "double"],
      "check-file/filename-naming-convention": [
        "error",
        {
          "**/*.{ts,tsx}": "KEBAB_CASE",
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],
      "check-file/folder-naming-convention": [
        "error",
        {
          "src/**/!^[.*": "KEBAB_CASE",
        },
      ],
    },
  }),
];

export default eslintConfig;
```

```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "importOrder": [
    "^(react|next?/?([a-zA-Z/]*))$",
    "<THIRD_PARTY_MODULES>",
    "^@/(.*)$",
    "^[./]"
  ],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true,
  "plugins": [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss"
  ]
}
```

> `.prettierrc`

```json
"format": "prettier src/ --write"
```

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": "always",
    "source.organizeImports": "always"
  },
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

> `.vscode/settings.json`

> [ESLint Plugin](https://nextjs.org/docs/app/api-reference/config/eslint#with-prettier) | [Prettier plugin sort imports](https://github.com/trivago/prettier-plugin-sort-imports/) | [Automatic Class Sorting with Prettier](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)

## COMPONENT LIBRARY

```sh
pnpm dlx shadcn@latest init -d
pnpm dlx shadcn@latest add button
```

```sh
pnpm add next-themes
```

> [DARK MODE](https://ui.shadcn.com/docs/dark-mode/next)

## AUTHENTICATION

```sh
pnpm add next-auth@beta
npx auth secret
```

> [AUTHJS](https://authjs.dev/getting-started/installation?framework=next-js)  
> [PROTECTING RESOURCES](https://authjs.dev/getting-started/session-management/protecting?framework=next-js)

---

> [NEXTJS FAQ](https://nextjs-faq.com/) | [Bulletproof React](https://github.com/alan2207/bulletproof-react) | [Next.js Starter Template](https://www.youtube.com/watch?v=dLRKV-bajS4&t=749s&ab_channel=Syntax)
