import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from '@/lib/cx';
import styles from './Button.module.css';

/** Las cinco variantes del sistema (§13.7). No añadir una sexta. */
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'text' | 'whatsapp';

/** `default` = 52px de alto · `compact` = 44px, cabecera y usos en línea. */
export type ButtonSize = 'default' | 'compact';

type Appearance = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Ancho completo: reservado a móvil y formularios (§13.7). */
  fullWidth?: boolean;
  className?: string;
};

function appearanceClass({
  variant = 'primary',
  size = 'default',
  fullWidth = false,
  className,
}: Appearance): string {
  return cx(
    styles.button,
    styles[variant],
    size === 'compact' && styles.compact,
    fullWidth && styles.fullWidth,
    className,
  );
}

type ButtonProps = Appearance &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
    children: ReactNode;
  };

/**
 * Botón real, para acciones. Nunca un `div` con onClick (§10 del
 * encargo de fase).
 *
 * `type="button"` por defecto para que un botón dentro de un
 * formulario no lo envíe sin quererlo.
 */
export function Button({
  variant,
  size,
  fullWidth,
  className,
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={appearanceClass({ variant, size, fullWidth, className })}
      {...rest}
    >
      {children}
    </button>
  );
}

type ButtonLinkProps = Appearance &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & {
    href: string;
    children: ReactNode;
  };

/**
 * Enlace con apariencia de botón, para navegar.
 *
 * Se separa de `Button` en lugar de resolverlo con un tipo
 * polimórfico: un botón que navega debe ser un `<a>` y una acción
 * debe ser un `<button>`, y tenerlos separados hace imposible
 * equivocarse.
 *
 * Usa `next/link` en rutas internas y `<a>` en externas.
 */
export function ButtonLink({
  variant,
  size,
  fullWidth,
  className,
  href,
  children,
  ...rest
}: ButtonLinkProps) {
  const classes = appearanceClass({ variant, size, fullWidth, className });
  const internal = href.startsWith('/') && !href.startsWith('//');

  if (internal) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}
