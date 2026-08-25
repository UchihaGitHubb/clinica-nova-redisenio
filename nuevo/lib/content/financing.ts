/**
 * Financiación y medios de pago. Tomado de /medios-de-pago/ y
 * /preguntas-frecuentes/. Sin tasas, plazos de crédito ni montos
 * que no estén publicados.
 */

import { site } from '@/lib/site';

export const financingCopy = {
  overline: 'Financiación',
  title: ['Cómo acompañamos', 'el pago.'],
  subtitle:
    'El presupuesto se define en la valoración. Aquí están los medios de pago y los requisitos publicados para el crédito.',
  howOverline: 'Cómo funciona',
  howTitle: 'Primero la indicación, después el medio.',
  howBody:
    'Por este medio no se publica un valor exacto: depende del procedimiento que indique el cirujano. En la valoración se define el plan y, si aplica, la financiación con Servicrédito o CFA.',
  methodsOverline: 'Medios',
  methodsTitle: 'Formas de pago',
  partnersOverline: 'Aliados',
  partnersTitle: 'Entidades de financiación',
  partnersBody:
    'La aprobación la hace cada entidad. Está sujeta a su estudio de crédito.',
  requirementsTitle: 'Requisitos generales',
  documentsTitle: 'Documentación según el perfil',
  separeOverline: 'Plan Separe',
  separeTitle: 'Pagos parciales, a tu ritmo.',
  separeBody:
    'Puedes realizar pagos parciales desde $1.000.000 COP, eligiendo un tiempo de 6 meses a 1 año para completar el valor del procedimiento.',
  separeNote:
    'Los valores de los procedimientos se ajustan anualmente. Si comienzas a pagar un año y terminas en el siguiente, el costo final refleja ese ajuste.',
  faqOverline: 'Dudas',
  faqTitle: 'Preguntas sobre el pago.',
  faqCta: 'Ver todas las preguntas',
  accountOverline: 'Transferencia',
  accountTitle: 'Cuenta de ahorros Bancolombia',
  ctaTitle: 'El presupuesto se define en la valoración.',
} as const;

export const paymentMethods = [
  { id: 'efectivo', label: 'Efectivo' },
  { id: 'datafono', label: 'Datáfono' },
  { id: 'transferencia', label: 'Transferencia bancaria' },
  { id: 'pse', label: 'PSE' },
  { id: 'financiacion', label: 'Financiación' },
  { id: 'separe', label: 'Plan Separe' },
] as const;

export const bankAccount = {
  bank: 'Bancolombia',
  type: 'Cuenta de ahorros',
  number: '23055090416',
  holder: 'CLÍNICA PLÁSTICA Y ESTÉTICA NOVA',
  nit: site.nit,
} as const;

export const creditRequirements = [
  'No tener reportes negativos en centrales de riesgo.',
  'Contar con ingresos demostrables (carta laboral, colillas de pago, extractos bancarios).',
  'Tener capacidad de endeudamiento.',
  'Tener historial crediticio.',
] as const;

export const creditProfiles = [
  {
    id: 'empleado',
    label: 'Empleado',
    items: [
      'Carta laboral',
      'Colillas de pago',
      'Copia de cédula',
      'Copia del predial en caso de tener vivienda propia',
    ],
  },
  {
    id: 'arriendos',
    label: 'Ingresos por arriendos',
    items: [
      'Copia del predial de las propiedades de las que recibe ingresos',
      'Copia de los contratos de arrendamiento o carta de la agencia donde tiene registrada la propiedad',
      'Visita de un asesor de la cooperativa si la propiedad no está desenglobada',
    ],
  },
  {
    id: 'independiente',
    label: 'Independiente',
    items: [
      'Cámara de comercio con vigencia no inferior a 30 días',
      'RUT',
      'Copia de cédula',
      'Declaración de renta de los últimos dos períodos fiscales',
      '2 referencias comerciales de proveedores o clientes',
      'Copia del predial en caso de tener vivienda propia',
      'Informe de visita realizada por un asesor de la cooperativa',
    ],
  },
] as const;

export const creditNote =
  'Según cada solicitud, la entidad puede pedir más documentos. La aprobación está sujeta a su estudio de crédito.';

export const financingFaqIds = [
  'financiacion',
  'requisitos-credito',
  'precio-procedimientos',
  'devolucion',
] as const;
