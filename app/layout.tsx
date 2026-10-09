import type { Metadata } from 'next';
import { Cormorant_Garamond, Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const cormorant = Cormorant_Garamond({ variable: '--font-cormorant', subsets: ['latin'], weight: ['400', '500', '600', '700'], style: ['normal', 'italic'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://bazar-origen-premium.jpt-devsoftware.chatgpt.site'),
  title: 'Bazar Origen | Marcas únicas, historias auténticas',
  description: 'Descubre más de 120 marcas de autor, gastronomía local y experiencias en Bazar Origen. 15 y 16 de noviembre, ingreso gratuito.',
  openGraph: {
    title: 'Bazar Origen | Lo especial se descubre',
    description: 'Más de 120 marcas de autor, gastronomía local y experiencias. 15 y 16 de noviembre, ingreso gratuito.',
    images: [{ url: '/og.png', width: 1792, height: 1024, alt: 'Bazar Origen — Lo especial se descubre.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bazar Origen | Lo especial se descubre',
    description: 'Más de 120 marcas de autor, gastronomía local y experiencias. Ingreso gratuito.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${geist.variable} ${cormorant.variable}`}>{children}</body></html>;
}
