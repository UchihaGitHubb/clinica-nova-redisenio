import Image from 'next/image';
import Link from 'next/link';
import { BandCta } from '@/components/procedures/BandCta';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import {
  anesthetists,
  specialistHref,
  specialistsCopy,
  surgeons,
  type Specialist,
} from '@/lib/content/specialists';
import styles from './SpecialistsView.module.css';

function Roster({
  title,
  items,
}: {
  title: string;
  items: Specialist[];
}) {
  return (
    <div className={styles.group}>
      <div className={styles.head}>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.count}>{String(items.length).padStart(2, '0')}</p>
      </div>
      <ul className={styles.grid}>
        {items.map((person, index) => (
          <Reveal as="li" key={person.slug} index={index % 3} className={styles.card}>
            <Link href={specialistHref(person.slug)} className={styles.cardLink}>
              <div className={styles.media}>
                {person.image ? (
                  <Image
                    src={person.image.src}
                    alt={person.image.alt}
                    fill
                    sizes="(min-width: 1024px) 28vw, (min-width: 768px) 33vw, 50vw"
                    className={styles.photo}
                  />
                ) : (
                  <PlaceholderImage ratio="portrait" tone="cool" className={styles.fallback} />
                )}
              </div>
              <p className={styles.name}>{person.name}</p>
              <p className={styles.role}>{person.role}</p>
            </Link>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

export function SpecialistsView() {
  return (
    <>
      <header className={styles.hero} data-surface="dark">
        <Container className={styles.heroInner}>
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Especialistas' },
            ]}
          />
          <RevealGroup>
            <Reveal index={0}>
              <p className={styles.overline}>{specialistsCopy.overline}</p>
            </Reveal>
            <div className={styles.heroGrid}>
              <Reveal index={1}>
                <h1 className={styles.title}>
                  {specialistsCopy.title.map((line) => (
                    <span key={line} className={styles.titleLine}>
                      {line}
                    </span>
                  ))}
                </h1>
              </Reveal>
              <Reveal index={2}>
                <p className={styles.subtitle}>{specialistsCopy.subtitle}</p>
              </Reveal>
            </div>
          </RevealGroup>
        </Container>
      </header>

      <Section surface="primary" rhythm="default">
        <Container className={styles.catalog}>
          <Roster title={specialistsCopy.surgeonsTitle} items={surgeons} />
          <Roster title={specialistsCopy.anesthetistsTitle} items={anesthetists} />
          <p className={styles.note}>{specialistsCopy.note}</p>
        </Container>
      </Section>

      <BandCta title={specialistsCopy.ctaTitle} />
    </>
  );
}
