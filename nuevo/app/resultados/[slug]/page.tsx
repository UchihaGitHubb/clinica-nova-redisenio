import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ResultCaseView } from '@/components/results/ResultCaseView';
import { getResultRecord, getResultRecords } from '@/lib/content/results';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getResultRecords().map((item) => ({ slug: item.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const record = getResultRecord(slug);
  if (!record) return { title: 'Resultado' };

  return {
    title: `${record.group.label} · Caso ${String(record.index + 1).padStart(2, '0')}`,
    description: `Caso de ${record.group.label}. Cada resultado es individual y varía según el paciente.`,
  };
}

export default async function ResultadoPage({ params }: PageProps) {
  const { slug } = await params;
  const record = getResultRecord(slug);
  if (!record) notFound();

  return <ResultCaseView record={record} />;
}
