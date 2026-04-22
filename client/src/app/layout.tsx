import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { headers } from 'next/headers';
import { JetBrains_Mono, Manrope, Unbounded } from 'next/font/google';
import { LANG_COOKIE_NAME, resolveLocale, siteDictionary } from '@/i18n/siteI18n';
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
};

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const rawLocale = cookieStore.get(LANG_COOKIE_NAME)?.value;
  const locale = resolveLocale(rawLocale, headerStore.get('accept-language'));
  const meta = siteDictionary[locale].meta;

  return {
    title: meta.title,
    description: meta.description,
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
