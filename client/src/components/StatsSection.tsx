import type { CSSProperties } from 'react';
import type { Metric } from '@/types/portfolio';

type StatsSectionProps = {
  style: CSSProperties;
  metrics: readonly Metric[];
};

export function StatsSection({ style, metrics }: StatsSectionProps) {
  return (
    <section className='reveal grid grid-cols-4 gap-[0.8rem] max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1' style={style}>
      {metrics.map((item) => (
        <article
          key={item.label}
          className='rounded-[var(--radius-lg)] border border-[color:var(--line)] bg-[linear-gradient(180deg,#3a2d22,#2d221a)] px-[1.1rem] py-4'
        >
          <p className='m-0 text-[clamp(1.65rem,3vw,2.4rem)] leading-[1.05] text-[#f1e7d0] [font-family:var(--font-display),Trebuchet_MS,sans-serif]'>
            {item.value}
          </p>
          <p className='mt-[0.55rem] max-w-[27ch] text-[0.9rem] text-[var(--muted)]'>{item.label}</p>
          {item.note ? <p className='mt-[0.5rem] text-[0.76rem] text-[#a99072]'>{item.note}</p> : null}
        </article>
      ))}
    </section>
  );
}
