import type { CSSProperties } from 'react';
import type { ShoksTexts, ShotCardTexts } from '@/i18n/siteI18n';
import type { EvidenceShot, Metric } from '@/types/portfolio';
import { CompactMetricGrid } from './CompactMetricGrid';
import { ShotCard } from './ShotCard';
import { eyebrow, miniTop, panelCard, sectionHead, sectionShell, sectionSummary, sectionTitle } from './uiClasses';

type ShoksSectionProps = {
  style: CSSProperties;
  facts: readonly string[];
  metrics: readonly Metric[];
  shots: readonly EvidenceShot[];
  texts: ShoksTexts;
  shotCardTexts: ShotCardTexts;
  onOpen: (image: string, title: string) => void;
};

export function ShoksSection({ style, facts, metrics, shots, texts, shotCardTexts, onOpen }: ShoksSectionProps) {
  return (
    <section id='shoks' className={sectionShell} style={style}>
      <div className={sectionHead}>
        <p className={eyebrow}>{texts.eyebrow}</p>
        <h2 className={sectionTitle}>{texts.title}</h2>
      </div>
      <div className='mt-[1.15rem] grid grid-cols-[1.1fr_0.9fr] gap-[0.85rem] max-[960px]:grid-cols-1 max-[700px]:gap-[0.7rem]'>
        <article className={`group ${panelCard} bg-[var(--surface-strong)]`}>
          <p className={miniTop}>{texts.roleScopeTitle}</p>
          <p className={sectionSummary}>{texts.roleScopeSummary}</p>
          <ul className='mt-[0.65rem] grid list-none gap-[0.45rem] p-0'>
            {facts.map((fact) => (
              <li
                key={fact}
                className='relative pl-4 text-[0.92rem] leading-[1.5] text-[var(--section-muted,var(--muted))] transition-colors duration-[120ms] linear group-hover:text-[#6f563c] before:absolute before:left-0 before:top-[0.48rem] before:h-[0.42rem] before:w-[0.42rem] before:rounded-none before:bg-[var(--brand)]'
              >
                {fact}
              </li>
            ))}
          </ul>
          <p className={miniTop}>{texts.scoreboardTitle}</p>
          <CompactMetricGrid metrics={metrics} />
        </article>
        <div className='mt-0 grid grid-cols-1 gap-[0.75rem] max-[960px]:grid-cols-2 max-[560px]:grid-cols-1'>
          {shots.map((shot) => (
            <ShotCard
              key={shot.title}
              shot={shot}
              imageSizes='(max-width: 560px) 100vw, (max-width: 960px) 50vw, 42vw'
              linkLabel={texts.shotLinkLabel}
              viewLabel={shotCardTexts.viewLabel}
              openImagePrefix={shotCardTexts.openImagePrefix}
              defaultSourceLabel={shotCardTexts.openSourceLabel}
              onOpen={onOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
