import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';

const root = new URL('../public', import.meta.url).pathname;
const port = Number(process.env.PORT ?? 4000);

const types = {
  '.html': 'text/html; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
};

createServer((req, res) => {
  const url = new URL(req.url ?? '/', `http://localhost:${port}`);
  let path = normalize(join(root, decodeURIComponent(url.pathname)));

  if (!path.startsWith(root)) {
    res.writeHead(403).end('Forbidden');
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
