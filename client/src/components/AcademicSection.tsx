import type { CSSProperties } from 'react';
import Image from 'next/image';
import { isAcademicCertificate, type AcademicAchievement } from '@/types/portfolio';

type AcademicSectionProps = {
  style: CSSProperties;
  achievements: readonly AcademicAchievement[];
  onOpen: (image: string, title: string) => void;
};

export function AcademicSection({ style, achievements, onOpen }: AcademicSectionProps) {
  return (
    <section id='academic' className='academics reveal' style={style}>
      <div className='section-head'>
        <p className='eyebrow'>SECTION 04 · ACADEMICS</p>
        <h2>Academic Achievements</h2>
      </div>
      <p className='section-summary'>
        Scientific track (AlphaMorphism + Theory of Digital Cemetery) and verified academic certificates.
      </p>
      <div className='academic-grid'>
        {achievements.map((achievement) => {
          const certificateAchievement = isAcademicCertificate(achievement);

          return (
            <article key={achievement.title} className='academic-card'>
              <div className={certificateAchievement ? 'academic-media' : 'academic-media-fallback'}>
                {certificateAchievement ? (
                  <button
                    type='button'
                    className='academic-media-btn'
                    onClick={() => onOpen(achievement.image, achievement.title)}
                    aria-label={`Open image: ${achievement.title}`}
                  >
                    <Image
                      className='academic-image'
                      src={achievement.image}
                      alt={achievement.title}
                      fill
                      unoptimized
                      sizes='(max-width: 1000px) 100vw, 48vw'
                    />
                    <span className='academic-media-zoom'>View</span>
                  </button>
                ) : (
                  <div className='academic-pill'>{achievement.badge}</div>
                )}
              </div>
              <div className='academic-body'>
                <p className='mini-top'>{achievement.date}</p>
                <h3>{achievement.title}</h3>
                <p>{achievement.detail}</p>
                {!certificateAchievement && achievement.status ? <p className='academic-status'>{achievement.status}</p> : null}
                {!certificateAchievement && achievement.facts?.length ? (
                  <ul className='academic-facts'>
                    {achievement.facts.map((fact) => (
                      <li key={fact}>{fact}</li>
                    ))}
                  </ul>
                ) : null}
                {achievement.link && achievement.linkLabel ? (
                  <a href={achievement.link} target='_blank' rel='noreferrer'>
                    {achievement.linkLabel}
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
