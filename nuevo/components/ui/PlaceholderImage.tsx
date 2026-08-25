import { cx } from '@/lib/cx';
import styles from './PlaceholderImage.module.css';

export type PlaceholderRatio = 'portrait' | 'landscape' | 'square' | 'round' | 'hero';
export type PlaceholderTone = 'warm' | 'cool' | 'studio';

type PlaceholderImageProps = {
  /** Conserva el hueco de la fotografía definitiva. */
  ratio?: PlaceholderRatio;
  tone?: PlaceholderTone;
  /** Etiqueta discreta para el prototipo. */
  label?: string;
  className?: string;
};

/**
 * Sustituto visual de fotografía. Misma proporción que el recuadro
 * final: más adelante se cambia por next/image sin tocar el layout.
 */
export function PlaceholderImage({
  ratio = 'portrait',
  tone = 'studio',
  label,
  className,
}: PlaceholderImageProps) {
  return (
    <div
      className={cx(styles.frame, styles[ratio], styles[tone], className)}
      role="img"
      aria-label={label ?? 'Imagen pendiente'}
    >
      <span className={styles.glow} aria-hidden="true" />
      <span className={styles.figure} aria-hidden="true" />
      {label ? <span className={styles.caption}>{label}</span> : null}
    </div>
  );
}
