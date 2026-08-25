/**
 * Configuración del sitio.
 *
 * Principio de reutilización · docs/04-DESIGN-SYSTEM.md §34:
 * ningún componente contiene un literal de marca. El nombre, la
 * navegación, la etiqueta del CTA y los datos de contacto viven
 * aquí, de modo que adaptar el sistema a otra clínica sea editar
 * este archivo y los tokens, no los componentes.
 *
 * TODOS los datos de contacto están verificados en la web pública
 * actual (docs/01-AUDITORIA-CONTENIDO.md §7 y
 * docs/02-INVENTARIO-RECURSOS.md §9.9). No se ha inventado ninguno.
 * Lo que no está disponible se declara explícitamente como null.
 */

export type NavItem = {
  label: string;
  /** Ruta definida en docs/03-ARQUITECTURA.md §4. Ver nota de rutas más abajo. */
  href: string;
  children?: NavItem[];
};

/**
 * Navegación principal · docs/03-ARQUITECTURA.md §3.5
 *
 * Inicio, cinco secciones y un CTA. La etiqueta coincide con
 * la página /la-clinica.
 *
 * Inicio, procedimientos, agendar valoración, la clínica,
 * especialistas, resultados, tu proceso y las páginas legales
 * ya existen.
 */
export const mainNav: NavItem[] = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Procedimientos',
    href: '/procedimientos',
    children: [
      { label: 'Todos los procedimientos', href: '/procedimientos' },
      { label: 'Faciales', href: '/procedimientos/faciales' },
      { label: 'Corporales', href: '/procedimientos/corporales' },
      { label: 'Belleza íntima', href: '/procedimientos/belleza-intima' },
      { label: 'Estéticos', href: '/procedimientos/esteticos' },
    ],
  },
  { label: 'Especialistas', href: '/especialistas' },
  { label: 'La clínica', href: '/la-clinica' },
  { label: 'Resultados', href: '/resultados' },
  {
    label: 'Tu proceso',
    href: '/tu-proceso',
    children: [
      { label: 'El proceso', href: '/tu-proceso' },
      { label: 'Financiación', href: '/tu-proceso/financiacion' },
      { label: 'Preguntas frecuentes', href: '/tu-proceso/preguntas-frecuentes' },
    ],
  },
];

export const site = {
  name: 'Clínica Nova',

  /** Razón social publicada en el reglamento interno de la clínica. */
  legalName: 'Clínica Plástica y Estética Nova S.A.S.',

  /** NIT publicado en /medios-de-pago/. */
  nit: '900326211',

  /** Concepto verbal aprobado · docs/00-DIRECCION-PROYECTO.md */
  tagline: 'Precisión médica. Elegancia humana.',

  description:
    'Clínica de cirugía plástica y estética en Envigado, Antioquia. Procedimientos corporales, faciales, de belleza íntima y estéticos.',

  locale: 'es-CO',

  /**
   * CTA único del sitio · docs/04-DESIGN-SYSTEM.md §13.2
   * La etiqueta es invariable en toda la web.
   */
  cta: {
    label: 'Agendar valoración',
    href: '/agendar-valoracion',
  },

  contact: {
    /** Sede verificada. */
    venue: 'NOVA Torre Médica, 2.º y 3.er piso',
    address: 'Cra. 48 (Av. Las Vegas) # 32 B Sur 30, Envigado, Antioquia, Colombia',

    /** Fijo con extensiones. Hoy es texto plano sin enlace: se convierte en `tel:`. */
    phone: {
      display: '(604) 604 6233',
      href: 'tel:+576046046233',
      extensions: ['100', '101'],
    },

    /** Celular, el mismo número que WhatsApp. */
    mobile: {
      display: '314 779 6424',
      href: 'tel:+573147796424',
    },

    whatsapp: {
      display: '+57 314 779 6424',
      number: '573147796424',
      href: 'https://api.whatsapp.com/send?phone=573147796424',
    },

    /** No aparece en ninguna fuente disponible. [CONTENIDO POR CONFIRMAR] */
    email: null,

    /** Publicado en /contacto/. */
    openingHours: [
      { days: 'Lunes a viernes', hours: '8:00 a. m. a 5:00 p. m.' },
      { days: 'Sábados', hours: '8:00 a. m. a 11:00 a. m.' },
    ],
  },

  /**
   * Instagram y WhatsApp están publicados en clinicanova.com.co.
   * Facebook se nombra en las FAQ. TikTok y YouTube no aparecen
   * como enlace en esa web: son los perfiles públicos que coinciden
   * con la marca en el área de Medellín. Confirmar antes de producción.
   */
  social: [
    {
      label: 'Instagram',
      icon: 'instagram' as const,
      href: 'https://www.instagram.com/clinicanova/',
      official: true,
    },
    {
      label: 'Facebook',
      icon: 'facebook' as const,
      href: 'https://www.facebook.com/ClinicaNovaColombia/',
      official: true,
    },
    {
      label: 'TikTok',
      icon: 'tiktok' as const,
      href: 'https://www.tiktok.com/@clinicanova.med',
      official: false,
    },
    {
      label: 'YouTube',
      icon: 'youtube' as const,
      href: 'https://www.youtube.com/channel/UCdLfHdvYPBIp2WTfFTXG5KQ',
      official: false,
    },
    {
      label: 'WhatsApp',
      icon: 'whatsapp' as const,
      href: 'https://api.whatsapp.com/send?phone=573147796424',
      official: true,
    },
  ],

  legal: {
    privacy: { label: 'Política de privacidad', href: '/politica-de-privacidad' },
    terms: { label: 'Términos y condiciones', href: '/terminos-y-condiciones' },
    cookies: { label: 'Política de cookies', href: '/politica-de-cookies' },
  },
} as const;

/** Solo perfiles verificados en la web pública. TikTok y YouTube quedan fuera hasta confirmarlos. */
export const publishedSocial = site.social.filter((item) => item.official);

export function mapsHref() {
  const query = `${site.contact.venue}, ${site.contact.address}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function siteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
}

export function absoluteUrl(path: string) {
  return new URL(path, `${siteUrl()}/`).href;
}
