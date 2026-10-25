/** Where the site lives and what it's called: shared by pages and the build. */
export const SITE_URL = 'https://documated.com';
export const SITE_NAME = 'Documated';

/** Matches the description in index.html, for pages without their own. */
export const DEFAULT_DESCRIPTION =
  'Documated builds automations and small custom software products for businesses that still run on spreadsheets, inboxes and copy-paste. Based in Dublin.';

/**
 * Every page that is prerendered and listed in the sitemap. The home page is
 * written to index.html; the others to extensionless files (see
 * scripts/prerender.mjs for why).
 */
export const PAGES = [
  { path: '/', name: 'Home' },
  { path: '/process', name: 'How we work' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
];
