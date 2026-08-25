/**
 * Breakpoints · docs/04-DESIGN-SYSTEM.md §28.1
 *
 * Cada valor corresponde a un ancho de dispositivo real, no a un
 * número redondo:
 *   tablet  →  768px  iPad vertical
 *   desktop → 1024px  iPad horizontal / portátil pequeño
 *   wide    → 1440px  portátil de trabajo
 *
 * CSS no admite custom properties dentro de `@media`, de modo que
 * las media queries de styles/ llevan el valor literal. Este archivo
 * es la referencia para TypeScript. Si cambia un valor, hay que
 * actualizar también styles/tokens/layout.css y typography.css.
 */
export const breakpoints = {
  tablet: 768,
  desktop: 1024,
  wide: 1440,
} as const;

export type Breakpoint = keyof typeof breakpoints;

/** Media query mobile-first para usar desde JS (matchMedia). */
export function up(breakpoint: Breakpoint): string {
  return `(min-width: ${breakpoints[breakpoint]}px)`;
}
