import type { CSSProperties } from 'react';
import { btnPrimary, btnSecondary, eyebrow } from './uiClasses';

type HeroSectionProps = {
  style: CSSProperties;
};

export function HeroSection({ style }: HeroSectionProps) {
  return (
    <section
      className='reveal grid grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] gap-4 text-[var(--section-text,var(--text))] [--section-text:var(--ink)] [--section-muted:var(--ink-muted)] max-[1000px]:grid-cols-1 max-[700px]:gap-3'
      style={style}
    >
      <article className='rounded-[var(--radius-xl)] border-2 border-[color:var(--line)] bg-[var(--surface)] p-[clamp(1.4rem,2.8vw,2.5rem)] max-[700px]:rounded-[var(--radius-lg)] max-[700px]:p-[1rem] max-[480px]:p-[0.85rem]'>
        <p className={eyebrow}>PRODUCT PORTFOLIO · INTERACTIVE CASEBOOK</p>
        <h1 className='m-[0.6rem_0_0] max-w-[18ch] text-[clamp(1.9rem,3.8vw,3.5rem)] leading-[1.07] tracking-[-0.03em] [font-family:var(--font-display),Trebuchet_MS,sans-serif] max-[520px]:text-[clamp(1.55rem,9vw,2.1rem)]'>
          I build high-impact products that ship fast, run on robust architecture, and prove their value through measurable
          outcomes.
        </h1>
        <p className='m-[1rem_0_0] max-w-[54ch] text-[0.98rem] leading-[1.58] text-[var(--section-muted,var(--muted))]'>
          Primary case: ShoksSAT (CTO), followed by an OperonCRM architecture deep dive and additional engineering projects.
        </p>
        <div className='mt-[1.45rem] flex flex-wrap gap-[0.7rem] max-[520px]:grid max-[520px]:grid-cols-1'>
          <a className={btnPrimary} href='#shoks'>
            ShoksSAT Case
          </a>
          <a className={btnSecondary} href='https://github.com/samanwirst' target='_blank' rel='noreferrer'>
            GitHub
          </a>
          <a
            className={btnSecondary}
            href='https://www.linkedin.com/in/samandar-mukhammadiev-0279b8274/'
            target='_blank'
            rel='noreferrer'
          >
            LinkedIn
          </a>
          <a className={btnSecondary} href='https://t.me/samanwirst_blog' target='_blank' rel='noreferrer'>
            Telegram
          </a>
        </div>
      </article>

      <aside className='flex flex-col gap-[0.85rem] rounded-[var(--radius-xl)] border-2 border-[color:var(--line)] bg-[var(--surface)] p-[1.2rem] max-[700px]:rounded-[var(--radius-lg)] max-[700px]:p-[1rem] max-[480px]:p-[0.85rem]'>
        <p className='m-0 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-[var(--section-muted,var(--muted))]'>
          Portfolio Snapshot · April 20, 2026
        </p>
        <ul className='m-0 grid list-none gap-[0.55rem] p-0'>
          <li className='flex items-center justify-between gap-[0.8rem] rounded-[var(--radius-md)] border-2 border-[color:var(--line)] bg-[var(--surface-strong)] px-[0.7rem] py-[0.6rem] transition-[border-color,background-color] duration-[120ms] linear hover:border-[color:var(--line-strong)] hover:bg-[var(--surface-soft)] max-[520px]:flex-col max-[520px]:items-start'>
            <span className='text-[0.74rem] uppercase tracking-[0.08em] text-[var(--section-muted,var(--muted))]'>Role</span>
            <span className='text-right text-[0.84rem] font-semibold max-[520px]:text-left'>CTO @ ShoksSAT</span>
          </li>
          <li className='flex items-center justify-between gap-[0.8rem] rounded-[var(--radius-md)] border-2 border-[color:var(--line)] bg-[var(--surface-strong)] px-[0.7rem] py-[0.6rem] transition-[border-color,background-color] duration-[120ms] linear hover:border-[color:var(--line-strong)] hover:bg-[var(--surface-soft)] max-[520px]:flex-col max-[520px]:items-start'>
            <span className='text-[0.74rem] uppercase tracking-[0.08em] text-[var(--section-muted,var(--muted))]'>
              Primary Product
            </span>
            <span className='text-right text-[0.84rem] font-semibold max-[520px]:text-left'>ShoksSAT</span>
          </li>
          <li className='flex items-center justify-between gap-[0.8rem] rounded-[var(--radius-md)] border-2 border-[color:var(--line)] bg-[var(--surface-strong)] px-[0.7rem] py-[0.6rem] transition-[border-color,background-color] duration-[120ms] linear hover:border-[color:var(--line-strong)] hover:bg-[var(--surface-soft)] max-[520px]:flex-col max-[520px]:items-start'>
            <span className='text-[0.74rem] uppercase tracking-[0.08em] text-[var(--section-muted,var(--muted))]'>
              Architecture Case
            </span>
            <span className='text-right text-[0.84rem] font-semibold max-[520px]:text-left'>OperonCRM</span>
          </li>
        </ul>
        <p className='m-0 border-t-2 border-[color:var(--line)] pt-[0.85rem] text-[0.9rem] leading-[1.5] text-[var(--section-muted,var(--muted))]'>
          Below is a working-format portfolio only: key sections, factual metrics, interactive technical blocks, and supporting
          evidence.
        </p>
      </aside>
    </section>
  );
}
