import { cn } from 'cn';
import { Button } from '@workspace/shadcn-ui-radix/components/button';

export function TestBlock({ text, className }: { text?: string; className?: string }) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 rounded-xl border bg-card p-6 text-card-foreground shadow-sm',
        className,
      )}
    >
      <h3 className="text-lg font-semibold">test-blocks</h3>
      <span>{text}</span>
      <Button>test button</Button>
    </div>
  );
}
