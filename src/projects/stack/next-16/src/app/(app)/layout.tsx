import Link from 'next/link';
import { Button } from '@workspace/ui-shadcn-base/components/button';

export default function AppLayout({ children }: LayoutProps<'/'>) {
  return (
    <div className="flex min-h-svh">
      <div className="shrink-0 p-2">
        <div className="p-2">
          <Button>
            <Link></Link>
          </Button>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
