import type { Metadata } from 'next';
import { SpecialistsView } from '@/components/specialists/SpecialistsView';
import { specialists } from '@/lib/content/specialists';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Especialistas',
  description: `Equipo médico de ${site.name}: ${specialists.length} especialistas en cirugía plástica, estética y anestesiología.`,
};

export default function EspecialistasPage() {
  return <SpecialistsView />;
}
