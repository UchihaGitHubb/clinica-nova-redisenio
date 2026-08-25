import {
  catalogCategories,
  type ProcedureCategory,
  type ProcedureCategoryId,
} from '@/lib/content/procedure-categories';
import { site } from '@/lib/site';

export type { ProcedureCategoryId };

export type Procedure = {
  slug: string;
  name: string;
  category: ProcedureCategoryId;
  /** Definición en una frase. */
  definition: string;
  includes: readonly string[];
  /** Tratamiento estético complementario, no quirúrgico. */
  source?: 'aliado';
};

export const PENDING_SPEC = 'Por confirmar en valoración';

export const specLabels = [
  'Duración',
  'Anestesia',
  'Estancia',
  'Recuperación',
  'Regreso a la actividad',
] as const;

const sharedSurgical = [
  'Póliza de complicaciones por 45 días',
  'Exámenes prequirúrgicos',
  'Cita con anestesiólogo',
  'Fotos del antes y después',
  'Revisiones según recomendación del cirujano plástico por 1 año',
] as const;

const sharedIntimate = [
  'Exámenes prequirúrgicos (si requiere)',
  'Cita con anestesiólogo (si requiere)',
  'Revisiones según recomendación del ginecólogo por 1 año',
] as const;

export const procedures: readonly Procedure[] = [
  {
    slug: 'mamoplastia-de-aumento',
    name: 'Mamoplastia de aumento',
    category: 'corporales',
    definition: 'Procedimiento por el cual se busca aumentar el volumen de los senos.',
    includes: [
      ...sharedSurgical.slice(0, 3),
      'Brasier postoperatorio',
      'Prótesis marca Motiva',
      ...sharedSurgical.slice(3),
    ],
  },
  {
    slug: 'mastopexia',
    name: 'Mastopexia',
    category: 'corporales',
    definition:
      'Levantamiento de los senos para mejorar su forma, reorganizando el tejido mamario o colocando prótesis para restituir el volumen.',
    includes: [
      ...sharedSurgical.slice(0, 3),
      '2 sesiones en cámara hiperbárica',
      'Brasier postoperatorio',
      'Prótesis marca Motiva (si requiere)',
      ...sharedSurgical.slice(3),
    ],
  },
  {
    slug: 'mamoplastia-de-reduccion',
    name: 'Mamoplastia de reducción',
    category: 'corporales',
    definition:
      'Elimina el exceso de grasa, tejido y piel de las mamas, para aliviar la molestia y mejorar la apariencia.',
    includes: [
      ...sharedSurgical.slice(0, 3),
      'Brasier postoperatorio',
      ...sharedSurgical.slice(3),
    ],
  },
  {
    slug: 'liposuccion',
    name: 'Liposucción',
    category: 'corporales',
    definition:
      'Mejoramiento del contorno corporal a través de la extracción de grasa de diversos sitios del cuerpo, usando una cánula asistida por ultrasonido o láser.',
    includes: [
      ...sharedSurgical.slice(0, 3),
      '2 citas con nutricionista: 1 antes y 1 después de la cirugía',
      'Faja postquirúrgica',
      'Medias antiembólicas',
      'Fotos del antes y después',
      '10 masajes postoperatorios',
      'Revisiones según recomendación del cirujano plástico por 1 año',
    ],
  },
  {
    slug: 'abdominoplastia',
    name: 'Abdominoplastia',
    category: 'corporales',
    definition: 'Eliminación de grasa y plicatura de la pared abdominal.',
    includes: [
      ...sharedSurgical.slice(0, 3),
      '2 sesiones en cámara hiperbárica',
      'Medias antiembólicas',
      'Faja postquirúrgica',
      'Ambulancia dentro del Área Metropolitana',
      'Fotos del antes y después',
      'Enfermera la primera noche (12 horas)',
      'Revisiones según recomendación del cirujano plástico por 1 año',
    ],
  },
  {
    slug: 'lipoabdominoplastia',
    name: 'Lipoabdominoplastia',
    category: 'corporales',
    definition:
      'Combina la eliminación del exceso de grasa y piel en el abdomen con la definición y el contorno de la figura.',
    includes: [
      ...sharedSurgical.slice(0, 3),
      '2 sesiones en cámara hiperbárica',
      'Medias antiembólicas',
      'Faja postquirúrgica',
      'Ambulancia dentro del Área Metropolitana',
      'Fotos del antes y después',
      'Enfermera la primera noche (12 horas)',
      'Revisiones según recomendación del cirujano plástico por 1 año',
    ],
  },
  {
    slug: 'braquioplastia',
    name: 'Braquioplastia',
    category: 'corporales',
    definition:
      'Mejora la parte posterior del brazo, eliminando el exceso de piel y tejido graso.',
    includes: [...sharedSurgical],
  },
  {
    slug: 'ginecomastia',
    name: 'Ginecomastia',
    category: 'corporales',
    definition: 'Reducción de las glándulas mamarias en los hombres.',
    includes: [
      ...sharedSurgical.slice(0, 3),
      'Chaleco postquirúrgico',
      ...sharedSurgical.slice(3),
    ],
  },
  {
    slug: 'cruroplastia',
    name: 'Cruroplastia',
    category: 'corporales',
    definition:
      'Mejora el contorno de los muslos, eliminando grasa y el excedente de piel en la cara interna.',
    includes: [...sharedSurgical],
  },
  {
    slug: 'rinoplastia',
    name: 'Rinoplastia',
    category: 'faciales',
    definition:
      'Intervención quirúrgica para corregir alteraciones anatómicas y funcionales de la nariz.',
    includes: [...sharedSurgical],
  },
  {
    slug: 'blefaroplastia',
    name: 'Blefaroplastia',
    category: 'faciales',
    definition:
      'Remodela el párpado superior e inferior, quitando el exceso de tejido.',
    includes: [...sharedSurgical],
  },
  {
    slug: 'mentoplastia',
    name: 'Mentoplastia',
    category: 'faciales',
    definition:
      'Mejora la proyección del mentón para una mayor armonía en el rostro.',
    includes: [...sharedSurgical],
  },
  {
    slug: 'bichectomia',
    name: 'Bichectomía',
    category: 'faciales',
    definition:
      'Extrae las bolsas de Bichat en las mejillas, estilizando la mandíbula y marcando el tercio medio.',
    includes: [...sharedSurgical],
  },
  {
    slug: 'ritidoplastia',
    name: 'Ritidoplastia',
    category: 'faciales',
    definition:
      'Rejuvenece el rostro mediante la reposición de tejidos blandos del rostro y el cuello.',
    includes: [...sharedSurgical],
  },
  {
    slug: 'lipopapada',
    name: 'Lipopapada',
    category: 'faciales',
    definition:
      'Procedimiento mínimamente invasivo para eliminar el exceso de grasa debajo del mentón y definir el contorno.',
    includes: [...sharedSurgical],
  },
  {
    slug: 'cantoplastia',
    name: 'Cantoplastia',
    category: 'faciales',
    definition:
      'Eleva el ángulo exterior del ojo, donde se unen el párpado superior y el inferior, para corregir su descenso.',
    includes: [...sharedSurgical],
  },
  {
    slug: 'otoplastia',
    name: 'Otoplastia',
    category: 'faciales',
    definition: 'Cambia la forma, la posición o el tamaño de las orejas.',
    includes: [...sharedSurgical],
  },
  {
    slug: 'frontoplastia',
    name: 'Frontoplastia',
    category: 'faciales',
    definition: 'Cirugía de reducción de frente, indicada para disminuir su tamaño.',
    includes: [...sharedSurgical],
  },
  {
    slug: 'cervicoplastia',
    name: 'Cervicoplastia',
    category: 'faciales',
    definition:
      'Mejora la apariencia del cuello, corrigiendo flacidez, líneas verticales o acumulación de grasa.',
    includes: [...sharedSurgical],
  },
  {
    slug: 'labioplastia',
    name: 'Labioplastia',
    category: 'belleza-intima',
    definition:
      'También llamada ninfoplastia: busca disminuir el tamaño de los labios vaginales.',
    includes: [...sharedIntimate],
  },
  {
    slug: 'vaginoplastia',
    name: 'Vaginoplastia',
    category: 'belleza-intima',
    definition:
      'Estrechamiento vaginal: repara la distensión causada por los partos, como la dilatación del canal y la debilidad de la musculatura.',
    includes: [...sharedIntimate],
  },
  {
    slug: 'blanqueamiento-vaginal',
    name: 'Blanqueamiento vaginal',
    category: 'belleza-intima',
    definition: 'Tratamiento de la pigmentación en la zona íntima.',
    includes: [],
  },
  {
    slug: 'pexia-de-cejas',
    name: 'Pexia de cejas',
    category: 'esteticos',
    source: 'aliado',
    definition: 'Levantamiento de cejas para redefinir la mirada.',
    includes: [],
  },
  {
    slug: 'realce-de-pomulos',
    name: 'Realce de pómulos',
    category: 'esteticos',
    source: 'aliado',
    definition: 'Aporta proyección y volumen a los pómulos.',
    includes: [],
  },
  {
    slug: 'renovacion-facial',
    name: 'Renovación facial (plasma, láser)',
    category: 'esteticos',
    source: 'aliado',
    definition: 'Renovación de la piel del rostro con plasma o láser.',
    includes: [],
  },
  {
    slug: 'botox-acido-hialuronico',
    name: 'Bótox / ácido hialurónico',
    category: 'esteticos',
    source: 'aliado',
    definition: 'Suaviza líneas de expresión o aporta volumen con ácido hialurónico.',
    includes: [],
  },
  {
    slug: 'mejoramiento-de-cicatrices',
    name: 'Mejoramiento de cicatrices, lunares, manchas y acné',
    category: 'esteticos',
    source: 'aliado',
    definition:
      'Atención de cicatrices, lunares, manchas y acné.',
    includes: [],
  },
  {
    slug: 'tratamiento-de-varices',
    name: 'Tratamiento de várices, arañitas, fibrosis, estrías y celulitis',
    category: 'esteticos',
    source: 'aliado',
    definition:
      'Atención de várices, arañitas, fibrosis, estrías y celulitis.',
    includes: [],
  },
  {
    slug: 'masajes-postquirurgicos',
    name: 'Masajes postquirúrgicos',
    category: 'esteticos',
    source: 'aliado',
    definition: 'Masajes de acompañamiento en la recuperación postquirúrgica.',
    includes: [],
  },
  {
    slug: 'planes-de-adelgazamiento',
    name: 'Planes de adelgazamiento controlado',
    category: 'esteticos',
    source: 'aliado',
    definition:
      'Acompañamiento para un adelgazamiento controlado.',
    includes: [],
  },
] as const;

export const proceduresCopy = {
  index: {
    overline: 'Procedimientos',
    title: ['Cuatro áreas.', 'Un mismo', 'criterio.'],
    subtitle:
      'Faciales, corporales, belleza íntima y estéticos. Elige por zona o busca el procedimiento por su nombre.',
  },
  catalogOverline: 'Catálogo',
  catalogTitle: 'Todos los procedimientos',
  complementaryOverline: 'Complementarios',
  complementaryTitle: 'Tratamientos complementarios',
  complementaryBody:
    'Cuidado de piel, volumen y recuperación. La indicación se confirma en valoración.',
  allyNotice:
    'Tratamiento estético complementario. La indicación se confirma en valoración.',
  medicalNotice:
    'Cada caso es individual. La indicación, el plan y los tiempos se definen en la valoración con el equipo médico.',
  confidentiality:
    'La consulta de belleza íntima es confidencial. El abordaje es discreto y se define contigo en valoración.',
  includesTitle: 'Qué incluye',
  specTitle: 'Ficha técnica',
  relatedTitle: 'También puedes considerar',
  asideHint: 'El siguiente paso es una conversación.',
} as const;

export const categoryCopy: Record<
  ProcedureCategoryId,
  { overline: string; title: string; intro: string }
> = {
  faciales: {
    overline: 'Faciales',
    title: 'Procedimientos del rostro.',
    intro: 'La indicación se define en valoración.',
  },
  corporales: {
    overline: 'Corporales',
    title: 'Procedimientos del cuerpo.',
    intro: 'La indicación se define en valoración.',
  },
  'belleza-intima': {
    overline: 'Belleza íntima',
    title: 'Procedimientos de belleza íntima.',
    intro: 'La indicación se define en valoración.',
  },
  esteticos: {
    overline: 'Estéticos',
    title: 'Procedimientos estéticos.',
    intro: 'La indicación se confirma en valoración.',
  },
};

export const reservedCategorySlugs = catalogCategories.map((item) => item.id);

export function isCategorySlug(slug: string): slug is ProcedureCategoryId {
  return reservedCategorySlugs.some((id) => id === slug);
}

export function getCategory(id: ProcedureCategoryId): ProcedureCategory {
  const category = catalogCategories.find((item) => item.id === id);
  if (!category) {
    throw new Error(`Categoría desconocida: ${id}`);
  }
  return category;
}

export const complementaryTreatments = procedures.filter((item) => item.source === 'aliado');

export function getProceduresByCategory(id: ProcedureCategoryId): Procedure[] {
  return procedures.filter((item) => item.category === id);
}

export function getProcedure(slug: string): Procedure | undefined {
  return procedures.find((item) => item.slug === slug);
}

export function getRelated(procedure: Procedure, limit = 4): Procedure[] {
  return getProceduresByCategory(procedure.category)
    .filter((item) => item.slug !== procedure.slug)
    .slice(0, limit);
}

export function getAdjacent(procedure: Procedure): {
  previous: Procedure | null;
  next: Procedure | null;
} {
  const list = getProceduresByCategory(procedure.category);
  const index = list.findIndex((item) => item.slug === procedure.slug);
  return {
    previous: index > 0 ? (list[index - 1] ?? null) : null,
    next: index >= 0 && index < list.length - 1 ? (list[index + 1] ?? null) : null,
  };
}

export function procedureHref(slug: string): string {
  return `/procedimientos/${slug}`;
}

export function categoryHref(id: ProcedureCategoryId): string {
  return `/procedimientos/${id}`;
}

export function agendarHref(slug?: string): string {
  if (!slug) return site.cta.href;
  return `${site.cta.href}?procedimiento=${slug}`;
}

export function whatsappHref(name?: string): string {
  const text = name
    ? `Hola, quiero una cita de valoración sobre ${name}. Gracias.`
    : 'Hola, quiero una cita de valoración. Gracias.';
  const url = new URL(site.contact.whatsapp.href);
  url.searchParams.set('text', text);
  return url.toString();
}
