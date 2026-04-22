import type { CSSProperties } from 'react';
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { btnPrimary, btnSecondary, eyebrow, sectionShell } from './uiClasses';

type ContactSectionProps = {
  style: CSSProperties;
};

export function ContactSection({ style }: ContactSectionProps) {
  return (
    <section
      id='contact'
      className={`${sectionShell} flex items-end justify-between gap-4 max-[1000px]:flex-col max-[1000px]:items-stretch max-[700px]:gap-3`}
      style={style}
    >
      <div>
        <p className={eyebrow}>WORKING FORMAT</p>
        <h2 className='m-[0.45rem_0_0] max-w-[18ch] text-[clamp(1.4rem,2.8vw,2.4rem)] font-semibold leading-[1.09] tracking-[-0.03em] [font-family:var(--font-display),Trebuchet_MS,sans-serif]'>
          Professional profile:{' '}
          <span className='text-[var(--brand)]'>ownership, delivery speed, and architectural precision.</span>
        </h2>
        <p className='m-[0.8rem_0_0] max-w-[55ch] leading-[1.52] text-[var(--section-muted,var(--muted))]'>
          Page structure follows execution priority: ShoksSAT {'->'} OperonCRM {'->'} additional cases {'->'} academic
          achievements.
        </p>
      </div>
      <div className='flex min-w-[min(100%,16rem)] flex-col gap-[0.6rem] max-[1000px]:w-full max-[1000px]:min-w-0'>
        <a className={`${btnPrimary} gap-[0.5rem]`} href='https://github.com/samanwirst' target='_blank' rel='noreferrer'>
          <FaGithub className='h-[0.98rem] w-[0.98rem] shrink-0' aria-hidden='true' />
          <span>GitHub</span>
        </a>
        <a
          className={`${btnSecondary} gap-[0.5rem]`}
          href='https://www.linkedin.com/in/samandar-mukhammadiev-0279b8274/'
          target='_blank'
          rel='noreferrer'
        >
          <FaLinkedinIn className='h-[0.98rem] w-[0.98rem] shrink-0' aria-hidden='true' />
          <span>LinkedIn</span>
        </a>
        <a className={`${btnSecondary} gap-[0.5rem]`} href='https://t.me/samanwirst' target='_blank' rel='noreferrer'>
          <FaTelegramPlane className='h-[0.98rem] w-[0.98rem] shrink-0' aria-hidden='true' />
          <span>Telegram</span>
        </a>
      </div>
    </section>
  );
}
