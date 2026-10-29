import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'Felixa Vistas | Gated Plots in Padappai, Chennai',
  description:
    'Highway-facing gated plotted development in Padappai, Chennai with 25+ lifestyle amenities and up to 80% home loan facility.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
