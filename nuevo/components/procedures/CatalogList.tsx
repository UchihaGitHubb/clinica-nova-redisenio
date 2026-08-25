import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import { catalogCategories } from '@/lib/content/procedure-categories';
import {
  getProceduresByCategory,
  procedureHref,
  type ProcedureCategoryId,
} from '@/lib/content/procedures';
import styles from './CatalogList.module.css';

type CatalogListProps = {
  active?: ProcedureCategoryId;
  compact?: boolean;
};

export function CatalogList({ active, compact = false }: CatalogListProps) {
  const groups = catalogCategories.filter((category) => !active || category.id === active);

  return (
    <div className={styles.wrap}>
      {groups.map((category) => {
        const items = getProceduresByCategory(category.id);
        return (
          <Reveal key={category.id} className={styles.group}>
            <section id={category.id} aria-labelledby={`${category.id}-heading`}>
              {!compact ? (
                <div className={styles.head}>
                  <h3 id={`${category.id}-heading`} className={styles.heading}>
                    {category.label}
                  </h3>
                  <p className={styles.count}>{String(items.length).padStart(2, '0')}</p>
                </div>
              ) : (
                <h3 id={`${category.id}-heading`} className="visually-hidden">
                  {category.label}
                </h3>
              )}
              <RevealGroup as="ul" className={styles.list}>
                {items.map((item, index) => (
                  <Reveal as="li" key={item.slug} index={Math.min(index, 5)}>
                    <Link href={procedureHref(item.slug)} className={styles.row}>
                      <span className={styles.name}>{item.name}</span>
                      <span className={styles.hint}>{item.definition}</span>
                      <Icon name="arrow-right" size={16} className={styles.arrow} />
                    </Link>
                  </Reveal>
                ))}
              </RevealGroup>
            </section>
          </Reveal>
        );
      })}
    </div>
  );
}
