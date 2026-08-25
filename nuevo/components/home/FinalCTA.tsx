import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import { finalCta } from '@/lib/content/home';
import { images } from '@/lib/images';
import { site } from '@/lib/site';
import styles from './FinalCTA.module.css';

export function FinalCTA() {
  return (
    <section className={styles.section} data-surface="dark" aria-labelledby="cta-title">
      <div className={styles.media} aria-hidden="true">
        <Image
          src={images.heroSede.src}
          alt=""
          fill
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.veil} />
      </div>

      <Container className={styles.content}>
        <RevealGroup className={styles.layout}>
          <Reveal index={0}>
            <h2 id="cta-title" className={styles.title}>
              {finalCta.title.map((line) => (
                <span key={line} className={styles.titleLine}>
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal index={1}>
            <p className={styles.body}>{site.tagline}</p>
          </Reveal>
          <Reveal index={2}>
            <ButtonLink href={site.cta.href} variant="primary" className={styles.cta}>
              {site.cta.label}
              <Icon name="arrow-right" size={18} className={styles.arrow} />
            </ButtonLink>
          </Reveal>
        </RevealGroup>
      </Container>
    </section>
  );
}
