import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { GoogleTagManager, FacebookPixel } from '@/components/tracking';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Prime Motors',
  description: 'Official landing page of Prime Motors',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning // supress Grammarly hydration mismatch warnings
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full bg-black text-white`}
      >
        {children}
        <FacebookPixel />
        <GoogleTagManager />
      </body>
    </html>
  );
}

export const viewport: Viewport = {
  themeColor: '#000000', // black status bar in Chrome / Android
};
