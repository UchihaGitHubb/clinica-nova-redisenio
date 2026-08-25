import type { ImageAsset } from '@/lib/images';
import { images } from '@/lib/images';

export type ProcedureCategoryId = 'faciales' | 'corporales' | 'belleza-intima' | 'esteticos';

export type ProcedureCategory = {
  id: ProcedureCategoryId;
  label: string;
  description: string;
  href: string;
  tags: readonly string[];
  image: ImageAsset | null;
};

export const procedureCategories: ProcedureCategory[] = [
  {
    id: 'faciales',
    label: 'Faciales',
    description: 'Procedimientos del rostro.',
    href: '/procedimientos/faciales',
    tags: ['Rinoplastia', 'Blefaroplastia'],
    image: images.facialConsult,
  },
  {
    id: 'corporales',
    label: 'Corporales',
    description: 'Procedimientos del cuerpo.',
    href: '/procedimientos/corporales',
    tags: ['Mamoplastia', 'Liposucción'],
    image: images.corporalSpace,
  },
  {
    id: 'belleza-intima',
    label: 'Belleza íntima',
    description: 'Procedimientos de belleza íntima.',
    href: '/procedimientos/belleza-intima',
    tags: ['Labioplastia', 'Vaginoplastia'],
    image: images.heroInterior,
  },
];

/** Oferta estética complementaria. Entra en el catálogo y en las cuatro tarjetas del Home. */
export const aestheticCategory: ProcedureCategory = {
  id: 'esteticos',
  label: 'Estéticos',
  description: 'Procedimientos estéticos.',
  href: '/procedimientos/esteticos',
  tags: ['Bótox', 'Renovación facial'],
  image: images.heroSede,
};

export const catalogCategories: ProcedureCategory[] = [...procedureCategories, aestheticCategory];
