import { cx } from '@/lib/cx';
import styles from './Breadcrumb.module.css';

export type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: readonly Crumb[];
  className?: string;
};

/**
 * Migas de pan · docs/04-DESIGN-SYSTEM.md §19.4
 *
 * Enlaces nativos, no `next/link`. El Link de App Router inyecta
 * atributos en el cliente y Next atribuye el aviso de hidratación
 * a esta lista.
 */
export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Migas de pan" className={cx(styles.nav, className)}>
      <ol className={styles.list}>
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className={styles.item}>
              {item.href && !last ? (
                <a href={item.href} className={styles.link}>
                  {item.label}
                </a>
              ) : (
                <span className={styles.current} aria-current={last ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
