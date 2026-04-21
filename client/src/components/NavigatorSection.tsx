import type { CSSProperties } from 'react';
import type { FocusTrack } from '@/types/portfolio';
import { eyebrow, sectionHead, sectionShell, sectionTitle } from './uiClasses';

type NavigatorSectionProps = {
  style: CSSProperties;
  tracks: readonly FocusTrack[];
};

export function NavigatorSection({ style, tracks }: NavigatorSectionProps) {
  return (
    <section className={sectionShell} style={style}>
      <div className={sectionHead}>
        <p className={eyebrow}>INTERACTIVE NAVIGATOR</p>
        <h2 className={sectionTitle}>Key Portfolio Sections</h2>
      </div>
      <div className='mt-4 grid grid-cols-3 gap-[0.75rem] max-[1000px]:grid-cols-2 max-[860px]:grid-cols-1 max-[700px]:gap-[0.6rem]'>
        {tracks.map((track) => (
          <a
            key={track.title}
            href={track.href}
            className='group grid gap-[0.55rem] rounded-[var(--radius-md)] border-2 border-[color:var(--line)] bg-[var(--surface-strong)] p-[0.95rem] transition-[border-color,background-color] duration-[120ms] linear hover:cursor-pointer hover:border-[color:var(--line-strong)] hover:bg-[var(--surface)] max-[480px]:p-[0.8rem]'
          >
            <div className='flex min-w-0 items-center justify-between gap-[0.65rem]'>
              <span className='font-mono text-[0.76rem] text-[#775c3f]'>Section {track.index}</span>
              <span className='text-[0.72rem] uppercase tracking-[0.05em] text-[var(--accent)] max-[480px]:text-[0.66rem]'>
                {track.tag}
              </span>
            </div>
            <h3 className='m-0 text-[1rem] leading-[1.28] transition-colors duration-[120ms] linear group-hover:text-[#392919]'>
              {track.title}
            </h3>
            <p className='m-0 text-[0.9rem] leading-[1.45] text-[var(--section-muted,var(--muted))] transition-colors duration-[120ms] linear group-hover:text-[#765c43]'>
              {track.summary}
            </p>
            <div className='flex items-center justify-between gap-[0.65rem]'>
              <span className='text-[0.85rem] font-semibold text-[#684f38]'>{track.meta}</span>
              <span className='font-mono text-[0.78rem] text-[var(--section-muted,var(--muted))]'>{track.completion}%</span>
            </div>
            <div className='h-[0.34rem] overflow-hidden rounded-none bg-[rgba(147,120,83,0.24)]' aria-hidden='true'>
              <span className='block h-full rounded-none bg-[var(--brand)]' style={{ width: `${track.completion}%` }} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
