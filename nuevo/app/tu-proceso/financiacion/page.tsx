import type { Metadata } from 'next';
import { FinancingView } from '@/components/process/FinancingView';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Financiación',
  description: `Medios de pago y financiación en ${site.name}. El presupuesto se define en la valoración.`,
};

export default function FinanciacionPage() {
  return <FinancingView />;
}
