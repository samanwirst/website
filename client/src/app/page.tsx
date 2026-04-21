'use client';

import { useCallback, useEffect, useState, type CSSProperties } from 'react';
import {
  academicAchievements,
  coreMetrics,
  focusTracks,
  journalShots,
  operonArchitecture,
  operonMetrics,
  projectHighlights,
  runtimeChecks,
  runtimeShots,
  shoksFacts,
  shoksMetrics,
  shoksShots,
  workExperience,
} from '@/data/portfolio';
import { buildGalleryIndexByKey, buildGalleryShots, galleryKey } from '@/lib/gallery';
import { AcademicSection } from '@/components/AcademicSection';
import { ContactSection } from '@/components/ContactSection';
import { HeroSection } from '@/components/HeroSection';
import { Lightbox } from '@/components/Lightbox';
import { NavigatorSection } from '@/components/NavigatorSection';
import { OperonSection } from '@/components/OperonSection';
import { OthersSection } from '@/components/OthersSection';
import { ShoksSection } from '@/components/ShoksSection';
import { StatsSection } from '@/components/StatsSection';
import { TopBar } from '@/components/TopBar';

const galleryShots = buildGalleryShots({
  shoksShots,
  runtimeShots,
  journalShots,
  academicAchievements,
});

const galleryIndexByKey = buildGalleryIndexByKey(galleryShots);

const reveal = (delay: number): CSSProperties =>
  ({
    '--delay': `${delay}ms`,
  }) as CSSProperties;

export default function Home() {
  const [activeShotIndex, setActiveShotIndex] = useState<number | null>(null);
  const activeShot = activeShotIndex !== null ? galleryShots[activeShotIndex] : null;
  const galleryCount = galleryShots.length;

  const openLightbox = useCallback((image: string, title: string) => {
    const shotIndex = galleryIndexByKey.get(galleryKey(image, title));
    if (shotIndex !== undefined) {
      setActiveShotIndex(shotIndex);
    }
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveShotIndex(null);
  }, []);

  const showNextShot = useCallback(() => {
    setActiveShotIndex((prev) => {
      if (prev === null || galleryCount === 0) {
        return prev;
      }
      return (prev + 1) % galleryCount;
    });
  }, [galleryCount]);

  const showPreviousShot = useCallback(() => {
    setActiveShotIndex((prev) => {
      if (prev === null || galleryCount === 0) {
        return prev;
      }
      return (prev - 1 + galleryCount) % galleryCount;
    });
  }, [galleryCount]);

  useEffect(() => {
    if (activeShotIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        showNextShot();
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        showPreviousShot();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeShotIndex, closeLightbox, showNextShot, showPreviousShot]);

  return (
    <main className='yc-page'>
      <div className='yc-glow yc-glow-one' aria-hidden='true' />
      <div className='yc-glow yc-glow-two' aria-hidden='true' />
      <div className='yc-glow yc-glow-three' aria-hidden='true' />

      <div className='yc-shell'>
        <TopBar style={reveal(20)} />
        <HeroSection style={reveal(90)} />
        <StatsSection style={reveal(140)} metrics={coreMetrics} />
        <NavigatorSection style={reveal(170)} tracks={focusTracks} />
        <ShoksSection style={reveal(205)} facts={shoksFacts} metrics={shoksMetrics} shots={shoksShots} onOpen={openLightbox} />
        <OperonSection
          style={reveal(245)}
          architecture={operonArchitecture}
          runtimeChecks={runtimeChecks}
          metrics={operonMetrics}
          shots={runtimeShots}
          onOpen={openLightbox}
        />
        <OthersSection
          style={reveal(290)}
          workExperience={workExperience}
          projectHighlights={projectHighlights}
          journalShots={journalShots}
          onOpen={openLightbox}
        />
        <AcademicSection style={reveal(340)} achievements={academicAchievements} onOpen={openLightbox} />
        <ContactSection style={reveal(410)} />
      </div>

      {activeShot && activeShotIndex !== null ? (
        <Lightbox
          activeShot={activeShot}
          activeShotIndex={activeShotIndex}
          galleryCount={galleryCount}
          onClose={closeLightbox}
          onPrevious={showPreviousShot}
          onNext={showNextShot}
        />
      ) : null}
    </main>
  );
}
