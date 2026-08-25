import Image from 'next/image';
import Link from 'next/link';
import { BandCta } from '@/components/procedures/BandCta';
import { BleedSplit } from '@/components/layout/BleedSplit';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Icon } from '@/components/ui/Icon';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { clinicCopy, clinicMedia } from '@/lib/content/clinic';
import { convenios } from '@/lib/content/convenios';
import { anesthetists, specialistHref, surgeons } from '@/lib/content/specialists';
import { mapsHref, site } from '@/lib/site';
import styles from './ClinicView.module.css';

export function ClinicView() {
  return (
    <>
      <header className={styles.hero} data-surface="dark">
        <Container className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <Breadcrumb
              items={[
                { label: 'Inicio', href: '/' },
                { label: 'La clínica' },
              ]}
            />
            <RevealGroup className={styles.heroBody}>
              <Reveal index={0}>
                <p className={styles.overline}>{clinicCopy.overline}</p>
              </Reveal>
              <Reveal index={1}>
                <h1 className={styles.title}>
                  {clinicCopy.title.map((line) => (
                    <span key={line} className={styles.titleLine}>
                      {line}
                    </span>
                  ))}
                </h1>
              </Reveal>
              <Reveal index={2}>
                <p className={styles.subtitle}>{clinicCopy.subtitle}</p>
                <p className={styles.venueLine}>{clinicCopy.venueLine}</p>
              </Reveal>
            </RevealGroup>
          </div>
          <Reveal index={1} className={styles.heroMedia}>
            <Image
              src={clinicMedia.hero.src}
              alt={clinicMedia.hero.alt}
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className={styles.heroPhoto}
            />
          </Reveal>
        </Container>
      </header>

      <Section surface="primary" rhythm="default" aria-labelledby="clinic-identity-title">
        <Container className={styles.identity}>
          <Reveal index={0} className={styles.identityCopy}>
            <SectionHeading
              overline={clinicCopy.identityOverline}
              title={clinicCopy.identityTitle}
              titleId="clinic-identity-title"
              rule
            />
            <p className={styles.body}>{clinicCopy.identityBody}</p>
            <p className={styles.legalName}>{clinicCopy.legalName}</p>
            <p className={styles.legalId}>{clinicCopy.nitLine}</p>
          </Reveal>
          <Reveal index={1} className={styles.identityMedia}>
            <Image
              src={clinicMedia.identity.src}
              alt={clinicMedia.identity.alt}
              width={clinicMedia.identity.width}
              height={clinicMedia.identity.height}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className={styles.identityPhoto}
            />
          </Reveal>
        </Container>
      </Section>

      <Section surface="secondary" rhythm="default" aria-labelledby="clinic-mission-title">
        <Container>
          <RevealGroup>
            <Reveal index={0}>
              <SectionHeading
                overline={clinicCopy.missionOverline}
                title={clinicCopy.missionTitle}
                titleId="clinic-mission-title"
                rule
              />
            </Reveal>
            <div className={styles.direction}>
              <Reveal index={1} className={styles.directionItem}>
                <p className={styles.directionLabel}>{clinicCopy.missionLabel}</p>
                <p className={styles.directionBody}>{clinicCopy.mission}</p>
              </Reveal>
              <Reveal index={2} className={styles.directionItem}>
                <p className={styles.directionLabel}>{clinicCopy.visionLabel}</p>
                <p className={styles.directionBody}>{clinicCopy.vision}</p>
              </Reveal>
              <Reveal index={3} className={styles.directionItem}>
                <p className={styles.directionLabel}>{clinicCopy.valuesLabel}</p>
                <ul className={styles.values}>
                  {clinicCopy.values.map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </RevealGroup>
        </Container>
      </Section>

      <Section surface="primary" rhythm="default" aria-labelledby="clinic-policies-title">
        <Container>
          <RevealGroup>
            <Reveal index={0}>
              <SectionHeading
                overline={clinicCopy.policiesOverline}
                title={clinicCopy.policiesTitle}
                titleId="clinic-policies-title"
                rule
              />
            </Reveal>
            <ol className={styles.policies}>
              {clinicCopy.policies.map((policy, index) => (
                <Reveal as="li" key={policy.id} index={index + 1} className={styles.policy}>
                  <span className={styles.numeral}>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className={styles.policyTitle}>{policy.title}</h3>
                    <p className={styles.policyBody}>{policy.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </RevealGroup>
        </Container>
      </Section>

      <Section surface="secondary" rhythm="wide" aria-labelledby="clinic-sede-title">
        <BleedSplit image={clinicMedia.sede} side="start">
          <SectionHeading
            overline={clinicCopy.sedeOverline}
            title={clinicCopy.sedeTitle}
            titleId="clinic-sede-title"
            rule
          />
          <p className={styles.sedeFloors}>{clinicCopy.sedeFloors}</p>
          <p className={styles.sedeAddress}>{site.contact.address}</p>
          <p className={styles.body}>{clinicCopy.sedeBody}</p>
          <div className={styles.hours}>
            <p className={styles.hoursLabel}>{clinicCopy.hoursLabel}</p>
            <ul>
              {site.contact.openingHours.map((slot) => (
                <li key={slot.days}>
                  <span>{slot.days}</span>
                  <span>{slot.hours}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.sedeActions}>
            <a
              href={mapsHref()}
              className={styles.mapLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="pin" size={16} />
              {clinicCopy.mapsLabel}
            </a>
            <a href={site.contact.phone.href} className={styles.phoneLink}>
              {clinicCopy.phoneLabel}
              <span>{site.contact.phone.display}</span>
            </a>
          </div>
        </BleedSplit>
      </Section>

      <Section surface="primary" rhythm="wide" aria-labelledby="clinic-team-title">
        <BleedSplit image={clinicMedia.team} side="end">
          <SectionHeading
            overline={clinicCopy.teamOverline}
            title={clinicCopy.teamTitle}
            titleId="clinic-team-title"
            rule
          />
          <p className={styles.body}>{clinicCopy.teamBody}</p>
          <div className={styles.teamCta}>
            <ArrowLink href="/especialistas" size="large">
              {clinicCopy.teamCta}
            </ArrowLink>
          </div>
        </BleedSplit>
        <Container className={styles.rosterWrap}>
          <div className={styles.roster}>
            <div>
              <p className={styles.rosterLabel}>
                {clinicCopy.surgeonsLabel} · {String(surgeons.length).padStart(2, '0')}
              </p>
              <ul>
                {surgeons.map((person) => (
                  <li key={person.slug}>
                    <Link href={specialistHref(person.slug)} className={styles.rosterLink}>
                      <strong>{person.name}</strong>
                      <span>{person.role}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className={styles.rosterLabel}>
                {clinicCopy.anesthetistsLabel} · {String(anesthetists.length).padStart(2, '0')}
              </p>
              <ul>
                {anesthetists.map((person) => (
                  <li key={person.slug}>
                    <Link href={specialistHref(person.slug)} className={styles.rosterLink}>
                      <strong>{person.name}</strong>
                      <span>{person.role}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section surface="secondary" rhythm="compact" aria-labelledby="clinic-rse-title">
        <Container className={styles.closing}>
          <Reveal index={0}>
            <SectionHeading
              overline={clinicCopy.rseOverline}
              title={clinicCopy.rseTitle}
              titleId="clinic-rse-title"
              rule
            />
            <p className={styles.sectionBody}>{clinicCopy.rseBody}</p>
            <ul className={styles.foci}>
              {clinicCopy.rseFoci.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal index={1} className={styles.convenios}>
            <p className={styles.sectionOverline} id="clinic-convenios-title">
              {clinicCopy.conveniosOverline}
            </p>
            <ul className={styles.logoGrid}>
              {convenios.map((convenio) => (
                <li key={convenio.id} className={styles.logoItem}>
                  <Image
                    src={convenio.logo.src}
                    alt={convenio.name}
                    width={convenio.logo.width}
                    height={convenio.logo.height}
                    className={styles.logo}
                  />
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <BandCta title={clinicCopy.ctaTitle} body={clinicCopy.ctaBody} />
    </>
  );
}
