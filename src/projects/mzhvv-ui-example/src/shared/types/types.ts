import type { ComponentType } from 'react';

export type RouteModule = Partial<{
  Page: ComponentType;
  Layout: ComponentType<{ children?: React.ReactNode }>;
}>;

// export type RouteModule<
//   PageProps extends object = Record<string, unknown>,
//   LayoutProps extends object = Record<string, unknown>,
// > = Partial<{
//   Page: ComponentType<Partial<PageProps>>
//   Layout: ComponentType<{ children?: React.ReactNode } & Partial<LayoutProps>>
// }>
