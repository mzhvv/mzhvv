import Link from 'next/link';
import { Button } from '@workspace/ui-shadcn-base/components/button';

export default function AppLayout({ children }: LayoutProps<'/'>) {
  return (
    <div className="flex min-h-svh">
      <div className="shrink-0 p-2">
        <div className="p-2">
          <Button render={<Link href="/" />}>next-16</Button>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
