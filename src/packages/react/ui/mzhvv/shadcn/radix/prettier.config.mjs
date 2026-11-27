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
  tailwindStylesheet: 'src/r/styles/globals.css',
};

/** @type {import("prettier").Config} */
const config = {
  ...prettierConfig,
  plugins: [prettierPluginSortImportsName, prettierPluginTailwindName],
  ...prettierPluginSortImportsOptions,
  ...prettierPluginTailwindOptions,
};

export default config;
