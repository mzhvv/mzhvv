import { cn } from 'cn';
import { Button } from '@/components/ui/button';

export function HelloWorld({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 rounded-xl border bg-card p-6 text-card-foreground shadow-sm',
        className,
      )}
    >
      <h3 className="text-lg font-semibold">Hello from @mzhvv</h3>
      <p className="text-sm text-muted-foreground">
        Этот блок установлен из реестра @mzhvv через shadcn CLI.
      </p>
      <Button>test button</Button>
    </div>
  );
}
