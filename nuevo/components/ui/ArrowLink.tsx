import Link from 'next/link';
import { cx } from '@/lib/cx';
import { Icon } from './Icon';
import styles from './ArrowLink.module.css';

type ArrowLinkProps = {
  href: string;
  children: string;
  /** `large` para cierres de sección; el resto usa el tamaño de cuerpo. */
  size?: 'default' | 'large';
  className?: string;
};

/**
 * Enlace editorial con flecha · docs/04-DESIGN-SYSTEM.md §13.7, §15.4
 *
 * La V2 reduce el número de botones de la portada. Cada sección tenía
 * un botón secundario compitiendo con el CTA principal, y el resultado
 * era una página donde todo pedía lo mismo con la misma intensidad.
 *
 * Este componente ocupa ese lugar: es un enlace de texto con filete y
 * flecha, no un botón. Pesa lo justo para encontrarse y lo suficiente
 * poco para que el único relleno de la pantalla siga siendo «Agendar
 * valoración».
 *
 * La flecha se desplaza 4px en hover. Es la única animación decorativa
 * del sistema y se apaga con `prefers-reduced-motion` (§26.5). El
 * filete inferior existe siempre: el subrayado no es un efecto de
 * hover, porque un enlace debe distinguirse sin necesidad de cursor.
 */
export function ArrowLink({ href, children, size = 'default', className }: ArrowLinkProps) {
  return (
    <Link href={href} className={cx(styles.link, size === 'large' && styles.large, className)}>
      <span className={styles.label}>{children}</span>
      <Icon name="arrow-right" size={16} className={styles.arrow} />
    </Link>
  );
}
