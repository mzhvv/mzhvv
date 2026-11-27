import { HelloWorld } from '@workspace/shadcn-ui-radix/blocks/hello-world/hello-world';
import { Button } from '@workspace/shadcn-ui-radix/components/button';

const githubCommands = [
  'pnpx shadcn add mzhvv/mzhvv/hello-world',
  'pnpx shadcn add mzhvv/mzhvv/hello-world#v1.0.0',
];

const registryCommands = [
  'pnpx shadcn add @mzhvv/hello-world',
  'pnpm dlx shadcn add @mzhvv/hello-world',
  'npx shadcn add @mzhvv/hello-world',
];

const registryConfig = `{
  "registries": {
    "@mzhvv": "https://<домен>/{name}.json"
  }
}`;

const devCommands = [
  'pnpm --filter @workspace/shadcn-ui-registry-radix exec shadcn add button',
  'pnpm --filter @workspace/shadcn-ui-registry-radix exec shadcn search @shadcn -q "menu"',
];

export default function HomePage() {
  return (
    <main className="flex min-h-svh flex-col">
      <section className="flex grow flex-col items-center justify-center gap-8 p-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-semibold text-balance">mzhvv UI</h1>
          <p className="text-sm text-pretty text-muted-foreground">
            Реестр компонентов и блоков для shadcn CLI
          </p>
          <Button asChild variant="outline" className="mt-2">
            <a href="https://github.com/mzhvv/mzhvv" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Button>
        </div>

        <HelloWorld className="w-full max-w-md" />

        <div className="flex w-full max-w-md flex-col gap-2">
          <h2 className="text-sm font-medium text-balance">Установка через GitHub</h2>
          <p className="text-xs text-pretty text-muted-foreground">
            Репозиторий — публичный реестр, сервер не нужен. Второй вариант — с пином на
            тег/ветку/SHA.
          </p>
          {githubCommands.map((command) => (
            <div
              key={command}
              translate="no"
              className="rounded-lg bg-muted p-4 font-mono text-xs text-muted-foreground"
            >
              {command}
            </div>
          ))}
        </div>

        <div className="flex w-full max-w-md flex-col gap-2">
          <h2 className="text-sm font-medium text-balance">Установка через реестр</h2>
          <p className="text-xs text-pretty text-muted-foreground">
            Сначала добавь namespace в components.json проекта:
          </p>
          <pre
            translate="no"
            className="overflow-x-auto rounded-lg bg-muted p-4 font-mono text-xs text-muted-foreground"
          >
            {registryConfig}
          </pre>
          {registryCommands.map((command) => (
            <div
              key={command}
              translate="no"
              className="rounded-lg bg-muted p-4 font-mono text-xs text-muted-foreground"
            >
              {command}
            </div>
          ))}
        </div>

        <div className="flex w-full max-w-md flex-col gap-2">
          <h2 className="text-sm font-medium text-balance">Разработка реестра</h2>
          <p className="text-xs text-pretty text-muted-foreground">
            Установка официальных компонентов в пакет реестра (из корня монорепо, локальная версия
            CLI). Файлы попадают в src/components.
          </p>
          {devCommands.map((command) => (
            <div
              key={command}
              translate="no"
              className="rounded-lg bg-muted p-4 font-mono text-xs text-muted-foreground"
            >
              {command}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
