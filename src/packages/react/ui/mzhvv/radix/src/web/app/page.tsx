import { HelloWorld } from '@workspace/ui-mzhvv-radix/r/blocks/hello-world/hello-world';

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
    "@mzhvv": "https://<домен>/r/{name}.json"
  }
}`;

const devCommands = [
  'pnpm --filter @workspace/ui-mzhvv-radix exec shadcn add button',
  'pnpm --filter @workspace/ui-mzhvv-radix exec shadcn search @shadcn -q "menu"',
];

export default function HomePage() {
  return (
    <main className="flex min-h-svh flex-col">
      <section className="flex grow flex-col items-center justify-center gap-8 p-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-semibold text-balance">mzhvv UI</h1>
          <p className="text-muted-foreground text-sm text-pretty">
            Реестр компонентов и блоков для shadcn CLI
          </p>
        </div>

        <HelloWorld className="w-full max-w-md" />

        <div className="flex w-full max-w-md flex-col gap-2">
          <h2 className="text-sm font-medium text-balance">Установка через GitHub</h2>
          <p className="text-muted-foreground text-xs text-pretty">
            Репозиторий — публичный реестр, сервер не нужен. Второй вариант — с пином на
            тег/ветку/SHA.
          </p>
          {githubCommands.map((command) => (
            <div
              key={command}
              translate="no"
              className="bg-muted text-muted-foreground rounded-lg p-4 font-mono text-xs"
            >
              {command}
            </div>
          ))}
        </div>

        <div className="flex w-full max-w-md flex-col gap-2">
          <h2 className="text-sm font-medium text-balance">Установка через реестр /r</h2>
          <p className="text-muted-foreground text-xs text-pretty">
            Сначала добавь namespace в components.json проекта:
          </p>
          <pre
            translate="no"
            className="bg-muted text-muted-foreground overflow-x-auto rounded-lg p-4 font-mono text-xs"
          >
            {registryConfig}
          </pre>
          {registryCommands.map((command) => (
            <div
              key={command}
              translate="no"
              className="bg-muted text-muted-foreground rounded-lg p-4 font-mono text-xs"
            >
              {command}
            </div>
          ))}
        </div>

        <div className="flex w-full max-w-md flex-col gap-2">
          <h2 className="text-sm font-medium text-balance">Разработка реестра</h2>
          <p className="text-muted-foreground text-xs text-pretty">
            Установка официальных компонентов в пакет реестра (из корня монорепо, локальная
            версия CLI). Файлы попадают в src/r/components.
          </p>
          {devCommands.map((command) => (
            <div
              key={command}
              translate="no"
              className="bg-muted text-muted-foreground rounded-lg p-4 font-mono text-xs"
            >
              {command}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
