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
      <div className='mt-4 grid grid-cols-3 gap-[0.75rem] max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1'>
        {tracks.map((track) => (
          <a
            key={track.title}
            href={track.href}
            className='group grid gap-[0.55rem] rounded-[var(--radius-md)] border border-[color:var(--line)] bg-[radial-gradient(circle_at_85%_-10%,rgba(147,126,86,0.24),transparent_55%),linear-gradient(180deg,#3a2d22,#2b2119)] p-[0.95rem] transition-[transform,border-color,box-shadow] duration-[220ms] ease-out hover:-translate-y-[3px] hover:border-[color:var(--line-strong)] hover:shadow-[0_14px_32px_rgba(7,11,8,0.52)]'
          >
            <div className='flex items-center justify-between gap-[0.65rem]'>
              <span className='font-mono text-[0.76rem] text-[#cab98f]'>Section {track.index}</span>
              <span className='text-[0.72rem] uppercase tracking-[0.05em] text-[var(--accent)]'>{track.tag}</span>
            </div>
            <h3 className='m-0 text-[1rem] leading-[1.28] transition-[transform,color] duration-[220ms] ease-out group-hover:translate-x-[2px] group-hover:text-[#f2e7cf]'>
              {track.title}
            </h3>
            <p className='m-0 text-[0.9rem] leading-[1.45] text-[var(--muted)] transition-[transform,color] duration-[220ms] ease-out group-hover:translate-x-[2px] group-hover:text-[#c7bda7]'>
              {track.summary}
            </p>
            <div className='flex items-center justify-between gap-[0.65rem]'>
              <span className='text-[0.85rem] font-semibold text-[#ddcfb3]'>{track.meta}</span>
              <span className='font-mono text-[0.78rem] text-[var(--muted)]'>{track.completion}%</span>
            </div>
            <div className='h-[0.34rem] overflow-hidden rounded-full bg-[rgba(164,136,98,0.28)]' aria-hidden='true'>
              <span
                className='block h-full rounded-[inherit] bg-[linear-gradient(90deg,#a4794f_0%,#b8ad8a_100%)]'
                style={{ width: `${track.completion}%` }}
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
