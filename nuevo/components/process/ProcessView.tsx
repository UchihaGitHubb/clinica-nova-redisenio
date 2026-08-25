import Image from 'next/image';
import Link from 'next/link';
import { BandCta } from '@/components/procedures/BandCta';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { featuredFaqIds, journeySteps, processCopy, processNotes } from '@/lib/content/process';
import { faqHref, getFaqItem } from '@/lib/content/faq';
import { images } from '@/lib/images';
import styles from './ProcessView.module.css';

const featuredFaqs = featuredFaqIds
  .map((id) => getFaqItem(id))
  .filter((item): item is NonNullable<typeof item> => Boolean(item));

export function ProcessView() {
  return (
    <>
      <header className={styles.hero} data-surface="dark">
        <Container className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <Breadcrumb
              items={[
                { label: 'Inicio', href: '/' },
                { label: 'Tu proceso' },
              ]}
            />
            <RevealGroup className={styles.heroBody}>
              <Reveal index={0}>
                <p className={styles.overline}>{processCopy.overline}</p>
              </Reveal>
              <Reveal index={1}>
                <h1 className={styles.title}>
                  {processCopy.title.map((line) => (
                    <span key={line} className={styles.titleLine}>
                      {line}
                    </span>
                  ))}
                </h1>
              </Reveal>
              <Reveal index={2}>
                <p className={styles.subtitle}>{processCopy.subtitle}</p>
              </Reveal>
            </RevealGroup>
          </div>
          <Reveal index={1} className={styles.heroMedia}>
            <Image
              src={images.equipo.src}
              alt={images.equipo.alt}
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className={styles.heroPhoto}
            />
          </Reveal>
        </Container>
      </header>

      <Section surface="primary" rhythm="default" aria-labelledby="process-steps-title">
        <Container>
          <Reveal index={0}>
            <SectionHeading
              overline={processCopy.stepsOverline}
              title={processCopy.stepsTitle}
              titleId="process-steps-title"
              rule
            />
          </Reveal>
          <ol className={styles.steps}>
            {journeySteps.map((step, index) => (
              <Reveal as="li" key={step.numeral} index={index} className={styles.step}>
                <p className={styles.numeral} aria-hidden="true">
                  {step.numeral}
                </p>
                <div className={styles.stepCopy}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepBody}>{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      <Section surface="secondary" rhythm="default" aria-labelledby="process-notes-title">
        <Container>
          <Reveal index={0}>
            <SectionHeading
              overline={processCopy.notesOverline}
              title={processCopy.notesTitle}
              titleId="process-notes-title"
              rule
            />
          </Reveal>
          <ul className={styles.notes}>
            {processNotes.map((note, index) => (
              <Reveal as="li" key={note.title} index={index} className={styles.note}>
                <p className={styles.noteTitle}>{note.title}</p>
                <p className={styles.noteBody}>{note.body}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section surface="primary" rhythm="default" aria-labelledby="process-financing-title">
        <Container className={styles.panel}>
          <Reveal index={0}>
            <SectionHeading
              overline={processCopy.financingOverline}
              title={processCopy.financingTitle}
              titleId="process-financing-title"
              subtitle={processCopy.financingBody}
              rule
            />
          </Reveal>
          <Reveal index={1}>
            <ArrowLink href="/tu-proceso/financiacion">{processCopy.financingCta}</ArrowLink>
          </Reveal>
        </Container>
      </Section>

      <Section surface="secondary" rhythm="default" aria-labelledby="process-faq-title">
        <Container className={styles.panel}>
          <Reveal index={0}>
            <SectionHeading
              overline={processCopy.faqOverline}
              title={processCopy.faqTitle}
              titleId="process-faq-title"
              rule
            />
          </Reveal>
          <ul className={styles.faqList}>
            {featuredFaqs.map((item, index) => (
              <Reveal as="li" key={item.id} index={index}>
                <Link href={faqHref(item.id)} className={styles.faqLink}>
                  {item.question}
                </Link>
              </Reveal>
            ))}
          </ul>
          <Reveal index={featuredFaqs.length}>
            <ArrowLink href="/tu-proceso/preguntas-frecuentes">{processCopy.faqCta}</ArrowLink>
          </Reveal>
        </Container>
      </Section>

      <BandCta title={processCopy.ctaTitle} />
    </>
  );
}
