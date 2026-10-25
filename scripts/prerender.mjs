// Renders every page to static HTML after `vite build`, from the server
// bundle (dist-server/), and writes sitemap.xml and robots.txt.
//
// The site is served from S3 through CloudFront without a URL rewrite, so a
// request for /about fetches the S3 key "about". Each inner page is written
// as an extensionless file of that name; scripts/deploy.sh uploads those
// with a text/html content type. The home page replaces index.html, which
// CloudFront also serves (with a 404) for unknown paths.
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = join(import.meta.dirname, '..');
const dist = join(root, 'dist');
const { render, injectHead, structuredData, sitemapXml, robotsTxt, PAGES } = await import(
  join(root, 'dist-server/entry-server.js')
);

const template = readFileSync(join(dist, 'index.html'), 'utf8');
if (!template.includes('<div id="root"></div>')) {
  console.error('prerender: dist/index.html is already prerendered. Run vite build first.');
  process.exit(1);
}

// Preload the body face so text doesn't reflow when it arrives.
const font = readdirSync(join(dist, 'assets')).find((file) =>
  /^schibsted-grotesk-latin-wght-normal-.*\.woff2$/.test(file),
);
const headTags = font
  ? `<link rel="preload" href="/assets/${font}" as="font" type="font/woff2" crossorigin />`
  : '';

const failures = [];
const page = (path) => {
  const { html, styles, meta, status } = render(path);
  if (status !== 200) failures.push(`${path}: status ${status}`);
  if (!html.includes('<h1')) failures.push(`${path}: no <h1>`);
  return injectHead(template, { path, html, styles, meta, jsonLd: structuredData(path), headTags });
};

for (const { path } of PAGES) {
  const file = path === '/' ? 'index.html' : path.slice(1);
  if (existsSync(join(dist, file)) && path !== '/') failures.push(`${path}: dist/${file} already exists`);
  writeFileSync(join(dist, file), page(path));
}

const missing = render('/404-not-found-page');
if (missing.status !== 404) failures.push(`404 page: status ${missing.status}`);
writeFileSync(
  join(dist, '404.html'),
  injectHead(template, { path: '/404', html: missing.html, styles: missing.styles, meta: missing.meta, jsonLd: [], headTags }),
);

writeFileSync(join(dist, 'sitemap.xml'), sitemapXml(new Date().toISOString().slice(0, 10)));
writeFileSync(join(dist, 'robots.txt'), robotsTxt());

if (failures.length) {
  console.error(`prerender failed:\n  ${failures.join('\n  ')}`);
  process.exit(1);
}
console.log(`prerender: ${PAGES.length} pages, 404.html, sitemap.xml, robots.txt`);
