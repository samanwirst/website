export const sectionShell =
  'reveal rounded-[var(--radius-xl)] border-2 border-[color:var(--line)] bg-[var(--surface)] p-[clamp(1.25rem,2.3vw,2rem)] text-[var(--section-text,var(--text))] [--section-text:var(--ink)] [--section-muted:var(--ink-muted)] max-[700px]:rounded-[var(--radius-lg)]';

export const sectionHead = '';
export const eyebrow = 'm-0 text-[0.74rem] tracking-[0.13em] text-[var(--section-muted,var(--muted))]';
export const sectionTitle =
  'mt-[0.35rem] text-[clamp(1.55rem,3vw,2.5rem)] leading-[1.08] tracking-[-0.02em] [font-family:var(--font-display),Trebuchet_MS,sans-serif]';
export const sectionSummary = 'mt-[0.65rem] max-w-[66ch] leading-[1.5] text-[var(--section-muted,var(--muted))]';
export const miniTop = 'text-[0.76rem] tracking-[0.02em] text-[var(--section-text,var(--text))] font-mono';

export const btnBase =
  'inline-flex min-h-[2.8rem] items-center justify-center rounded-[var(--radius-md)] border-2 border-transparent px-[1.1rem] py-[0.6rem] text-[0.88rem] font-semibold transition-[background-color,border-color,color] duration-[120ms] linear';
export const btnPrimary = `${btnBase} bg-[var(--brand)] text-[#f8ede3] hover:bg-[#a82f2f]`;
export const btnSecondary = `${btnBase} border-[color:var(--line)] bg-[rgba(33,23,18,0.92)] text-[#f0e3d0] hover:border-[color:var(--line-strong)]`;

export const panelCard =
  'rounded-[var(--radius-md)] border-2 border-[color:var(--line)] p-4 transition-[border-color,background-color] duration-[120ms] linear hover:border-[color:var(--line-strong)]';
