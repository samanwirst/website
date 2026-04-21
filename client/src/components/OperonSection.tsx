import type { CSSProperties } from 'react';
import type { ArchitectureNode, EvidenceShot, Metric } from '@/types/portfolio';
import { CompactMetricGrid } from './CompactMetricGrid';
import { ShotCard } from './ShotCard';

type OperonSectionProps = {
  style: CSSProperties;
  architecture: readonly ArchitectureNode[];
  runtimeChecks: readonly string[];
  metrics: readonly Metric[];
  shots: readonly EvidenceShot[];
  onOpen: (image: string, title: string) => void;
};

export function OperonSection({ style, architecture, runtimeChecks, metrics, shots, onOpen }: OperonSectionProps) {
  return (
    <section id='operon' className='process reveal' style={style}>
      <div className='section-head'>
        <p className='eyebrow'>SECTION 02 · OPERONCRM</p>
        <h2>OperonCRM — Architecture and API Contract Discipline</h2>
      </div>
      <div className='case-grid'>
        <article className='panel-card'>
          <p className='mini-top'>Architecture (interactive)</p>
          <div className='details-grid'>
            {architecture.map((node, index) => (
              <details key={node.layer} className='detail-card' open={index === 0}>
                <summary>{node.layer}</summary>
                <p>{node.details}</p>
              </details>
            ))}
          </div>
          <p className='mini-top'>Runtime checks (interactive)</p>
          <div className='details-grid checks-grid'>
            {runtimeChecks.map((fact, index) => (
              <details key={fact} className='detail-card' open={index === 0}>
                <summary>Check {String(index + 1).padStart(2, '0')}</summary>
                <p>{fact}</p>
              </details>
            ))}
          </div>
          <p className='mini-top'>OperonCRM Scoreboard</p>
          <CompactMetricGrid metrics={metrics} />
        </article>
        <div className='shot-grid operon-shot-grid'>
          {shots.map((shot) => (
            <ShotCard
              key={shot.title}
              shot={shot}
              imageSizes='(max-width: 1000px) 100vw, 38vw'
              linkLabel='Open source endpoint'
              fallbackTag='local runtime capture'
              onOpen={onOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
