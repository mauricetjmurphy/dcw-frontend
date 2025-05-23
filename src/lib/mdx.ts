interface ImagePropsWithOptionalAlt {
  src: string;
  alt?: string;
}

// Utility function to statically import MDX files from "blog" or "work" directories
async function loadEntries<T extends { date: string }>(
  directory: 'blog' | 'work',
  metaName: string
): Promise<Array<MDXEntry<T>>> {
  // Define glob imports for each directory
  const mdxFiles =
    directory === 'blog'
      ? import.meta.glob('../pages/blog/**/page.mdx')
      : import.meta.glob('../pages/work/**/page.mdx');

  const entries = await Promise.all(
    Object.keys(mdxFiles).map(async (filePath) => {
      try {
        const module: any = await mdxFiles[filePath]();
        const metadata = module[metaName] as T;

        // Build the href based on the directory and filename structure
        return {
          ...metadata,
          metadata,
          href: filePath
            .replace(`../pages/${directory}/`, '/')
            .replace('/page.mdx', ''),
        };
      } catch (error) {
        console.error(`Error loading file: ${filePath}`, error);
        return null; // Handle error in a way that fits your app
      }
    })
  );

  return entries
    .filter((entry) => entry !== null) // Remove any failed imports
    .sort((a, b) => b!.date.localeCompare(a!.date)); // Sort by date
}

export type MDXEntry<T> = T & { href: string; metadata: T };

export interface Article {
  date: string;
  title: string;
  description: string;
  author: {
    name: string;
    role: string;
    image: ImagePropsWithOptionalAlt;
  };
}

export interface CaseStudy {
  href?: string;
  date: string;
  client: string;
  title: string;
  description: string;
  summary: Array<string>;
  logo: string;
  image: ImagePropsWithOptionalAlt;
  service: string;
  testimonial: {
    author: {
      name: string;
      role: string;
    };
    content: string;
  };
}

// Load articles (MDX files) from the "blog" directory
export function loadArticles() {
  return loadEntries<Article>('blog', 'article');
}

// Load case studies (MDX files) from the "work" directory
export function loadCaseStudies() {
  return loadEntries<CaseStudy>('work', 'caseStudy');
}
