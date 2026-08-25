'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import { hero, heroSlides } from '@/lib/content/home';
import { images, videos } from '@/lib/images';
import { site } from '@/lib/site';
import styles from './Hero.module.css';

const AUTO_MS = 8000;
const SWIPE_THRESHOLD = 48;

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const pointer = useRef<{ x: number } | null>(null);
  const total = heroSlides.length;

  const go = useCallback(
    (next: number) => {
      setActive((next + total) % total);
    },
    [total],
  );

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches || paused) return;

    const timer = window.setInterval(() => go(active + 1), AUTO_MS);
    return () => window.clearInterval(timer);
  }, [active, go, paused]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') go(active + 1);
      if (event.key === 'ArrowLeft') go(active - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, go]);

  const onPointerDown = (event: React.PointerEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest('a, button')) return;
    pointer.current = { x: event.clientX };
  };

  const onPointerUp = (event: React.PointerEvent<HTMLElement>) => {
    if (!pointer.current) return;
    const delta = event.clientX - pointer.current.x;
    pointer.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    go(delta < 0 ? active + 1 : active - 1);
  };

  return (
    <section
      className={styles.hero}
      data-surface="dark"
      aria-labelledby="hero-title"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => {
        pointer.current = null;
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.stage} aria-hidden="true">
        {heroSlides.map((slide, index) => {
          const isActive = index === active;

          if (slide.kind === 'video') {
            return (
              <div key={slide.id} className={isActive ? styles.mediaActive : styles.media}>
                <video
                  className={styles.video}
                  autoPlay={isActive}
                  muted
                  loop
                  playsInline
                  preload={isActive ? 'auto' : 'metadata'}
                  poster={videos.heroBanner.poster}
                >
                  <source src={videos.heroBanner.src} type="video/mp4" />
                </video>
              </div>
            );
          }

          const image = images[slide.image];
          return (
            <div key={slide.id} className={isActive ? styles.mediaActive : styles.media}>
              <Image
                src={image.src}
                alt=""
                fill
                sizes="100vw"
                className={styles.image}
                priority={index === 0}
              />
            </div>
          );
        })}
      </div>

      <span className={styles.veil} aria-hidden="true" />

      <div className={styles.inner}>
        <RevealGroup key={active} className={styles.content}>
          <Reveal index={0}>
            <p className={styles.overline}>{hero.overline}</p>
          </Reveal>

          <Reveal index={1}>
            <h1 id="hero-title" className={styles.title}>
              <span className={styles.titleLine}>{hero.headline[0]}</span>
              <span className={styles.accent}>{hero.headline[1]}</span>
            </h1>
          </Reveal>

          <Reveal index={2}>
            <p className={styles.subheadline}>{hero.subheadline}</p>
          </Reveal>

          <Reveal index={3}>
            <div className={styles.actions}>
              <ButtonLink href={site.cta.href} variant="primary">
                {site.cta.label}
                <Icon name="arrow-right" size={16} />
              </ButtonLink>

              <ButtonLink href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
                <Icon name="arrow-right" size={16} />
              </ButtonLink>
            </div>
          </Reveal>
        </RevealGroup>

        <Reveal index={0} className={styles.controls}>
          <p className={styles.hint}>{hero.scrollLabel}</p>

          <div className={styles.nav}>
            <button
              type="button"
              className={styles.arrow}
              aria-label="Fondo anterior"
              onClick={() => go(active - 1)}
            >
              <Icon name="arrow-right" size={16} className={styles.arrowPrev} />
            </button>

            <p className={styles.counter} aria-live="polite">
              <span className={styles.slideLabel}>{heroSlides[active]?.label}</span>
              {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </p>

            <button
              type="button"
              className={styles.arrow}
              aria-label="Fondo siguiente"
              onClick={() => go(active + 1)}
            >
              <Icon name="arrow-right" size={16} />
            </button>
          </div>

          <ol className={styles.dots}>
            {heroSlides.map((slide, index) => (
              <li key={slide.id}>
                <button
                  type="button"
                  className={index === active ? styles.dotActive : styles.dot}
                  aria-label={slide.label}
                  aria-current={index === active ? 'true' : undefined}
                  onClick={() => go(index)}
                >
                  <span className={styles.dotFill} />
                </button>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
