import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import { IncludesList } from '@/components/procedures/IncludesList';
import { MedicalNotice } from '@/components/procedures/MedicalNotice';
import { ProcedureAside } from '@/components/procedures/ProcedureAside';
import { RelatedProcedures } from '@/components/procedures/RelatedProcedures';
import { SpecSheet } from '@/components/procedures/SpecSheet';
import { getCategory, proceduresCopy, type Procedure } from '@/lib/content/procedures';
import styles from './ProcedureView.module.css';

type ProcedureViewProps = {
  procedure: Procedure;
};

export function ProcedureView({ procedure }: ProcedureViewProps) {
  const category = getCategory(procedure.category);

  return (
    <>
      <header className={styles.hero} data-surface="dark">
        <Container className={styles.heroInner}>
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Procedimientos', href: '/procedimientos' },
              { label: category.label, href: category.href },
              { label: procedure.name },
            ]}
          />
          <RevealGroup>
            <Reveal index={0}>
              <p className={styles.overline}>{category.label}</p>
            </Reveal>
            <div className={styles.heroGrid}>
              <Reveal index={1}>
                <h1 className={styles.title}>{procedure.name}</h1>
              </Reveal>
              <Reveal index={2}>
                <p className={styles.definition}>{procedure.definition}</p>
              </Reveal>
            </div>
            {procedure.source === 'aliado' ? (
              <Reveal index={3}>
                <p className={styles.ally}>{proceduresCopy.allyNotice}</p>
              </Reveal>
            ) : null}
          </RevealGroup>
        </Container>
      </header>

      <Section surface="primary" rhythm="default">
        <Container className={styles.layout}>
          <Reveal index={1} className={styles.side}>
            <ProcedureAside procedure={procedure} />
          </Reveal>

          <RevealGroup className={styles.body}>
            {procedure.includes.length > 0 ? (
              <Reveal index={0} className={styles.block}>
                <section aria-labelledby="includes-title">
                  <h2 id="includes-title" className={styles.heading}>
                    {proceduresCopy.includesTitle}
                  </h2>
                  <IncludesList items={procedure.includes} />
                </section>
              </Reveal>
            ) : null}

            {procedure.source !== 'aliado' ? (
              <Reveal index={1} className={styles.block}>
                <section aria-labelledby="spec-title">
                  <h2 id="spec-title" className={styles.heading}>
                    {proceduresCopy.specTitle}
                  </h2>
                  <SpecSheet />
                </section>
              </Reveal>
            ) : null}

            <Reveal index={2}>
              <MedicalNotice />
            </Reveal>
            <Reveal index={3}>
              <RelatedProcedures procedure={procedure} />
            </Reveal>
          </RevealGroup>
        </Container>
      </Section>
    </>
  );
}
