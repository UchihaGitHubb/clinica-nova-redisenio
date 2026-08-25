import type { Metadata } from 'next';
import { LegalView } from '@/components/legal/LegalView';
import { cookiesPage } from '@/lib/content/legal';

export const metadata: Metadata = {
  title: 'Política de cookies',
  description:
    'Borrador de política de cookies para esta propuesta. No es un texto firmado por la clínica.',
};

export default function PoliticaDeCookiesPage() {
  return <LegalView page={cookiesPage} />;
}
