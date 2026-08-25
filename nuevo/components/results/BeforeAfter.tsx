'use client';

import Image from 'next/image';
import { useCallback, useRef, useState, type PointerEvent, type KeyboardEvent } from 'react';
import type { ImageAsset } from '@/lib/images';
import styles from './BeforeAfter.module.css';

type BeforeAfterProps = {
  before: ImageAsset;
  after: ImageAsset;
};

export function BeforeAfter({ before, after }: BeforeAfterProps) {
  const [value, setValue] = useState(50);
  const frame = useRef<HTMLDivElement>(null);

  const setFromClientX = useCallback((clientX: number) => {
    const node = frame.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setValue(Math.min(100, Math.max(0, next)));
  }, []);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setFromClientX(event.clientX);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
    setFromClientX(event.clientX);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      setValue((current) => Math.max(0, current - 5));
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      setValue((current) => Math.min(100, current + 5));
    }
    if (event.key === 'Home') {
      event.preventDefault();
      setValue(0);
    }
    if (event.key === 'End') {
      event.preventDefault();
      setValue(100);
    }
  };

  return (
    <div
      ref={frame}
      className={styles.frame}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
    >
      <Image
        src={after.src}
        alt={after.alt}
        fill
        sizes="(min-width: 1024px) 32vw, 100vw"
        className={styles.photo}
      />
      <div className={styles.before} style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
        <Image
          src={before.src}
          alt={before.alt}
          fill
          sizes="(min-width: 1024px) 32vw, 100vw"
          className={styles.photo}
        />
      </div>
      <span className={styles.label} data-side="before">
        Antes
      </span>
      <span className={styles.label} data-side="after">
        Después
      </span>
      <div className={styles.divider} style={{ left: `${value}%` }}>
        <div
          className={styles.handle}
          role="slider"
          tabIndex={0}
          aria-orientation="horizontal"
          aria-label="Comparar antes y después"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(value)}
          onKeyDown={onKeyDown}
        >
          <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
            <path
              d="M6 4 2 8l4 4M10 4l4 4-4 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
