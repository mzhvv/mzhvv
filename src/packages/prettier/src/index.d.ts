import type { Config } from 'prettier';
import type { PluginOptions as TailwindPluginOptions } from 'prettier-plugin-tailwindcss';

export declare const prettierConfig: Config;
export declare const prettierPluginTailwindName: 'prettier-plugin-tailwindcss';
export declare const prettierPluginTailwindOptions: TailwindPluginOptions;
export declare const prettierPluginSortImportsName: '@ianvs/prettier-plugin-sort-imports';
export declare const prettierPluginSortImportsOptions: {
  importOrder: string[];
  importOrderTypeScriptVersion: string;
  importOrderSeparation: boolean;
  importOrderSortSpecifiers: boolean;
};
