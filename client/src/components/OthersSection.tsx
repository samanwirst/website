import type { CSSProperties } from 'react';
import type { EvidenceShot, ProjectHighlight, WorkExperience } from '@/types/portfolio';
import { ShotCard } from './ShotCard';
import { eyebrow, miniTop, sectionHead, sectionShell, sectionSummary, sectionTitle } from './uiClasses';

type OthersSectionProps = {
  style: CSSProperties;
  workExperience: readonly WorkExperience[];
  projectHighlights: readonly ProjectHighlight[];
  journalShots: readonly EvidenceShot[];
  onOpen: (image: string, title: string) => void;
};

export function OthersSection({ style, workExperience, projectHighlights, journalShots, onOpen }: OthersSectionProps) {
  return (
    <section id='others' className={sectionShell} style={style}>
      <div className={sectionHead}>
        <p className={eyebrow}>SECTION 03 · OTHERS</p>
        <h2 className={sectionTitle}>Additional Projects and Engineering Journal</h2>
      </div>
      <p className={sectionSummary}>
        This section covers commercial delivery, open-source work, and engineering artifacts from active projects.
      </p>
      <div className='mt-4 border-t-2 border-[color:var(--line)] pt-[0.9rem]'>
        <p className={miniTop}>Commercial Experience Timeline</p>
        <div className='mt-4 grid grid-cols-2 gap-[0.75rem] max-[860px]:grid-cols-1'>
          {workExperience.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className='group grid gap-[0.55rem] rounded-[var(--radius-md)] border-2 border-[color:var(--line)] bg-[var(--surface-strong)] p-[0.9rem] transition-[border-color,background-color] duration-[120ms] linear hover:border-[color:var(--line-strong)] hover:bg-[var(--surface)]'
            >
              <p className={miniTop}>{item.period}</p>
              <h3 className='m-0 text-[1rem] font-semibold leading-[1.25] tracking-[-0.01em] transition-colors duration-[120ms] linear group-hover:text-[#3a2a1b]'>
                {item.role}
              </h3>
              <p className='text-[0.82rem] font-medium uppercase tracking-[0.02em] text-[#775c41]'>{item.company}</p>
              <p className='m-0 text-[0.9rem] leading-[1.45] text-[var(--section-muted,var(--muted))]'>{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
      <div className='mt-4 grid grid-cols-2 gap-[0.75rem] max-[860px]:grid-cols-1'>
        {projectHighlights.map((project) => (
          <article
            key={project.name}
            className='group grid gap-[0.55rem] rounded-[var(--radius-md)] border-2 border-[color:var(--line)] bg-[var(--surface-strong)] p-[0.9rem] transition-[border-color,background-color] duration-[120ms] linear hover:border-[color:var(--line-strong)] hover:bg-[var(--surface)]'
          >
            <p className={miniTop}>{project.meta}</p>
            <h3 className='m-0 text-[1rem] font-semibold leading-[1.25] tracking-[-0.01em] transition-colors duration-[120ms] linear group-hover:text-[#3a2a1b]'>
              {project.name}
            </h3>
            <p className='m-0 text-[0.9rem] leading-[1.45] text-[var(--section-muted,var(--muted))]'>{project.summary}</p>
            <a
              className='break-words text-[0.84rem] text-[var(--brand)] hover:cursor-pointer hover:underline'
              href={project.link}
              target='_blank'
              rel='noreferrer'
            >
              {project.linkLabel ?? 'Open repository'}
            </a>
          </article>
        ))}
      </div>
      <div className='mt-4 border-t-2 border-[color:var(--line)] pt-[0.9rem]'>
        <p className={miniTop}>Engineering Journal (Telegram)</p>
        <div className='mt-[0.75rem] grid grid-cols-2 gap-[0.75rem] max-[860px]:grid-cols-1'>
          {journalShots.map((shot) => (
            <ShotCard
              key={shot.title}
              shot={shot}
              imageSizes='(max-width: 860px) 100vw, 50vw'
              linkLabel='Open Telegram post'
              onOpen={onOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
