// @ts-check
import {
  prettierConfig,
  prettierPluginSortImportsName,
  prettierPluginSortImportsOptions,
  prettierPluginTailwindName,
  prettierPluginTailwindOptions as prettierPluginTailwindOptionsDefault,
} from '@workspace/prettier';

/** @type {import("prettier-plugin-tailwindcss").PluginOptions} */
const prettierPluginTailwindOptions = {
  ...prettierPluginTailwindOptionsDefault,
  // "@workspace/ui-shadcn-radix/globals.css" - Error: ENOENT: no such file or directory, open
  tailwindStylesheet: '../../shadcn/radix/src/styles/globals.css',
  // Альтернатива re-export через 'src/styles/index.ts'
};

/** @type {import("prettier").Config} */
const config = {
  ...prettierConfig,
  plugins: [prettierPluginSortImportsName, prettierPluginTailwindName],
  ...prettierPluginSortImportsOptions,
  ...prettierPluginTailwindOptions,
};

export default config;
