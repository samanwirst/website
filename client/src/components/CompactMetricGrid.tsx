import type { Metric } from '@/types/portfolio';

type CompactMetricGridProps = {
  metrics: readonly Metric[];
};

export function CompactMetricGrid({ metrics }: CompactMetricGridProps) {
  return (
    <div className='compact-grid'>
      {metrics.map((item) => (
        <div key={item.label} className='compact-item'>
          <p className='compact-value'>{item.value}</p>
          <p className='compact-label'>{item.label}</p>
          {item.note ? <p className='compact-note'>{item.note}</p> : null}
        </div>
      ))}
    </div>
  );
}
