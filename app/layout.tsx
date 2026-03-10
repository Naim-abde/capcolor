import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google';
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

// Performance: Optimized font loading
const font = Plus_Jakarta_Sans({
  weight: ['400', '500', '700'], 
  subsets: ['latin', 'latin-ext'],
  display: 'swap', 
})

export const metadata: Metadata = {
  title: "Cap Color – Agence de Communication & Impression Casablanca",
  description: "Expert en impression grand format, enseignes lumineuses et habillage de véhicules à Casablanca depuis 15 ans.",
  metadataBase: new URL('https://capcolor.ma'), 
  icons: {
    icon: "/logo-site.png",
    apple: "/logo-site.png",
  },
  openGraph: {
    title: "Cap Color – Impression de haut niveau",
    description: "Transformez vos idées en réalité visuelle avec Cap Color Casablanca.",
    url: 'https://capcolor.ma',
    siteName: 'Cap Color',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${font.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}