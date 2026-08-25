import type { Metadata } from 'next';
import './globals.css';
import { fontVariables } from '@/lib/fonts';
import { images, logos } from '@/lib/images';
import { siteGraphJsonLd } from '@/lib/seo';
import { site } from '@/lib/site';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileActionBar } from '@/components/layout/MobileActionBar';
import { JsonLd } from '@/components/seo/JsonLd';
import { MAIN_CONTENT_ID, SkipLink } from '@/components/ui/SkipLink';

const title = `${site.name} — ${site.tagline}`;

export const metadata: Metadata = {
  /**
   * Necesario para que las URL de Open Graph se resuelvan como
   * absolutas. Al desplegar, definir NEXT_PUBLIC_SITE_URL con el
   * dominio real de la previsualización.
   */
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),

  title: {
    default: title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: [{ url: logos.icon.src, type: 'image/png', sizes: '192x192' }],
    apple: logos.icon.src,
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    siteName: site.name,
    title,
    description: site.description,
    images: [
      {
        url: images.heroSede.src,
        width: images.heroSede.width,
        height: images.heroSede.height,
        alt: images.heroSede.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: site.description,
    images: [images.heroSede.src],
  },

  /**
   * IMPORTANTE — QUITAR ANTES DEL LANZAMIENTO REAL.
   *
   * Esto es una propuesta privada de rediseño. Mientras esté
   * desplegada en una URL de previsualización debe quedar fuera de
   * los buscadores, para no competir con el sitio real de la clínica
   * ni generar contenido duplicado.
   *
   * El sitio actual arrastra un `noindex, nofollow` olvidado
   * (docs/01-AUDITORIA-CONTENIDO.md): no repetir ese error. Al pasar
   * a producción, eliminar este bloque.
   */
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang={site.locale} className={fontVariables} data-scroll-behavior="smooth">
      <body>
        <JsonLd data={siteGraphJsonLd()} />
        <SkipLink />
        <Header />

        {/*
          `main` no lleva margen superior por la cabecera fija: el hero
          de la portada reserva su propia altura para que la cabecera
          pueda flotar transparente sobre él (§14.2). Las interiores
          arrancan con cabecera sólida sobre su propio hero oscuro.
        */}
        <main id={MAIN_CONTENT_ID}>{children}</main>

        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
