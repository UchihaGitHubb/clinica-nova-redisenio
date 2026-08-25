export const hero = {
  overline: 'Clínica Nova · Cirugía plástica y estética',
  headline: ['Tu belleza,', 'con precisión.'],
  subheadline: 'Procedimientos estéticos y cirugía plástica diseñados alrededor de ti.',
  secondaryCta: { label: 'Conoce nuestros procedimientos', href: '/procedimientos' },
  spine: ['Precisión', 'Estética', 'Elegancia', 'Confianza'],
  scrollLabel: 'Desliza o usa las flechas',
} as const;

export const heroSlides = [
  { id: 'recorrido', kind: 'video' as const, label: 'Recorrido' },
  { id: 'espacio', kind: 'image' as const, label: 'El espacio', image: 'heroSede' as const },
  { id: 'sede', kind: 'image' as const, label: 'La sede', image: 'heroInterior' as const },
  { id: 'envigado', kind: 'image' as const, label: 'Envigado', image: 'torreMedica' as const },
] as const;

export const trust = {
  items: [
    {
      numeral: '01',
      icon: 'cross' as const,
      label: 'Cirugía plástica',
      description: 'Servicios especializados en cirugía plástica, estética y reconstructiva.',
    },
    {
      numeral: '02',
      icon: 'building' as const,
      label: 'Sede en Envigado',
      description: 'NOVA Torre Médica, Envigado.',
    },
    {
      numeral: '03',
      icon: 'bloom' as const,
      label: 'Cuatro áreas',
      description: 'Procedimientos faciales, corporales, de belleza íntima y estéticos.',
    },
    {
      numeral: '04',
      icon: 'users' as const,
      label: 'Acompañamiento',
      description: 'El mismo equipo te acompaña antes, durante y después.',
    },
  ],
} as const;

export const treatments = {
  titleLead: 'Descubre',
  titleAccent: 'tu tratamiento',
  subtitle: 'Rostro, cuerpo, íntimo y estéticos, con un enfoque personalizado.',
  cta: { label: 'Ver todos los procedimientos', href: '/procedimientos' },
  explorerLabel: '¿Qué quieres transformar?',
  explorer: [
    { label: 'Rostro', href: '/procedimientos/faciales' },
    { label: 'Abdomen', href: '/procedimientos/corporales' },
    { label: 'Senos', href: '/procedimientos/corporales' },
    { label: 'Liposucción', href: '/procedimientos/liposuccion' },
    { label: 'Piel', href: '/procedimientos/esteticos' },
    { label: 'Zona íntima', href: '/procedimientos/belleza-intima' },
  ],
} as const;

export const process = {
  title: 'Un proceso diseñado para ti.',
  subtitle: 'Desde la primera conversación hasta el seguimiento, con el mismo equipo.',
  cta: { label: 'Ver el proceso', href: '/tu-proceso' },
} as const;

export const specialists = {
  title: ['El equipo detrás', 'de cada resultado.'],
  body: 'El equipo es quien sostiene el proceso. La valoración, la planificación y el seguimiento los realizan las mismas personas que intervienen.',
  cta: { label: 'Conoce a nuestros especialistas', href: '/especialistas' },
} as const;

export const financing = {
  title: ['Hagamos posible', 'tu transformación.'],
  body: 'Opciones de financiación para acompañar tu proceso.',
} as const;

export const convenios = {
  overline: 'Convenios',
} as const;

export const finalCta = {
  title: ['Tu transformación comienza', 'con una conversación.'],
} as const;
