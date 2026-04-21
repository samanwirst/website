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
    <article className='group grid overflow-hidden rounded-[var(--radius-md)] border border-[color:var(--line)] bg-[#31251b] transition-[transform,border-color,box-shadow] duration-[220ms] ease-out hover:-translate-y-[2px] hover:border-[color:var(--line-strong)] hover:shadow-[0_10px_24px_rgba(6,10,8,0.44)]'>
      <div className='relative w-full aspect-[16/10] border-b border-[color:var(--line)] bg-[#3a2c21]'>
        <button
          type='button'
          className='relative block h-full w-full cursor-zoom-in bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--focus)]'
          onClick={() => onOpen(shot.image, shot.title)}
          aria-label={`Open image: ${shot.title}`}
        >
          <Image
            className='h-full w-full object-cover transition-transform duration-[240ms] ease-out group-hover:scale-[1.02]'
            src={shot.image}
            alt={shot.title}
            fill
            unoptimized
            sizes={imageSizes}
          />
          <span className='pointer-events-none absolute right-[0.62rem] top-[0.62rem] translate-y-[-2px] rounded-full border border-[rgba(197,178,138,0.45)] bg-[rgba(12,17,13,0.78)] px-[0.55rem] py-[0.22rem] font-mono text-[0.72rem] tracking-[0.04em] text-[#e8dcc1] opacity-0 transition-[opacity,transform] duration-[190ms] ease-out group-hover:translate-y-0 group-hover:opacity-100'>
            View
          </span>
        </button>
      </div>
      <div className='grid gap-[0.5rem] p-[0.82rem]'>
        <h3 className='m-0 text-[1rem] leading-[1.28] transition-[transform,color] duration-[220ms] ease-out group-hover:translate-x-[2px] group-hover:text-[#efe2c7]'>
          {shot.title}
        </h3>
        <p className='m-0 text-[0.9rem] leading-[1.45] text-[var(--muted)]'>{shot.caption}</p>
        {shot.link ? (
          <a className='text-[0.84rem] text-[var(--brand)] hover:underline' href={shot.link} target='_blank' rel='noreferrer'>
            {linkLabel ?? 'Open source'}
          </a>
        ) : fallbackTag ? (
          <span className='text-[0.8rem] lowercase text-[#b89a74]'>{fallbackTag}</span>
        ) : null}
      </div>
    </article>
  );
}
