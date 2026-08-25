/**
 * Tu proceso. Los cinco pasos usan las etiquetas aprobadas en
 * docs/03-ARQUITECTURA.md §11. Las descripciones se apoyan en
 * hechos publicados en /preguntas-frecuentes/ y /medios-de-pago/.
 */

export const processCopy = {
  overline: 'Tu proceso',
  title: ['Un proceso', 'diseñado para ti.'],
  subtitle:
    'Desde la primera conversación hasta el seguimiento, con el mismo equipo.',
  stepsOverline: 'Recorrido',
  stepsTitle: 'Cinco momentos.',
  notesOverline: 'Antes de llegar',
  notesTitle: 'Tres datos que conviene saber.',
  financingOverline: 'Financiación',
  financingTitle: 'Cómo pagarlo se resuelve en la valoración.',
  financingBody:
    'Existe financiación con Servicrédito y CFA. El presupuesto de cada procedimiento se define en la cita.',
  financingCta: 'Ver financiación',
  faqOverline: 'Dudas',
  faqTitle: 'Preguntas que suelen aparecer primero.',
  faqCta: 'Ver todas las preguntas',
  ctaTitle: 'El primer paso es una conversación.',
} as const;

export type JourneyStep = {
  numeral: string;
  title: string;
  body: string;
};

export const journeySteps: JourneyStep[] = [
  {
    numeral: '01',
    title: 'Conversamos',
    body: 'Escribes, llamas o vienes a la sede. Una asesora abre el proceso y responde tus primeras preguntas.',
  },
  {
    numeral: '02',
    title: 'Valoramos',
    body: 'Cita presencial o prevaloración virtual. La presencial tiene un costo de $90.000 COP, no reembolsable.',
  },
  {
    numeral: '03',
    title: 'Planificamos',
    body: 'El cirujano indica si hay un procedimiento. Los paquetes incluyen los exámenes básicos. Si aplica, se revisa la financiación.',
  },
  {
    numeral: '04',
    title: 'Te acompañamos',
    body: 'La intervención es en los quirófanos de la sede, con anestesiólogo. No hay hospitalización; en lipoabdomino y abdomino hay ambulancia en el Área Metropolitana y enfermera la primera noche.',
  },
  {
    numeral: '05',
    title: 'Seguimos contigo',
    body: 'Los controles son en la clínica. Quien viene de fuera debe quedarse al menos dos semanas; el alta la da el especialista.',
  },
];

export const processNotes = [
  {
    title: 'La cita presencial',
    body: 'Cuesta $90.000 COP y no es reembolsable.',
  },
  {
    title: 'Prevaloración virtual',
    body: 'Puede hacerse con fotografías o por videollamada. Después se envía una cotización.',
  },
  {
    title: 'Cómo empezar',
    body: 'Escribes por WhatsApp, llamas o vienes a la sede en Envigado.',
  },
] as const;

export const featuredFaqIds = [
  'cita-valoracion-precio',
  'financiacion',
  'precio-procedimientos',
  'valoracion-virtual',
  'donde-cirugias',
] as const;
