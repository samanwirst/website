import Image from 'next/image';
import type { EvidenceShot } from '@/types/portfolio';

export type ShotCardProps = {
  shot: EvidenceShot;
  imageSizes: string;
  linkLabel?: string;
  fallbackTag?: string;
  onOpen: (image: string, title: string) => void;
};

export function ShotCard({ shot, imageSizes, linkLabel, fallbackTag, onOpen }: ShotCardProps) {
  return (
    <article className='shot-card'>
      <div className='shot-media'>
        <button
          type='button'
          className='shot-media-btn'
          onClick={() => onOpen(shot.image, shot.title)}
          aria-label={`Open image: ${shot.title}`}
        >
          <Image className='shot-image' src={shot.image} alt={shot.title} fill unoptimized sizes={imageSizes} />
          <span className='shot-media-zoom'>View</span>
        </button>
      </div>
      <div className='shot-body'>
        <h3>{shot.title}</h3>
        <p>{shot.caption}</p>
        {shot.link ? (
          <a href={shot.link} target='_blank' rel='noreferrer'>
            {linkLabel ?? 'Open source'}
          </a>
        ) : fallbackTag ? (
          <span className='shot-tag'>{fallbackTag}</span>
        ) : null}
      </div>
    </article>
  );
}
