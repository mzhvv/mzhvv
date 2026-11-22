// @ts-check

/**
 * @typedef {{
 *   importOrder?: string[];
 *   importOrderTypeScriptVersion?: string;
 *   importOrderParserPlugins?: string[];
 *   importOrderSeparation?: boolean;
 *   importOrderSortSpecifiers?: boolean;
 *   importOrderCaseInsensitive?: boolean;
 * }} SortImportsConfig
 */

/** @type {SortImportsConfig} */
const config = {
  importOrder: [
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@workspace/(.*)$',
    '',
    '^@/(.*)$',
    '',
    '^[./]',
  ],
  importOrderTypeScriptVersion: '5.0.0',
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

export default config;
