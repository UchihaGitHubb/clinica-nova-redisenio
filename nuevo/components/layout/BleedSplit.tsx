import Image from 'next/image';
import type { ReactNode } from 'react';
import { cx } from '@/lib/cx';
import type { ImageAsset } from '@/lib/images';
import styles from './BleedSplit.module.css';

type BleedSplitProps = {
  image: ImageAsset;
  /** Borde por el que sangra la fotografía. Alterna entre secciones (§31.2). */
  side: 'start' | 'end';
  /** Pie de foto opcional, en tamaño de metadato bajo la imagen. */
  caption?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Composición a sangre de dos columnas · docs/04-DESIGN-SYSTEM.md §17.2, §31.2
 *
 * Fotografía sangrando por un borde de la ventana y contenido en la
 * columna opuesta, alineado al eje del contenedor de contenido. Es el
 * patrón que la V2 usa en Especialistas y en Resultados, y existe como
 * componente para que la alternancia de lado y el cálculo del eje se
 * decidan en un solo sitio.
 *
 * ── POR QUÉ 48vw Y RATIO 3:2 ──────────────────────────────────────
 *
 * §17.2 prohíbe renderizar por encima de 1.25× el ancho original y el
 * material disponible mide 700 × 500 px. A 48vw el recuadro mide 691 px
 * en una ventana de 1440, es decir 0.99× del original: sin ampliación.
 * Un formato vertical al mismo ancho exigiría 1.7× y quedaría blando.
 *
 * Por eso la imagen es horizontal y ancha en lugar de alta y estrecha.
 * La presencia se consigue con la sangría y con el ancho, no forzando
 * la resolución.
 */
export function BleedSplit({ image, side, caption, children, className }: BleedSplitProps) {
  return (
    <div className={cx(styles.split, side === 'end' && styles.sideEnd, className)}>
      <figure className={styles.figure}>
        <div className={styles.frame}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 54vw, 100vw"
            className={styles.image}
          />
        </div>

        {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
      </figure>

      <div className={styles.content}>{children}</div>
    </div>
  );
}
