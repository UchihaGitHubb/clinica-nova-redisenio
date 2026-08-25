import { images } from '@/lib/images';
import { site } from '@/lib/site';

/**
 * Página La clínica. Textos tomados de /nosotros/, /contacto/
 * y /especialistas/ de clinicanova.com.co. Sin afirmaciones
 * que no estén publicadas ahí.
 */
export const clinicCopy = {
  overline: 'La clínica',
  title: ['El lugar.', 'El criterio.'],
  subtitle:
    'Ubicados en Envigado, Antioquia. Nos especializamos en cirugía plástica y estética.',
  venueLine: site.contact.venue,

  identityOverline: 'Identidad',
  identityTitle: 'Qué es Nova',
  identityBody:
    'Ubicados en Envigado – Antioquia, en Clínica Nova nos especializamos en servicios de cirugía plástica y estética. Nuestro equipo está comprometido en brindar a cada uno de nuestros usuarios bienestar, salud y belleza a través de tecnología de vanguardia, estándares de alta calidad y personal competente. Nuestro objetivo es generar confianza y satisfacción en cada persona que atendemos.',
  legalName: site.legalName,
  nitLine: `NIT ${site.nit}`,

  missionOverline: 'Dirección',
  missionTitle: 'Misión, visión y valores',
  missionLabel: 'Misión',
  mission:
    'Ofrecer servicios integrales de salud centrados en las personas, seguros y con responsabilidad social.',
  visionLabel: 'Visión',
  vision:
    'En el 2027, la Clínica Nova será reconocida nacional e internacionalmente por la prestación de servicios diferenciados, con altos estándares de calidad, felicidad laboral y sostenibilidad.',
  valuesLabel: 'Valores',
  values: ['Responsabilidad', 'Compromiso', 'Trabajo en equipo'],

  policiesOverline: 'Políticas',
  policiesTitle: 'Cómo cuidamos tu atención',
  policies: [
    {
      id: 'seguridad',
      title: 'Seguridad del paciente',
      body: 'En Clínica Nova, tu seguridad es nuestra prioridad. Cada paso que damos está pensado para cuidarte. Nos comprometemos a brindarte una atención cálida, humana y segura, donde cada detalle cuenta y tu bienestar está en el centro de todo. Contamos con un modelo de atención responsable y consciente, respaldado por procesos organizados, prácticas seguras y un equipo comprometido con prevenir cualquier situación que pueda afectar tu experiencia.',
    },
    {
      id: 'humanizacion',
      title: 'Humanización',
      body: 'La Clínica Nova, desde su direccionamiento estratégico, está comprometida con la atención centrada en el usuario y su familia por medio del trato humanizado y la promoción de sus derechos y deberes; con un talento humano competente, con actitud de servicio, que trabaja en equipo, en un ambiente que propicie la dignidad, la privacidad, la comodidad y el confort.',
    },
    {
      id: 'riesgos',
      title: 'Riesgos',
      body: 'En Clínica Nova, trabajamos para anticiparnos y cuidarte en cada detalle. Identificamos, evaluamos y controlamos tanto los factores internos como externos que puedan representar un desafío para tu experiencia. Promovemos una cultura de seguridad basada en la confianza, la calidad y el compromiso de todos: usuarios, familias y nuestro equipo.',
    },
  ],

  sedeOverline: 'Sede',
  sedeTitle: 'NOVA Torre Médica',
  sedeFloors: '2.º y 3.er piso',
  sedeBody: 'La valoración, el plan y el seguimiento ocurren en el mismo edificio.',
  hoursLabel: 'Horario de atención',
  mapsLabel: 'Ver en el mapa',
  phoneLabel: 'Llamar a la clínica',

  teamOverline: 'Equipo',
  teamTitle: ['Las personas', 'que sostienen el proceso.'],
  teamBody:
    'Desde la consulta inicial hasta la recuperación, el equipo te acompaña en cada paso.',
  teamCta: 'Conoce a nuestros especialistas',
  surgeonsLabel: 'Cirujanos',
  anesthetistsLabel: 'Anestesiólogos',

  rseOverline: 'Responsabilidad social',
  rseTitle: 'Ocho focos de interés',
  rseBody:
    'Clínica Nova genera procesos de mejoramiento continuo, comprometidos con ocho focos o áreas de interés.',
  rseFoci: [
    'Usuarios',
    'Estado',
    'Empleados',
    'Accionistas',
    'Medio ambiente',
    'Comunidad y sociedad',
    'Proveedores',
    'Competencia',
  ],

  conveniosOverline: 'Convenios',

  ctaTitle: 'Tu transformación comienza con una simple conversación.',
  ctaBody: 'Agenda una valoración en esta sede.',
} as const;

export const clinicMedia = {
  hero: images.heroSede,
  identity: images.heroInterior,
  sede: images.torreMedica,
  team: images.equipo,
} as const;
