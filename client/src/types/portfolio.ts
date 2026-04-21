export type Metric = Readonly<{
  value: string;
  label: string;
  note?: string;
}>;

export type EvidenceShot = Readonly<{
  title: string;
  caption: string;
  image: string;
  link?: string;
}>;

export type ProjectHighlight = Readonly<{
  name: string;
  summary: string;
  meta: string;
  link: string;
  linkLabel?: string;
}>;

export type FocusTrack = Readonly<{
  index: string;
  title: string;
  tag: string;
  summary: string;
  meta: string;
  href: string;
  completion: number;
}>;

export type ArchitectureNode = Readonly<{
  layer: string;
  details: string;
}>;

export type WorkExperience = Readonly<{
  period: string;
  role: string;
  company: string;
  summary: string;
}>;

export type AcademicResearchAchievement = Readonly<{
  kind: 'research';
  title: string;
  detail: string;
  date: string;
  badge: string;
  status?: string;
  facts?: readonly string[];
  link?: string;
  linkLabel?: string;
}>;

export type AcademicCertificateAchievement = Readonly<{
  kind: 'certificate';
  title: string;
  detail: string;
  date: string;
  image: string;
  link?: string;
  linkLabel?: string;
}>;

export type AcademicAchievement = AcademicResearchAchievement | AcademicCertificateAchievement;

export type GalleryShot = Readonly<{
  title: string;
  caption: string;
  image: string;
}>;

export const isAcademicCertificate = (achievement: AcademicAchievement): achievement is AcademicCertificateAchievement =>
  achievement.kind === 'certificate';
