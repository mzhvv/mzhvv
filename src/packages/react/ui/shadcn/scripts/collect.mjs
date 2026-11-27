import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const appsRoot = join(root, 'apps');
const out = join(root, 'public');

const registries = readdirSync(appsRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && entry.name.startsWith('registry-'))
  .map((entry) => entry.name.slice('registry-'.length))
  .filter((name) => existsSync(join(appsRoot, `registry-${name}`, 'public')));

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

for (const name of registries) {
  cpSync(join(appsRoot, `registry-${name}`, 'public'), join(out, name), { recursive: true });
}

const items = registries
  .map((name) => `<li><a href="/${name}/">/${name}/</a></li>`)
  .join('');

writeFileSync(
  join(out, 'index.html'),
  `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>mzhvv registry</title>
    <style>
      body {
        font-family: ui-monospace, monospace;
        max-width: 40rem;
        margin: 4rem auto;
        padding: 0 1rem;
        line-height: 1.6;
      }
    </style>
  </head>
  <body>
    <h1>mzhvv registry</h1>
    <p>shadcn-реестры монорепо:</p>
    <ul>${items}</ul>
  </body>
</html>
`,
);

console.log(`collected registries: ${registries.join(', ') || '(none)'}`);
