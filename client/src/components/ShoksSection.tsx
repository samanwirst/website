import type { CSSProperties } from 'react';
import type { EvidenceShot, Metric } from '@/types/portfolio';
import { CompactMetricGrid } from './CompactMetricGrid';
import { ShotCard } from './ShotCard';

type ShoksSectionProps = {
  style: CSSProperties;
  facts: readonly string[];
  metrics: readonly Metric[];
  shots: readonly EvidenceShot[];
  onOpen: (image: string, title: string) => void;
};

export function ShoksSection({ style, facts, metrics, shots, onOpen }: ShoksSectionProps) {
  return (
    <section id='shoks' className='work reveal' style={style}>
      <div className='section-head'>
        <p className='eyebrow'>SECTION 01 · SHOKSSAT</p>
        <h2>ShoksSAT — Primary Product Case (CTO)</h2>
      </div>
      <div className='case-grid'>
        <article className='panel-card'>
          <p className='mini-top'>Role + Scope</p>
          <p className='section-summary'>
            Production-first focus: SAT prep platform architecture, fast feature delivery, and growth-loop support.
          </p>
          <ul className='facts-list'>
            {facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
          <p className='mini-top'>ShoksSAT Scoreboard</p>
          <CompactMetricGrid metrics={metrics} />
        </article>
        <div className='shot-grid shoks-shot-grid'>
          {shots.map((shot) => (
            <ShotCard
              key={shot.title}
              shot={shot}
              imageSizes='(max-width: 1000px) 100vw, 42vw'
              linkLabel='Open Telegram'
              onOpen={onOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
