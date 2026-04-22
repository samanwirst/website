import { cookies } from 'next/headers';
import { headers } from 'next/headers';
import HomeClient from '@/components/HomeClient';
import { LANG_COOKIE_NAME, resolveLocale } from '@/i18n/siteI18n';

export default async function HomePage() {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const rawLocale = cookieStore.get(LANG_COOKIE_NAME)?.value;
  const initialLocale = resolveLocale(rawLocale, headerStore.get('accept-language'));

  return <HomeClient initialLocale={initialLocale} />;
}
