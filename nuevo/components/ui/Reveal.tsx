'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cx } from '@/lib/cx';
import styles from './Reveal.module.css';

type RevealTag = 'div' | 'li';
type GroupTag = 'div' | 'ul' | 'ol';

type RevealGroupProps = {
  children: ReactNode;
  as?: GroupTag;
  className?: string;
};

/** Agrupa visualmente. Cada `Reveal` observa su propia visibilidad. */
export function RevealGroup({ children, as: Tag = 'div', className }: RevealGroupProps) {
  return <Tag className={className}>{children}</Tag>;
}

type RevealProps = {
  children: ReactNode;
  /** Orden de aparición cuando varios entran a la vez. */
  index?: number;
  as?: RevealTag;
  className?: string;
};

/**
 * Aparece al entrar en pantalla y se oculta al salir.
 * Al volver a verse, la animación se reproduce de nuevo.
 */
export function Reveal({ children, index = 0, as: Tag = 'div', className }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setRevealed(entry.isIntersecting);
        setReady(true);
      },
      { threshold: 0.2, rootMargin: '-8% 0px -8% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={(node: HTMLElement | null) => {
        ref.current = node;
      }}
      className={cx(
        styles.reveal,
        ready && styles.ready,
        revealed && styles.revealed,
        className,
      )}
      style={{
        transitionDelay: revealed ? `calc(var(--motion-stagger) * ${index})` : '0ms',
      }}
    >
      {children}
    </Tag>
  );
}
