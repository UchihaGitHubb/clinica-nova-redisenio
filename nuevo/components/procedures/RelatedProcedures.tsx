import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import { getAdjacent, getRelated, procedureHref, proceduresCopy, type Procedure } from '@/lib/content/procedures';
import styles from './RelatedProcedures.module.css';

type RelatedProceduresProps = {
  procedure: Procedure;
};

export function RelatedProcedures({ procedure }: RelatedProceduresProps) {
  const related = getRelated(procedure);
  const { previous, next } = getAdjacent(procedure);

  return (
    <div className={styles.wrap}>
      {related.length > 0 ? (
        <section aria-labelledby="related-title">
          <Reveal>
            <h2 id="related-title" className={styles.heading}>
              {proceduresCopy.relatedTitle}
            </h2>
          </Reveal>
          <RevealGroup as="ul" className={styles.list}>
            {related.map((item, index) => (
              <Reveal as="li" key={item.slug} index={Math.min(index, 5)}>
                <Link href={procedureHref(item.slug)} className={styles.row}>
                  <span>{item.name}</span>
                  <Icon name="arrow-right" size={16} className={styles.arrow} />
                </Link>
              </Reveal>
            ))}
          </RevealGroup>
        </section>
      ) : null}

      <Reveal>
        <nav className={styles.pager} aria-label="Procedimientos de esta área">
          {previous ? (
            <Link href={procedureHref(previous.slug)} className={styles.prev}>
              <span className={styles.pagerLabel}>Anterior</span>
              <span className={styles.pagerName}>{previous.name}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={procedureHref(next.slug)} className={styles.next}>
              <span className={styles.pagerLabel}>Siguiente</span>
              <span className={styles.pagerName}>{next.name}</span>
            </Link>
          ) : null}
        </nav>
      </Reveal>
    </div>
  );
}
