// @ts-check

/** @type {import('@ianvs/prettier-plugin-sort-imports').PluginConfig} */
export default {
  importOrder: [
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',

    '^@workspace/(.*)$',

    '^@app/(.*)$',
    '^@entities/(.*)$',
    '^@features/(.*)$',
    '^@pages/(.*)$',
    '^@shared/(.*)$',
    '^@widgets/(.*)$',
    '^@/(.*)$',

    String.raw`^[./](?!.*\.css$)`,
    String.raw`\.css$`,
    // '',
  ],
  importOrderSafeSideEffects: [String.raw`\.css$`],
  importOrderTypeScriptVersion: '5.9.3',
};
