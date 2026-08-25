'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';
import { cx } from '@/lib/cx';
import { mainNav, site, type NavItem } from '@/lib/site';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Logo } from '@/components/ui/Logo';
import { MobileMenu } from './MobileMenu';
import styles from './Header.module.css';

/** Umbral de cambio de estado, en píxeles (§14.2). */
const SCROLL_THRESHOLD = 80;

/**
 * Cabecera fija · docs/04-DESIGN-SYSTEM.md §14
 *
 * ── UN SOLO REGISTRO CROMÁTICO ─────────────────────────────────────
 *
 * La V1 cambiaba de superficie al desplazarse: transparente sobre el
 * hero y después una barra clara. Ese salto convertía la cabecera en un
 * bloque ajeno que se posaba encima de la página.
 *
 * Aquí la superficie es azul noche en los dos estados y lo único que
 * cambia es la opacidad del fondo: transparente mientras se ve el hero,
 * sólida al desplazarse. El logotipo negativo, la navegación y el CTA
 * no cambian de color en ningún momento, de modo que la transición se
 * percibe como que el fondo aparece detrás de la cabecera y no como que
 * la cabecera se transforma.
 *
 * Consecuencia útil: `data-surface` vale siempre `dark`, así que el CTA
 * mantiene su relleno champagne y los focos su versión clara sin una
 * sola regla condicional de color.
 *
 * §14.2 pide un velo de 120px cuando la cabecera flota sobre
 * fotografía. No se aplica: flota sobre la superficie azul noche del
 * hero, no sobre la imagen, que vive en la columna derecha y arranca
 * por debajo de la cabecera (ver Hero.module.css).
 *
 * Es fija y siempre visible: no se oculta al bajar. Ese patrón
 * ahorraría 64 px a costa de que el CTA principal desaparezca (§14.3).
 */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  /** Solo la portada tiene hero: en el resto la barra nace sólida. */
  const overHero = pathname === '/' && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={cx(styles.header, overHero && styles.overHero, scrolled && styles.compact)}
        data-surface="dark"
      >
        <div className={styles.inner}>
          <Link href="/" className={styles.brand}>
            <Logo variant="white" height={scrolled ? 32 : 40} priority />
          </Link>

          <nav className={styles.nav} aria-label="Navegación principal">
            <ul className={styles.navList}>
              {mainNav.map((item) => (
                <NavEntry key={item.href} item={item} />
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <ButtonLink
              href={site.cta.href}
              variant="primary"
              size="compact"
              className={styles.cta}
            >
              {site.cta.label}
              <Icon name="arrow-right" size={14} />
            </ButtonLink>

            <button
              ref={menuButtonRef}
              type="button"
              className={styles.menuButton}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <Icon name="menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => {
          setMenuOpen(false);
          menuButtonRef.current?.focus();
        }}
      />
    </>
  );
}

/* --- Elemento de navegación con desplegable opcional -------------
   §14.6: apertura por hover con 120 ms de retardo para evitar
   aperturas accidentales al pasar el cursor, y cierre con 240 ms para
   permitir el recorrido diagonal hasta el panel. El elemento padre
   sigue siendo un enlace real al índice de su sección. */

const OPEN_DELAY = 120;
const CLOSE_DELAY = 240;

function NavEntry({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => () => clearTimeout(timer.current), []);

  const schedule = (next: boolean, delay: number) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(next), delay);
  };

  if (!item.children) {
    return (
      <li>
        <Link href={item.href} className={styles.navLink}>
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li
      className={styles.navItem}
      onMouseEnter={() => schedule(true, OPEN_DELAY)}
      onMouseLeave={() => schedule(false, CLOSE_DELAY)}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          clearTimeout(timer.current);
          setOpen(false);
          triggerRef.current?.focus();
        }
      }}
      onBlur={(event) => {
        // Solo se cierra si el foco sale del grupo completo, para que
        // tabular por los elementos del panel no lo colapse.
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          clearTimeout(timer.current);
          setOpen(false);
        }
      }}
    >
      <Link href={item.href} className={styles.navLink}>
        {item.label}
      </Link>

      <button
        ref={triggerRef}
        type="button"
        className={styles.navToggle}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`Desplegar ${item.label}`}
        onClick={() => {
          clearTimeout(timer.current);
          setOpen((value) => !value);
        }}
      >
        <Icon name="chevron-down" size={14} className={cx(open && styles.chevronOpen)} />
      </button>

      <ul
        id={panelId}
        className={cx(styles.dropdown, open && styles.dropdownOpen)}
        data-surface="elevated"
        hidden={!open}
      >
        {item.children.map((child) => (
          <li key={child.href}>
            <Link href={child.href} className={styles.dropdownLink}>
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
