import type { Metadata } from 'next';
import { ProcessView } from '@/components/process/ProcessView';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Tu proceso',
  description: `Cómo es el recorrido en ${site.name}: de la primera conversación al seguimiento.`,
};

export default function TuProcesoPage() {
  return <ProcessView />;
}
