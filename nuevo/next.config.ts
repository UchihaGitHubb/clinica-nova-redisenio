import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /**
   * Next 16 genera AGENTS.md y CLAUDE.md en la raíz del proyecto.
   * Se desactiva: la única documentación de /nuevo es README.md.
   */
  agentRules: false,

  async redirects() {
    return [
      {
        source: '/contacto',
        destination: '/agendar-valoracion',
        permanent: true,
      },
      {
        source: '/contacto/',
        destination: '/agendar-valoracion',
        permanent: true,
      },
      {
        source: '/nosotros',
        destination: '/la-clinica',
        permanent: true,
      },
      {
        source: '/nosotros/',
        destination: '/la-clinica',
        permanent: true,
      },
      {
        source: '/galeria',
        destination: '/resultados',
        permanent: true,
      },
      {
        source: '/galeria/',
        destination: '/resultados',
        permanent: true,
      },
      {
        source: '/medios-de-pago',
        destination: '/tu-proceso/financiacion',
        permanent: true,
      },
      {
        source: '/medios-de-pago/',
        destination: '/tu-proceso/financiacion',
        permanent: true,
      },
      {
        source: '/preguntas-frecuentes',
        destination: '/tu-proceso/preguntas-frecuentes',
        permanent: true,
      },
      {
        source: '/preguntas-frecuentes/',
        destination: '/tu-proceso/preguntas-frecuentes',
        permanent: true,
      },
      {
        source: '/politica-de-datos',
        destination: '/politica-de-privacidad',
        permanent: true,
      },
      {
        source: '/politica-de-datos/',
        destination: '/politica-de-privacidad',
        permanent: true,
      },
      {
        source: '/2023/11/14/politica-de-tratamiento-y-proteccion-de-datos',
        destination: '/politica-de-privacidad',
        permanent: true,
      },
      {
        source: '/2023/11/14/politica-de-tratamiento-y-proteccion-de-datos/',
        destination: '/politica-de-privacidad',
        permanent: true,
      },
      {
        source: '/aviso-legal',
        destination: '/terminos-y-condiciones',
        permanent: true,
      },
      {
        source: '/aviso-legal/',
        destination: '/terminos-y-condiciones',
        permanent: true,
      },
      {
        source: '/nuestros-servicios',
        destination: '/procedimientos',
        permanent: true,
      },
      {
        source: '/nuestros-servicios/',
        destination: '/procedimientos',
        permanent: true,
      },
      {
        source: '/procedimientos-corporales',
        destination: '/procedimientos/corporales',
        permanent: true,
      },
      {
        source: '/procedimientos-corporales/',
        destination: '/procedimientos/corporales',
        permanent: true,
      },
      {
        source: '/procedimientos-faciales',
        destination: '/procedimientos/faciales',
        permanent: true,
      },
      {
        source: '/procedimientos-faciales/',
        destination: '/procedimientos/faciales',
        permanent: true,
      },
      {
        source: '/ginecologia-estetica',
        destination: '/procedimientos/belleza-intima',
        permanent: true,
      },
      {
        source: '/ginecologia-estetica/',
        destination: '/procedimientos/belleza-intima',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
