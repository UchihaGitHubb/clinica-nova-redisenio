/**
 * Manifiesto de fotografía.
 *
 * Torre, equipo, retratos de especialistas y casos de resultados
 * provienen de la web pública actual. Hero y cards de procedimientos usan fotografías
 * editoriales generadas para la propuesta: el material original no
 * supera 700×500 px y no sostiene un recuadro a sangre. Los alts
 * describen lo que se ve, sin afirmar que la imagen sea la sede real.
 *
 * Centralizar aquí las rutas, dimensiones y textos alternativos
 * cumple §34.3/2: ningún componente contiene una ruta de imagen fija.
 */

export type ImageAsset = {
  src: string;
  width: number;
  height: number;
  /** Descriptivo y verificable. Nunca afirma más de lo que se ve. */
  alt: string;
};

export const images = {
  /**
   * Hero. Fotografía editorial generada para la propuesta: un hall
   * contemporáneo con madera, escalera y luz natural. El original de
   * la sede (700×500) no sostiene un recuadro a sangre; se conserva
   * en /public/images/hero/sede-interior.jpg.
   */
  heroSede: {
    src: '/images/hero/sede-editorial.jpg',
    width: 1536,
    height: 1024,
    alt: 'Hall de una clínica de estética contemporánea, con madera, escalera y luz natural',
  },

  heroInterior: {
    src: '/images/hero/sede-interior.jpg',
    width: 700,
    height: 500,
    alt: 'Interior de la sede de Clínica Nova',
  },

  /** Vista aérea del edificio: sostiene el dato de la NOVA Torre Médica. */
  torreMedica: {
    src: '/images/clinica/torre-medica.jpg',
    width: 700,
    height: 500,
    alt: 'Vista aérea del edificio que alberga la sede de Clínica Nova en Envigado',
  },

  /**
   * Equipo en quirófano. Única fotografía real del equipo médico.
   * El paciente está íntegramente cubierto y no hay anatomía ni
   * instrumental visible, de modo que no incurre en la prohibición
   * de fotografía quirúrgica explícita de §17.8.
   */
  equipo: {
    src: '/images/clinica/equipo-quirurgico.jpg',
    width: 700,
    height: 500,
    alt: 'Dos profesionales del equipo de Clínica Nova durante una intervención en quirófano',
  },

  /** Card Faciales. Espacio de consulta, sin anatomía ni paciente. */
  facialConsult: {
    src: '/images/procedimientos/faciales.jpg',
    width: 1024,
    height: 1536,
    alt: 'Sala de consulta facial: camilla vacía, espejo y luz natural',
  },

  /** Card Corporales. Arquitectura de volumen, sin anatomía. */
  corporalSpace: {
    src: '/images/procedimientos/corporales.jpg',
    width: 1024,
    height: 1536,
    alt: 'Corredor interior de clínica, con banco de madera y luz rasante',
  },
} as const satisfies Record<string, ImageAsset>;

export const videos = {
  /** Vídeo original del hero de la web actual. */
  heroBanner: {
    src: '/videos/banner-web.mp4',
    poster: '/images/hero/sede-editorial.jpg',
    alt: 'Recorrido visual de Clínica Nova',
  },
} as const;

export const logos = {
  /** Cabecera sólida y pie. 1721×500 original, reescalado a 688 px. */
  color: {
    src: '/images/logos/clinica-nova.png',
    width: 688,
    height: 200,
    alt: 'Clínica Nova · Clínica Plástica & Estética',
  },
  /** Cabecera transparente sobre el hero. 8000×2925 original. */
  white: {
    src: '/images/logos/clinica-nova-blanco.png',
    width: 688,
    height: 252,
    alt: 'Clínica Nova · Clínica Plástica & Estética',
  },
  /** Isotipo oficial (ICONO-WEB). No se recolorea. */
  icon: {
    src: '/images/logos/icono-web-192x192.png',
    width: 192,
    height: 192,
    alt: 'Clínica Nova',
  },
} as const satisfies Record<string, ImageAsset>;
