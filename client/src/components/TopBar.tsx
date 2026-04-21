import type { CSSProperties } from 'react';

type TopBarProps = {
  style: CSSProperties;
};

export function TopBar({ style }: TopBarProps) {
  return (
    <header className='topbar reveal' style={style}>
      <a className='brand' href='#'>
        <span className='brand-dot' />
        samanwirst
      </a>
      <nav className='topnav' aria-label='Main navigation'>
        <a href='#shoks'>ShoksSAT</a>
        <a href='#operon'>Operon</a>
        <a href='#others'>Others</a>
        <a href='#academic'>Academic</a>
        <a href='#contact'>Contact</a>
      </nav>
    </header>
  );
}
