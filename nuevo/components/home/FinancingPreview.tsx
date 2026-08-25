import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import { ConveniosStrip } from '@/components/home/ConveniosStrip';
import { financing } from '@/lib/content/home';
import { financingPartners } from '@/lib/content/financing-partners';
import styles from './FinancingPreview.module.css';

export function FinancingPreview() {
  return (
    <Section surface="primary" rhythm="wide" aria-labelledby="financing-title">
      <Container>
        <RevealGroup>
          <div className={styles.head}>
            <Reveal index={0}>
              <p className={styles.overline}>Aliados</p>
            </Reveal>
            <Reveal index={1}>
              <h2 id="financing-title" className={styles.title}>
                {financing.title.map((line) => (
                  <span key={line} className={styles.titleLine}>
                    {line}
                  </span>
                ))}
              </h2>
            </Reveal>
            <Reveal index={2}>
              <p className={styles.body}>{financing.body}</p>
            </Reveal>
          </div>

          <ul className={styles.pair}>
            {financingPartners.map((partner, index) => (
              <Reveal as="li" key={partner.id} index={index + 3} className={styles.partner}>
                <p className={styles.numeral} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div className={styles.mark}>
                  <Image
                    src={partner.logo.src}
                    alt={partner.name}
                    width={partner.logo.width}
                    height={partner.logo.height}
                    className={styles.logo}
                  />
                </div>
                <p className={styles.name}>{partner.name}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal index={5}>
            <ConveniosStrip />
          </Reveal>
        </RevealGroup>
      </Container>
    </Section>
  );
}
