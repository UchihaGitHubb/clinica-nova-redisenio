import type { Metadata } from 'next';
import { LegalView } from '@/components/legal/LegalView';
import { privacyPage } from '@/lib/content/legal';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description: `Tratamiento y protección de datos personales de ${site.legalName}.`,
};

export default function PoliticaDePrivacidadPage() {
  return <LegalView page={privacyPage} />;
}
