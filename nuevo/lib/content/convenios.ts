/**
 * Convenios institucionales.
 *
 * Nombres tomados de los archivos en /public/images/logos y de la
 * auditoría (docs/01-AUDITORIA-CONTENIDO.md §6). La errata
 * "winsting" se corrige en el nombre visible; "covenio-escano"
 * se lee como Escano, que es lo que aparece en la marca.
 *
 * Sin enlaces: los logotipos originales no tienen destino.
 * Sin beneficios inventados: el sitio actual no los explica.
 */

export type Convenio = {
  id: string;
  name: string;
  logo: { src: string; width: number; height: number };
};

export const convenios: Convenio[] = [
  {
    id: 'fodelsa',
    name: 'Fodelsa',
    logo: { src: '/images/logos/convenio-fodelsa-logo.jpg', width: 250, height: 100 },
  },
  {
    id: 'winston-salem',
    name: 'Winston Salem',
    logo: { src: '/images/logos/convenio-winsting-salem-logo.jpg', width: 250, height: 100 },
  },
  {
    id: 'athletic-gym',
    name: 'Athletic Gym',
    logo: { src: '/images/logos/convenio-athletic-gym-logo.jpg', width: 250, height: 100 },
  },
  {
    id: 'hotel-los-recuerdos',
    name: 'Hotel Los Recuerdos',
    logo: { src: '/images/logos/convenio-hotel-los-recuerdos-logo.jpg', width: 250, height: 100 },
  },
  {
    id: 'dr-jorge-ivan-echavarria',
    name: 'Dr. Jorge Iván Echavarría',
    logo: {
      src: '/images/logos/convenio-dr-jorge-ivan-echavarria-logo.jpg',
      width: 250,
      height: 100,
    },
  },
  {
    id: 'sara-lopez-cejas',
    name: 'Sara López Cejas',
    logo: { src: '/images/logos/convenio-sara-lopez-cejas-logo.jpg', width: 250, height: 100 },
  },
  {
    id: 'escano',
    name: 'Escano',
    logo: { src: '/images/logos/covenio-escano-logo.jpg', width: 250, height: 100 },
  },
];
