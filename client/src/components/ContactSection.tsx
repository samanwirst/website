import type { CSSProperties } from 'react';

type ContactSectionProps = {
  style: CSSProperties;
};

export function ContactSection({ style }: ContactSectionProps) {
  return (
    <section id='contact' className='contact reveal' style={style}>
      <div>
        <p className='eyebrow'>WORKING FORMAT</p>
        <h2>
          Professional profile: <span>ownership, delivery speed, and architectural precision.</span>
        </h2>
        <p>
          Page structure follows execution priority: ShoksSAT {'->'} OperonCRM {'->'} additional cases {'->'} academic
          achievements.
        </p>
      </div>
      <div className='contact-actions'>
        <a className='btn btn-primary' href='https://github.com/samanwirst' target='_blank' rel='noreferrer'>
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
        <a className='btn btn-secondary' href='https://t.me/samanwirst' target='_blank' rel='noreferrer'>
          Telegram
        </a>
      </div>
    </section>
  );
}
