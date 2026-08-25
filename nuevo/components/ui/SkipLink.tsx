import styles from './SkipLink.module.css';

/** Identificador del `<main>` al que apunta el salto. */
export const MAIN_CONTENT_ID = 'contenido';

/**
 * Enlace «Saltar al contenido»: permite a quien navega con teclado
 * omitir la cabecera en cada página (§27.2).
 */
export function SkipLink() {
  return (
    <a href={`#${MAIN_CONTENT_ID}`} className={styles.skipLink}>
      Saltar al contenido
    </a>
  );
}
