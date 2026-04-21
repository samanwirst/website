import Image from 'next/image';
import type { GalleryShot } from '@/types/portfolio';

type LightboxProps = {
  activeShot: GalleryShot;
  activeShotIndex: number;
  galleryCount: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export function Lightbox({ activeShot, activeShotIndex, galleryCount, onClose, onPrevious, onNext }: LightboxProps) {
  return (
    <div className='lightbox' role='dialog' aria-modal='true' aria-labelledby='lightbox-title' onClick={onClose}>
      <div className='lightbox-shell' onClick={(event) => event.stopPropagation()}>
        <div className='lightbox-head'>
          <div className='lightbox-title-wrap'>
            <p className='lightbox-meta'>
              {String(activeShotIndex + 1).padStart(2, '0')} / {String(galleryCount).padStart(2, '0')}
            </p>
            <h3 id='lightbox-title'>{activeShot.title}</h3>
            <p>{activeShot.caption}</p>
          </div>
          <button type='button' className='lightbox-close' onClick={onClose} aria-label='Close image preview'>
            Close
          </button>
        </div>
        <div className='lightbox-stage'>
          <button type='button' className='lightbox-nav' onClick={onPrevious} aria-label='Show previous image'>
            ←
          </button>
          <div className='lightbox-frame'>
            <Image
              className='lightbox-image'
              src={activeShot.image}
              alt={activeShot.title}
              fill
              priority
              unoptimized
              sizes='(max-width: 900px) 96vw, 78vw'
            />
          </div>
          <button type='button' className='lightbox-nav' onClick={onNext} aria-label='Show next image'>
            →
          </button>
        </div>
        <p className='lightbox-hint'>Esc to close · Use ←/→ to navigate</p>
      </div>
    </div>
  );
}
