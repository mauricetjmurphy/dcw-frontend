import { PAGES, SITE_URL } from './site';

export function sitemapXml(lastmod: string): string {
  const urls = PAGES.map(
    ({ path }) =>
      `<url><loc>${SITE_URL}${path}</loc><lastmod>${lastmod}</lastmod></url>`
  );
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n');
}

export function robotsTxt(): string {
  return `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
}
