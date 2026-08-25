import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { NewsletterForm } from '@/components/layout/NewsletterForm';
import { Icon } from '@/components/ui/Icon';
import { Logo } from '@/components/ui/Logo';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import { mainNav, mapsHref, publishedSocial, site } from '@/lib/site';
import styles from './Footer.module.css';

export function Footer() {
  const year = 2026;

  return (
    <footer className={styles.footer} data-surface="dark">
      <Container>
        <RevealGroup className={styles.top}>
          <Reveal index={0} className={styles.brand}>
            <Link href="/" className={styles.brandLink}>
              <Logo variant="white" height={36} />
            </Link>
            <p className={styles.tagline}>{site.description}</p>
            {publishedSocial.length ? (
              <ul className={styles.social} aria-label="Redes sociales">
                {publishedSocial.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={styles.socialMark}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                    >
                      <Icon name={item.icon} size={16} />
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </Reveal>

          <Reveal index={1}>
            <nav className={styles.nav} aria-label="Navegación del pie">
              <h2 className={styles.columnTitle}>Enlaces</h2>
              <ul className={styles.navList}>
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={styles.navLink}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>

          <Reveal index={2} className={styles.contact}>
            <h2 className={styles.columnTitle}>Contacto</h2>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <Icon name="phone" size={16} className={styles.contactIcon} />
                <span>
                  <a href={site.contact.phone.href} className={styles.contactLink}>
                    {site.contact.phone.display}
                  </a>
                  <br />
                  Extensiones {site.contact.phone.extensions.join(' · ')}
                </span>
              </li>
              <li className={styles.contactItem}>
                <Icon name="whatsapp" size={16} className={styles.contactIcon} />
                <a
                  href={site.contact.whatsapp.href}
                  className={styles.contactLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.contact.whatsapp.display}
                </a>
              </li>
              <li className={styles.contactItem}>
                <Icon name="pin" size={16} className={styles.contactIcon} />
                <a
                  href={mapsHref()}
                  className={styles.contactLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.contact.venue}
                  <br />
                  {site.contact.address}
                </a>
              </li>
              {site.contact.openingHours.map((slot) => (
                <li key={slot.days} className={styles.contactItem}>
                  <span>
                    {slot.days}
                    <br />
                    {slot.hours}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal index={3} className={styles.write}>
            <h2 className={styles.columnTitle}>Recibe novedades</h2>
            <NewsletterForm />
          </Reveal>
        </RevealGroup>

        <Reveal index={0} className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} {site.name}. Todos los derechos reservados.
          </p>
          <p className={styles.legal}>
            <Link href={site.legal.privacy.href}>{site.legal.privacy.label}</Link>
            <Link href={site.legal.terms.href}>{site.legal.terms.label}</Link>
            <Link href={site.legal.cookies.href}>{site.legal.cookies.label}</Link>
          </p>
        </Reveal>
      </Container>
    </footer>
  );
}
