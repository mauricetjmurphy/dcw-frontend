// Build-time only (scripts/prerender.mjs): never hot-reloaded, so it may export helpers.
/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';
import AppProvider from './providers';
import AppRoutes from './routes';
import {
  createHeadCollector,
  HeadCollectorContext,
} from './lib/seo/HeadCollector';
import { pageMeta } from './lib/seo/pageMeta';

export { injectHead } from './lib/seo/injectHead';
export { structuredData } from './lib/seo/structuredData';
export { sitemapXml, robotsTxt } from './lib/seo/sitemap';
export { PAGES } from './lib/seo/site';

/** One page to static HTML. Runs in Node at build time, never in a browser. */
export function render(url: string) {
  // The browser's default Emotion cache uses the same key, so it adopts these
  // styles on hydration instead of inserting them again.
  const cache = createCache({ key: 'css' });
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache);
  const collector = createHeadCollector();

  const html = renderToString(
    <StrictMode>
      <CacheProvider value={cache}>
        <HeadCollectorContext.Provider value={collector}>
          <StaticRouter location={url}>
            <AppProvider>
              <AppRoutes />
            </AppProvider>
          </StaticRouter>
        </HeadCollectorContext.Provider>
      </CacheProvider>
    </StrictMode>
  );

  const meta = collector.head.meta;
  return {
    html,
    styles: constructStyleTagsFromChunks(extractCriticalToChunks(html)),
    meta:
      meta ?? pageMeta({ title: 'Page not found', path: url, noindex: true }),
    status: meta?.robots ? 404 : 200,
  };
}
