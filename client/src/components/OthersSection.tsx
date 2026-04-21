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
      <div className='mt-4 border-t border-[color:var(--line)] pt-[0.9rem]'>
        <p className={miniTop}>Commercial Experience Timeline</p>
        <div className='mt-4 grid grid-cols-2 gap-[0.75rem] max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1'>
          {workExperience.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className='group grid gap-[0.55rem] rounded-[var(--radius-md)] border border-[color:var(--line)] bg-[#32261c] p-[0.9rem] transition-[transform,border-color,box-shadow] duration-[240ms] ease-out hover:-translate-y-[3px] hover:border-[color:var(--line-strong)] hover:shadow-[0_14px_28px_rgba(6,10,8,0.4)]'
            >
              <p className={miniTop}>{item.period}</p>
              <h3 className='m-0 text-[1rem] leading-[1.25] transition-[transform,color] duration-[220ms] ease-out group-hover:translate-x-[2px] group-hover:text-[#efe2c8]'>
                {item.role}
              </h3>
              <p className='text-[0.82rem] uppercase tracking-[0.02em] text-[#ccbda0]'>{item.company}</p>
              <p className='m-0 text-[0.9rem] leading-[1.45] text-[var(--muted)]'>{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
      <div className='mt-4 grid grid-cols-2 gap-[0.75rem] max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1'>
        {projectHighlights.map((project) => (
          <article
            key={project.name}
            className='group grid gap-[0.55rem] rounded-[var(--radius-md)] border border-[color:var(--line)] bg-[#32261c] p-[0.9rem] transition-[transform,border-color,box-shadow] duration-[240ms] ease-out hover:-translate-y-[3px] hover:border-[color:var(--line-strong)] hover:shadow-[0_14px_28px_rgba(6,10,8,0.4)]'
          >
            <p className={miniTop}>{project.meta}</p>
            <h3 className='m-0 text-[1rem] leading-[1.25] transition-[transform,color] duration-[220ms] ease-out group-hover:translate-x-[2px] group-hover:text-[#efe2c8]'>
              {project.name}
            </h3>
            <p className='m-0 text-[0.9rem] leading-[1.45] text-[var(--muted)]'>{project.summary}</p>
            <a
              className='break-words text-[0.84rem] text-[var(--brand)] hover:underline'
              href={project.link}
              target='_blank'
              rel='noreferrer'
            >
              {project.linkLabel ?? 'Open repository'}
            </a>
          </article>
        ))}
      </div>
      <div className='mt-4 border-t border-[color:var(--line)] pt-[0.9rem]'>
        <p className={miniTop}>Engineering Journal (Telegram)</p>
        <div className='mt-[0.75rem] grid grid-cols-2 gap-[0.75rem] max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1'>
          {journalShots.map((shot) => (
            <ShotCard
              key={shot.title}
              shot={shot}
              imageSizes='(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw'
              linkLabel='Open Telegram post'
              onOpen={onOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
