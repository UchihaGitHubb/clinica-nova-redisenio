import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import {
  categoryCopy,
  getCategory,
  getProceduresByCategory,
  proceduresCopy,
  type ProcedureCategoryId,
} from '@/lib/content/procedures';
import styles from './CategoryHero.module.css';

type CategoryHeroProps = {
  id: ProcedureCategoryId;
};

export function CategoryHero({ id }: CategoryHeroProps) {
  const category = getCategory(id);
  const copy = categoryCopy[id];
  const count = getProceduresByCategory(id).length;

  return (
    <header className={styles.hero} data-surface="dark">
      <Container className={styles.grid}>
        <div className={styles.copy}>
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Procedimientos', href: '/procedimientos' },
              { label: category.label },
            ]}
          />
          <RevealGroup className={styles.copyBody}>
            <Reveal index={0}>
              <p className={styles.overline}>{copy.overline}</p>
            </Reveal>
            <Reveal index={1}>
              <h1 className={styles.title}>{copy.title}</h1>
            </Reveal>
            <Reveal index={2}>
              <p className={styles.intro}>{copy.intro}</p>
            </Reveal>
            <Reveal index={3}>
              <p className={styles.count}>{String(count).padStart(2, '0')} procedimientos</p>
            </Reveal>
            {id === 'belleza-intima' ? (
              <Reveal index={4}>
                <p className={styles.note}>{proceduresCopy.confidentiality}</p>
              </Reveal>
            ) : null}
            {id === 'esteticos' ? (
              <Reveal index={4}>
                <p className={styles.note}>{proceduresCopy.allyNotice}</p>
              </Reveal>
            ) : null}
          </RevealGroup>
        </div>
        <Reveal index={1} className={styles.media}>
          {category.image ? (
            <Image
              src={category.image.src}
              alt={category.image.alt}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className={styles.photo}
              priority
            />
          ) : (
            <PlaceholderImage ratio="portrait" tone="cool" className={styles.fallback} />
          )}
        </Reveal>
      </Container>
    </header>
  );
}
