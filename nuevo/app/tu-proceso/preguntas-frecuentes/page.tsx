import type { Metadata } from 'next';
import { FaqView } from '@/components/process/FaqView';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqAnswerText, faqItems } from '@/lib/content/faq';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Preguntas frecuentes',
  description: `Respuestas publicadas sobre valoración, procedimientos, estancia y financiación en ${site.name}.`,
};

export default function PreguntasFrecuentesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faqAnswerText(item),
      },
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <FaqView />
    </>
  );
}
