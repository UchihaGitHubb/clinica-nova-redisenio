/**
 * Une nombres de clase descartando los valores falsos.
 *
 * Resuelve el único caso que necesitamos de una librería como clsx,
 * en tres líneas y sin dependencia (§16 del encargo de fase).
 */
export function cx(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(' ');
}
