import type { CSSProperties } from 'react';
import type { Locale, TopBarTexts } from '@/i18n/siteI18n';

type TopBarProps = {
  style: CSSProperties;
  locale: Locale;
  texts: TopBarTexts;
  onLocaleChange: (locale: Locale) => void;
};

export function TopBar({ style, locale, texts, onLocaleChange }: TopBarProps) {
  return (
    <header
      className='reveal sticky top-3 z-[18] flex items-center justify-between gap-4 rounded-[var(--radius-lg)] border-2 border-[color:var(--line)] bg-[#1a140f] px-4 py-[0.9rem] max-[700px]:top-2 max-[700px]:flex-col max-[700px]:items-stretch max-[700px]:gap-3 max-[700px]:px-3 max-[700px]:py-3'
      style={style}
    >
      <a
        className='inline-flex items-center gap-[0.42rem] text-[0.78rem] font-semibold tracking-[0.14em] hover:cursor-pointer [font-family:var(--font-display),Trebuchet_MS,sans-serif]'
        href='#'
      >
        <span className='h-[0.58rem] w-[0.58rem] rounded-none bg-[var(--brand)]' />
        samanwirst
      </a>
      <div className='inline-flex items-center gap-[0.75rem] max-[700px]:grid max-[700px]:w-full max-[700px]:gap-[0.62rem]'>
        <nav
          className='inline-flex gap-[0.9rem] text-[0.9rem] font-medium text-[var(--muted)] max-[700px]:grid max-[700px]:w-full max-[700px]:grid-cols-2 max-[700px]:gap-[0.45rem] max-[700px]:text-[0.82rem]'
          aria-label={texts.navAria}
        >
          <a
            className='transition-colors duration-200 hover:cursor-pointer hover:text-[var(--text)] max-[700px]:border-2 max-[700px]:border-[color:var(--line)] max-[700px]:px-[0.55rem] max-[700px]:py-[0.45rem] max-[700px]:text-center'
            href='#shoks'
          >
            {texts.shoks}
          </a>
          <a
            className='transition-colors duration-200 hover:cursor-pointer hover:text-[var(--text)] max-[700px]:border-2 max-[700px]:border-[color:var(--line)] max-[700px]:px-[0.55rem] max-[700px]:py-[0.45rem] max-[700px]:text-center'
            href='#operon'
          >
            {texts.operon}
          </a>
          <a
            className='transition-colors duration-200 hover:cursor-pointer hover:text-[var(--text)] max-[700px]:border-2 max-[700px]:border-[color:var(--line)] max-[700px]:px-[0.55rem] max-[700px]:py-[0.45rem] max-[700px]:text-center'
            href='#others'
          >
            {texts.others}
          </a>
          <a
            className='transition-colors duration-200 hover:cursor-pointer hover:text-[var(--text)] max-[700px]:border-2 max-[700px]:border-[color:var(--line)] max-[700px]:px-[0.55rem] max-[700px]:py-[0.45rem] max-[700px]:text-center'
            href='#academic'
          >
            {texts.academic}
          </a>
          <a
            className='transition-colors duration-200 hover:cursor-pointer hover:text-[var(--text)] max-[700px]:col-span-2 max-[700px]:border-2 max-[700px]:border-[color:var(--line)] max-[700px]:px-[0.55rem] max-[700px]:py-[0.45rem] max-[700px]:text-center'
            href='#contact'
          >
            {texts.contact}
          </a>
        </nav>
        <div className='inline-flex items-center justify-end max-[700px]:justify-start'>
          <div
            role='group'
            aria-label={texts.localeSwitchAria}
            className='relative inline-grid grid-cols-2 overflow-hidden rounded-[var(--radius-md)] border-2 border-[color:var(--line)] bg-[#241b15] p-[2px] text-[0.68rem] font-semibold tracking-[0.08em] text-[#e8dcc5]'
          >
            <span
              className={`pointer-events-none absolute left-[2px] top-[2px] h-[calc(100%-4px)] w-[calc(50%-2px)] border border-[rgba(104,25,25,0.85)] bg-[rgba(201,86,86,0.92)] transition-transform duration-200 ${locale === 'en' ? 'translate-x-full' : 'translate-x-0'}`}
              aria-hidden='true'
            />
            <button
              type='button'
              className='relative z-[1] min-w-[2.2rem] px-[0.44rem] py-[0.24rem] transition-colors duration-150 hover:cursor-pointer hover:text-[#fff9f1]'
              onClick={() => onLocaleChange('ru')}
              aria-pressed={locale === 'ru'}
            >
              {texts.localeRu}
            </button>
            <button
              type='button'
              className='relative z-[1] min-w-[2.2rem] px-[0.44rem] py-[0.24rem] transition-colors duration-150 hover:cursor-pointer hover:text-[#fff9f1]'
              onClick={() => onLocaleChange('en')}
              aria-pressed={locale === 'en'}
            >
              {texts.localeEn}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
