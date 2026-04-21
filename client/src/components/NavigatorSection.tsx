import type { CSSProperties } from 'react';
import type { FocusTrack } from '@/types/portfolio';

type NavigatorSectionProps = {
  style: CSSProperties;
  tracks: readonly FocusTrack[];
};

export function NavigatorSection({ style, tracks }: NavigatorSectionProps) {
  return (
    <section className='navigator reveal' style={style}>
      <div className='section-head'>
        <p className='eyebrow'>INTERACTIVE NAVIGATOR</p>
        <h2>Key Portfolio Sections</h2>
      </div>
      <div className='navigator-grid'>
        {tracks.map((track) => (
          <a key={track.title} href={track.href} className='navigator-card'>
            <div className='navigator-row'>
              <span className='navigator-index'>Section {track.index}</span>
              <span className='navigator-tag'>{track.tag}</span>
            </div>
            <h3>{track.title}</h3>
            <p>{track.summary}</p>
            <div className='navigator-row'>
              <span className='navigator-meta'>{track.meta}</span>
              <span className='navigator-percent'>{track.completion}%</span>
            </div>
            <div className='navigator-progress' aria-hidden='true'>
              <span style={{ width: `${track.completion}%` }} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
