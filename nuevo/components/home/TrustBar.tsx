import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Icon } from '@/components/ui/Icon';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import { trust } from '@/lib/content/home';
import styles from './TrustBar.module.css';

export function TrustBar() {
  return (
    <Section surface="primary" rhythm="compact" aria-label="Hechos de la clínica">
      <Container>
        <RevealGroup as="ul" className={styles.list}>
          {trust.items.map((item, index) => (
            <Reveal as="li" key={item.label} index={index} className={styles.item}>
              <Icon name={item.icon} size={28} className={styles.icon} />
              <p className={styles.numeral}>{item.numeral}</p>
              <p className={styles.label}>{item.label}</p>
              <p className={styles.description}>{item.description}</p>
            </Reveal>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
