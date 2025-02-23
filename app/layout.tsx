import { Metadata } from 'next';
import { LayoutGroup } from 'framer-motion';
import Head from 'next/head';
import { Geist, Geist_Mono } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { Providers } from './providers';
import './globals.css';

export const dynamic = 'force-static';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Welcome to my profile !',
  applicationName: 'Profile',
  description: 'TienLeDuy',
  authors: {
    url: '',
    name: 'TienLeDuy',
  },
  icons: {
    icon: '/globe.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <LayoutGroup>
            {children}
            <SpeedInsights />
            <Analytics />
          </LayoutGroup>
        </Providers>
      </body>
    </html>
  );
}
