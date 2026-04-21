import type { CSSProperties } from 'react';
import type { Metric } from '@/types/portfolio';

type StatsSectionProps = {
  style: CSSProperties;
  metrics: readonly Metric[];
};

export function StatsSection({ style, metrics }: StatsSectionProps) {
  return (
    <section className='stats reveal' style={style}>
      {metrics.map((item) => (
        <article key={item.label}>
          <p className='stat-num'>{item.value}</p>
          <p className='stat-label'>{item.label}</p>
          {item.note ? <p className='stat-note'>{item.note}</p> : null}
        </article>
      ))}
    </section>
  );
}
