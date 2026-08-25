import type { MetadataRoute } from 'next';
import { sitemapPaths } from '@/lib/seo';
import { absoluteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapPaths().map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.6,
  }));
}
