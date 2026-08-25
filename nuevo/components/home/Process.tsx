import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import { process as copy } from '@/lib/content/home';
import { processSteps } from '@/lib/content/process-steps';
import { images } from '@/lib/images';
import { site } from '@/lib/site';
import styles from './Process.module.css';

export function Process() {
  return (
    <Section surface="primary" rhythm="wide" aria-labelledby="process-title">
      <Container>
        <RevealGroup className={styles.layout}>
          <Reveal index={0} className={styles.figureWrap}>
            <figure className={styles.figure}>
              <Image
                src={images.heroSede.src}
                alt={images.heroSede.alt}
                fill
                sizes="(min-width: 1024px) 28vw, 80vw"
                className={styles.image}
              />
            </figure>
          </Reveal>

          <div className={styles.panel}>
            <Reveal index={1}>
              <h2 id="process-title" className={styles.title}>
                {copy.title}
              </h2>
            </Reveal>
            <Reveal index={2}>
              <p className={styles.subtitle}>{copy.subtitle}</p>
            </Reveal>
            <Reveal index={3}>
              <ButtonLink href={site.cta.href} variant="primary" className={styles.headCta}>
                {site.cta.label}
                <Icon name="arrow-right" size={16} />
              </ButtonLink>
            </Reveal>

            <ol className={styles.steps}>
              {processSteps.map((step, index) => (
                <Reveal as="li" key={step.numeral} index={index + 4} className={styles.step}>
                  <span className={styles.numeral}>{step.numeral}</span>
                  <div className={styles.stepCopy}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepBody}>{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal index={processSteps.length + 4} className={styles.cta}>
              <ArrowLink href={copy.cta.href}>{copy.cta.label}</ArrowLink>
            </Reveal>
          </div>
        </RevealGroup>
      </Container>
    </Section>
  );
}
