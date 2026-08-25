import Link from 'next/link';
import { BandCta } from '@/components/procedures/BandCta';
import { BeforeAfter } from '@/components/results/BeforeAfter';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Icon } from '@/components/ui/Icon';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  resultGroupCta,
  resultGroups,
  resultHref,
  resultsCopy,
  resultVoices,
} from '@/lib/content/results';
import styles from './ResultsView.module.css';

export function ResultsView() {
  return (
    <>
      <header className={styles.hero} data-surface="dark">
        <Container className={styles.heroInner}>
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Resultados' },
            ]}
          />
          <RevealGroup>
            <Reveal index={0}>
              <p className={styles.overline}>{resultsCopy.overline}</p>
            </Reveal>
            <div className={styles.heroGrid}>
              <Reveal index={1}>
                <h1 className={styles.title}>
                  {resultsCopy.title.map((line) => (
                    <span key={line} className={styles.titleLine}>
                      {line}
                    </span>
                  ))}
                </h1>
              </Reveal>
              <Reveal index={2}>
                <p className={styles.subtitle}>{resultsCopy.subtitle}</p>
              </Reveal>
            </div>
          </RevealGroup>
        </Container>
      </header>

      <Section surface="primary" rhythm="default" aria-labelledby="results-cases-title">
        <Container className={styles.cases}>
          <Reveal index={0}>
            <SectionHeading
              overline={resultsCopy.casesOverline}
              title={resultsCopy.casesTitle}
              titleId="results-cases-title"
              rule
            />
          </Reveal>
          <p className={styles.notice}>{resultsCopy.notice}</p>
          {resultGroups.map((group) => (
            <section key={group.id} className={styles.group} aria-labelledby={`results-${group.id}`}>
              <div className={styles.groupHead}>
                <h3 id={`results-${group.id}`} className={styles.groupTitle}>
                  {group.label}
                </h3>
                <Link href={group.href} className={styles.groupLink}>
                  {resultGroupCta(group)}
                  <Icon name="arrow-right" size={14} />
                </Link>
              </div>
              <ul className={styles.grid}>
                {group.cases.map((item, index) => (
                  <Reveal as="li" key={item.id} index={index} className={styles.card}>
                    <BeforeAfter before={item.before} after={item.after} />
                    <p className={styles.hint}>{resultsCopy.casesHint}</p>
                    <Link href={resultHref(item.id)} className={styles.caseLink}>
                      Ver este caso
                    </Link>
                  </Reveal>
                ))}
              </ul>
            </section>
          ))}
        </Container>
      </Section>

      <Section surface="secondary" rhythm="default" aria-labelledby="results-voices-title">
        <Container className={styles.voices}>
          <Reveal index={0}>
            <SectionHeading
              overline={resultsCopy.voicesOverline}
              title={resultsCopy.voicesTitle}
              titleId="results-voices-title"
              rule
            />
          </Reveal>
          <ul className={styles.quotes}>
            {resultVoices.map((voice, index) => (
              <Reveal as="li" key={voice.id} index={index} className={styles.quote}>
                <blockquote>
                  <p>«{voice.quote}»</p>
                </blockquote>
                <p className={styles.cite}>{voice.name}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <BandCta title={resultsCopy.ctaTitle} />
    </>
  );
}
