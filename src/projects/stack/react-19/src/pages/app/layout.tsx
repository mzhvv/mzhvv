import { Link, Outlet } from 'react-router';
import { Button } from '@workspace/shadcn-ui-radix/components/button';

export default function MainLayout() {
  return (
    <div className="flex min-h-svh">
      <Sidebar className="shrink-0 border-0 p-2 *:p-2">
        <section>
          <Button asChild variant="ghost">
            <Link to="/">react-19</Link>
          </Button>
        </section>
      </Sidebar>
      <div className="flex grow flex-col">
        <Outlet />
      </div>
    </div>
  );
}

const Sidebar = ({ className, children }: { className: string; children: React.ReactNode }) => {
  return <header className={className}>{children}</header>;
};
