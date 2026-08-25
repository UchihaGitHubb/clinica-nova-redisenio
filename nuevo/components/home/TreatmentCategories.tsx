import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { Icon } from '@/components/ui/Icon';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import { treatments } from '@/lib/content/home';
import { catalogCategories } from '@/lib/content/procedure-categories';
import styles from './TreatmentCategories.module.css';

export function TreatmentCategories() {
  return (
    <Section surface="dark" rhythm="compact" aria-labelledby="treatments-title">
      <Container>
        <RevealGroup>
          <header className={styles.head}>
            <Reveal index={0}>
              <h2 id="treatments-title" className={styles.title}>
                {treatments.titleLead} <em>{treatments.titleAccent}</em>
              </h2>
            </Reveal>
            <Reveal index={1}>
              <p className={styles.subtitle}>{treatments.subtitle}</p>
            </Reveal>
          </header>

          <ul className={styles.grid}>
            {catalogCategories.map((category, index) => (
              <Reveal as="li" key={category.id} index={index + 2} className={styles.item}>
                <Link href={category.href} className={styles.card}>
                  <div className={styles.media}>
                    {category.image ? (
                      <Image
                        src={category.image.src}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 32vw, 100vw"
                        className={styles.photo}
                      />
                    ) : (
                      <PlaceholderImage ratio="portrait" tone="cool" className={styles.fallback} />
                    )}
                  </div>
                  <span className={styles.shade} aria-hidden="true" />
                  <div className={styles.meta}>
                    <div className={styles.copy}>
                      <h3 className={styles.label}>{category.label}</h3>
                      <p className={styles.tags}>{category.tags.join(' · ')}</p>
                    </div>
                    <span className={styles.arrow} aria-hidden="true">
                      <Icon name="arrow-right" size={16} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>

          <div className={styles.explorer}>
            <Reveal index={catalogCategories.length + 2}>
              <p className={styles.explorerLabel}>{treatments.explorerLabel}</p>
            </Reveal>
            <ul className={styles.pills}>
              {treatments.explorer.map((item, index) => (
                <Reveal as="li" key={item.label} index={catalogCategories.length + 3 + index}>
                  <Link href={item.href} className={styles.pill}>
                    {item.label}
                  </Link>
                </Reveal>
              ))}
            </ul>
            <Reveal
              index={catalogCategories.length + 3 + treatments.explorer.length}
              className={styles.explorerCta}
            >
              <ArrowLink href={treatments.cta.href}>{treatments.cta.label}</ArrowLink>
            </Reveal>
          </div>
        </RevealGroup>
      </Container>
    </Section>
  );
}
