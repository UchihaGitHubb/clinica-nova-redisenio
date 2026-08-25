import Image from 'next/image';
import Link from 'next/link';
import { BandCta } from '@/components/procedures/BandCta';
import { SpecSheet } from '@/components/procedures/SpecSheet';
import { BeforeAfter } from '@/components/results/BeforeAfter';
import { ProposalNote } from '@/components/ui/ProposalNote';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  getRelatedResults,
  resultAgendarHref,
  resultGroupCta,
  resultHref,
  resultStoryDraft,
  resultsCopy,
  type ResultRecord,
} from '@/lib/content/results';
import styles from './ResultCaseView.module.css';

type ResultCaseViewProps = {
  record: ResultRecord;
};

export function ResultCaseView({ record }: ResultCaseViewProps) {
  const related = getRelatedResults(record.id);
  const numeral = String(record.index + 1).padStart(2, '0');
  const total = String(record.group.cases.length).padStart(2, '0');

  return (
    <>
      <header className={styles.hero} data-surface="dark">
        <Container className={styles.heroInner}>
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Resultados', href: '/resultados' },
              { label: record.group.label },
            ]}
          />
          <RevealGroup>
            <Reveal index={0}>
              <p className={styles.overline}>{resultsCopy.caseOverline}</p>
            </Reveal>
            <div className={styles.heroGrid}>
              <Reveal index={1}>
                <h1 className={styles.title}>{record.group.label}</h1>
              </Reveal>
              <Reveal index={2}>
                <p className={styles.subtitle}>
                  Caso {numeral} de {total}.
                </p>
              </Reveal>
            </div>
          </RevealGroup>
        </Container>
      </header>

      <Section surface="primary" rhythm="default" aria-labelledby="result-case-title">
        <Container className={styles.case}>
          <h2 id="result-case-title" className="visually-hidden">
            Antes y después
          </h2>
          <Reveal index={0} className={styles.comparator}>
            <BeforeAfter before={record.before} after={record.after} />
            <p className={styles.hint}>{resultsCopy.casesHint}</p>
          </Reveal>
          <p className={styles.notice}>{resultsCopy.notice}</p>
          <p className={styles.storyTitle}>{resultsCopy.storyTitle}</p>
          <ProposalNote>{resultStoryDraft(record.group)}</ProposalNote>
          <p className={styles.note}>{resultsCopy.caseNote}</p>
          <SpecSheet rows={resultsCopy.pendingSlots} />
          <ArrowLink href={record.group.href}>{resultGroupCta(record.group)}</ArrowLink>
        </Container>
      </Section>

      {related.length > 0 ? (
        <Section surface="secondary" rhythm="default" aria-labelledby="result-related-title">
          <Container>
            <Reveal index={0}>
              <SectionHeading
                title={resultsCopy.relatedTitle}
                titleId="result-related-title"
                rule
              />
            </Reveal>
            <ul className={styles.related}>
              {related.map((item, index) => (
                <Reveal as="li" key={item.id} index={index} className={styles.relatedItem}>
                  <Link href={resultHref(item.id)} className={styles.relatedLink}>
                    <div className={styles.relatedMedia}>
                      <Image
                        src={item.after.src}
                        alt={item.after.alt}
                        fill
                        sizes="(min-width: 768px) 28vw, 90vw"
                        className={styles.relatedPhoto}
                      />
                    </div>
                    <p className={styles.relatedLabel}>{item.group.label}</p>
                  </Link>
                </Reveal>
              ))}
            </ul>
            <Reveal index={related.length}>
              <ArrowLink href="/resultados">{resultsCopy.relatedCta}</ArrowLink>
            </Reveal>
          </Container>
        </Section>
      ) : null}

      <BandCta title={resultsCopy.ctaTitle} href={resultAgendarHref(record.group)} />
    </>
  );
}
