import type { CSSProperties } from 'react';
import type { EvidenceShot, ProjectHighlight, WorkExperience } from '@/types/portfolio';
import { ShotCard } from './ShotCard';

type OthersSectionProps = {
  style: CSSProperties;
  workExperience: readonly WorkExperience[];
  projectHighlights: readonly ProjectHighlight[];
  journalShots: readonly EvidenceShot[];
  onOpen: (image: string, title: string) => void;
};

export function OthersSection({ style, workExperience, projectHighlights, journalShots, onOpen }: OthersSectionProps) {
  return (
    <section id='others' className='stack reveal' style={style}>
      <div className='section-head'>
        <p className='eyebrow'>SECTION 03 · OTHERS</p>
        <h2>Additional Projects and Engineering Journal</h2>
      </div>
      <p className='section-summary'>
        This section covers commercial delivery, open-source work, and engineering artifacts from active projects.
      </p>
      <div className='journal-wrap'>
        <p className='mini-top'>Commercial Experience Timeline</p>
        <div className='mini-grid'>
          {workExperience.map((item) => (
            <article key={`${item.company}-${item.period}`} className='mini-card'>
              <p className='mini-top'>{item.period}</p>
              <h3>{item.role}</h3>
              <p className='career-company'>{item.company}</p>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
      <div className='mini-grid'>
        {projectHighlights.map((project) => (
          <article key={project.name} className='mini-card'>
            <p className='mini-top'>{project.meta}</p>
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
            <a href={project.link} target='_blank' rel='noreferrer'>
              {project.linkLabel ?? 'Open repository'}
            </a>
          </article>
        ))}
      </div>
      <div className='journal-wrap'>
        <p className='mini-top'>Engineering Journal (Telegram)</p>
        <div className='shot-grid journal-grid'>
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
