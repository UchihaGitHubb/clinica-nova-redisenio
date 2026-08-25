import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';
import { BandCta } from '@/components/procedures/BandCta';
import { CatalogList } from '@/components/procedures/CatalogList';
import { CategoryHero } from '@/components/procedures/CategoryHero';
import { MedicalNotice } from '@/components/procedures/MedicalNotice';
import { agendarHref, categoryCopy, type ProcedureCategoryId } from '@/lib/content/procedures';
import styles from './CategoryView.module.css';

type CategoryViewProps = {
  id: ProcedureCategoryId;
};

export function CategoryView({ id }: CategoryViewProps) {
  const copy = categoryCopy[id];

  return (
    <>
      <CategoryHero id={id} />
      <Section surface="primary" rhythm="default" aria-labelledby="category-list-title">
        <Container>
          <Reveal>
            <h2 id="category-list-title" className={styles.listTitle}>
              Procedimientos
            </h2>
          </Reveal>
          <CatalogList active={id} compact />
          <Reveal className={styles.notice}>
            <MedicalNotice />
          </Reveal>
        </Container>
      </Section>
      <BandCta title={copy.title} href={agendarHref(id)} />
    </>
  );
}
