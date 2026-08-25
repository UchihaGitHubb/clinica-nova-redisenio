import { catalogCategories } from '@/lib/content/procedure-categories';
import {
  getCategory,
  getProcedure,
  isCategorySlug,
  procedures,
  whatsappHref,
} from '@/lib/content/procedures';
import { mapsHref } from '@/lib/site';

export { mapsHref };

export const bookingCopy = {
  overline: 'Valoración',
  title: ['Una conversación.', 'El primer paso.'],
  subtitle:
    'Cuéntanos qué te trae. El equipo te acompaña a definir si hay un procedimiento y cuál corresponde.',
  includesOverline: 'La cita',
  includesTitle: 'Qué ocurre en la valoración',
  includes: [
    {
      numeral: '01',
      title: 'Conversación',
      body: 'Escuchamos qué te trae y qué esperas del proceso.',
    },
    {
      numeral: '02',
      title: 'Criterio médico',
      body: 'El equipo revisa tu caso y responde tus primeras preguntas.',
    },
    {
      numeral: '03',
      title: 'Plan',
      body: 'Definimos contigo si hay un procedimiento y cuál.',
    },
    {
      numeral: '04',
      title: 'Siguientes pasos',
      body: 'Sales con claridad sobre lo que sigue, sin compromiso de cirugía.',
    },
  ],
  formOverline: 'Solicitud',
  formTitle: 'Agenda tu valoración',
  formHint:
    'Este formulario muestra cómo se vería la solicitud. No envía datos. Para agendar, usa WhatsApp o el teléfono.',
  submit: 'Enviar solicitud',
  fields: {
    name: { label: 'Nombre', required: true },
    phone: {
      label: 'Teléfono / WhatsApp',
      required: true,
      placeholder: 'Tu número',
    },
    email: { label: 'Correo electrónico', required: false },
    procedure: {
      label: 'Procedimiento de interés',
      required: false,
      empty: 'Aún no lo sé',
    },
    specialist: { label: 'Especialista de preferencia', required: false },
    city: { label: 'Ciudad', required: false },
    message: { label: 'Mensaje', required: false },
    consent: {
      label: 'He leído y acepto el tratamiento de mis datos personales.',
      required: true,
    },
  },
  errors: {
    name: 'Escribe tu nombre.',
    phone: 'Escribe un teléfono de contacto.',
    consent: 'Necesitamos tu consentimiento para continuar.',
  },
  contextPrefix: 'Interés',
  channelsOverline: 'También puedes',
  channelsTitle: 'Escribir o llamar ahora',
  channelsBody: 'Si prefieres no esperar, el equipo atiende por WhatsApp y por teléfono.',
  whatsappLabel: 'Escribir por WhatsApp',
  phoneLabel: 'Llamar a la clínica',
  mobileLabel: 'Celular',
  extensionsLabel: 'Extensiones',
  locationOverline: 'Sede',
  locationTitle: 'Dónde nos encontramos',
  hoursLabel: 'Horario de atención',
  mapsLabel: 'Ver en el mapa',
  trust:
    'En esta propuesta el formulario no envía datos. Teléfono y WhatsApp sí llegan a la clínica.',
  otherOverline: 'Institucional',
  otherTitle: 'Otras formas de contacto',
  otherBody: 'Trámites que no son una cita de valoración.',
  successTitle: 'Esta propuesta no envía la solicitud.',
  successBody:
    'Los campos se muestran para la demo. Para coordinar la valoración, escribe por WhatsApp o llama a la clínica.',
  successExplore: 'También puedes seguir explorando.',
  exploreProcedures: 'Ver procedimientos',
  exploreHome: 'Volver al inicio',
} as const;

export const bookingGroups = catalogCategories.map((category) => ({
  id: category.id,
  label: category.label,
  items: procedures.filter((item) => item.category === category.id),
}));

export function resolveBookingInterest(param?: string | string[]) {
  const slug = Array.isArray(param) ? param[0] : param;
  if (!slug) {
    return { procedureSlug: '', interestLabel: null as string | null };
  }

  const procedure = getProcedure(slug);
  if (procedure) {
    return { procedureSlug: procedure.slug, interestLabel: procedure.name };
  }

  if (isCategorySlug(slug)) {
    return { procedureSlug: '', interestLabel: getCategory(slug).label };
  }

  return { procedureSlug: '', interestLabel: null };
}

export function bookingWhatsappHref(interest?: string | null) {
  return whatsappHref(interest ?? undefined);
}

export const institutionalContact = [
  {
    id: 'pqrs',
    label: 'PQRS-F',
    href: 'https://forms.gle/MtaS5vaJcu5NWape9',
  },
  {
    id: 'empleo',
    label: 'Trabaja con nosotros',
    href: 'https://forms.gle/Kqgj8bBfUR8q4CkX7',
  },
] as const;
