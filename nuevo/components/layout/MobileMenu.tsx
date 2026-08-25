'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { cx } from '@/lib/cx';
import { mainNav, site } from '@/lib/site';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Logo } from '@/components/ui/Logo';
import styles from './MobileMenu.module.css';

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

/** Distancia mínima de arrastre horizontal para cerrar, en píxeles. */
const SWIPE_THRESHOLD = 60;

/**
 * Panel de navegación móvil · docs/04-DESIGN-SYSTEM.md §15
 *
 * Experiencia propia, no una reducción del escritorio: panel a
 * pantalla completa sobre `bg.primary` —claro, no oscuro, para
 * mantener la calma y evitar el efecto de aplicación—, con acordeones
 * de 56 px y el CTA a ancho completo.
 *
 * Cierre por cuatro vías (§15.5): botón, `Escape`, deslizamiento hacia
 * la derecha y navegación a un enlace. Al cerrar, el foco vuelve al
 * botón de menú, que es de lo que se encarga el `onClose` del Header.
 *
 * El panel permanece montado para poder animar su entrada y su
 * salida. Cuando está cerrado se marca `inert`, de modo que ni el
 * tabulador ni el lector de pantalla lo alcanzan.
 */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const close = useCallback(() => {
    setExpanded(null);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;

    // Bloqueo del desplazamiento del cuerpo conservando la posición.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    closeRef.current?.focus();

    /** Foco atrapado dentro del panel (§15.2). */
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusable = panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      const items = Array.from(focusable).filter((el) => !el.closest('[inert]'));
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  return (
    <div
      ref={panelRef}
      className={cx(styles.panel, open && styles.open)}
      inert={!open}
      onTouchStart={(event) => {
        const touch = event.touches[0];
        touchStart.current = { x: touch.clientX, y: touch.clientY };
      }}
      onTouchEnd={(event) => {
        const start = touchStart.current;
        if (!start) return;
        touchStart.current = null;

        const touch = event.changedTouches[0];
        const dx = touch.clientX - start.x;
        const dy = touch.clientY - start.y;
        if (dx > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) close();
      }}
    >
      <div className={styles.bar}>
        <Link href="/" className={styles.brand} onClick={close}>
          <Logo variant="color" height={28} />
        </Link>

        <button
          ref={closeRef}
          type="button"
          className={styles.closeButton}
          aria-label="Cerrar menú"
          onClick={close}
        >
          <Icon name="close" size={24} />
        </button>
      </div>

          <nav className={styles.body} aria-label="Navegación principal">
        <ul className={styles.list}>
          {mainNav.map((item) => {
            const isExpanded = expanded === item.href;

            return (
              <li key={item.href} className={styles.item}>
                <div className={styles.row}>
                  <Link href={item.href} className={styles.link} onClick={close}>
                    {item.label}
                  </Link>

                  {item.children && (
                    <button
                      type="button"
                      className={styles.accordionToggle}
                      aria-expanded={isExpanded}
                      aria-label={`Desplegar ${item.label}`}
                      onClick={() => setExpanded(isExpanded ? null : item.href)}
                    >
                      <Icon
                        name="chevron-down"
                        size={20}
                        className={cx(isExpanded && styles.chevronOpen)}
                      />
                    </button>
                  )}
                </div>

                {item.children && (
                  <div className={cx(styles.sub, isExpanded && styles.subOpen)}>
                    <ul className={styles.subList} inert={!isExpanded}>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className={styles.subLink} onClick={close}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className={styles.footer}>
          <ButtonLink href={site.cta.href} variant="primary" fullWidth onClick={close}>
            {site.cta.label}
          </ButtonLink>

          <div className={styles.contact}>
            <a
              className={styles.contactLink}
              href={site.contact.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={16} />
              Escribir por WhatsApp
            </a>

            <a className={styles.contactLink} href={site.contact.phone.href}>
              <Icon name="phone" size={16} />
              {site.contact.phone.display}
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
