import { PageFrame } from '@/components/layout/PageFrame';
import { Container } from '@/components/layout/Container';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { mainNav, site } from '@/lib/site';
import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <PageFrame>
      <header className={styles.hero} data-surface="dark">
        <Container className={styles.inner}>
          <p className={styles.overline}>Página no encontrada</p>
          <h1 className={styles.title}>Esta ruta no existe.</h1>
          <p className={styles.subtitle}>
            Puedes volver al inicio o entrar por una de las secciones.
          </p>
          <ButtonLink href="/" variant="primary">
            Ir al inicio
            <Icon name="arrow-right" size={16} />
          </ButtonLink>
        </Container>
      </header>
      <section className={styles.body}>
        <Container>
          <nav aria-label="Secciones">
            <ul className={styles.list}>
              {mainNav
                .filter((item) => item.href !== '/')
                .map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              <li>
                <Link href={site.cta.href}>{site.cta.label}</Link>
              </li>
            </ul>
          </nav>
        </Container>
      </section>
    </PageFrame>
  );
}
