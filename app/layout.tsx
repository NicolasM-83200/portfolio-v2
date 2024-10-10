import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Karla } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Background from './_components/Background';
import { Header } from './_components/Header';
import { Footer } from './_components/Footer';

const KarlaFont = Karla({ subsets: ['latin'], variable: '--font-caption' });

export const metadata: Metadata = {
  title: 'Nicolas Manigand | Développeur Full-Stack',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          GeistSans.variable,
          KarlaFont.variable,
          'font-sans flex flex-col min-h-screen bg-background text-foreground'
        )}
      >
        <Background />
        <Header />
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
