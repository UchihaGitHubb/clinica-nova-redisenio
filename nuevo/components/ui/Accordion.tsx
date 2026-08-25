'use client';

import { useLayoutEffect, useRef, type ReactNode } from 'react';
import { Icon } from '@/components/ui/Icon';
import styles from './Accordion.module.css';

type AccordionItemProps = {
  id: string;
  question: string;
  /** Abierto en el primer render. Después lo controla el propio `details`. */
  defaultOpen?: boolean;
  children: ReactNode;
};

/**
 * Acordeón nativo. La respuesta vive siempre en el HTML: se indexa
 * y sirve para FAQPage aunque el panel esté cerrado.
 */
export function AccordionItem({
  id,
  question,
  defaultOpen = false,
  children,
}: AccordionItemProps) {
  const ref = useRef<HTMLDetailsElement>(null);

  useLayoutEffect(() => {
    if (defaultOpen && ref.current) {
      ref.current.open = true;
    }
  }, [defaultOpen]);

  return (
    <details ref={ref} id={id} className={styles.item}>
      <summary className={styles.summary}>
        <span className={styles.question}>{question}</span>
        <Icon name="chevron-down" size={16} className={styles.chevron} />
      </summary>
      <div className={styles.content}>{children}</div>
    </details>
  );
}
