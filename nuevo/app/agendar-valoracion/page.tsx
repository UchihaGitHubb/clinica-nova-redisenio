import type { Metadata } from 'next';
import { BookingView } from '@/components/booking/BookingView';
import { resolveBookingInterest } from '@/lib/content/booking';
import { getSpecialist } from '@/lib/content/specialists';
import { site } from '@/lib/site';

type PageProps = {
  searchParams: Promise<{
    procedimiento?: string | string[];
    especialista?: string | string[];
  }>;
};

export const metadata: Metadata = {
  title: site.cta.label,
  description: `Cómo es la valoración en ${site.name}. El teléfono y el WhatsApp son los canales publicados para coordinarla.`,
};

export default async function AgendarValoracionPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const interest = resolveBookingInterest(params.procedimiento);
  const specialistParam = Array.isArray(params.especialista)
    ? params.especialista[0]
    : params.especialista;
  const specialist =
    getSpecialist(specialistParam ?? '')?.name ?? specialistParam ?? '';

  return (
    <BookingView
      procedureSlug={interest.procedureSlug}
      specialist={specialist}
      interestLabel={interest.interestLabel}
    />
  );
}
