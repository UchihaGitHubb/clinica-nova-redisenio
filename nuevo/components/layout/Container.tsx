import type { ReactNode } from 'react';
import { cx } from '@/lib/cx';
import styles from './Container.module.css';

export type ContainerWidth = 'content' | 'wide' | 'bleed';

type ContainerProps = {
  /**
   * `content` (1320px) es el eje de toda la Home. `wide` comparte
   * esa misma medida para no abrir un segundo ancho. `bleed` para
   * fondos y medios a sangre.
   */
  width?: ContainerWidth;
  className?: string;
  children: ReactNode;
};

/**
 * Aplica ancho máximo y padding lateral responsive.
 *
 * Por encima de 1440px el contenido NO crece: el espacio sobrante
 * pasa a margen (§8.4). Es lo que sostiene la sensación premium.
 *
 * Container no aporta semántica: el elemento semántico lo pone
 * quien lo envuelve (Section, header, footer).
 */
export function Container({ width = 'content', className, children }: ContainerProps) {
  return <div className={cx(styles.container, styles[width], className)}>{children}</div>;
}
