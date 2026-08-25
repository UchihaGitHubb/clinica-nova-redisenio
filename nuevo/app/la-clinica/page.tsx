import type { Metadata } from 'next';
import { ClinicView } from '@/components/clinic/ClinicView';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'La clínica',
  description: `${site.legalName} en NOVA Torre Médica, Envigado. Cirugía plástica y estética.`,
};

export default function LaClinicaPage() {
  return <ClinicView />;
}
