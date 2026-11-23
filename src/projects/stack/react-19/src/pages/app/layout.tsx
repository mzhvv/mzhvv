import { Link, Outlet } from 'react-router';
import { Button } from '@workspace/ui-shadcn-radix/components/button';

export default function MainLayout() {
  return (
    <div className="flex min-h-svh">
      <header className="shrink-0 p-2 *:p-2">
        <section>
          <Button asChild variant="ghost">
            <Link to="/">react-19</Link>
          </Button>
        </section>
      </header>
      <div className="flex grow flex-col">
        <Outlet />
      </div>
    </div>
  );
}
