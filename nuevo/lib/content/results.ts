/**
 * Resultados.
 *
 * Voces: los tres testimonios publicados por la clínica.
 * Casos: pares antes/después de su galería, con autorización
 * de publicación. Sin plazos, especialistas ni relatos inventados.
 * Lipotransferencia aparece en la galería y no en el catálogo:
 * se muestra y enlaza a corporales.
 */

import type { ImageAsset } from '@/lib/images';
import {
  agendarHref,
  getProcedure,
  isCategorySlug,
  procedureHref,
} from '@/lib/content/procedures';
import { testimonials } from '@/lib/content/testimonials';
import { site } from '@/lib/site';

export const resultsCopy = {
  overline: 'Resultados',
  title: ['Conoce nuestros', 'resultados.'],
  subtitle:
    'Desliza la línea para ver el antes y el después. Cada caso es de un paciente distinto.',
  notice:
    'Cada caso es individual. Los resultados varían según cada paciente. Fotografías publicadas con autorización.',
  casesOverline: 'Casos',
  casesTitle: ['Antes', 'y después.'],
  casesHint: 'Desliza para comparar',
  voicesOverline: 'Voces',
  voicesTitle: ['Tres pacientes.', 'Sus palabras.'],
  ctaTitle: 'El siguiente paso es una conversación.',
  caseOverline: 'Resultados',
  caseCta: 'Ver procedimiento',
  caseNote:
    'El comparador es lo publicado. Especialista y tiempos se confirman con la clínica. El párrafo es una propuesta de redacción a partir de la definición del procedimiento.',
  pendingSlots: [
    { label: 'Especialista', value: 'Por confirmar' },
    { label: 'Tiempos', value: 'Por confirmar' },
  ],
  storyTitle: 'Lectura del caso',
  relatedTitle: 'Otros casos',
  relatedCta: 'Ver todos los resultados',
} as const;

export const resultVoices = testimonials;

export type ResultCase = {
  id: string;
  before: ImageAsset;
  after: ImageAsset;
};

export type ResultGroup = {
  id: string;
  label: string;
  href: string;
  /** Si no hay ficha de catálogo, el enlace no debe decir “procedimiento”. */
  cta?: string;
  cases: ResultCase[];
};

function pair(
  id: string,
  procedure: string,
  ext: 'jpg' | 'png',
  width: number,
  height: number,
): ResultCase {
  return {
    id,
    before: {
      src: `/images/resultados/${id}-antes.${ext}`,
      width,
      height,
      alt: `Antes, ${procedure}`,
    },
    after: {
      src: `/images/resultados/${id}-despues.${ext}`,
      width,
      height,
      alt: `Después, ${procedure}`,
    },
  };
}

export const resultGroups: ResultGroup[] = [
  {
    id: 'mamoplastia',
    label: 'Mamoplastia',
    href: procedureHref('mamoplastia-de-aumento'),
    cases: [
      pair('mamoplastia-1', 'mamoplastia', 'jpg', 690, 550),
      pair('mamoplastia-2', 'mamoplastia', 'jpg', 690, 550),
      pair('mamoplastia-3', 'mamoplastia', 'jpg', 690, 550),
    ],
  },
  {
    id: 'mastopexia',
    label: 'Mastopexia',
    href: procedureHref('mastopexia'),
    cases: [pair('mastopexia-1', 'mastopexia', 'png', 1024, 816)],
  },
  {
    id: 'rinoplastia',
    label: 'Rinoplastia',
    href: procedureHref('rinoplastia'),
    cases: [
      pair('rinoplastia-1', 'rinoplastia', 'jpg', 690, 550),
      pair('rinoplastia-2', 'rinoplastia', 'jpg', 690, 550),
    ],
  },
  {
    id: 'lipoabdominoplastia',
    label: 'Lipoabdominoplastia',
    href: procedureHref('lipoabdominoplastia'),
    cases: [
      pair('lipoabdominoplastia-1', 'lipoabdominoplastia', 'jpg', 690, 550),
      pair('lipoabdominoplastia-2', 'lipoabdominoplastia', 'jpg', 690, 550),
      pair('lipoabdominoplastia-3', 'lipoabdominoplastia', 'jpg', 690, 550),
    ],
  },
  {
    id: 'lipotransferencia',
    label: 'Lipotransferencia',
    href: '/procedimientos/corporales',
    cta: 'Ver procedimientos corporales',
    cases: [pair('lipotransferencia-1', 'lipotransferencia', 'png', 1024, 816)],
  },
];

export type ResultRecord = ResultCase & {
  group: ResultGroup;
  index: number;
};

export function getResultRecords(): ResultRecord[] {
  return resultGroups.flatMap((group) =>
    group.cases.map((item, index) => ({ ...item, group, index })),
  );
}

export function getResultRecord(id: string) {
  return getResultRecords().find((item) => item.id === id);
}

export function resultHref(id: string) {
  return `/resultados/${id}`;
}

export function resultGroupCta(group: ResultGroup) {
  return group.cta ?? resultsCopy.caseCta;
}

export function resultStoryDraft(group: ResultGroup) {
  const slug = group.href.replace('/procedimientos/', '');
  const definition = !isCategorySlug(slug)
    ? getProcedure(slug)?.definition
    : null;

  const lead =
    definition ??
    'Este procedimiento aparece en la galería. No hay una ficha de catálogo publicada.';

  return `${lead} El comparador de este caso es el registro visual autorizado. Cada resultado es individual.`;
}

export function resultAgendarHref(group: ResultGroup) {
  const slug = group.href.replace('/procedimientos/', '');
  if (!slug || isCategorySlug(slug)) return site.cta.href;
  return agendarHref(slug);
}

export function getRelatedResults(id: string, count = 3) {
  const current = getResultRecord(id);
  if (!current) return [];
  const same = current.group.cases
    .filter((item) => item.id !== id)
    .map((item, index) => ({ ...item, group: current.group, index }));
  const others = getResultRecords().filter(
    (item) => item.id !== id && item.group.id !== current.group.id,
  );
  return [...same, ...others].slice(0, count);
}
