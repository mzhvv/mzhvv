// @ts-check

/** @type {import('@ianvs/prettier-plugin-sort-imports').PluginConfig} */
const config = {
  importOrder: [
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '^@workspace/(.*)$',
    '^@/(.*)$',
    '^[./]',
    // '',
  ],
  importOrderTypeScriptVersion: '5.0.0',
};

export default config;
