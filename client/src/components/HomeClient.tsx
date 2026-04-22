'use client';

import { useCallback, useEffect, useMemo, useState, type CSSProperties } from 'react';
import { buildGalleryIndexByKey, buildGalleryShots, galleryKey } from '@/lib/gallery';
import { type Locale, persistLocaleCookie, portfolioByLocale, siteDictionary } from '@/i18n/siteI18n';
import { AcademicSection } from '@/components/AcademicSection';
import { ContactSection } from '@/components/ContactSection';
import { HeroSection } from '@/components/HeroSection';
import { Lightbox } from '@/components/Lightbox';
import { NavigatorSection } from '@/components/NavigatorSection';
import { OperonSection } from '@/components/OperonSection';
import { OthersSection } from '@/components/OthersSection';
import { ShoksSection } from '@/components/ShoksSection';
import { TopBar } from '@/components/TopBar';

const reveal = (delay: number): CSSProperties =>
  ({
    '--delay': `${delay}ms`,
  }) as CSSProperties;

type HomeClientProps = {
  initialLocale: Locale;
};

export default function HomeClient({ initialLocale }: HomeClientProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const content = portfolioByLocale[locale];
  const texts = siteDictionary[locale];

  const galleryShots = useMemo(
    () =>
      buildGalleryShots({
        shoksShots: content.shoksShots,
        runtimeShots: content.runtimeShots,
        journalShots: content.journalShots,
        academicAchievements: content.academicAchievements,
      }),
    [content.academicAchievements, content.journalShots, content.runtimeShots, content.shoksShots]
  );

  const galleryIndexByKey = useMemo(() => buildGalleryIndexByKey(galleryShots), [galleryShots]);
  const [activeShotIndex, setActiveShotIndex] = useState<number | null>(null);
  const activeShot = activeShotIndex !== null ? galleryShots[activeShotIndex] : null;
  const galleryCount = galleryShots.length;

  const openLightbox = useCallback(
    (image: string, title: string) => {
      const shotIndex = galleryIndexByKey.get(galleryKey(image, title));
      if (shotIndex !== undefined) {
        setActiveShotIndex(shotIndex);
      }
    },
    [galleryIndexByKey]
  );

  const onLocaleChange = useCallback((nextLocale: Locale) => {
    setLocale(nextLocale);
    setActiveShotIndex(null);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    persistLocaleCookie(locale);
  }, [locale]);

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

  useEffect(() => {
    const revealBlocks = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (revealBlocks.length === 0) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealBlocks.forEach((block) => {
        block.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          const target = entry.target as HTMLElement;
          target.classList.add('is-visible');
          currentObserver.unobserve(target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    revealBlocks.forEach((block) => {
      observer.observe(block);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className='yc-page'>
      <div className='relative z-[1] mx-auto grid max-w-[76rem] gap-[1.1rem]'>
        <TopBar style={reveal(0)} locale={locale} texts={texts.topBar} onLocaleChange={onLocaleChange} />
        <HeroSection style={reveal(0)} texts={texts.hero} />
        <NavigatorSection style={reveal(0)} tracks={content.focusTracks} texts={texts.navigator} />
        <ShoksSection
          style={reveal(0)}
          facts={content.shoksFacts}
          metrics={content.shoksMetrics}
          shots={content.shoksShots}
          texts={texts.shoks}
          shotCardTexts={texts.shotCard}
          onOpen={openLightbox}
        />
        <OperonSection
          style={reveal(0)}
          architecture={content.operonArchitecture}
          runtimeChecks={content.runtimeChecks}
          metrics={content.operonMetrics}
          shots={content.runtimeShots}
          texts={texts.operon}
          shotCardTexts={texts.shotCard}
          onOpen={openLightbox}
        />
        <OthersSection
          style={reveal(0)}
          workExperience={content.workExperience}
          projectHighlights={content.projectHighlights}
          journalShots={content.journalShots}
          texts={texts.others}
          shotCardTexts={texts.shotCard}
          onOpen={openLightbox}
        />
        <AcademicSection
          style={reveal(0)}
          achievements={content.academicAchievements}
          texts={texts.academic}
          onOpen={openLightbox}
        />
        <ContactSection style={reveal(0)} texts={texts.contact} />
      </div>

      {activeShot && activeShotIndex !== null ? (
        <Lightbox
          activeShot={activeShot}
          activeShotIndex={activeShotIndex}
          galleryCount={galleryCount}
          texts={texts.lightbox}
          onClose={closeLightbox}
          onPrevious={showPreviousShot}
          onNext={showNextShot}
        />
      ) : null}
    </main>
  );
}
