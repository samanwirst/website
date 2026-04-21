import type { Metadata } from 'next';
import { JetBrains_Mono, Manrope, Unbounded } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  variable: '--font-body',
  subsets: ['latin', 'cyrillic'],
});

const unbounded = Unbounded({
  variable: '--font-display',
  subsets: ['latin', 'cyrillic'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'samanwirst — Product Portfolio',
  description:
    'Portfolio of samanwirst with verified engineering evidence: architecture, runtime captures, GitHub and Telegram artifacts.',
  icons: {
    icon: [
      { url: '/meta/topography-icon.svg', type: 'image/svg+xml' },
      { url: '/meta/topography-icon-32.png', sizes: '32x32', type: 'image/png' },
      {
        url: '/meta/topography-icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    shortcut: '/meta/topography-icon-32.png',
    apple: [{ url: '/meta/topography-icon-180.png', sizes: '180x180' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${manrope.variable} ${unbounded.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  );
}
