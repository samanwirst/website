import type { CSSProperties } from 'react';
import Image from 'next/image';
import { isAcademicCertificate, type AcademicAchievement } from '@/types/portfolio';
import { eyebrow, miniTop, sectionHead, sectionShell, sectionSummary, sectionTitle } from './uiClasses';

type AcademicSectionProps = {
  style: CSSProperties;
  achievements: readonly AcademicAchievement[];
  onOpen: (image: string, title: string) => void;
};

export function AcademicSection({ style, achievements, onOpen }: AcademicSectionProps) {
  return (
    <section id='academic' className={sectionShell} style={style}>
      <div className={sectionHead}>
        <p className={eyebrow}>SECTION 04 · ACADEMICS</p>
        <h2 className={sectionTitle}>Academic Achievements</h2>
      </div>
      <p className={sectionSummary}>
        Scientific track (AlphaMorphism + Theory of Digital Cemetery) and verified academic certificates.
      </p>
      <div className='mt-4 grid grid-cols-2 items-start gap-[0.75rem] max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1'>
        {achievements.map((achievement) => {
          const certificateAchievement = isAcademicCertificate(achievement);

          return (
            <article
              key={achievement.title}
              className='group grid self-start overflow-hidden rounded-[var(--radius-md)] border border-[color:var(--line)] bg-[radial-gradient(circle_at_12%_6%,rgba(142,122,84,0.2),transparent_52%),linear-gradient(180deg,#3a2d22,#2c2219)] transition-[transform,border-color,box-shadow] duration-[220ms] ease-out hover:-translate-y-[2px] hover:border-[color:var(--line-strong)] hover:shadow-[0_12px_28px_rgba(6,10,8,0.46)]'
            >
              <div
                className={
                  certificateAchievement
                    ? 'relative w-full aspect-[4/3] border-b border-[color:var(--line)] bg-[linear-gradient(180deg,#2a2018,#221910)]'
                    : 'flex items-center justify-start border-b-0 bg-[radial-gradient(circle_at_12%_12%,rgba(186,164,120,0.22),transparent_56%),linear-gradient(180deg,#2a2018,#221910)] px-[0.8rem] pt-[0.8rem]'
                }
              >
                {certificateAchievement ? (
                  <button
                    type='button'
                    className='relative h-full w-full cursor-zoom-in bg-transparent'
                    onClick={() => onOpen(achievement.image, achievement.title)}
                    aria-label={`Open image: ${achievement.title}`}
                  >
                    <Image
                      className='h-full w-full object-contain p-[0.5rem]'
                      src={achievement.image}
                      alt={achievement.title}
                      fill
                      unoptimized
                      sizes='(max-width: 1000px) 100vw, 48vw'
                    />
                    <span className='pointer-events-none absolute right-[0.62rem] top-[0.62rem] translate-y-[-2px] rounded-full border border-[rgba(197,178,138,0.45)] bg-[rgba(12,17,13,0.78)] px-[0.55rem] py-[0.22rem] font-mono text-[0.72rem] tracking-[0.04em] text-[#e8dcc1] opacity-0 transition-[opacity,transform] duration-[190ms] ease-out group-hover:translate-y-0 group-hover:opacity-100'>
                      View
                    </span>
                  </button>
                ) : (
                  <div className='inline-flex items-center gap-[0.35rem] rounded-full border border-[rgba(193,170,126,0.45)] bg-[#3a2c21] px-[0.68rem] py-[0.38rem] font-mono text-[0.74rem] tracking-[0.06em] text-[#e7dbc0]'>
                    {achievement.badge}
                  </div>
                )}
              </div>
              <div className='grid gap-[0.52rem] p-[0.9rem]'>
                <p className={miniTop}>{achievement.date}</p>
                <h3 className='m-0 text-[1rem] leading-[1.3]'>{achievement.title}</h3>
                <p className='m-0 text-[0.9rem] leading-[1.46] text-[var(--muted)]'>{achievement.detail}</p>
                {!certificateAchievement && achievement.status ? (
                  <p className='mt-[0.1rem] text-[0.84rem] leading-[1.45] text-[#d0b896]'>{achievement.status}</p>
                ) : null}
                {!certificateAchievement && achievement.facts?.length ? (
                  <ul className='m-[0.08rem_0_0] grid list-none gap-[0.4rem] p-0'>
                    {achievement.facts.map((fact) => (
                      <li
                        key={fact}
                        className='relative pl-[0.95rem] text-[0.86rem] leading-[1.45] text-[var(--muted)] before:absolute before:left-0 before:top-[0.46rem] before:h-[0.4rem] before:w-[0.4rem] before:rounded-full before:bg-[rgba(186,161,109,0.92)]'
                      >
                        {fact}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {achievement.link && achievement.linkLabel ? (
                  <a
                    className='text-[0.84rem] text-[var(--brand)] hover:underline'
                    href={achievement.link}
                    target='_blank'
                    rel='noreferrer'
                  >
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
