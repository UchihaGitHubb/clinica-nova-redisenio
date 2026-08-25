import type { Metadata } from 'next';
import { ResultsView } from '@/components/results/ResultsView';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Resultados',
  description: `Voces de pacientes de ${site.name}. Cada caso es individual; los resultados varían.`,
};

export default function ResultadosPage() {
  return <ResultsView />;
}
