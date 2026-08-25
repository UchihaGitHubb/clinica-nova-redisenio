import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CategoryView } from '@/components/procedures/CategoryView';
import { ProcedureView } from '@/components/procedures/ProcedureView';
import {
  categoryCopy,
  getCategory,
  getProcedure,
  isCategorySlug,
  procedures,
  reservedCategorySlugs,
} from '@/lib/content/procedures';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...reservedCategorySlugs.map((slug) => ({ slug })),
    ...procedures.map((item) => ({ slug: item.slug })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (isCategorySlug(slug)) {
    const category = getCategory(slug);
    return {
      title: category.label,
      description: categoryCopy[slug].intro,
    };
  }

  const procedure = getProcedure(slug);
  if (!procedure) {
    return { title: 'Procedimiento' };
  }

  return {
    title: procedure.name,
    description: procedure.definition,
  };
}

export default async function ProcedimientosSlugPage({ params }: PageProps) {
  const { slug } = await params;

  if (isCategorySlug(slug)) {
    return <CategoryView id={slug} />;
  }

  const procedure = getProcedure(slug);
  if (!procedure) notFound();

  return <ProcedureView procedure={procedure} />;
}
