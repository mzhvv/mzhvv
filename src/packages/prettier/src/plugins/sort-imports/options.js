// @ts-check

/** @type {import('@ianvs/prettier-plugin-sort-imports').PluginConfig} */
export default {
  importOrder: [
    '<BUILTIN_MODULES>', // node:fs, node:path
    '<THIRD_PARTY_MODULES>', // react, lodash и всё, что не попало в другие группы

    '^@workspace/(.*)$', // монорепо-пакеты
    '^@entities/(.*)$', // FSD-слои
    '^@features/(.*)$',
    '^@pages/(.*)$',
    '^@shared/(.*)$',
    '^@widgets/(.*)$',
    '^@/(.*)$', // общий alias

    '^[./]', // относительные
    String.raw`\.css$`, // CSS в конец
    // '',
  ],
  importOrderTypeScriptVersion: '5.9.3',
};
