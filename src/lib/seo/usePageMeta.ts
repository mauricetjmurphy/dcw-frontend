import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeadCollectorContext } from './HeadCollector';
import { pageMeta, type PageMetaInput } from './pageMeta';

/** Finds the head tag matching `selector`, adding it if it isn't there yet. */
function headTag(selector: string, create: () => HTMLElement): HTMLElement {
  return (
    document.head.querySelector<HTMLElement>(selector) ??
    document.head.appendChild(create())
  );
}

function setMeta(
  attribute: 'name' | 'property',
  key: string,
  content: string
): void {
  headTag(`meta[${attribute}="${key}"]`, () => {
    const tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    return tag;
  }).setAttribute('content', content);
}

/**
 * The page's title, description, canonical link and share tags. The
 * prerender reads them through HeadCollectorContext; in the browser they
 * update as the visitor navigates.
 */
export function usePageMeta(input: Omit<PageMetaInput, 'path'>): void {
  const location = useLocation();
  const meta = pageMeta({ ...input, path: location.pathname });
  const { title, description, canonical, url, robots } = meta;
  // Server rendering runs no effects: report the head to the prerender script.
  useContext(HeadCollectorContext)?.setMeta(meta);
  useEffect(() => {
    document.title = title;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    if (canonical) {
      headTag('link[rel="canonical"]', () => {
        const link = document.createElement('link');
        link.rel = 'canonical';
        return link;
      }).setAttribute('href', canonical);
    } else {
      document.head.querySelector('link[rel="canonical"]')?.remove();
    }
    if (robots) setMeta('name', 'robots', robots);
    else document.head.querySelector('meta[name="robots"]')?.remove();
  }, [title, description, canonical, url, robots]);
}
