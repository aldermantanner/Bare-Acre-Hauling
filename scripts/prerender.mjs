import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const port = 4173;
const origin = `http://127.0.0.1:${port}`;

const townSlugs = [
  ...fs.readFileSync(path.join(root, 'src/data/towns.ts'), 'utf8').matchAll(/slug: '([^']+)'/g),
].map((match) => match[1]);

const routes = [
  '/',
  '/pricing',
  '/booking',
  '/service-areas',
  ...townSlugs.map((slug) => `/${slug}`),
  '/privacypolicy',
  '/termsandconditions',
  '/ad-landing',
];

function chromePath() {
  const candidates = [
    process.env.CHROME_PATH,
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/local/bin/google-chrome',
  ].filter(Boolean);
  return candidates.find((candidate) => fs.existsSync(candidate));
}

function waitForServer() {
  const started = Date.now();
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try {
        const response = await fetch(origin);
        if (response.ok) {
          resolve();
          return;
        }
      } catch {
        // Preview is still starting.
      }
      if (Date.now() - started > 30000) {
        reject(new Error('vite preview did not start'));
        return;
      }
      setTimeout(tick, 250);
    };
    tick();
  });
}

function outputFile(route) {
  if (route === '/') return path.join(dist, 'index.html');
  return path.join(dist, route.slice(1), 'index.html');
}

const preview = spawn(
  'npx',
  ['vite', 'preview', '--host', '127.0.0.1', '--port', String(port), '--strictPort'],
  { cwd: root, detached: true, stdio: ['ignore', 'pipe', 'pipe'] },
);

let previewLog = '';
preview.stdout.on('data', (chunk) => {
  previewLog += chunk.toString();
});
preview.stderr.on('data', (chunk) => {
  previewLog += chunk.toString();
});

function stopPreview() {
  try {
    process.kill(-preview.pid, 'SIGTERM');
  } catch {
    preview.kill('SIGTERM');
  }
}

try {
  await waitForServer();
  const executablePath = chromePath();
  const browser = await chromium.launch({
    headless: true,
    executablePath,
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  });

  try {
    const page = await browser.newPage();
    await page.route('**/*', (route) => {
      const url = route.request().url();
      if (/google|gstatic|doubleclick|googlesyndication|facebook\.net|openstreetmap/.test(url)) {
        return route.abort();
      }
      return route.continue();
    });
    for (const route of routes) {
      const response = await page.goto(`${origin}${route}`, { waitUntil: 'domcontentloaded', timeout: 20000 });
      if (!response || !response.ok()) {
        throw new Error(`Preview returned ${response?.status()} for ${route}`);
      }
      await page.waitForSelector('h1', { timeout: 15000 });
      await page.waitForSelector('link[rel="canonical"]', { state: 'attached', timeout: 15000 });
      await page.waitForSelector('script[type="application/ld+json"]', { state: 'attached', timeout: 15000 });
      let html = await page.content();
      html = html.replaceAll(origin, '');
      const file = outputFile(route);
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, html);
      const title = await page.title();
      console.log(`prerendered ${route} -> ${path.relative(root, file)} (${title})`);
    }
  } finally {
    await browser.close();
  }
} catch (error) {
  console.error(previewLog);
  console.error(error);
  process.exitCode = 1;
} finally {
  stopPreview();
}

process.exit(process.exitCode || 0);
