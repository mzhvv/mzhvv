import { HelloWorld } from '@/blocks/hello-world/hello-world';

const installCommands = [
  'pnpx shadcn add @mzhvv/hello-world',
  'pnpm dlx shadcn add @mzhvv/hello-world',
  'npx shadcn add @mzhvv/hello-world',
];

const registryConfig = `{
  "registries": {
    "@mzhvv": "https://<домен>/r/{name}.json"
  }
}`;

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

        <div className="flex w-full max-w-md flex-col gap-2">
          <h2 className="text-sm font-medium">Установка</h2>
          {installCommands.map((command) => (
            <div
              key={command}
              className="bg-muted text-muted-foreground rounded-lg p-4 font-mono text-xs"
            >
              {command}
            </div>
          ))}
        </div>

        <div className="flex w-full max-w-md flex-col gap-2">
          <h2 className="text-sm font-medium">Настройка components.json</h2>
          <pre className="bg-muted text-muted-foreground overflow-x-auto rounded-lg p-4 font-mono text-xs">
            {registryConfig}
          </pre>
        </div>
      </section>
    </main>
  );
}
