/**
 * Aliados financieros.
 *
 * DISPONIBLE: que existe financiación con dos aliados, sus nombres y
 * sus logotipos (docs/02-INVENTARIO-RECURSOS.md §9.8, §5.2).
 *
 * NO DISPONIBLE, y por tanto ausente de este archivo: condiciones,
 * plazos, tasas, cuotas, requisitos, precios y promociones. Tampoco
 * hay URL oficial: los dos logotipos aparecen hoy sin enlace.
 *
 * La razón social completa de CFA no consta en ninguna fuente; la
 * sigla es lo único que aparece, dentro de la propia imagen.
 *
 * Los logotipos se muestran en un contenedor blanco y SIN escala de
 * grises: §16.7 exige respetar los colores del aliado.
 */

export type FinancingPartner = {
  id: string;
  name: string;
  logo: { src: string; width: number; height: number };
  /** Ningún aliado tiene destino oficial conocido. */
  href: string | null;
};

export const financingPartners: FinancingPartner[] = [
  {
    id: 'servicredito',
    name: 'Servicrédito',
    logo: { src: '/images/logos/servicredito.png', width: 589, height: 343 },
    href: null,
  },
  {
    id: 'cfa',
    name: 'CFA',
    logo: { src: '/images/logos/cfa.png', width: 337, height: 150 },
    href: null,
  },
];
