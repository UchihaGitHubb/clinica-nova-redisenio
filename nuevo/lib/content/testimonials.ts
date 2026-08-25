/**
 * Testimonios.
 *
 * CONTENIDO REAL. Los cuatro testimonios del sitio actual están
 * transcritos íntegros en docs/01-AUDITORIA-CONTENIDO.md §5. No se ha
 * inventado ninguno, ni se ha alterado el sentido de ninguno.
 *
 * SELECCIÓN — se publican tres (§22.1 dispone tres columnas). Se
 * eligen los tres que requieren menos intervención sobre el texto
 * original, que es la posición más defendible ante la clínica.
 *
 * EDICIÓN APLICADA — la que prescriben R02 §9.6 y §22.4:
 *   · Luisa: corregida la errata «manos tan mágicas **as** del
 *     cirujano» → «las», y recortado «No duele ni un pelo», que es
 *     una afirmación sobre dolor postoperatorio y, destacada, se lee
 *     como promesa clínica implícita.
 *   · Diana y Vanesa: sin cambios.
 *
 * NO PUBLICADO — el cuarto testimonio, firmado también por «Diana»,
 * está disponible recortando «elegí la mejor clínica» (superlativo
 * prohibido por D00 §5). Se omite porque dos firmas iguales son
 * ambiguas —el propio audit no puede determinar si es la misma
 * persona (A01 §5)— y porque tres bastan para la retícula.
 *
 * ATRIBUCIÓN — nombre de pila, exactamente como los publica hoy la
 * clínica. §22.3 prohíbe inventar apellidos.
 *
 * PENDIENTE DE VALIDACIÓN — origen y consentimiento de publicación.
 * El sitio actual tiene instalado el plugin *Reviews Feed*, así que
 * podrían provenir de Google Reviews; si se confirma, conviene
 * citarlos con su fuente en lugar de transcribirlos (A01 §5).
 */

export type Testimonial = {
  id: string;
  quote: string;
  /** Nombre de pila, tal como lo publica la clínica. */
  name: string;
  /**
   * Contexto (procedimiento, plazo). No existe como dato
   * estructurado en ninguna fuente: lo único que hay son las
   * menciones dentro del propio texto. No se deduce ni se inventa.
   */
  context: string | null;
};

export const testimonials: Testimonial[] = [
  {
    id: 'diana',
    quote:
      'Solo tengo palabras de agradecimiento a todos ustedes. Las niñas de recepción, de admisiones, las enfermeras, ni se diga. Me quedo corta de palabras.',
    name: 'Diana',
    context: null,
  },
  {
    id: 'luisa',
    quote:
      'Yo me hice la mastopexia y la abdominoplastia. Muy buenos, recomendadísimos. Qué manos tan mágicas las del cirujano.',
    name: 'Luisa',
    context: null,
  },
  {
    id: 'vanesa',
    quote:
      'Yo me operé hace un año y me fue súper bien. En la Clínica son súper pendientes y la atención es divina. Súper recomendada.',
    name: 'Vanesa',
    context: null,
  },
];
