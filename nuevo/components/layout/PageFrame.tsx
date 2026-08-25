import type { ReactNode } from 'react';
import styles from './PageFrame.module.css';

type PageFrameProps = {
  children: ReactNode;
};

/** Reserva la altura de la cabecera fija en páginas interiores. */
export function PageFrame({ children }: PageFrameProps) {
  return <div className={styles.frame}>{children}</div>;
}
