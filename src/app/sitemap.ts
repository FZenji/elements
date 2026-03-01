import { getAllSlugs } from '@/data/elements';
import type { MetadataRoute } from 'next';

const BASE_URL = 'https://elements.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs();

  const elementPages = slugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...elementPages,
  ];
}
