import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google'
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';


const font = Plus_Jakarta_Sans({
  weight : '400',
  subsets : ['latin']
})

export const metadata: Metadata = {
  title: "CapColor – Agence de communication",
  description: "A full-service digital innovation partner ",
  icons: {
    icon: "/logo-site.png", // اللوغو الصغير
    apple: "/logo-site.png", // اللوغو فاش كيتحط الموقع فـ iPhone
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >

        {children}
        <Analytics />
      </body>
    </html>
  );
}
