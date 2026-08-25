/**
 * Páginas legales. La política de datos se toma del PDF publicado
 * en /2023/11/14/politica-de-tratamiento-y-proteccion-de-datos/.
 * El correo del documento está en blanco: no se inventa. No hay
 * un texto publicado de «términos y condiciones»; esa página
 * identifica al operador y describe el uso de este sitio.
 */

import { site } from '@/lib/site';

export type LegalBlock = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  points?: readonly string[];
};

export type LegalPage = {
  overline: string;
  title: readonly string[];
  subtitle: string;
  crumb: string;
  source?: string;
  cta?: { href: string; label: string };
  sections: readonly LegalBlock[];
};

export const legalDocuments = [
  {
    id: 'politica',
    label: 'Política de tratamiento de datos',
    kind: 'PDF',
    href: 'https://www.clinicanova.com.co/wp-content/uploads/2024/03/3-Politica-de-Tratamiento-de-Datos-Clinica-Nova.pdf',
  },
  {
    id: 'reglamento',
    label: 'Reglamento interno de trabajo',
    kind: 'PDF',
    href: 'https://www.clinicanova.com.co/wp-content/uploads/2024/03/REGLAMENTO-INTERNO-DE-TRABAJO-CLINICA-NOVA-2024.pdf',
  },
  {
    id: 'ley',
    label: 'Ley de protección de datos',
    kind: 'Documento',
    href: 'https://www.clinicanova.com.co/wp-content/uploads/2024/03/2-ley-de-proteccion-de-datos.docx',
  },
  {
    id: 'reclamaciones',
    label: 'Reclamaciones',
    kind: 'Documento',
    href: 'https://www.clinicanova.com.co/wp-content/uploads/2024/03/4-RECLAMACIONES.docx',
  },
] as const;

export const legalCopy = {
  documentsOverline: 'Documentos',
  documentsTitle: 'Textos publicados por la clínica.',
  documentsBody: 'El documento completo prevalece si hay diferencia de redacción.',
} as const;

export const privacyPage: LegalPage = {
  overline: 'Política de privacidad',
  title: ['Cómo se tratan', 'tus datos.'],
  subtitle:
    'Política de tratamiento y protección de datos de Clínica Plástica y Estética Nova S.A.S., según el documento publicado.',
  crumb: 'Política de privacidad',
  source: 'Tomada del PDF institucional de marzo de 2024. El texto íntegro está en el documento.',
  cta: { href: '/terminos-y-condiciones', label: 'Ver términos y condiciones' },
  sections: [
    {
      id: 'responsable',
      title: 'Quién es el responsable',
      paragraphs: [
        `${site.legalName}, identificada con el NIT ${site.nit}, con domicilio en Envigado, Antioquia, en ${site.contact.address}, teléfono ${site.contact.phone.display}.`,
        'Es la responsable del tratamiento de los datos personales, de conformidad con la Ley 1581 de 2012 y el Decreto 1377 de 2013.',
      ],
    },
    {
      id: 'para-que',
      title: 'Para qué se usan',
      paragraphs: [
        'La clínica recopila, conserva y usa información para la prestación de servicios de salud, el cumplimiento de exigencias normativas, científicas, comerciales, educativas, formativas, promocionales, informativas, de seguridad, de mejoramiento de la calidad y de evaluación de posicionamiento.',
        'El tratamiento puede incluir consultar, tramitar, enviar información, contactar, encuestar, recolectar, almacenar, usar, circular, suprimir, procesar, compilar, intercambiar, publicar, auditar, promocionar, actualizar o disponer de los datos en las bases de la clínica, de forma directa o a través de terceros.',
      ],
    },
    {
      id: 'finalidades',
      title: 'Finalidades habituales',
      paragraphs: [
        'Además de las anteriores, el documento enumera estas finalidades, comunes a pacientes, colaboradores, proveedores y demás titulares:',
      ],
      points: [
        'Comunicar servicios y alianzas.',
        'Verificar la veracidad de los datos.',
        'Informar campañas, programas y educación al usuario.',
        'Realizar encuestas de satisfacción.',
        'Gestionar peticiones, quejas y sugerencias.',
        'Verificar datos laborales ante solicitudes de crédito, previa comprobación de la fuente. No se suministra la información: solo se verifica.',
      ],
    },
    {
      id: 'derechos',
      title: 'Tus derechos',
      paragraphs: [
        'El titular puede conocer, actualizar y rectificar sus datos; solicitar prueba de la autorización; ser informado del uso dado a esos datos; presentar queja ante la Superintendencia de Industria y Comercio; revocar la autorización o pedir la supresión cuando corresponda; y acceder de forma gratuita a sus datos al menos una vez al mes.',
        'La supresión o la revocatoria no proceden cuando exista un deber legal o contractual de permanecer en la base de datos.',
      ],
    },
    {
      id: 'sensibles',
      title: 'Datos sensibles',
      paragraphs: [
        'Los datos de salud son sensibles. El titular no está obligado a autorizar su tratamiento. Antes de recogerlos, la clínica debe informar cuáles son y con qué fin, y obtener un consentimiento expreso.',
        'Ninguna actividad puede condicionarse a que el titular entregue datos sensibles.',
      ],
    },
    {
      id: 'canales',
      title: 'Cómo ejercerlos',
      paragraphs: [
        'La política publicada deja el correo en blanco. Las solicitudes se reciben en la sede, en la carrera 48 (Av. Las Vegas) No. 32 B Sur-30, Envigado.',
        `También puedes llamar al ${site.contact.phone.display} o escribir al WhatsApp ${site.contact.whatsapp.display}.`,
        'La solicitud debe incluir nombre, medio de notificación, copia de un documento de identidad, si es consulta o reclamo, una descripción de los hechos y el tipo de titular (paciente, colaborador, proveedor u otro).',
      ],
    },
    {
      id: 'plazos',
      title: 'Plazos',
      paragraphs: [
        'Si un reclamo llega incompleto, se requiere al interesado en cinco días. Si no se completa en dos meses, se entiende desistido.',
        'Un reclamo completo se atiende en quince días hábiles. Si no es posible, se informa la demora y una nueva fecha, que no puede superar ocho días hábiles más.',
      ],
    },
    {
      id: 'este-sitio',
      title: 'Qué ocurre en este sitio',
      paragraphs: [
        'El formulario de agendar valoración y el de novedades se muestran completos, pero no envían datos. No se almacena lo que escribas ahí.',
        'Si contactas por teléfono o WhatsApp, esa conversación ocurre en los canales de la clínica, no en un envío de este sitio.',
      ],
    },
  ],
};

export const termsPage: LegalPage = {
  overline: 'Términos y condiciones',
  title: ['Quién opera', 'este sitio.'],
  subtitle:
    'Identificación de la clínica y condiciones de uso de estas páginas. No hay un reglamento de uso publicado más allá de estos hechos.',
  crumb: 'Términos y condiciones',
  cta: { href: '/politica-de-privacidad', label: 'Ver política de privacidad' },
  sections: [
    {
      id: 'operador',
      title: 'Identificación',
      paragraphs: [
        `Este sitio presenta a ${site.legalName}, NIT ${site.nit}.`,
        `Sede: ${site.contact.venue}, ${site.contact.address}.`,
        `Teléfono ${site.contact.phone.display}, extensiones ${site.contact.phone.extensions.join(' y ')}. Celular y WhatsApp ${site.contact.mobile.display}.`,
        `Horario publicado: ${site.contact.openingHours.map((slot) => `${slot.days}, ${slot.hours}`).join('; ')}.`,
      ],
    },
    {
      id: 'contenido',
      title: 'Qué es este sitio',
      paragraphs: [
        'Las páginas describen procedimientos, el equipo, el proceso y la sede. No sustituyen una valoración. La indicación la da el cirujano en la cita.',
        'Los textos de procedimientos, financiación y preguntas frecuentes se apoyan en lo que la clínica tiene publicado. Donde un dato no está publicado, no se afirma.',
      ],
    },
    {
      id: 'valoracion',
      title: 'Agendar y formularios',
      paragraphs: [
        'La cita de valoración presencial tiene un costo de $90.000 COP, no reembolsable.',
        'El formulario de esta web no envía la solicitud. Para agendar, usa WhatsApp, el teléfono o acude a la sede.',
        'El campo de correo del pie tampoco envía novedades.',
      ],
    },
    {
      id: 'resultados',
      title: 'Resultados y fotografías',
      paragraphs: [
        'Cada caso es individual. Los resultados varían.',
        'Las fotografías de pacientes que aparecen aquí se muestran con autorización.',
      ],
    },
    {
      id: 'pagos',
      title: 'Pagos y devoluciones',
      paragraphs: [
        'Los precios de los procedimientos no se publican a distancia: se definen en la valoración.',
        'Existe financiación con Servicrédito y CFA. La aprobación la hace cada entidad.',
        'Si la cirugía no se realiza, se devuelve el dinero descontando los exámenes de laboratorio si ya se hicieron.',
      ],
    },
    {
      id: 'datos',
      title: 'Datos personales',
      paragraphs: [
        'El tratamiento de datos se rige por la política de privacidad de esta misma sección y por el PDF institucional.',
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies',
      paragraphs: [
        'No hay un texto de cookies publicado por la clínica. Esta propuesta no carga sistemas de seguimiento.',
      ],
    },
  ],
};

export const cookiesPage: LegalPage = {
  overline: 'Política de cookies',
  title: ['Borrador', 'de cookies.'],
  subtitle:
    'Propuesta de redacción. No es un texto firmado por la clínica.',
  crumb: 'Política de cookies',
  source:
    'Propuesta de redacción. Sustituye este texto cuando la clínica publique su política de cookies.',
  cta: { href: '/politica-de-privacidad', label: 'Ver política de privacidad' },
  sections: [
    {
      id: 'estado',
      title: 'Qué hay hoy',
      paragraphs: [
        'En las páginas públicas de la clínica no aparece un texto de cookies. Este borrador muestra cómo podría leerse esa página. No declara proveedores, plazos ni un consentimiento que la clínica no haya firmado.',
      ],
    },
    {
      id: 'que-es',
      title: 'Qué es una cookie',
      paragraphs: [
        'Una cookie es un archivo pequeño que un sitio puede guardar en el navegador para recordar una preferencia, mantener una sesión o medir el uso. Algunas son necesarias para que la página funcione. Otras son opcionales.',
      ],
    },
    {
      id: 'esta-propuesta',
      title: 'Esta propuesta',
      paragraphs: [
        'Estas páginas no cargan analítica, píxeles ni banners de terceros. El formulario de valoración y el correo del pie no envían datos.',
        'Si al pasar a producción la clínica activa medición o publicidad, esos sistemas deben nombrarse aquí, con su finalidad, y pedirse el consentimiento cuando la ley lo exija.',
      ],
    },
    {
      id: 'modelo',
      title: 'Cómo se suele organizar',
      paragraphs: [
        'Un texto firmado suele separar cookies técnicas (siempre activas), de preferencia (si el usuario las acepta) y de medición o publicidad (solo con consentimiento). Esta propuesta no afirma que la clínica use ninguna de las dos últimas.',
      ],
      points: [
        'Técnicas: permiten navegar y mostrar el sitio.',
        'Preferencia: recuerdan un idioma o un aviso ya leído.',
        'Medición o publicidad: solo si la clínica las contrata y el usuario acepta.',
      ],
    },
    {
      id: 'datos',
      title: 'Datos personales',
      paragraphs: [
        'El tratamiento de datos se rige por la política de privacidad y por el PDF institucional. El correo del responsable no está publicado: el contacto vigente es el teléfono y el WhatsApp de la clínica.',
      ],
    },
  ],
};
