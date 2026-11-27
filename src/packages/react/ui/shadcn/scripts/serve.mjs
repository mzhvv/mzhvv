import { createReadStream, existsSync, readdirSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';

const appsRoot = new URL('../apps', import.meta.url).pathname;
const port = Number(process.env.PORT ?? 4001);

const types = {
  '.html': 'text/html; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
};

function registries() {
  return readdirSync(appsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name.startsWith('registry-'))
    .map((entry) => entry.name.slice('registry-'.length));
}

function indexPage() {
  const items = registries()
    .map((name) => `<li><a href="/${name}/registry.json">/${name}/</a></li>`)
    .join('');
  return `<!doctype html>
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
`;
}

createServer((req, res) => {
  const url = new URL(req.url ?? '/', `http://localhost:${port}`);
  const pathname = decodeURIComponent(url.pathname);

  if (pathname === '/') {
    res.writeHead(200, { 'content-type': types['.html'] }).end(indexPage());
    return;
  }

  const [name, ...rest] = pathname.split('/').filter(Boolean);
  const root = join(appsRoot, `registry-${name}`, 'public');
  let path = normalize(join(root, ...rest));

  if (!name || !path.startsWith(root) || !existsSync(root)) {
    res.writeHead(404).end('Not found');
    return;
  }

  if (existsSync(path) && statSync(path).isDirectory()) {
    path = join(path, 'index.html');
  }

  if (!existsSync(path)) {
    res.writeHead(404).end('Not found');
    return;
  }

  res.writeHead(200, { 'content-type': types[extname(path)] ?? 'application/octet-stream' });
  createReadStream(path).pipe(res);
}).listen(port, () => {
  console.log(`registry preview: http://127.0.0.1:${port}`);
});
