/**
 * Equipo publicado en /especialistas/ de clinicanova.com.co.
 * Retratos tomados de esa página. Dra. Lina Gómez aparece allí
 * sin fotografía: no se inventa una. Sin registro ni biografías.
 */

import type { ImageAsset } from '@/lib/images';
import { site } from '@/lib/site';

export type Specialist = {
  slug: string;
  name: string;
  role: string;
  group: 'cirujano' | 'anestesiologo';
  image?: ImageAsset;
};

export const specialistsCopy = {
  overline: 'Especialistas',
  title: ['El equipo', 'que te acompaña.'],
  subtitle: 'Un equipo que se preocupa por tu confianza y tu belleza.',
  surgeonsTitle: 'Cirujanos',
  anesthetistsTitle: 'Anestesiólogos',
  note: 'Las fichas con registro profesional y formación se ampliarán con cada especialista.',
  ctaTitle: 'El siguiente paso es una conversación.',
  profileNote:
    'Registro y formación se completan cuando la clínica los publique. El párrafo de enfoque es una propuesta de redacción a partir de la especialidad publicada.',
  pendingSlots: [
    { label: 'Registro profesional', value: 'Por confirmar' },
    { label: 'Formación', value: 'Por confirmar' },
  ],
  focusTitle: 'Enfoque',
  othersTitle: 'También en el equipo',
  othersCta: 'Ver todo el equipo',
  whatsapp: 'Escribir por WhatsApp',
} as const;

export const specialists: Specialist[] = [
  {
    slug: 'rodrigo-montoya',
    name: 'Dr. Rodrigo Montoya',
    role: 'Cirujano plástico, estético y reconstructivo',
    group: 'cirujano',
    image: {
      src: '/images/especialistas/rodrigo-montoya.jpg',
      width: 500,
      height: 500,
      alt: 'Retrato del Dr. Rodrigo Montoya',
    },
  },
  {
    slug: 'carlos-bravo',
    name: 'Dr. Carlos Bravo',
    role: 'Cirujano plástico, estético y reconstructivo',
    group: 'cirujano',
    image: {
      src: '/images/especialistas/carlos-bravo.png',
      width: 1280,
      height: 1280,
      alt: 'Retrato del Dr. Carlos Bravo',
    },
  },
  {
    slug: 'carlos-tavera',
    name: 'Dr. Carlos Tavera',
    role: 'Cirujano plástico, maxilofacial y de la mano',
    group: 'cirujano',
    image: {
      src: '/images/especialistas/carlos-tavera.jpg',
      width: 500,
      height: 500,
      alt: 'Retrato del Dr. Carlos Tavera',
    },
  },
  {
    slug: 'alex-pulido',
    name: 'Dr. Alex Pulido',
    role: 'Cirujano plástico, reconstructivo y estético',
    group: 'cirujano',
    image: {
      src: '/images/especialistas/alex-pulido.jpg',
      width: 500,
      height: 500,
      alt: 'Retrato del Dr. Alex Pulido',
    },
  },
  {
    slug: 'sebastian-gaviria',
    name: 'Dr. Sebastián Gaviria',
    role: 'Cirujano plástico y reconstructivo',
    group: 'cirujano',
    image: {
      src: '/images/especialistas/sebastian-gaviria.png',
      width: 500,
      height: 500,
      alt: 'Retrato del Dr. Sebastián Gaviria',
    },
  },
  {
    slug: 'roberto-latorre',
    name: 'Dr. Roberto Latorre',
    role: 'Cirujano plástico, reconstructivo y estético',
    group: 'cirujano',
    image: {
      src: '/images/especialistas/roberto-latorre.png',
      width: 980,
      height: 980,
      alt: 'Retrato del Dr. Roberto Latorre',
    },
  },
  {
    slug: 'marco-escobar',
    name: 'Dr. Marco Escobar',
    role: 'Cirujano plástico, reconstructivo y estético',
    group: 'cirujano',
    image: {
      src: '/images/especialistas/marco-escobar.jpg',
      width: 500,
      height: 500,
      alt: 'Retrato del Dr. Marco Escobar',
    },
  },
  {
    slug: 'juan-camilo-maroso',
    name: 'Dr. Juan Camilo Maroso',
    role: 'Cirujano plástico, reconstructivo y estético',
    group: 'cirujano',
    image: {
      src: '/images/especialistas/juan-camilo-maroso.png',
      width: 768,
      height: 768,
      alt: 'Retrato del Dr. Juan Camilo Maroso',
    },
  },
  {
    slug: 'jorge-mejia',
    name: 'Dr. Jorge Mejía',
    role: 'Ginecólogo',
    group: 'cirujano',
    image: {
      src: '/images/especialistas/jorge-mejia.png',
      width: 1024,
      height: 1024,
      alt: 'Retrato del Dr. Jorge Mejía',
    },
  },
  {
    slug: 'sandra-erazo',
    name: 'Dra. Sandra Erazo',
    role: 'Especialista en anestesiología y reanimación',
    group: 'anestesiologo',
    image: {
      src: '/images/especialistas/sandra-erazo.jpg',
      width: 500,
      height: 500,
      alt: 'Retrato de la Dra. Sandra Erazo',
    },
  },
  {
    slug: 'david-yepes',
    name: 'Dr. David Yepes',
    role: 'Especialista en anestesiología y reanimación',
    group: 'anestesiologo',
    image: {
      src: '/images/especialistas/david-yepes.jpg',
      width: 500,
      height: 500,
      alt: 'Retrato del Dr. David Yepes',
    },
  },
  {
    slug: 'alejandra-velez',
    name: 'Dra. Alejandra Vélez',
    role: 'Especialista en anestesiología y reanimación',
    group: 'anestesiologo',
    image: {
      src: '/images/especialistas/alejandra-velez.jpg',
      width: 500,
      height: 500,
      alt: 'Retrato de la Dra. Alejandra Vélez',
    },
  },
  {
    slug: 'lina-gomez',
    name: 'Dra. Lina Gómez',
    role: 'Especialista en anestesiología y reanimación',
    group: 'anestesiologo',
  },
];

export const surgeons = specialists.filter((item) => item.group === 'cirujano');
export const anesthetists = specialists.filter((item) => item.group === 'anestesiologo');

export function getSpecialist(slug: string) {
  return specialists.find((item) => item.slug === slug);
}

export function specialistHref(slug: string) {
  return `/especialistas/${slug}`;
}

export function agendarSpecialistHref(slug: string) {
  return `${site.cta.href}?especialista=${slug}`;
}

export function specialistWhatsappHref(name: string) {
  const url = new URL(site.contact.whatsapp.href);
  url.searchParams.set(
    'text',
    `Hola, quiero una cita de valoración con ${name}. Gracias.`,
  );
  return url.toString();
}

export function getRelatedSpecialists(slug: string, count = 3) {
  const current = getSpecialist(slug);
  if (!current) return [];
  const sameGroup = specialists.filter(
    (item) => item.group === current.group && item.slug !== slug,
  );
  return sameGroup.slice(0, count);
}
