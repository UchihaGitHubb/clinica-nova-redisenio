'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { Icon } from '@/components/ui/Icon';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import { specialists } from '@/lib/content/home';
import { procedures } from '@/lib/content/procedures';
import { getResultRecords } from '@/lib/content/results';
import { specialists as roster } from '@/lib/content/specialists';
import { testimonials } from '@/lib/content/testimonials';
import { images } from '@/lib/images';
import styles from './TeamResults.module.css';

const AUTO_MS = 8000;

const quotes = testimonials.map((item) => ({ text: item.quote, name: item.name }));

const publishedStats = [
  { value: String(roster.length).padStart(2, '0'), label: 'especialistas' },
  { value: String(procedures.length).padStart(2, '0'), label: 'procedimientos' },
  { value: String(getResultRecords().length).padStart(2, '0'), label: 'casos publicados' },
];

const statIcons = ['users', 'path', 'bloom'] as const;

export function TeamResults() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = quotes.length;
  const quote = quotes[active] ?? quotes[0];

  const go = useCallback((next: number) => setActive((next + total) % total), [total]);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches || paused) return;

    const timer = window.setInterval(() => go(active + 1), AUTO_MS);
    return () => window.clearInterval(timer);
  }, [active, go, paused]);

  return (
    <Section surface="dark" rhythm="wide" aria-labelledby="team-title">
      <Container>
        <RevealGroup className={styles.layout}>
          <div className={styles.intro}>
            <Reveal index={0}>
              <h2 id="team-title" className={styles.title}>
                {specialists.title.map((line) => (
                  <span key={line} className={styles.titleLine}>
                    {line}
                  </span>
                ))}
              </h2>
            </Reveal>
            <Reveal index={1}>
              <p className={styles.body}>{specialists.body}</p>
            </Reveal>
            <Reveal index={2}>
              <ArrowLink href={specialists.cta.href}>{specialists.cta.label}</ArrowLink>
            </Reveal>
          </div>

          <Reveal index={3} className={styles.photoWrap}>
            <figure className={styles.photo}>
              <Image
                src={images.equipo.src}
                alt={images.equipo.alt}
                fill
                sizes="(min-width: 1280px) 30vw, 100vw"
                className={styles.photoImg}
              />
            </figure>
          </Reveal>

          <Reveal index={4} className={styles.quoteSlot}>
            <blockquote
              className={styles.quote}
              data-surface="dark"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <Icon name="quote" size={28} className={styles.quoteMark} />
              <p key={quote.name + quote.text} className={styles.quoteText}>
                «{quote.text}»
              </p>
              <footer className={styles.quoteMeta}>
                <cite className={styles.cite}>— {quote.name}</cite>
                <div className={styles.controls}>
                  <button
                    type="button"
                    className={styles.control}
                    aria-label="Testimonio anterior"
                    onClick={() => go(active - 1)}
                  >
                    <Icon name="arrow-right" size={14} className={styles.controlPrev} />
                  </button>
                  <span className={styles.counter} aria-live="polite">
                    {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                  </span>
                  <button
                    type="button"
                    className={styles.control}
                    aria-label="Testimonio siguiente"
                    onClick={() => go(active + 1)}
                  >
                    <Icon name="arrow-right" size={14} />
                  </button>
                </div>
              </footer>
            </blockquote>
          </Reveal>

          <ul className={styles.stats}>
            {publishedStats.map((stat, index) => (
              <Reveal as="li" key={stat.label} index={index + 5} className={styles.stat}>
                <Icon name={statIcons[index] ?? 'bloom'} size={22} className={styles.statIcon} />
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </Reveal>
            ))}
          </ul>
        </RevealGroup>
      </Container>
    </Section>
  );
}
