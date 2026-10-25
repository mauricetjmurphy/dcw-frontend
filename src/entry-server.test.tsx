import { describe, expect, it } from 'vitest';
import { render } from './entry-server';

describe('render', () => {
  it('prerenders a page with its own content, head and styles', () => {
    const page = render('/process');
    expect(page.status).toBe(200);
    expect(page.html).toContain('How we work');
    expect(page.html).toContain('Discover');
    expect(page.meta.title).toBe('How we work | Documated');
    expect(page.styles).toContain('data-emotion');
  });

  it('renders the not-found page with a 404 for unknown paths', () => {
    const page = render('/no-such-page');
    expect(page.status).toBe(404);
    expect(page.meta.robots).toBe('noindex, follow');
  });
});
