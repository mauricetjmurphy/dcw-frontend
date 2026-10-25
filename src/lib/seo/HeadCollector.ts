import { createContext } from 'react';
import type { PageMeta } from './pageMeta';

/** Server rendering only: the page's head, reported by usePageMeta. */
export function createHeadCollector() {
  const head: { meta: PageMeta | null } = { meta: null };
  return {
    head,
    setMeta: (meta: PageMeta) => {
      head.meta = meta;
    },
  };
}

export type HeadCollector = ReturnType<typeof createHeadCollector>;
export const HeadCollectorContext = createContext<HeadCollector | null>(null);
