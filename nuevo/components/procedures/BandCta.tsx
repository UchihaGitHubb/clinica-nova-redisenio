import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import { Container } from '@/components/layout/Container';
import { site } from '@/lib/site';
import styles from './BandCta.module.css';

type BandCtaProps = {
  title: string;
  body?: string;
  href?: string;
};

export function BandCta({ title, body, href = site.cta.href }: BandCtaProps) {
  return (
    <section className={styles.band} data-surface="dark" aria-labelledby="procedures-cta-title">
      <Container>
        <RevealGroup className={styles.inner}>
          <Reveal index={0} className={styles.copy}>
            <p className={styles.rule} aria-hidden="true" />
            <h2 id="procedures-cta-title" className={styles.title}>
              {title}
            </h2>
            {body ? <p className={styles.body}>{body}</p> : null}
          </Reveal>
          <Reveal index={1} className={styles.ctaWrap}>
            <ButtonLink href={href} variant="primary" className={styles.cta}>
              {site.cta.label}
              <Icon name="arrow-right" size={16} />
            </ButtonLink>
          </Reveal>
        </RevealGroup>
      </Container>
    </section>
  );
}
