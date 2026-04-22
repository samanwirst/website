import type { Metadata, Viewport } from 'next';
import { cookies } from 'next/headers';
import { headers } from 'next/headers';
import { JetBrains_Mono, Manrope, Unbounded } from 'next/font/google';
import { LANG_COOKIE_NAME, resolveLocale, siteDictionary } from '@/i18n/siteI18n';
import { getSiteUrl } from '@/lib/seo';
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

const metadataIcons: Metadata['icons'] = {
  icon: [
    { url: '/favicon.ico', sizes: 'any' },
    { url: '/meta/topography-icon-32.png', sizes: '32x32', type: 'image/png' },
    { url: '/meta/topography-icon-512.png', sizes: '512x512', type: 'image/png' },
  ],
  shortcut: '/favicon.ico',
  apple: [{ url: '/meta/topography-icon-180.png', sizes: '180x180', type: 'image/png' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#17120d',
};

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const rawLocale = cookieStore.get(LANG_COOKIE_NAME)?.value;
  const locale = resolveLocale(rawLocale, headerStore.get('accept-language'));
  const meta = siteDictionary[locale].meta;
  const siteUrl = getSiteUrl();
  const metadataBase = new URL(siteUrl);
  const ogImagePath = '/media/shoks/shoks-platform-first.png';

  return {
    metadataBase,
    title: meta.title,
    description: meta.description,
    applicationName: 'samanwirst portfolio',
    category: 'technology',
    referrer: 'origin-when-cross-origin',
    alternates: {
      canonical: '/',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    keywords: [
      'samanwirst',
      'portfolio',
      'CTO',
      'fullstack developer',
      'Next.js',
      'TypeScript',
      'OperonCRM',
      'ShoksSAT',
    ],
    authors: [{ name: 'Mukhammadiev Samandar Shavkatovich' }],
    creator: 'Mukhammadiev Samandar Shavkatovich',
    publisher: 'Mukhammadiev Samandar Shavkatovich',
    openGraph: {
      type: 'website',
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
      url: '/',
      siteName: 'samanwirst',
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: ogImagePath,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [ogImagePath],
    },
    manifest: '/site.webmanifest',
    icons: metadataIcons,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const rawLocale = cookieStore.get(LANG_COOKIE_NAME)?.value;
  const htmlLang = resolveLocale(rawLocale, headerStore.get('accept-language'));

  return (
    <html lang={htmlLang} className={`${manrope.variable} ${unbounded.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  );
}
