/**
 * Textos de muestra para la propuesta. No están publicados
 * por la clínica. Donde se usen, la UI debe llevar la marca.
 */

export const proposalCopy = {
  mark: 'Propuesta de redacción',
  note: 'Texto de muestra para esta propuesta. No está publicado por la clínica.',
} as const;

export function focusDraft(role: string) {
  if (role.includes('anestesiología')) {
    return 'La especialidad publicada es anestesiología y reanimación. En Clínica Nova la valoración incluye cita con anestesiólogo cuando el procedimiento lo requiere. El plan de cada caso se define en esa cita.';
  }

  if (role === 'Ginecólogo') {
    return 'La especialidad publicada es ginecología. En esta clínica también se atienden procedimientos de belleza íntima. El plan se define en la valoración.';
  }

  if (role.includes('maxilofacial')) {
    return 'La especialidad publicada cubre cirugía plástica, maxilofacial y de la mano. En la consulta se escucha el motivo y se indica si hay un procedimiento. El detalle se resuelve en la valoración.';
  }

  if (role.includes('reconstructivo') && !role.includes('estético')) {
    return 'La especialidad publicada es cirugía plástica y reconstructiva. En la consulta se escucha el motivo, se examina y se indica si hay un procedimiento. El plan se define en la valoración.';
  }

  return 'La especialidad publicada es cirugía plástica, estética y reconstructiva. En la consulta se escucha el motivo, se examina y se indica si hay un procedimiento. El plan se define en la valoración.';
}
