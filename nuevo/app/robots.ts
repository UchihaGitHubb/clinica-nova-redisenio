import type { MetadataRoute } from 'next';
import { absoluteUrl, siteUrl } from '@/lib/site';

/**
 * La propuesta no debe indexarse frente al sitio real.
 * Al pasar a producción, abrir el rastreo y quitar el noindex
 * de app/layout.tsx.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
    sitemap: absoluteUrl('/sitemap.xml'),
    host: siteUrl(),
  };
}
