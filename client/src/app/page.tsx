import { cookies } from 'next/headers';
import { headers } from 'next/headers';
import HomeClient from '@/components/HomeClient';
import { LANG_COOKIE_NAME, resolveLocale, siteDictionary } from '@/i18n/siteI18n';
import { getSiteUrl } from '@/lib/seo';

export default async function HomePage() {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const rawLocale = cookieStore.get(LANG_COOKIE_NAME)?.value;
  const initialLocale = resolveLocale(rawLocale, headerStore.get('accept-language'));
  const siteUrl = getSiteUrl();
  const meta = siteDictionary[initialLocale].meta;

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: meta.title,
      url: siteUrl,
      inLanguage: initialLocale,
      description: meta.description,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Mukhammadiev Samandar Shavkatovich',
      url: siteUrl,
      jobTitle: 'CTO / Fullstack Developer',
      sameAs: [
        'https://github.com/samanwirst',
        'https://www.linkedin.com/in/samandar-mukhammadiev-0279b8274/',
        'https://t.me/samanwirst_blog',
      ],
    },
  ];

  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <HomeClient initialLocale={initialLocale} />
    </>
  );
}
