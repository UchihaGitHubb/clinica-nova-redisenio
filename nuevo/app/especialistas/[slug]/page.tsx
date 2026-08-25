import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SpecialistView } from '@/components/specialists/SpecialistView';
import { getSpecialist, specialists } from '@/lib/content/specialists';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return specialists.map((person) => ({ slug: person.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const person = getSpecialist(slug);
  if (!person) return { title: 'Especialista' };

  return {
    title: person.name,
    description: `${person.name}, ${person.role}.`,
  };
}

export default async function EspecialistaPage({ params }: PageProps) {
  const { slug } = await params;
  const person = getSpecialist(slug);
  if (!person) notFound();

  return <SpecialistView person={person} />;
}
