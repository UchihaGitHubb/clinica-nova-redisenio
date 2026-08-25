export type ProcessStep = {
  numeral: string;
  title: string;
  description: string;
  icon: 'chat' | 'clipboard' | 'path' | 'users' | 'care';
};

/**
 * Los cinco momentos de /tu-proceso, en versión breve para la
 * portada. Etiquetas de docs/03-ARQUITECTURA.md §11.
 */
export const processSteps: ProcessStep[] = [
  {
    numeral: '01',
    icon: 'chat',
    title: 'Conversamos',
    description: 'Escribes, llamas o vienes a la sede. Una asesora abre el proceso.',
  },
  {
    numeral: '02',
    icon: 'clipboard',
    title: 'Valoramos',
    description: 'Cita presencial o prevaloración virtual con el equipo médico.',
  },
  {
    numeral: '03',
    icon: 'path',
    title: 'Planificamos',
    description: 'Indicación, exámenes y, si aplica, cómo pagarlo.',
  },
  {
    numeral: '04',
    icon: 'users',
    title: 'Te acompañamos',
    description: 'La intervención es en la sede, con el mismo equipo.',
  },
  {
    numeral: '05',
    icon: 'care',
    title: 'Seguimos contigo',
    description: 'Los controles son en la clínica. El alta la da el especialista.',
  },
];
