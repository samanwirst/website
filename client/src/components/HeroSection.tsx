import type { CSSProperties } from 'react';

type HeroSectionProps = {
  style: CSSProperties;
};

export function HeroSection({ style }: HeroSectionProps) {
  return (
    <section className='hero reveal' style={style}>
      <article className='hero-copy'>
        <p className='eyebrow'>PRODUCT PORTFOLIO · INTERACTIVE CASEBOOK</p>
        <h1>
          I build high-impact products that ship fast, run on robust architecture, and prove their value through measurable
          outcomes.
        </h1>
        <p className='hero-lead'>
          Primary case: ShoksSAT (CTO), followed by an OperonCRM architecture deep dive and additional engineering projects.
        </p>
        <div className='hero-actions'>
          <a className='btn btn-primary' href='#shoks'>
            ShoksSAT Case
          </a>
          <a className='btn btn-secondary' href='https://github.com/samanwirst' target='_blank' rel='noreferrer'>
            GitHub
          </a>
          <a
            className='btn btn-secondary'
            href='https://www.linkedin.com/in/samandar-mukhammadiev-0279b8274/'
            target='_blank'
            rel='noreferrer'
          >
            LinkedIn
          </a>
          <a className='btn btn-secondary' href='https://t.me/samanwirst_blog' target='_blank' rel='noreferrer'>
            Telegram
          </a>
        </div>
      </article>

      <aside className='hero-panel'>
        <p className='panel-title'>Portfolio Snapshot · April 20, 2026</p>
        <ul>
          <li>
            <span className='panel-key'>Role</span>
            <span className='panel-val'>CTO @ ShoksSAT</span>
          </li>
          <li>
            <span className='panel-key'>Primary Product</span>
            <span className='panel-val'>ShoksSAT</span>
          </li>
          <li>
            <span className='panel-key'>Architecture Case</span>
            <span className='panel-val'>OperonCRM</span>
          </li>
        </ul>
        <p className='panel-note'>
          Below is a working-format portfolio only: key sections, factual metrics, interactive technical blocks, and supporting
          evidence.
        </p>
      </aside>
    </section>
  );
}
