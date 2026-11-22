import {
  prettierConfig,
  prettierPluginSortImportsName,
  prettierPluginSortImportsOptions,
} from '@workspace/prettier';

/** @type {import("prettier").Config} */
const config = {
  ...prettierConfig,
  plugins: [prettierPluginSortImportsName],
  ...prettierPluginSortImportsOptions,
};

export default config;
