import type { PageMeta } from './pageMeta';

const attr = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
const text = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const json = (value: unknown) => JSON.stringify(value).replace(/</g, '\\u003c');

/**
 * Replaces `pattern` with `text` literally. A string replacement would read
 * $&, $', $` and $$ inside page text (a price, a title) as patterns.
 */
function put(html: string, pattern: string | RegExp, text: string): string {
  return html.replace(pattern, () => text);
}

function replaceTag(html: string, pattern: RegExp, tag: string): string {
  return pattern.test(html)
    ? put(html, pattern, tag)
    : put(html, '</head>', `${tag}\n</head>`);
}

export interface PrerenderedPage {
  path: string;
  html: string;
  meta: PageMeta;
  /** Emotion's <style> tags for the markup in `html`. */
  styles: string;
  jsonLd: object[];
  /** Extra <head> tags, such as a font preload. */
  headTags?: string;
}

/** One prerendered page: the built index.html with this page's head and markup. */
export function injectHead(template: string, page: PrerenderedPage): string {
  const { meta } = page;
  let out = put(
    template,
    /<title>[^<]*<\/title>/,
    `<title>${text(meta.title)}</title>`
  );
  const tag = (key: string, name: string, content: string) =>
    (out = replaceTag(
      out,
      new RegExp(`<meta\\s+${key}="${name}"[^>]*/>`),
      `<meta ${key}="${name}" content="${attr(content)}" />`
    ));
  tag('name', 'description', meta.description);
  tag('property', 'og:title', meta.title);
  tag('property', 'og:description', meta.description);
  tag('property', 'og:url', meta.url);
  tag('name', 'twitter:title', meta.title);
  tag('name', 'twitter:description', meta.description);
  const canonical = /<link\s+rel="canonical"[^>]*\/>\n?/;
  out = meta.canonical
    ? replaceTag(
        out,
        canonical,
        `<link rel="canonical" href="${attr(meta.canonical)}" />`
      )
    : put(out, canonical, '');
  if (meta.robots)
    out = put(
      out,
      '</head>',
      `<meta name="robots" content="${attr(meta.robots)}" />\n</head>`
    );
  for (const item of page.jsonLd) {
    out = put(
      out,
      '</head>',
      `<script type="application/ld+json">${json(item)}</script>\n</head>`
    );
  }
  if (page.headTags) out = put(out, '</head>', `${page.headTags}\n</head>`);
  out = put(out, '</head>', `${page.styles}\n</head>`);
  // main.tsx hydrates only when the address matches the page that was
  // prerendered: CloudFront serves index.html for unknown paths too.
  return put(
    out,
    '<div id="root"></div>',
    `<div id="root" data-prerendered="${attr(page.path)}">${page.html}</div>`
  );
}
