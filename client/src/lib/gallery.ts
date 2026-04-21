import type { AcademicAchievement, EvidenceShot, GalleryShot } from '@/types/portfolio';
import { isAcademicCertificate } from '@/types/portfolio';

export const galleryKey = (image: string, title: string): string => `${image}::${title}`;

export const buildGalleryShots = ({
  shoksShots,
  runtimeShots,
  journalShots,
  academicAchievements,
}: {
  shoksShots: readonly EvidenceShot[];
  runtimeShots: readonly EvidenceShot[];
  journalShots: readonly EvidenceShot[];
  academicAchievements: readonly AcademicAchievement[];
}): readonly GalleryShot[] => [
  ...shoksShots.map(({ title, caption, image }) => ({ title, caption, image })),
  ...runtimeShots.map(({ title, caption, image }) => ({ title, caption, image })),
  ...journalShots.map(({ title, caption, image }) => ({ title, caption, image })),
  ...academicAchievements.filter(isAcademicCertificate).map(({ title, detail, image }) => ({
    title,
    caption: detail,
    image,
  })),
];

export const buildGalleryIndexByKey = (shots: readonly GalleryShot[]): ReadonlyMap<string, number> =>
  new Map(shots.map((shot, index) => [galleryKey(shot.image, shot.title), index]));
