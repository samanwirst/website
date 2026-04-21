import type { Metric } from '@/types/portfolio';

type CompactMetricGridProps = {
  metrics: readonly Metric[];
};

export function CompactMetricGrid({ metrics }: CompactMetricGridProps) {
  return (
    <div className='mt-[0.7rem] grid grid-cols-2 gap-[0.55rem]'>
      {metrics.map((item) => (
        <div key={item.label} className='rounded-[var(--radius-md)] border border-[color:var(--line)] bg-[#32261c] p-[0.72rem]'>
          <p className='m-0 text-[1.18rem] text-[#e7dbc0]'>{item.value}</p>
          <p className='mt-[0.35rem] text-[0.82rem] leading-[1.3] text-[var(--muted)]'>{item.label}</p>
          {item.note ? <p className='mt-[0.35rem] text-[0.76rem] text-[#a88d6d]'>{item.note}</p> : null}
        </div>
      ))}
    </div>
  );
}
