import type { Metadata } from 'next';
import { LegalView } from '@/components/legal/LegalView';
import { termsPage } from '@/lib/content/legal';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Términos y condiciones',
  description: `Identificación de ${site.legalName} y condiciones de uso de este sitio.`,
};

export default function TerminosYCondicionesPage() {
  return <LegalView page={termsPage} />;
}
