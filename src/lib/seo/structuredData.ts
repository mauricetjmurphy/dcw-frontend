import { PAGES, SITE_NAME, SITE_URL } from './site';

/**
 * Schema.org data for one page, beyond the site-wide Organization and
 * WebSite graph in index.html: a breadcrumb trail on every inner page.
 */
export function structuredData(path: string): object[] {
  const page = PAGES.find((p) => p.path === path);
  if (!page || path === '/') return [];
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: SITE_NAME,
          item: `${SITE_URL}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: page.name,
          item: SITE_URL + path,
        },
      ],
    },
  ];
}
