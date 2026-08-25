import { catalogCategories } from '@/lib/content/procedure-categories';
import { procedures } from '@/lib/content/procedures';
import { getResultRecords } from '@/lib/content/results';
import { specialists } from '@/lib/content/specialists';
import { images } from '@/lib/images';
import { absoluteUrl, publishedSocial, site, siteUrl } from '@/lib/site';

/**
 * Rutas indexables de la propuesta. La demo sigue en noindex
 * (app/layout.tsx y robots.ts); el sitemap existe para cuando
 * se quite ese bloque.
 */
export function sitemapPaths() {
  return [
    '/',
    '/procedimientos',
    ...catalogCategories.map((category) => category.href),
    ...procedures.map((procedure) => `/procedimientos/${procedure.slug}`),
    '/especialistas',
    ...specialists.map((person) => `/especialistas/${person.slug}`),
    '/resultados',
    ...getResultRecords().map((record) => `/resultados/${record.id}`),
    '/la-clinica',
    '/tu-proceso',
    '/tu-proceso/financiacion',
    '/tu-proceso/preguntas-frecuentes',
    '/agendar-valoracion',
    '/politica-de-privacidad',
    '/terminos-y-condiciones',
    '/politica-de-cookies',
  ];
}

export function organizationId() {
  return `${siteUrl()}/#clinic`;
}

export function clinicJsonLd() {
  return {
    '@type': 'MedicalClinic',
    '@id': organizationId(),
    name: site.name,
    legalName: site.legalName,
    taxID: site.nit,
    description: site.description,
    url: siteUrl(),
    image: absoluteUrl(images.heroSede.src),
    telephone: site.contact.phone.href.replace('tel:', ''),
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Cra. 48 (Av. Las Vegas) # 32 B Sur 30',
      addressLocality: 'Envigado',
      addressRegion: 'Antioquia',
      addressCountry: 'CO',
    },
    medicalSpecialty: 'PlasticSurgery',
    sameAs: publishedSocial.map((item) => item.href),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '11:00',
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    '@type': 'WebSite',
    name: site.name,
    url: siteUrl(),
    inLanguage: site.locale,
    publisher: { '@id': organizationId() },
  };
}

export function siteGraphJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [clinicJsonLd(), websiteJsonLd()],
  };
}

