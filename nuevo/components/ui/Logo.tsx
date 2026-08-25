import Image from 'next/image';
import { cx } from '@/lib/cx';
import { logos } from '@/lib/images';
import styles from './Logo.module.css';

/**
 * Variante por contexto de fondo · docs/04-DESIGN-SYSTEM.md §33.1
 *   color  → cabecera sólida, páginas interiores, pie sobre cálido
 *   white  → cabecera transparente sobre el hero, superficies profundas
 */
export type LogoVariant = 'color' | 'white';

type LogoProps = {
  variant?: LogoVariant;
  /** Alto renderizado. El sistema usa 32 px, y 26 px comprimido (§14.1). */
  height?: number;
  /** La cabecera es contenido crítico: su logotipo no se carga en diferido. */
  priority?: boolean;
  className?: string;
};

/**
 * Logotipo real de Clínica Nova.
 *
 * Los archivos son los de la web actual, reescalados por
 * scripts/prepare-assets.ps1: el negativo original mide 8000 px de
 * ancho y §33.1 exige reducirlo antes de servirlo.
 *
 * OBSERVACIÓN PARA LA PRESENTACIÓN: el logotipo contiene el azul y el
 * turquesa de la identidad anterior, que es precisamente la paleta que
 * el rediseño abandona. No se recolorea —una marca ajena no se
 * modifica— pero conviene plantear a la clínica una versión
 * monocroma, que además resolvería la falta de vectorial (§33.4).
 */
export function Logo({ variant = 'color', height = 32, priority = false, className }: LogoProps) {
  const asset = logos[variant];

  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      priority={priority}
      /* El logotipo nunca se sirve por encima de 240 px de ancho
         (§17.2), así que 480 px cubre pantallas de densidad doble. */
      sizes="240px"
      className={cx(styles.logo, className)}
      style={{ height: `${height / 16}rem` }}
    />
  );
}
