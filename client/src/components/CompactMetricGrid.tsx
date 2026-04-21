import type { Metric } from '@/types/portfolio';

type CompactMetricGridProps = {
  metrics: readonly Metric[];
};

export function CompactMetricGrid({ metrics }: CompactMetricGridProps) {
  return (
    <div className='mt-[0.7rem] grid grid-cols-2 gap-[0.55rem] max-[460px]:grid-cols-1'>
      {metrics.map((item) => (
        <div
          key={item.label}
          className='rounded-[var(--radius-md)] border-2 border-[color:var(--line)] bg-[var(--surface-soft)] p-[0.72rem]'
        >
          <p className='m-0 text-[1.18rem] text-[var(--section-text,var(--text))]'>{item.value}</p>
          <p className='mt-[0.35rem] text-[0.82rem] leading-[1.3] text-[var(--section-muted,var(--muted))]'>{item.label}</p>
          {item.note ? <p className='mt-[0.35rem] text-[0.76rem] text-[#7a6146]'>{item.note}</p> : null}
        </div>
      ))}
    </div>
  );
}
