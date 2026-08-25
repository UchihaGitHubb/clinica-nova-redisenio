import type { ReactNode } from 'react';
import { cx } from '@/lib/cx';
import styles from './Section.module.css';

/** Las cinco superficies del sistema (§3.4). */
export type Surface = 'primary' | 'secondary' | 'sand' | 'dark' | 'elevated' | 'band';

/** Ritmo vertical (§9.2). */
export type SectionRhythm = 'compact' | 'default' | 'wide' | 'flush';

type SectionProps = {
  surface?: Surface;
  rhythm?: SectionRhythm;
  /** Filete superior, solo si la sección anterior comparte fondo. */
  divided?: boolean;
  /** Necesario cuando la sección se referencia desde un enlace o un aria-labelledby. */
  id?: string;
  'aria-labelledby'?: string;
  className?: string;
  children: ReactNode;
};

/**
 * Banda horizontal de página: aporta fondo, color de superficie y
 * ritmo vertical.
 *
 * Reglas de secuencia que el sistema espera (§1.9) y que este
 * componente no puede imponer por sí solo:
 * nunca dos superficies `dark` consecutivas, y máximo dos por página.
 */
export function Section({
  surface = 'primary',
  rhythm = 'default',
  divided = false,
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      data-surface={surface}
      className={cx(
        styles.section,
        rhythm !== 'default' && styles[rhythm],
        divided && styles.divided,
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
}
