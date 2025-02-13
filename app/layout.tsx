import { Metadata } from 'next';
import Head from 'next/head';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { LayoutGroup } from 'framer-motion';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Welcome to my profile !!!',
  description: 'Welcome to my profile!',
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
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutGroup>{children}</LayoutGroup>
      </body>
    </html>
  );
}
