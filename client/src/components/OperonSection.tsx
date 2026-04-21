import type { CSSProperties } from 'react';
import type { ArchitectureNode, EvidenceShot, Metric } from '@/types/portfolio';
import { CompactMetricGrid } from './CompactMetricGrid';
import { ShotCard } from './ShotCard';
import { eyebrow, miniTop, panelCard, sectionHead, sectionShell, sectionTitle } from './uiClasses';

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
    <section id='operon' className={sectionShell} style={style}>
      <div className={sectionHead}>
        <p className={eyebrow}>SECTION 02 · OPERONCRM</p>
        <h2 className={sectionTitle}>OperonCRM — Architecture and API Contract Discipline</h2>
      </div>
      <div className='mt-[1.15rem] grid grid-cols-[1.1fr_0.9fr] gap-[0.85rem] max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1'>
        <article
          className={`${panelCard} bg-[radial-gradient(circle_at_18%_18%,rgba(132,112,75,0.18),transparent_64%),linear-gradient(180deg,#392c21,#2b2118)]`}
        >
          <p className={miniTop}>Architecture (interactive)</p>
          <div className='mt-[0.7rem] grid grid-cols-1 gap-[0.55rem]'>
            {architecture.map((node, index) => (
              <details
                key={node.layer}
                className='group overflow-hidden rounded-[var(--radius-md)] border border-[color:var(--line)] bg-[#32261c] transition-[transform,border-color,box-shadow] duration-[220ms] ease-out hover:-translate-y-[1px] hover:border-[color:var(--line-strong)] hover:shadow-[0_10px_18px_rgba(6,10,8,0.32)]'
                open={index === 0}
              >
                <summary className='flex list-none cursor-pointer items-center justify-between gap-[0.7rem] px-[0.86rem] py-[0.72rem] text-[0.9rem] font-semibold text-[#e7dbc3] transition-[background-color,padding-left] duration-[180ms] ease-out group-hover:bg-[#4a392b] group-hover:pl-[0.96rem] after:font-bold after:text-[var(--muted)] after:content-["+"] group-open:after:content-["-"] [&::-webkit-details-marker]:hidden'>
                  {node.layer}
                </summary>
                <p className='m-0 px-[0.86rem] pb-[0.86rem] text-[0.82rem] leading-[1.42] text-[var(--muted)]'>
                  {node.details}
                </p>
              </details>
            ))}
          </div>
          <p className={miniTop}>Runtime checks (interactive)</p>
          <div className='mt-[0.75rem] grid grid-cols-1 gap-[0.55rem]'>
            {runtimeChecks.map((fact, index) => (
              <details
                key={fact}
                className='group overflow-hidden rounded-[var(--radius-md)] border border-[color:var(--line)] bg-[#32261c] transition-[transform,border-color,box-shadow] duration-[220ms] ease-out hover:-translate-y-[1px] hover:border-[color:var(--line-strong)] hover:shadow-[0_10px_18px_rgba(6,10,8,0.32)]'
                open={index === 0}
              >
                <summary className='flex list-none cursor-pointer items-center justify-between gap-[0.7rem] px-[0.86rem] py-[0.72rem] text-[0.9rem] font-semibold text-[#e7dbc3] transition-[background-color,padding-left] duration-[180ms] ease-out group-hover:bg-[#4a392b] group-hover:pl-[0.96rem] after:font-bold after:text-[var(--muted)] after:content-["+"] group-open:after:content-["-"] [&::-webkit-details-marker]:hidden'>
                  Check {String(index + 1).padStart(2, '0')}
                </summary>
                <p className='m-0 px-[0.86rem] pb-[0.86rem] text-[0.82rem] leading-[1.42] text-[var(--muted)]'>{fact}</p>
              </details>
            ))}
          </div>
          <p className={miniTop}>OperonCRM Scoreboard</p>
          <CompactMetricGrid metrics={metrics} />
        </article>
        <div className='mt-0 grid grid-cols-1 gap-[0.75rem] max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1'>
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
