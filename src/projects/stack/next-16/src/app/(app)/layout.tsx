import Link from 'next/link';
import { Button } from '@workspace/ui-shadcn-base/components/button';

export default function AppLayout({ children }: LayoutProps<'/'>) {
  return (
    <div className="flex min-h-svh">
      <header className="shrink-0 p-2 *:p-2">
        <section>
          <Button render={<Link href="/" />} variant="ghost" nativeButton={false}>
            next-16
          </Button>
        </section>
      </header>
      <div className="flex grow flex-col">{children}</div>
    </div>
  );
}
