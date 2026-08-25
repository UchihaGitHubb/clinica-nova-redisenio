import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Icon } from '@/components/ui/Icon';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { legalCopy, legalDocuments, type LegalPage } from '@/lib/content/legal';
import styles from './LegalView.module.css';

type LegalViewProps = {
  page: LegalPage;
};

export function LegalView({ page }: LegalViewProps) {
  return (
    <>
      <header className={styles.hero} data-surface="dark">
        <Container className={styles.heroInner}>
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: page.crumb },
            ]}
          />
          <RevealGroup>
            <Reveal index={0}>
              <p className={styles.overline}>{page.overline}</p>
            </Reveal>
            <div className={styles.heroGrid}>
              <Reveal index={1}>
                <h1 className={styles.title}>
                  {page.title.map((line) => (
                    <span key={line} className={styles.titleLine}>
                      {line}
                    </span>
                  ))}
                </h1>
              </Reveal>
              <Reveal index={2}>
                <p className={styles.subtitle}>{page.subtitle}</p>
              </Reveal>
            </div>
          </RevealGroup>
        </Container>
      </header>

      <Section surface="primary" rhythm="default" aria-labelledby="legal-body-title">
        <Container className={styles.body}>
          <h2 id="legal-body-title" className="visually-hidden">
            {page.crumb}
          </h2>
          {page.source ? <p className={styles.source}>{page.source}</p> : null}
          <div className={styles.article}>
            {page.sections.map((section, index) => (
              <Reveal key={section.id} index={index % 6} className={styles.block}>
                <h3 id={section.id} className={styles.heading}>
                  {section.title}
                </h3>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.points?.length ? (
                  <ul>
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </Reveal>
            ))}
            {page.cta ? (
              <Reveal index={0}>
                <ArrowLink href={page.cta.href}>{page.cta.label}</ArrowLink>
              </Reveal>
            ) : null}
          </div>
        </Container>
      </Section>

      <Section surface="secondary" rhythm="default" aria-labelledby="legal-docs-title">
        <Container>
          <Reveal index={0}>
            <SectionHeading
              overline={legalCopy.documentsOverline}
              title={legalCopy.documentsTitle}
              titleId="legal-docs-title"
              subtitle={legalCopy.documentsBody}
              rule
            />
          </Reveal>
          <ul className={styles.docs}>
            {legalDocuments.map((document, index) => (
              <Reveal as="li" key={document.id} index={index} className={styles.doc}>
                <a href={document.href} target="_blank" rel="noopener noreferrer">
                  <span className={styles.docLabel}>{document.label}</span>
                  <span className={styles.docKind}>{document.kind}</span>
                  <Icon name="arrow-right" size={16} />
                </a>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
