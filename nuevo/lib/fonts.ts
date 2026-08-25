import { Cormorant_Garamond, Manrope } from 'next/font/google';

/**
 * Tipografías del sistema · docs/04-DESIGN-SYSTEM.md §5, §5.7
 *
 * next/font descarga y auto-aloja los archivos en tiempo de build:
 * cero peticiones a fonts.googleapis.com en runtime, que es lo que
 * exige §5.7 al eliminar las preconexiones externas del sitio actual.
 *
 * Subconjuntos `latin` + `latin-ext`: cubren el español completo
 * (acentos, ñ, ü, ¿, ¡).
 */

/**
 * Display — Cormorant Garamond.
 *
 * NO es una fuente variable: cada peso es un archivo. Por eso se
 * declaran solo los tres pesos que el design system autoriza
 * (300 / 400 / 500) y no toda la familia.
 *
 * La cursiva es necesaria para el estilo Quote de testimonios y
 * citas destacadas (§22.2).
 *
 * `preload: false` es deliberado: §5.7 pide precargar únicamente el
 * peso que se use sobre la línea de flotación, y en esta fase todavía
 * no existe el Hero. Cuando se construya, se precargará solo ese peso.
 */
export const fontDisplay = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cormorant',
  preload: false,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
});

/**
 * Body / UI — Manrope.
 *
 * Es variable (200–800), así que un único archivo cubre todos los
 * pesos que usa el sistema (400 / 500 / 600). Se precarga porque
 * es la tipografía de todo el texto visible.
 */
export const fontBody = Manrope({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-manrope',
  fallback: ['-apple-system', 'Segoe UI', 'system-ui', 'sans-serif'],
});

/** Clases de variable CSS a aplicar en <html>. */
export const fontVariables = `${fontDisplay.variable} ${fontBody.variable}`;
