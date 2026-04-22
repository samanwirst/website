import Image from 'next/image';
import type { EvidenceShot } from '@/types/portfolio';

export type ShotCardProps = {
  shot: EvidenceShot;
  imageSizes: string;
  linkLabel?: string;
  fallbackTag?: string;
  viewLabel: string;
  openImagePrefix: string;
  defaultSourceLabel: string;
  onOpen: (image: string, title: string) => void;
};

export function ShotCard({
  shot,
  imageSizes,
  linkLabel,
  fallbackTag,
  viewLabel,
  openImagePrefix,
  defaultSourceLabel,
  onOpen,
}: ShotCardProps) {
  return (
    <article className='group grid overflow-hidden rounded-[var(--radius-md)] border-2 border-[color:var(--line)] bg-[var(--surface-strong)] text-[var(--section-text,var(--text))] transition-[border-color,background-color] duration-[120ms] linear hover:border-[color:var(--line-strong)] hover:bg-[var(--surface)]'>
      <div className='relative w-full aspect-[16/10] border-b-2 border-[color:var(--line)] bg-[var(--surface-soft)]'>
        <button
          type='button'
          className='relative block h-full w-full cursor-zoom-in bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--focus)]'
          onClick={() => onOpen(shot.image, shot.title)}
          aria-label={`${openImagePrefix}: ${shot.title}`}
        >
          <Image className='h-full w-full object-cover' src={shot.image} alt={shot.title} fill unoptimized sizes={imageSizes} />
          <span className='pointer-events-none absolute right-[0.62rem] top-[0.62rem] translate-y-[-2px] rounded-none border-2 border-[rgba(197,178,138,0.45)] bg-[rgba(12,17,13,0.78)] px-[0.55rem] py-[0.22rem] font-mono text-[0.72rem] tracking-[0.04em] text-[#e8dcc1] opacity-0 transition-[opacity,transform] duration-[120ms] linear group-hover:translate-y-0 group-hover:opacity-100 max-[700px]:translate-y-0 max-[700px]:opacity-100'>
            {viewLabel}
          </span>
        </button>
      </div>
      <div className='grid gap-[0.5rem] p-[0.82rem] max-[480px]:p-[0.72rem]'>
        <h3 className='m-0 text-[1rem] font-semibold leading-[1.28] tracking-[-0.01em] transition-colors duration-[120ms] linear group-hover:text-[#3b2b1b] max-[480px]:text-[0.94rem]'>
          {shot.title}
        </h3>
        <p className='m-0 text-[0.9rem] leading-[1.45] text-[var(--section-muted,var(--muted))]'>{shot.caption}</p>
        {shot.link ? (
          <a
            className='text-[0.84rem] text-[var(--brand)] hover:cursor-pointer hover:underline'
            href={shot.link}
            target='_blank'
            rel='noreferrer'
          >
            {linkLabel ?? defaultSourceLabel}
          </a>
        ) : fallbackTag ? (
          <span className='text-[0.8rem] lowercase text-[#765a3f]'>{fallbackTag}</span>
        ) : null}
      </div>
    </article>
  );
}
