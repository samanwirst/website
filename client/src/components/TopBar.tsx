import type { CSSProperties } from 'react';

type TopBarProps = {
  style: CSSProperties;
};

export function TopBar({ style }: TopBarProps) {
  return (
    <header
      className='reveal sticky top-3 z-[18] flex items-center justify-between gap-4 rounded-[var(--radius-lg)] border-2 border-[color:var(--line)] bg-[#1a140f] px-4 py-[0.9rem] max-[700px]:flex-col max-[700px]:items-start'
      style={style}
    >
      <a
        className='inline-flex items-center gap-[0.42rem] text-[0.78rem] tracking-[0.14em] [font-family:var(--font-display),Trebuchet_MS,sans-serif]'
        href='#'
      >
        <span className='h-[0.58rem] w-[0.58rem] rounded-none bg-[var(--brand)]' />
        samanwirst
      </a>
      <nav
        className='inline-flex gap-[0.9rem] text-[0.9rem] text-[var(--muted)] max-[700px]:w-full max-[700px]:flex-wrap max-[700px]:justify-start max-[700px]:gap-x-[0.9rem] max-[700px]:gap-y-[0.45rem]'
        aria-label='Main navigation'
      >
        <a className='transition-colors duration-200 hover:text-[var(--text)]' href='#shoks'>
          ShoksSAT
        </a>
        <a className='transition-colors duration-200 hover:text-[var(--text)]' href='#operon'>
          Operon
        </a>
        <a className='transition-colors duration-200 hover:text-[var(--text)]' href='#others'>
          Others
        </a>
        <a className='transition-colors duration-200 hover:text-[var(--text)]' href='#academic'>
          Academic
        </a>
        <a className='transition-colors duration-200 hover:text-[var(--text)]' href='#contact'>
          Contact
        </a>
      </nav>
    </header>
  );
}
