import type { Metadata } from 'next';
import { IndexView } from '@/components/procedures/IndexView';
import { procedures } from '@/lib/content/procedures';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Procedimientos',
  description: `Faciales, corporales, belleza íntima y estéticos en ${site.name}. ${procedures.length} procedimientos.`,
};

export default function ProcedimientosPage() {
  return <IndexView />;
}
