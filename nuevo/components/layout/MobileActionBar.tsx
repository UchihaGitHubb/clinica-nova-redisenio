'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cx } from '@/lib/cx';
import { site } from '@/lib/site';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import styles from './MobileActionBar.module.css';

/**
 * Aparece a partir de 240 px de desplazamiento, no de inmediato: el
 * hero ya tiene su propio CTA y superponerle otro sería redundante.
 */
const REVEAL_AT = 240;

/**
 * Barra inferior persistente · docs/04-DESIGN-SYSTEM.md §15.6
 *
 * Es el ÚNICO elemento fijo en móvil además de la cabecera. Sustituye
 * a la burbuja flotante de WhatsApp del sitio actual, que además se
 * abre sola a los diez segundos sin que nadie lo pida: exactamente lo
 * que §26.3 prohíbe. Aquí no hay burbuja ni ventana emergente.
 *
 * Se oculta al enfocar un campo de formulario para no tapar el
 * teclado, y no existe por encima de 768 px.
 */
export function MobileActionBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [typing, setTyping] = useState(false);
  const onBooking = pathname === site.cta.href;

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > REVEAL_AT);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const isField = (target: EventTarget | null) =>
      target instanceof HTMLElement &&
      ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) &&
      !(target instanceof HTMLInputElement && ['checkbox', 'radio'].includes(target.type));

    const onFocusIn = (event: FocusEvent) => setTyping(isField(event.target));
    const onFocusOut = () => setTyping(false);

    document.addEventListener('focusin', onFocusIn);
    document.addEventListener('focusout', onFocusOut);

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('focusin', onFocusIn);
      document.removeEventListener('focusout', onFocusOut);
    };
  }, []);

  const shown = visible && !typing && !onBooking;

  return (
    <div className={cx(styles.bar, shown && styles.visible)} inert={!shown}>
      <ButtonLink href={site.cta.href} variant="primary" className={styles.primary}>
        {site.cta.label}
      </ButtonLink>

      <ButtonLink
        href={site.contact.whatsapp.href}
        variant="whatsapp"
        className={styles.secondary}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="whatsapp" size={20} />
        <span className={styles.secondaryLabel}>WhatsApp</span>
      </ButtonLink>
    </div>
  );
}
