import { cn } from 'cn';
import { Button } from '@/components/ui/button';

export function TestBlock({ text, className }: { text?: string; className?: string }) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 rounded-xl border bg-card p-6 text-card-foreground shadow-sm',
        className,
      )}
    >
      <h3 className="text-lg font-semibold">test-blocks</h3>
      <p>{text}</p>
      <Button>test button</Button>
    </div>
  );
}
