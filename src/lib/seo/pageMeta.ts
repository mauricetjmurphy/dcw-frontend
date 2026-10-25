import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from './site';

export interface PageMetaInput {
  /** The page's own title; the home page passes its full title instead. */
  title: string;
  description?: string;
  path: string;
  /** Keep pages like the 404 out of search results. */
  noindex?: boolean;
  /** The home page's title stands alone, without the site name appended. */
  standalone?: boolean;
}

export interface PageMeta {
  title: string;
  description: string;
  /** Null on noindex pages: noindex plus canonical are mixed signals. */
  canonical: string | null;
  /** The page's own address, for share previews. */
  url: string;
  robots: string | null;
}

export function pageMeta({
  title,
  description,
  path,
  noindex,
  standalone,
}: PageMetaInput): PageMeta {
  const url = SITE_URL + canonicalPath(path);
  return {
    title: standalone ? title : `${title} | ${SITE_NAME}`,
    description: description?.trim() || DEFAULT_DESCRIPTION,
    canonical: noindex ? null : url,
    url,
    robots: noindex ? 'noindex, follow' : null,
  };
}

function canonicalPath(path: string): string {
  const bare = path.split(/[?#]/)[0] || '/';
  return bare.length > 1 ? bare.replace(/\/+$/, '') : '/';
}
