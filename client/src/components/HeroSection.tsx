import type { CSSProperties } from 'react';
import type { HeroTexts } from '@/i18n/siteI18n';
import { btnPrimary, btnSecondary, eyebrow } from './uiClasses';
import Image from 'next/image';

type HeroSectionProps = {
  style: CSSProperties;
  texts: HeroTexts;
};

export function HeroSection({ style, texts }: HeroSectionProps) {
  return (
    <section
      className='reveal grid grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] gap-4 text-[var(--section-text,var(--text))] [--section-text:var(--ink)] [--section-muted:var(--ink-muted)] max-[1000px]:grid-cols-1 max-[700px]:gap-3'
      style={style}
    >
      <article className='rounded-[var(--radius-xl)] border-2 border-[color:var(--line)] bg-[var(--surface)] p-[clamp(1.4rem,2.8vw,2.5rem)] max-[700px]:rounded-[var(--radius-lg)] max-[700px]:p-[1rem] max-[480px]:p-[0.85rem]'>
        <p className={eyebrow}>{texts.eyebrow}</p>
        <h1 className='m-[0.6rem_0_0] max-w-[18ch] text-[clamp(1.9rem,3.8vw,3.5rem)] font-semibold leading-[1.07] tracking-[-0.03em] [font-family:var(--font-display),Trebuchet_MS,sans-serif] max-[520px]:text-[clamp(1.55rem,9vw,2.1rem)]'>
          {texts.title}
        </h1>
        <p className='m-[1rem_0_0] max-w-[54ch] text-[0.98rem] leading-[1.58] text-[var(--section-muted,var(--muted))]'>
          {texts.summary}
        </p>
        <div className='mt-[1.45rem] flex flex-wrap gap-[0.7rem] max-[520px]:grid max-[520px]:grid-cols-1'>
          <a className={btnPrimary} href='#shoks'>
            {texts.caseButton}
          </a>
          <a className={btnSecondary} href='https://github.com/samanwirst' target='_blank' rel='noreferrer'>
            {texts.githubLabel}
          </a>
          <a
            className={btnSecondary}
            href='https://www.linkedin.com/in/samandar-mukhammadiev-0279b8274/'
            target='_blank'
            rel='noreferrer'
          >
            {texts.linkedinLabel}
          </a>
          <a className={btnSecondary} href='https://t.me/samanwirst_blog' target='_blank' rel='noreferrer'>
            {texts.telegramLabel}
          </a>
        </div>
      </article>

      <aside className='flex flex-col gap-[0.85rem] rounded-[var(--radius-xl)] border-2 border-[color:var(--line)] bg-[var(--surface)] p-[1.2rem] max-[700px]:rounded-[var(--radius-lg)] max-[700px]:p-[1rem] max-[480px]:p-[0.85rem]'>
        <div className='grid gap-[0.85rem] max-[1000px]:grid-cols-[minmax(12rem,0.72fr)_minmax(0,1fr)] max-[640px]:grid-cols-1'>
          <div className='relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] border-2 border-[color:var(--line)] bg-[#23324f]'>
            <Image
              src='/images/personal_pic.png'
              alt='Personal photo'
              fill
              priority
              className='object-cover object-[center_12%]'
              sizes='(max-width: 640px) 100vw, (max-width: 1000px) 36vw, 28rem'
            />
          </div>
          <div className='rounded-[var(--radius-md)] border-2 border-[color:var(--line)] bg-[var(--surface-strong)] p-[0.75rem]'>
            <p className='m-0 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-[var(--section-muted,var(--muted))]'>
              {texts.skillsTitle}
            </p>
            <div className='mt-[0.6rem] grid gap-[0.62rem]'>
              {texts.skills.map((group) => (
                <div key={group.label} className='grid gap-[0.35rem]'>
                  <p className='m-0 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[#775c41]'>
                    {group.label}
                  </p>
                  <div className='flex flex-wrap gap-[0.38rem]'>
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className='rounded-[var(--radius-sm)] border border-[color:var(--line)] bg-[var(--surface-soft)] px-[0.45rem] py-[0.22rem] text-[0.76rem] font-medium leading-[1.2]'
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className='m-0 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-[var(--section-muted,var(--muted))]'>
          {texts.snapshotTitle}
        </p>
        <ul className='m-0 grid list-none gap-[0.55rem] p-0'>
          <li className='flex items-center justify-between gap-[0.8rem] rounded-[var(--radius-md)] border-2 border-[color:var(--line)] bg-[var(--surface-strong)] px-[0.7rem] py-[0.6rem] transition-[border-color,background-color] duration-[120ms] linear hover:border-[color:var(--line-strong)] hover:bg-[var(--surface-soft)] max-[520px]:flex-col max-[520px]:items-start'>
            <span className='text-[0.74rem] uppercase tracking-[0.08em] text-[var(--section-muted,var(--muted))]'>
              {texts.availabilityLabel}
            </span>
            <span className='text-right text-[0.84rem] font-semibold max-[520px]:text-left'>{texts.availabilityValue}</span>
          </li>
          <li className='flex items-center justify-between gap-[0.8rem] rounded-[var(--radius-md)] border-2 border-[color:var(--line)] bg-[var(--surface-strong)] px-[0.7rem] py-[0.6rem] transition-[border-color,background-color] duration-[120ms] linear hover:border-[color:var(--line-strong)] hover:bg-[var(--surface-soft)] max-[520px]:flex-col max-[520px]:items-start'>
            <span className='text-[0.74rem] uppercase tracking-[0.08em] text-[var(--section-muted,var(--muted))]'>
              {texts.hourlyRateLabel}
            </span>
            <span className='text-right text-[0.84rem] font-semibold max-[520px]:text-left'>{texts.hourlyRateValue}</span>
          </li>
        </ul>
        <p className='m-0 border-t-2 border-[color:var(--line)] pt-[0.85rem] text-[0.9rem] leading-[1.5] text-[var(--section-muted,var(--muted))]'>
          {texts.workingFormat}
        </p>
      </aside>
    </section>
  );
}
