'use client';

import { useEffect } from 'react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { AccordionItem } from '@/components/ui/Accordion';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { faqCategories, faqCopy, type FaqItem } from '@/lib/content/faq';
import { whatsappHref } from '@/lib/content/procedures';
import { site } from '@/lib/site';
import styles from './FaqView.module.css';

function FaqAnswer({ item }: { item: FaqItem }) {
  return (
    <>
      <p>{item.answer}</p>
      {item.points?.length ? (
        <ul>
          {item.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : null}
      {item.note ? <p>{item.note}</p> : null}
    </>
  );
}

function openFromHash() {
  const id = window.location.hash.replace(/^#/, '');
  if (!id) return;
  const target = document.getElementById(id);
  if (!(target instanceof HTMLDetailsElement)) return;
  target.open = true;
  target.scrollIntoView({ block: 'start' });
}

export function FaqView() {
  useEffect(() => {
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
    return () => window.removeEventListener('hashchange', openFromHash);
  }, []);

  return (
    <>
      <header className={styles.hero} data-surface="dark">
        <Container className={styles.heroInner}>
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Tu proceso', href: '/tu-proceso' },
              { label: 'Preguntas frecuentes' },
            ]}
          />
          <RevealGroup>
            <Reveal index={0}>
              <p className={styles.overline}>{faqCopy.overline}</p>
            </Reveal>
            <div className={styles.heroGrid}>
              <Reveal index={1}>
                <h1 className={styles.title}>
                  {faqCopy.title.map((line) => (
                    <span key={line} className={styles.titleLine}>
                      {line}
                    </span>
                  ))}
                </h1>
              </Reveal>
              <Reveal index={2}>
                <p className={styles.subtitle}>{faqCopy.subtitle}</p>
              </Reveal>
            </div>
          </RevealGroup>
        </Container>
      </header>

      <Section surface="primary" rhythm="compact" aria-labelledby="faq-index-title">
        <Container>
          <h2 id="faq-index-title" className="visually-hidden">
            {faqCopy.indexLabel}
          </h2>
          <details className={styles.indexFold}>
            <summary className={styles.indexSummary}>{faqCopy.indexLabel}</summary>
            <nav className={styles.index} aria-label={faqCopy.indexLabel}>
              <ul className={styles.indexList}>
                {faqCategories.map((category) => (
                  <li key={category.id}>
                    <a href={`#${category.id}`}>{category.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
          <nav className={styles.indexDesktop} aria-label={faqCopy.indexLabel}>
            <p className={styles.indexLabel}>{faqCopy.indexLabel}</p>
            <ul className={styles.indexList}>
              {faqCategories.map((category) => (
                <li key={category.id}>
                  <a href={`#${category.id}`}>{category.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </Section>

      {faqCategories.map((category, categoryIndex) => (
        <Section
          key={category.id}
          id={category.id}
          surface={categoryIndex % 2 === 0 ? 'secondary' : 'primary'}
          rhythm="default"
          className={styles.category}
          aria-labelledby={`faq-${category.id}-title`}
        >
          <Container>
            <Reveal index={0}>
              <SectionHeading
                title={category.label}
                titleId={`faq-${category.id}-title`}
                rule
              />
            </Reveal>
            <div className={styles.group}>
              {category.items.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  id={item.id}
                  question={item.question}
                  defaultOpen={index === 0}
                >
                  <FaqAnswer item={item} />
                </AccordionItem>
              ))}
            </div>
          </Container>
        </Section>
      ))}

      <section className={styles.close} data-surface="dark" aria-labelledby="faq-close-title">
        <Container>
          <RevealGroup className={styles.closeInner}>
            <Reveal index={0} className={styles.closeCopy}>
              <p className={styles.closeRule} aria-hidden="true" />
              <h2 id="faq-close-title" className={styles.closeTitle}>
                {faqCopy.closeTitle}
              </h2>
              <p className={styles.closeBody}>{faqCopy.closeBody}</p>
            </Reveal>
            <Reveal index={1} className={styles.closeActions}>
              <ButtonLink href={site.cta.href} variant="primary">
                {site.cta.label}
                <Icon name="arrow-right" size={16} />
              </ButtonLink>
              <ButtonLink
                href={whatsappHref()}
                variant="whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" size={18} />
                {faqCopy.whatsapp}
              </ButtonLink>
            </Reveal>
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}
