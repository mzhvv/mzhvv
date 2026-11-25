import type { Metadata } from 'next';
import Providers from './providers';
import './index.css';

export const metadata: Metadata = {
  title: 'mzhvv UI',
  description: 'Реестр компонентов и блоков mzhvv для shadcn CLI',
};

export default function MainLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
