import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Icon } from '@/components/ui/Icon';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import { BandCta } from '@/components/procedures/BandCta';
import { CatalogList } from '@/components/procedures/CatalogList';
import { CategoryCard } from '@/components/procedures/CategoryCard';
import { catalogCategories } from '@/lib/content/procedure-categories';
import {
  complementaryTreatments,
  getProceduresByCategory,
  procedureHref,
  procedures,
  proceduresCopy,
} from '@/lib/content/procedures';
import { site } from '@/lib/site';
import styles from './IndexView.module.css';

export function IndexView() {
  return (
    <>
      <header className={styles.hero} data-surface="dark">
        <Container className={styles.heroInner}>
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Procedimientos' },
            ]}
          />
          <RevealGroup>
            <Reveal index={0}>
              <p className={styles.overline}>{proceduresCopy.index.overline}</p>
            </Reveal>
            <div className={styles.heroGrid}>
              <Reveal index={1}>
                <h1 className={styles.title}>
                  {proceduresCopy.index.title.map((line) => (
                    <span key={line} className={styles.titleLine}>
                      {line}
                    </span>
                  ))}
                </h1>
              </Reveal>
              <Reveal index={2} className={styles.lead}>
                <p className={styles.subtitle}>{proceduresCopy.index.subtitle}</p>
                <p className={styles.stat}>
                  <span className={styles.statValue}>{String(procedures.length).padStart(2, '0')}</span>
                  <span className={styles.statLabel}>procedimientos</span>
                </p>
              </Reveal>
            </div>
          </RevealGroup>
        </Container>
      </header>

      <Section surface="dark" rhythm="compact">
        <Container>
          <RevealGroup as="ul" className={styles.categories}>
            {catalogCategories.map((category, index) => (
              <Reveal as="li" key={category.id} index={index} className={styles.item}>
                <CategoryCard
                  category={category}
                  count={getProceduresByCategory(category.id).length}
                />
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section surface="primary" rhythm="default" aria-labelledby="catalog-title">
        <Container>
          <RevealGroup>
            <Reveal index={0} className={styles.catalogHead}>
              <div>
                <p className={styles.catalogOverline}>{proceduresCopy.catalogOverline}</p>
                <h2 id="catalog-title" className={styles.catalogTitle}>
                  {proceduresCopy.catalogTitle}
                </h2>
              </div>
              <ul className={styles.chips}>
                {catalogCategories.map((category) => (
                  <li key={category.id}>
                    <a href={`#${category.id}`} className={styles.chip}>
                      {category.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
            <CatalogList />
          </RevealGroup>
        </Container>
      </Section>

      <Section surface="secondary" rhythm="compact" aria-labelledby="complementary-title">
        <Container>
          <RevealGroup className={styles.complementary}>
            <Reveal index={0}>
              <p className={styles.catalogOverline}>{proceduresCopy.complementaryOverline}</p>
              <h2 id="complementary-title" className={styles.sideTitle}>
                {proceduresCopy.complementaryTitle}
              </h2>
              <p className={styles.sideBody}>{proceduresCopy.complementaryBody}</p>
            </Reveal>
            <RevealGroup as="ul" className={styles.sideList}>
              {complementaryTreatments.map((item, index) => (
                <Reveal as="li" key={item.slug} index={Math.min(index, 5)}>
                  <Link href={procedureHref(item.slug)} className={styles.sideLink}>
                    <span>{item.name}</span>
                    <Icon name="arrow-right" size={16} className={styles.sideArrow} />
                  </Link>
                </Reveal>
              ))}
            </RevealGroup>
          </RevealGroup>
        </Container>
      </Section>

      <BandCta
        title="Tu procedimiento comienza con una valoración."
        body={site.tagline}
      />
    </>
  );
}
