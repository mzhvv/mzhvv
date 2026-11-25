import Link from 'next/link';

export default function AppLayout({ children }: LayoutProps<'/'>) {
  return (
    <div className="flex min-h-svh">
      <header className="shrink-0 p-2 *:p-2">
        <section>
          <Link href="/" className="text-sm font-medium">
            mzhvv-ui
          </Link>
        </section>
      </header>
      <div className="flex grow flex-col">{children}</div>
    </div>
  );
}
