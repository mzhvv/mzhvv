import { HelloWorld } from '@workspace/ui-mzhvv-radix/blocks/hello-world/hello-world';

export default function HomePage() {
  return (
    <main className="flex min-h-svh flex-col">
      <section className="flex grow flex-col items-center justify-center gap-8 p-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-semibold">mzhvv UI</h1>
          <p className="text-muted-foreground text-sm">
            Реестр компонентов и блоков для shadcn CLI
          </p>
        </div>

        <HelloWorld className="w-full max-w-md" />

        <div className="bg-muted text-muted-foreground w-full max-w-md rounded-lg p-4 font-mono text-xs">
          npx shadcn add @mzhvv/hello-world
        </div>
      </section>
    </main>
  );
}
