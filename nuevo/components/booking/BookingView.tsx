import Image from 'next/image';
import Link from 'next/link';
import { BookingForm } from '@/components/booking/BookingForm';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import {
  bookingCopy,
  bookingWhatsappHref,
  institutionalContact,
  mapsHref,
} from '@/lib/content/booking';
import { images } from '@/lib/images';
import { site } from '@/lib/site';
import styles from './BookingView.module.css';

type BookingViewProps = {
  procedureSlug?: string;
  specialist?: string;
  interestLabel?: string | null;
};

export function BookingView({
  procedureSlug = '',
  specialist = '',
  interestLabel = null,
}: BookingViewProps) {
  return (
    <>
      <header className={styles.hero} data-surface="dark">
        <Container className={styles.heroInner}>
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: site.cta.label },
            ]}
          />
          <RevealGroup>
            <Reveal index={0}>
              <p className={styles.overline}>{bookingCopy.overline}</p>
            </Reveal>
            <div className={styles.heroGrid}>
              <Reveal index={1}>
                <h1 className={styles.title}>
                  {bookingCopy.title.map((line) => (
                    <span key={line} className={styles.titleLine}>
                      {line}
                    </span>
                  ))}
                </h1>
              </Reveal>
              <Reveal index={2}>
                <p className={styles.subtitle}>{bookingCopy.subtitle}</p>
              </Reveal>
            </div>
          </RevealGroup>
        </Container>
      </header>

      <Section surface="primary" rhythm="default" aria-labelledby="booking-form-title">
        <Container className={styles.layout}>
          <RevealGroup className={styles.includes}>
            <Reveal index={0}>
              <p className={styles.sectionOverline}>{bookingCopy.includesOverline}</p>
              <h2 id="booking-includes-title" className={styles.sectionTitle}>
                {bookingCopy.includesTitle}
              </h2>
            </Reveal>
            <RevealGroup as="ol" className={styles.steps}>
              {bookingCopy.includes.map((item, index) => (
                <Reveal as="li" key={item.numeral} index={index + 1} className={styles.step}>
                  <span className={styles.numeral}>{item.numeral}</span>
                  <div>
                    <h3 className={styles.stepTitle}>{item.title}</h3>
                    <p className={styles.stepBody}>{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </RevealGroup>
          </RevealGroup>

          <Reveal index={1} className={styles.formPanel}>
            <BookingForm
              initialProcedure={procedureSlug}
              initialSpecialist={specialist}
              interestLabel={interestLabel}
            />
          </Reveal>
        </Container>
      </Section>

      <Section surface="secondary" rhythm="compact" aria-labelledby="booking-channels-title">
        <Container>
          <RevealGroup className={styles.channels}>
            <Reveal index={0}>
              <p className={styles.sectionOverline}>{bookingCopy.channelsOverline}</p>
              <h2 id="booking-channels-title" className={styles.sectionTitle}>
                {bookingCopy.channelsTitle}
              </h2>
              <p className={styles.sectionBody}>{bookingCopy.channelsBody}</p>
            </Reveal>
            <Reveal index={1} className={styles.channelList}>
              <ButtonLink
                href={bookingWhatsappHref(interestLabel)}
                variant="whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" size={18} />
                {bookingCopy.whatsappLabel}
              </ButtonLink>
              <a href={site.contact.phone.href} className={styles.phoneCard}>
                <span className={styles.phoneKind}>{bookingCopy.phoneLabel}</span>
                <span className={styles.phoneValue}>{site.contact.phone.display}</span>
                <span className={styles.phoneMeta}>
                  {bookingCopy.extensionsLabel} {site.contact.phone.extensions.join(' · ')}
                </span>
              </a>
              <a href={site.contact.mobile.href} className={styles.phoneCard}>
                <span className={styles.phoneKind}>{bookingCopy.mobileLabel}</span>
                <span className={styles.phoneValue}>{site.contact.mobile.display}</span>
              </a>
            </Reveal>
          </RevealGroup>
        </Container>
      </Section>

      <Section surface="dark" rhythm="compact" aria-labelledby="booking-location-title">
        <Container className={styles.location}>
          <Reveal index={0} className={styles.locationCopy}>
            <p className={styles.locationOverline}>{bookingCopy.locationOverline}</p>
            <h2 id="booking-location-title" className={styles.locationTitle}>
              {bookingCopy.locationTitle}
            </h2>
            <p className={styles.locationVenue}>{site.contact.venue}</p>
            <p className={styles.locationAddress}>{site.contact.address}</p>
            <p className={styles.hoursLabel}>{bookingCopy.hoursLabel}</p>
            <ul className={styles.hours}>
              {site.contact.openingHours.map((slot) => (
                <li key={slot.days}>
                  {slot.days}: {slot.hours}
                </li>
              ))}
            </ul>
            <a
              href={mapsHref()}
              className={styles.mapLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="pin" size={16} />
              {bookingCopy.mapsLabel}
            </a>
          </Reveal>
          <Reveal index={1} className={styles.locationMedia}>
            <Image
              src={images.torreMedica.src}
              alt={images.torreMedica.alt}
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              className={styles.locationPhoto}
            />
          </Reveal>
        </Container>
      </Section>

      <Section surface="primary" rhythm="compact" aria-labelledby="booking-other-title">
        <Container className={styles.other}>
          <Reveal index={0}>
            <p className={styles.sectionOverline}>{bookingCopy.otherOverline}</p>
            <h2 id="booking-other-title" className={styles.sectionTitle}>
              {bookingCopy.otherTitle}
            </h2>
            <p className={styles.sectionBody}>{bookingCopy.otherBody}</p>
          </Reveal>
          <Reveal index={1}>
            <ul className={styles.otherList}>
              {institutionalContact.map((item) => (
                <li key={item.id}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                    <Icon name="arrow-right" size={16} />
                  </a>
                </li>
              ))}
            </ul>
            <p className={styles.trust}>{bookingCopy.trust}</p>
            <p className={styles.privacy}>
              <Link href={site.legal.privacy.href}>{site.legal.privacy.label}</Link>
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
