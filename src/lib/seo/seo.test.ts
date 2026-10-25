import { describe, expect, it } from 'vitest';
import { injectHead } from './injectHead';
import { pageMeta } from './pageMeta';
import { DEFAULT_DESCRIPTION } from './site';
import { robotsTxt, sitemapXml } from './sitemap';
import { structuredData } from './structuredData';

const template = [
  '<html lang="en"><head>',
  '<title>Default</title>',
  '<meta name="description" content="Default" />',
  '<link rel="canonical" href="https://documated.com/" />',
  '<meta property="og:url" content="https://documated.com/" />',
  '</head><body><div id="root"></div></body></html>',
].join('\n');

describe('pageMeta', () => {
  it('appends the site name and builds a canonical url without a trailing slash', () => {
    const meta = pageMeta({ title: 'About', path: '/about/?ref=x' });
    expect(meta.title).toBe('About | Documated');
    expect(meta.canonical).toBe('https://documated.com/about');
    expect(meta.description).toBe(DEFAULT_DESCRIPTION);
    expect(meta.robots).toBeNull();
  });

  it('drops the canonical link on noindex pages', () => {
    const meta = pageMeta({
      title: 'Page not found',
      path: '/nope',
      noindex: true,
    });
    expect(meta.canonical).toBeNull();
    expect(meta.robots).toBe('noindex, follow');
  });
});

describe('injectHead', () => {
  const page = {
    path: '/about',
    html: '<h1>About $& us</h1>',
    styles: '<style data-emotion="css abc">.a{}</style>',
    meta: pageMeta({
      title: 'About',
      description: 'Fish & "chips" <b>',
      path: '/about',
    }),
    jsonLd: [{ name: '</script>' }],
  };
  const out = injectHead(template, page);

  it("replaces the template's head tags with the page's", () => {
    expect(out).toContain('<title>About | Documated</title>');
    expect(out).toContain('content="Fish &amp; &quot;chips&quot; &lt;b&gt;"');
    expect(out).toContain(
      '<link rel="canonical" href="https://documated.com/about" />'
    );
    expect(out).toContain(
      '<meta property="og:url" content="https://documated.com/about" />'
    );
  });

  it('inserts markup literally and marks the root with its path', () => {
    expect(out).toContain(
      '<div id="root" data-prerendered="/about"><h1>About $& us</h1></div>'
    );
    expect(out).toContain('<style data-emotion="css abc">');
  });

  it('escapes JSON-LD so it cannot close its script tag', () => {
    expect(out).toContain('{"name":"\\u003c/script>"}');
  });

  it('removes the canonical and adds robots on noindex pages', () => {
    const missing = injectHead(template, {
      ...page,
      meta: pageMeta({ title: 'x', path: '/x', noindex: true }),
    });
    expect(missing).not.toContain('rel="canonical"');
    expect(missing).toContain(
      '<meta name="robots" content="noindex, follow" />'
    );
  });
});

describe('sitemap and robots', () => {
  it('lists every page', () => {
    const xml = sitemapXml('2026-10-25');
    for (const path of ['/', '/process', '/about', '/contact']) {
      expect(xml).toContain(`<loc>https://documated.com${path}</loc>`);
    }
  });

  it('points robots.txt at the sitemap', () => {
    expect(robotsTxt()).toContain('Sitemap: https://documated.com/sitemap.xml');
  });
});

describe('structuredData', () => {
  it('gives inner pages a breadcrumb and the home page none', () => {
    expect(structuredData('/')).toEqual([]);
    const [crumbs] = structuredData('/process') as {
      itemListElement: { name: string }[];
    }[];
    expect(crumbs.itemListElement.map((item) => item.name)).toEqual([
      'Documated',
      'How we work',
    ]);
  });
});
