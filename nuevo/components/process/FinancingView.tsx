import Image from 'next/image';
import Link from 'next/link';
import { BandCta } from '@/components/procedures/BandCta';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { faqHref, getFaqItem } from '@/lib/content/faq';
import {
  bankAccount,
  creditNote,
  creditProfiles,
  creditRequirements,
  financingCopy,
  financingFaqIds,
  paymentMethods,
} from '@/lib/content/financing';
import { financingPartners } from '@/lib/content/financing-partners';
import styles from './FinancingView.module.css';

const financingFaqs = financingFaqIds
  .map((id) => getFaqItem(id))
  .filter((item): item is NonNullable<typeof item> => Boolean(item));

export function FinancingView() {
  return (
    <>
      <header className={styles.hero} data-surface="dark">
        <Container className={styles.heroInner}>
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Tu proceso', href: '/tu-proceso' },
              { label: 'Financiación' },
            ]}
          />
          <RevealGroup>
            <Reveal index={0}>
              <p className={styles.overline}>{financingCopy.overline}</p>
            </Reveal>
            <div className={styles.heroGrid}>
              <Reveal index={1}>
                <h1 className={styles.title}>
                  {financingCopy.title.map((line) => (
                    <span key={line} className={styles.titleLine}>
                      {line}
                    </span>
                  ))}
                </h1>
              </Reveal>
              <Reveal index={2}>
                <p className={styles.subtitle}>{financingCopy.subtitle}</p>
              </Reveal>
            </div>
          </RevealGroup>
        </Container>
      </header>

      <Section surface="primary" rhythm="default" aria-labelledby="financing-how-title">
        <Container className={styles.panel}>
          <Reveal index={0}>
            <SectionHeading
              overline={financingCopy.howOverline}
              title={financingCopy.howTitle}
              titleId="financing-how-title"
              subtitle={financingCopy.howBody}
              rule
            />
          </Reveal>
        </Container>
      </Section>

      <Section surface="secondary" rhythm="default" aria-labelledby="financing-methods-title">
        <Container>
          <Reveal index={0}>
            <SectionHeading
              overline={financingCopy.methodsOverline}
              title={financingCopy.methodsTitle}
              titleId="financing-methods-title"
              rule
            />
          </Reveal>
          <ol className={styles.methods}>
            {paymentMethods.map((method, index) => (
              <Reveal as="li" key={method.id} index={index} className={styles.method}>
                <span className={styles.methodNumeral} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{method.label}</span>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      <Section surface="primary" rhythm="default" aria-labelledby="financing-partners-title">
        <Container>
          <Reveal index={0}>
            <SectionHeading
              overline={financingCopy.partnersOverline}
              title={financingCopy.partnersTitle}
              titleId="financing-partners-title"
              subtitle={financingCopy.partnersBody}
              rule
            />
          </Reveal>
          <ul className={styles.partners}>
            {financingPartners.map((partner, index) => (
              <Reveal as="li" key={partner.id} index={index} className={styles.partner}>
                <div className={styles.mark}>
                  <Image
                    src={partner.logo.src}
                    alt={partner.name}
                    width={partner.logo.width}
                    height={partner.logo.height}
                    className={styles.logo}
                  />
                </div>
                <p className={styles.partnerName}>{partner.name}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section surface="secondary" rhythm="default" aria-labelledby="financing-requirements-title">
        <Container>
          <Reveal index={0}>
            <SectionHeading
              title={financingCopy.requirementsTitle}
              titleId="financing-requirements-title"
              rule
            />
          </Reveal>
          <ul className={styles.requirements}>
            {creditRequirements.map((item, index) => (
              <Reveal as="li" key={item} index={index} className={styles.requirement}>
                {item}
              </Reveal>
            ))}
          </ul>
          <Reveal index={0}>
            <h3 id="financing-documents-title" className={styles.subhead}>
              {financingCopy.documentsTitle}
            </h3>
          </Reveal>
          <ul className={styles.profiles}>
            {creditProfiles.map((profile, index) => (
              <Reveal as="li" key={profile.id} index={index} className={styles.profile}>
                <p className={styles.profileLabel}>{profile.label}</p>
                <ul className={styles.profileItems}>
                  {profile.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>
          <p className={styles.note}>{creditNote}</p>
        </Container>
      </Section>

      <Section surface="primary" rhythm="default" aria-labelledby="financing-separe-title">
        <Container className={styles.split}>
          <Reveal index={0} className={styles.panel}>
            <SectionHeading
              overline={financingCopy.separeOverline}
              title={financingCopy.separeTitle}
              titleId="financing-separe-title"
              subtitle={financingCopy.separeBody}
              rule
            />
            <p className={styles.note}>{financingCopy.separeNote}</p>
          </Reveal>
          <Reveal index={1} className={styles.account}>
            <p className={styles.accountOverline}>{financingCopy.accountOverline}</p>
            <h3 className={styles.accountTitle}>{financingCopy.accountTitle}</h3>
            <dl className={styles.accountList}>
              <div>
                <dt>Entidad</dt>
                <dd>{bankAccount.bank}</dd>
              </div>
              <div>
                <dt>Tipo</dt>
                <dd>{bankAccount.type}</dd>
              </div>
              <div>
                <dt>Número</dt>
                <dd>{bankAccount.number}</dd>
              </div>
              <div>
                <dt>Titular</dt>
                <dd>{bankAccount.holder}</dd>
              </div>
              <div>
                <dt>NIT</dt>
                <dd>{bankAccount.nit}</dd>
              </div>
            </dl>
          </Reveal>
        </Container>
      </Section>

      <Section surface="secondary" rhythm="default" aria-labelledby="financing-faq-title">
        <Container className={styles.panel}>
          <Reveal index={0}>
            <SectionHeading
              overline={financingCopy.faqOverline}
              title={financingCopy.faqTitle}
              titleId="financing-faq-title"
              rule
            />
          </Reveal>
          <ul className={styles.faqList}>
            {financingFaqs.map((item, index) => (
              <Reveal as="li" key={item.id} index={index}>
                <Link href={faqHref(item.id)} className={styles.faqLink}>
                  {item.question}
                </Link>
              </Reveal>
            ))}
          </ul>
          <Reveal index={financingFaqs.length}>
            <ArrowLink href="/tu-proceso/preguntas-frecuentes">{financingCopy.faqCta}</ArrowLink>
          </Reveal>
        </Container>
      </Section>

      <BandCta title={financingCopy.ctaTitle} />
    </>
  );
}
