import type { CSSProperties } from 'react';

type TopBarProps = {
  style: CSSProperties;
};

export function TopBar({ style }: TopBarProps) {
  return (
    <header
      className='reveal sticky top-3 z-[18] flex items-center justify-between gap-4 rounded-[var(--radius-lg)] border-2 border-[color:var(--line)] bg-[#1a140f] px-4 py-[0.9rem] max-[700px]:top-2 max-[700px]:flex-col max-[700px]:items-stretch max-[700px]:gap-3 max-[700px]:px-3 max-[700px]:py-3'
      style={style}
    >
      <a
        className='inline-flex items-center gap-[0.42rem] text-[0.78rem] font-semibold tracking-[0.14em] hover:cursor-pointer [font-family:var(--font-display),Trebuchet_MS,sans-serif]'
        href='#'
      >
        <span className='h-[0.58rem] w-[0.58rem] rounded-none bg-[var(--brand)]' />
        samanwirst
      </a>
      <nav
        className='inline-flex gap-[0.9rem] text-[0.9rem] font-medium text-[var(--muted)] max-[700px]:grid max-[700px]:w-full max-[700px]:grid-cols-2 max-[700px]:gap-[0.45rem] max-[700px]:text-[0.82rem]'
        aria-label='Main navigation'
      >
        <a
          className='transition-colors duration-200 hover:cursor-pointer hover:text-[var(--text)] max-[700px]:border-2 max-[700px]:border-[color:var(--line)] max-[700px]:px-[0.55rem] max-[700px]:py-[0.45rem] max-[700px]:text-center'
          href='#shoks'
        >
          ShoksSAT
        </a>
        <a
          className='transition-colors duration-200 hover:cursor-pointer hover:text-[var(--text)] max-[700px]:border-2 max-[700px]:border-[color:var(--line)] max-[700px]:px-[0.55rem] max-[700px]:py-[0.45rem] max-[700px]:text-center'
          href='#operon'
        >
          Operon
        </a>
        <a
          className='transition-colors duration-200 hover:cursor-pointer hover:text-[var(--text)] max-[700px]:border-2 max-[700px]:border-[color:var(--line)] max-[700px]:px-[0.55rem] max-[700px]:py-[0.45rem] max-[700px]:text-center'
          href='#others'
        >
          Others
        </a>
        <a
          className='transition-colors duration-200 hover:cursor-pointer hover:text-[var(--text)] max-[700px]:border-2 max-[700px]:border-[color:var(--line)] max-[700px]:px-[0.55rem] max-[700px]:py-[0.45rem] max-[700px]:text-center'
          href='#academic'
        >
          Academic
        </a>
        <a
          className='transition-colors duration-200 hover:cursor-pointer hover:text-[var(--text)] max-[700px]:col-span-2 max-[700px]:border-2 max-[700px]:border-[color:var(--line)] max-[700px]:px-[0.55rem] max-[700px]:py-[0.45rem] max-[700px]:text-center'
          href='#contact'
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
