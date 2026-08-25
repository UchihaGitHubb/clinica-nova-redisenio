import Image from 'next/image';
import Link from 'next/link';
import { BandCta } from '@/components/procedures/BandCta';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { SpecSheet } from '@/components/procedures/SpecSheet';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { ProposalNote } from '@/components/ui/ProposalNote';
import { focusDraft } from '@/lib/content/proposal';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  agendarSpecialistHref,
  getRelatedSpecialists,
  specialistHref,
  specialistsCopy,
  specialistWhatsappHref,
  type Specialist,
} from '@/lib/content/specialists';
import { site } from '@/lib/site';
import styles from './SpecialistView.module.css';

type SpecialistViewProps = {
  person: Specialist;
};

export function SpecialistView({ person }: SpecialistViewProps) {
  const others = getRelatedSpecialists(person.slug);

  return (
    <>
      <header className={styles.hero} data-surface="dark">
        <Container className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <Breadcrumb
              items={[
                { label: 'Inicio', href: '/' },
                { label: 'Especialistas', href: '/especialistas' },
                { label: person.name },
              ]}
            />
            <RevealGroup className={styles.heroBody}>
              <Reveal index={0}>
                <p className={styles.overline}>{specialistsCopy.overline}</p>
              </Reveal>
              <Reveal index={1}>
                <h1 className={styles.title}>{person.name}</h1>
              </Reveal>
              <Reveal index={2}>
                <p className={styles.role}>{person.role}</p>
              </Reveal>
            </RevealGroup>
          </div>
          <Reveal index={1} className={styles.heroMedia}>
            {person.image ? (
              <Image
                src={person.image.src}
                alt={person.image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className={styles.photo}
              />
            ) : (
              <PlaceholderImage ratio="portrait" tone="cool" className={styles.fallback} />
            )}
          </Reveal>
        </Container>
      </header>

      <Section surface="primary" rhythm="default" aria-labelledby="specialist-note-title">
        <Container className={styles.panel}>
          <Reveal index={0}>
            <h2 id="specialist-note-title" className="visually-hidden">
              Datos por confirmar
            </h2>
            <p className={styles.note}>{specialistsCopy.profileNote}</p>
            <SpecSheet rows={specialistsCopy.pendingSlots} />
            <p className={styles.focusTitle}>{specialistsCopy.focusTitle}</p>
            <ProposalNote>{focusDraft(person.role)}</ProposalNote>
          </Reveal>
          <Reveal index={1} className={styles.actions}>
            <ButtonLink href={agendarSpecialistHref(person.slug)} variant="primary">
              {site.cta.label}
              <Icon name="arrow-right" size={16} />
            </ButtonLink>
            <ButtonLink
              href={specialistWhatsappHref(person.name)}
              variant="whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={18} />
              {specialistsCopy.whatsapp}
            </ButtonLink>
          </Reveal>
        </Container>
      </Section>

      {others.length > 0 ? (
        <Section surface="secondary" rhythm="default" aria-labelledby="specialist-others-title">
          <Container>
            <Reveal index={0}>
              <SectionHeading
                title={specialistsCopy.othersTitle}
                titleId="specialist-others-title"
                rule
              />
            </Reveal>
            <ul className={styles.others}>
              {others.map((item, index) => (
                <Reveal as="li" key={item.slug} index={index}>
                  <Link href={specialistHref(item.slug)} className={styles.otherLink}>
                    <span className={styles.otherName}>{item.name}</span>
                    <span className={styles.otherRole}>{item.role}</span>
                  </Link>
                </Reveal>
              ))}
            </ul>
            <Reveal index={others.length}>
              <ArrowLink href="/especialistas">{specialistsCopy.othersCta}</ArrowLink>
            </Reveal>
          </Container>
        </Section>
      ) : null}

      <BandCta title={specialistsCopy.ctaTitle} href={agendarSpecialistHref(person.slug)} />
    </>
  );
}
