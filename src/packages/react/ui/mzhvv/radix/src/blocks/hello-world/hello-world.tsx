import { cn } from 'cn';

export function HelloWorld({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'bg-card text-card-foreground flex flex-col gap-2 rounded-xl border p-6 shadow-sm',
        className,
      )}
    >
      <h3 className="text-lg font-semibold">Hello from @mzhvv</h3>
      <p className="text-muted-foreground text-sm">
        Этот блок установлен из реестра @mzhvv через shadcn CLI.
      </p>
    </div>
  );
}
