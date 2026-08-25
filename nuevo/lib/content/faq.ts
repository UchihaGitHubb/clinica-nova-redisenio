/**
 * Preguntas frecuentes publicadas en /preguntas-frecuentes/.
 * Se corrigen erratas evidentes. Se recortan superlativos y
 * «tecnología de vanguardia». No se inventan respuestas.
 */

export const faqCopy = {
  overline: 'Preguntas frecuentes',
  title: ['Dudas que ya', 'tienen respuesta.'],
  subtitle:
    'Lo que preguntan antes de agendar. Si no está aquí, escribimos por WhatsApp.',
  indexLabel: 'Temas',
  closeTitle: '¿No encontraste tu respuesta?',
  closeBody: 'Una conversación resuelve lo que una lista no cubre.',
  whatsapp: 'Preguntar por WhatsApp',
} as const;

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  points?: readonly string[];
  note?: string;
};

export type FaqCategory = {
  id: string;
  label: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: 'antes',
    label: 'Antes de la valoración',
    items: [
      {
        id: 'proceso-cita',
        question: '¿Cómo es el proceso para tener una cita de valoración?',
        answer:
          'Si deseas operarte en Clínica Nova debes realizar el proceso con una asesora, empezando por solicitar la cita de valoración por Instagram, Facebook, la página, WhatsApp o visitando la sede.',
      },
      {
        id: 'cita-valoracion-precio',
        question: '¿La cita de valoración tiene precio? ¿Es reembolsable?',
        answer:
          'La cita de valoración tiene un costo de $90.000 COP, que no son reembolsables.',
      },
      {
        id: 'valoracion-virtual',
        question: '¿Tienen valoración virtual?',
        answer:
          'Sí. La prevaloración virtual se hace con un registro fotográfico de la zona que deseas mejorar o por videollamada. Un cirujano realiza la valoración, explica el procedimiento y resuelve inquietudes. Después se envía una cotización.',
      },
      {
        id: 'vigencia-cita',
        question: '¿Cuánta vigencia tiene la cita de valoración?',
        answer:
          'La cita de valoración tiene vigencia de un año. Los precios de la cirugía están sujetos a cambios.',
      },
    ],
  },
  {
    id: 'procedimientos',
    label: 'Procedimientos',
    items: [
      {
        id: 'especialidades',
        question: '¿Cuentan con especialistas para diferentes especialidades?',
        answer: 'El equipo cubre estas áreas:',
        points: [
          'Corporales: abdominoplastia, lipoescultura, mamoplastia, mastopexia.',
          'Faciales: bichectomía, blefaroplastia, otoplastia, rinoplastia, ritidoplastia.',
          'Odontología estética.',
          'Belleza íntima: diseño vaginal, blanqueamiento, tensado vaginal, labioplastia.',
        ],
      },
      {
        id: 'bariatricas',
        question: '¿Realizan cirugías bariátricas?',
        answer: 'No. Solo cirugías plásticas y estéticas.',
      },
      {
        id: 'garantia',
        question: '¿Dan garantía de los procedimientos?',
        answer: 'Todos los procedimientos son garantizados.',
      },
    ],
  },
  {
    id: 'cirugia',
    label: 'Cirugía y estancia',
    items: [
      {
        id: 'donde-cirugias',
        question: '¿Dónde realizan las cirugías?',
        answer:
          'En los quirófanos de Clínica Nova, en Envigado, Antioquia.',
      },
      {
        id: 'anestesia-local',
        question: '¿Realizan liposucción con anestesia local?',
        answer:
          'No. Los procedimientos se realizan en quirófano, con anestesia general y un anestesiólogo durante todo el procedimiento.',
      },
      {
        id: 'hospitalizacion',
        question: '¿Tienen servicio de hospitalización?',
        answer:
          'No hay hospitalización. En procedimientos más complejos, como lipoabdomino y abdomino, hay transporte en ambulancia hasta el domicilio (Área Metropolitana) y el acompañamiento de una enfermera la primera noche (hospitalización en casa).',
      },
    ],
  },
  {
    id: 'recuperacion',
    label: 'Recuperación',
    items: [
      {
        id: 'postoperatorio-domicilio',
        question: '¿Realizan postoperatorios a domicilio?',
        answer:
          'No. Los postoperatorios se realizan en la clínica, donde está el personal y el equipo necesarios.',
      },
      {
        id: 'casa-recuperacion',
        question: '¿Tienen casa de recuperación?',
        answer:
          'No directamente. Hay alianzas con entidades que pueden ayudar con el hospedaje y los cuidados del postoperatorio.',
      },
      {
        id: 'reposo-internacional',
        question: '¿Cuánto tiempo de reposo debo tener antes de operarme si no vivo en Colombia?',
        answer:
          'Si vienes de Estados Unidos, un mínimo de 48 horas. Si vienes de Europa, un mínimo de 72 horas antes de operarte.',
      },
      {
        id: 'estadia-despues',
        question: '¿Cuánto tiempo me debo quedar en el país después de la cirugía?',
        answer:
          'Como mínimo dos semanas, con revisiones constantes. El especialista da el alta según la evolución.',
      },
      {
        id: 'examenes-incluidos',
        question: '¿Los exámenes médicos están incluidos dentro de los paquetes?',
        answer: 'Sí. Los paquetes incluyen los exámenes médicos básicos.',
      },
    ],
  },
  {
    id: 'costes',
    label: 'Costes y financiación',
    items: [
      {
        id: 'precio-procedimientos',
        question: '¿Cuál es el precio de los procedimientos?',
        answer:
          'Por este medio no es posible dar un valor exacto. Depende del procedimiento que indique el cirujano, de tus expectativas y de la valoración.',
      },
      {
        id: 'financiacion',
        question: '¿Tienen sistema de financiación?',
        answer:
          'Sí, a través de Servicrédito y la Cooperativa CFA.',
      },
      {
        id: 'requisitos-credito',
        question: '¿Qué requisitos se solicitan para el crédito?',
        answer: 'Los requisitos publicados son:',
        points: [
          'No tener reportes negativos en centrales de riesgo.',
          'Contar con ingresos demostrables (carta laboral, colillas de pago, extractos bancarios).',
          'Tener capacidad de endeudamiento.',
          'Tener historial crediticio.',
        ],
        note: 'Independiente o pensionado: RUT o cámara de comercio, extractos bancarios y cédula. Empleado: carta laboral, colillas de pago y cédula. La aprobación está sujeta al estudio de la entidad.',
      },
      {
        id: 'devolucion',
        question: 'Si por algún motivo no se realiza la cirugía, ¿hacen devolución del dinero?',
        answer:
          'Sí. Se hace la devolución descontando los exámenes de laboratorio si ya se realizaron.',
      },
    ],
  },
];

export const faqItems = faqCategories.flatMap((category) => category.items);

export function getFaqItem(id: string) {
  return faqItems.find((item) => item.id === id);
}

export function faqHref(id: string) {
  return `/tu-proceso/preguntas-frecuentes#${id}`;
}

export function faqAnswerText(item: FaqItem) {
  const parts = [item.answer];
  if (item.points?.length) parts.push(item.points.join(' '));
  if (item.note) parts.push(item.note);
  return parts.join(' ');
}
