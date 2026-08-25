import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { TrustBar } from '@/components/home/TrustBar';
import { TreatmentCategories } from '@/components/home/TreatmentCategories';
import { Process } from '@/components/home/Process';
import { TeamResults } from '@/components/home/TeamResults';
import { FinancingPreview } from '@/components/home/FinancingPreview';
import { FinalCTA } from '@/components/home/FinalCTA';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: `${site.name} — ${site.tagline}` },
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <TreatmentCategories />
      <Process />
      <TeamResults />
      <FinancingPreview />
      <FinalCTA />
    </>
  );
}
