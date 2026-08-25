import { Fragment, type ReactNode } from 'react';
import { cx } from '@/lib/cx';
import styles from './SectionHeading.module.css';

/**
 * `h1` para el título de página, `h2` para secciones (ambos en
 * Cormorant), `h3` para subsecciones (Manrope). La jerarquía debe
 * ser secuencial, sin saltos, y con un solo `h1` por página (§27.5).
 */
export type HeadingLevel = 'h1' | 'h2' | 'h3';

type SectionHeadingProps = {
  /** Rótulo superior en versales. Sitúa y clasifica sin competir con el titular. */
  overline?: string;
  /**
   * Un array compone el titular en líneas fijas, una por elemento. La
   * V2 apoya buena parte de su carácter editorial en decidir dónde
   * rompe cada titular en lugar de dejarlo al ancho disponible, y esa
   * decisión pertenece al contenido, no al CSS.
   */
  title: ReactNode | readonly string[];
  subtitle?: ReactNode;
  level?: HeadingLevel;
  align?: 'start' | 'center';
  /** Para vincular la sección con `aria-labelledby`. */
  titleId?: string;
  /** Filete de acento de 48px sobre el rótulo, como en el hero. */
  rule?: boolean;
  className?: string;
};

/**
 * Bloque rótulo → titular → subtítulo con el ritmo del §7.2:
 * 16px del rótulo al titular, 24px del titular al subtítulo.
 *
 * El titular no lleva estilos propios: los hereda de la regla de
 * elemento en base.css, que es la que aplica la frontera entre
 * Cormorant (h1, h2) y Manrope (h3).
 */
export function SectionHeading({
  overline,
  title,
  subtitle,
  level = 'h2',
  align = 'start',
  titleId,
  rule = false,
  className,
}: SectionHeadingProps) {
  const Title = level;

  return (
    <div className={cx(styles.heading, align === 'center' && styles.center, className)}>
      {overline && (
        <p className={cx(styles.overline, rule && styles.ruled)}>{overline}</p>
      )}

      <Title id={titleId} className={styles.title}>
        {Array.isArray(title)
          ? title.map((line, index) => (
              <Fragment key={line}>
                {/* Espacio explícito: por debajo de 480px las líneas se
                    componen en línea y sin él quedarían pegadas. */}
                {index > 0 ? ' ' : null}
                <span className={styles.titleLine}>{line}</span>
              </Fragment>
            ))
          : title}
      </Title>

      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
