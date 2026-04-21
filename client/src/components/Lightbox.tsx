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
    <div
      className='fixed inset-0 z-[120] grid place-items-center bg-[rgba(12,8,7,0.9)] p-[clamp(0.75rem,1.8vw,1.35rem)] animate-[lightbox-fade_120ms_linear] hover:cursor-pointer'
      role='dialog'
      aria-modal='true'
      aria-labelledby='lightbox-title'
      onClick={onClose}
    >
      <div
        className='grid max-h-full w-[min(72rem,100%)] gap-[0.8rem] overflow-y-auto rounded-[var(--radius-lg)] border-2 border-[color:var(--line-strong)] bg-[rgba(24,17,13,0.98)] p-[0.9rem] max-[700px]:max-h-[96dvh] max-[700px]:rounded-[var(--radius-md)] max-[700px]:p-[0.75rem]'
        onClick={(event) => event.stopPropagation()}
      >
        <div className='flex items-start justify-between gap-[0.8rem] max-[700px]:flex-col'>
          <div className='grid gap-[0.28rem]'>
            <p className='m-0 font-mono text-[0.74rem] tracking-[0.06em] text-[#b9ab8d]'>
              {String(activeShotIndex + 1).padStart(2, '0')} / {String(galleryCount).padStart(2, '0')}
            </p>
            <h3 id='lightbox-title' className='m-0 text-[clamp(1.2rem,2.2vw,1.7rem)] leading-[1.1]'>
              {activeShot.title}
            </h3>
            <p className='m-0 text-[0.88rem] leading-[1.42] text-[var(--muted)]'>{activeShot.caption}</p>
          </div>
          <button
            type='button'
            className='min-h-[2.5rem] rounded-[var(--radius-md)] border-2 border-[color:var(--line)] bg-[rgba(34,26,20,0.9)] px-[0.8rem] py-[0.45rem] text-[0.84rem] font-semibold text-[#e8dcc1] transition-[border-color,background-color] duration-[120ms] linear hover:cursor-pointer hover:border-[color:var(--line-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)] max-[700px]:w-full'
            onClick={onClose}
            aria-label='Close image preview'
          >
            Close
          </button>
        </div>
        <div className='grid min-h-[min(68vh,39rem)] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-[0.65rem] rounded-[var(--radius-md)] border-2 border-[color:var(--line)] bg-[rgba(20,14,10,0.96)] p-[0.72rem] max-[700px]:min-h-0 max-[700px]:grid-cols-1 max-[700px]:gap-[0.55rem] max-[700px]:p-[0.58rem]'>
          <button
            type='button'
            className='inline-flex h-[2.7rem] w-[2.7rem] items-center justify-center rounded-[var(--radius-md)] border-2 border-[color:var(--line)] bg-[rgba(34,26,20,0.9)] text-[1.18rem] text-[#e8dcc1] transition-[border-color,background-color] duration-[120ms] linear hover:cursor-pointer hover:border-[color:var(--line-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)] max-[700px]:h-[2.35rem] max-[700px]:w-full'
            onClick={onPrevious}
            aria-label='Show previous image'
          >
            ←
          </button>
          <div className='relative h-[min(62vh,35rem)] w-full overflow-hidden rounded-[var(--radius-md)] bg-[rgba(16,11,8,0.86)] max-[700px]:h-[min(46dvh,22rem)]'>
            <Image
              className='h-full w-full object-contain'
              src={activeShot.image}
              alt={activeShot.title}
              fill
              priority
              unoptimized
              sizes='(max-width: 900px) 96vw, 78vw'
            />
          </div>
          <button
            type='button'
            className='inline-flex h-[2.7rem] w-[2.7rem] items-center justify-center rounded-[var(--radius-md)] border-2 border-[color:var(--line)] bg-[rgba(34,26,20,0.9)] text-[1.18rem] text-[#e8dcc1] transition-[border-color,background-color] duration-[120ms] linear hover:cursor-pointer hover:border-[color:var(--line-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)] max-[700px]:h-[2.35rem] max-[700px]:w-full'
            onClick={onNext}
            aria-label='Show next image'
          >
            →
          </button>
        </div>
        <p className='m-0 font-mono text-[0.78rem] tracking-[0.03em] text-[#b5a88b]'>Esc to close · Use ←/→ to navigate</p>
      </div>
    </div>
  );
}
