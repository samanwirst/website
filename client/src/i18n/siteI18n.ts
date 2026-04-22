import { portfolioDataEn } from '@/data/portfolio';
import { portfolioDataRu } from '@/data/portfolio.ru';

export const locales = ['en', 'ru'] as const;
export type Locale = (typeof locales)[number];
export const DEFAULT_LOCALE: Locale = 'en';
export const LANG_COOKIE_NAME = 'lang';

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value);
}

export function persistLocaleCookie(locale: Locale) {
  if (typeof document === 'undefined') {
    return;
  }

  document.cookie = `${LANG_COOKIE_NAME}=${encodeURIComponent(locale)}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

export function resolveLocaleFromAcceptLanguage(acceptLanguageHeader: string | null | undefined): Locale {
  if (!acceptLanguageHeader) {
    return DEFAULT_LOCALE;
  }

  const ranked = acceptLanguageHeader
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry, index) => {
      const [tagPart, ...params] = entry.split(';').map((part) => part.trim());
      const tag = tagPart.toLowerCase();
      const qPart = params.find((part) => part.startsWith('q='));
      const q = qPart ? Number(qPart.slice(2)) : 1;
      return {
        tag,
        q: Number.isFinite(q) ? q : 0,
        index,
      };
    })
    .sort((a, b) => {
      if (a.q !== b.q) {
        return b.q - a.q;
      }
      return a.index - b.index;
    });

  for (const item of ranked) {
    if (item.tag === 'ru' || item.tag.startsWith('ru-')) {
      return 'ru';
    }
    if (item.tag === 'en' || item.tag.startsWith('en-')) {
      return 'en';
    }
  }

  return DEFAULT_LOCALE;
}

export function resolveLocale(rawLocale: unknown, acceptLanguageHeader: string | null | undefined): Locale {
  if (isLocale(rawLocale)) {
    return rawLocale;
  }

  return resolveLocaleFromAcceptLanguage(acceptLanguageHeader);
}

export type TopBarTexts = {
  navAria: string;
  shoks: string;
  operon: string;
  others: string;
  academic: string;
  contact: string;
  localeSwitchAria: string;
  localeRu: string;
  localeEn: string;
};

export type HeroTexts = {
  eyebrow: string;
  title: string;
  summary: string;
  caseButton: string;
  githubLabel: string;
  linkedinLabel: string;
  telegramLabel: string;
  snapshotTitle: string;
  roleLabel: string;
  roleValue: string;
  primaryProductLabel: string;
  primaryProductValue: string;
  architectureCaseLabel: string;
  architectureCaseValue: string;
  workingFormat: string;
};

export type NavigatorTexts = {
  eyebrow: string;
  title: string;
  sectionLabel: string;
};

export type ShoksTexts = {
  eyebrow: string;
  title: string;
  roleScopeTitle: string;
  roleScopeSummary: string;
  scoreboardTitle: string;
  shotLinkLabel: string;
};

export type OperonTexts = {
  eyebrow: string;
  title: string;
  architectureTitle: string;
  runtimeChecksTitle: string;
  runtimeCheckPrefix: string;
  scoreboardTitle: string;
  shotLinkLabel: string;
  fallbackTag: string;
};

export type OthersTexts = {
  eyebrow: string;
  title: string;
  summary: string;
  timelineTitle: string;
  defaultRepoLinkLabel: string;
  journalTitle: string;
  shotLinkLabel: string;
};

export type AcademicTexts = {
  eyebrow: string;
  title: string;
  summary: string;
  viewLabel: string;
  openImagePrefix: string;
};

export type ContactTexts = {
  eyebrow: string;
  titlePrefix: string;
  titleAccent: string;
  summary: string;
  githubLabel: string;
  linkedinLabel: string;
  telegramLabel: string;
};

export type MetaTexts = {
  title: string;
  description: string;
};

export type LightboxTexts = {
  close: string;
  closeAria: string;
  previousAria: string;
  nextAria: string;
  hint: string;
};

export type ShotCardTexts = {
  viewLabel: string;
  openImagePrefix: string;
  openSourceLabel: string;
};

export type SiteTexts = {
  meta: MetaTexts;
  topBar: TopBarTexts;
  hero: HeroTexts;
  navigator: NavigatorTexts;
  shoks: ShoksTexts;
  operon: OperonTexts;
  others: OthersTexts;
  academic: AcademicTexts;
  contact: ContactTexts;
  lightbox: LightboxTexts;
  shotCard: ShotCardTexts;
};

export const siteDictionary: Record<Locale, SiteTexts> = {
  en: {
    meta: {
      title: 'samanwirst — Product Portfolio',
      description:
        'Portfolio of samanwirst with verified engineering evidence: architecture, runtime captures, GitHub and Telegram artifacts.',
    },
    topBar: {
      navAria: 'Main navigation',
      shoks: 'ShoksSAT',
      operon: 'Operon',
      others: 'Others',
      academic: 'Academic',
      contact: 'Contact',
      localeSwitchAria: 'Switch language',
      localeRu: 'RU',
      localeEn: 'EN',
    },
    hero: {
      eyebrow: 'PRODUCT PORTFOLIO · INTERACTIVE CASEBOOK',
      title:
        'I build high-impact products that ship fast, run on robust architecture, and prove their value through measurable outcomes.',
      summary: 'Primary case: ShoksSAT (CTO), followed by an OperonCRM architecture deep dive and additional engineering projects.',
      caseButton: 'ShoksSAT Case',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      telegramLabel: 'Telegram',
      snapshotTitle: 'Portfolio Snapshot · April 20, 2026',
      roleLabel: 'Role',
      roleValue: 'CTO @ ShoksSAT',
      primaryProductLabel: 'Primary Product',
      primaryProductValue: 'ShoksSAT',
      architectureCaseLabel: 'Architecture Case',
      architectureCaseValue: 'OperonCRM',
      workingFormat:
        'Below is a working-format portfolio only: key sections, factual metrics, interactive technical blocks, and supporting evidence.',
    },
    navigator: {
      eyebrow: 'INTERACTIVE NAVIGATOR',
      title: 'Key Portfolio Sections',
      sectionLabel: 'Section',
    },
    shoks: {
      eyebrow: 'SECTION 01 · SHOKSSAT',
      title: 'ShoksSAT — Primary Product Case (CTO)',
      roleScopeTitle: 'Role + Scope',
      roleScopeSummary: 'Production-first focus: SAT prep platform architecture, fast feature delivery, and growth-loop support.',
      scoreboardTitle: 'ShoksSAT Scoreboard',
      shotLinkLabel: 'Open Telegram',
    },
    operon: {
      eyebrow: 'SECTION 02 · OPERONCRM',
      title: 'OperonCRM — Architecture and API Contract Discipline',
      architectureTitle: 'Architecture (interactive)',
      runtimeChecksTitle: 'Runtime checks (interactive)',
      runtimeCheckPrefix: 'Check',
      scoreboardTitle: 'OperonCRM Scoreboard',
      shotLinkLabel: 'Open source endpoint',
      fallbackTag: 'local runtime capture',
    },
    others: {
      eyebrow: 'SECTION 03 · OTHERS',
      title: 'Additional Projects and Engineering Journal',
      summary: 'This section covers commercial delivery, open-source work, and engineering artifacts from active projects.',
      timelineTitle: 'Commercial Experience Timeline',
      defaultRepoLinkLabel: 'Open repository',
      journalTitle: 'Engineering Journal (Telegram)',
      shotLinkLabel: 'Open Telegram post',
    },
    academic: {
      eyebrow: 'SECTION 04 · ACADEMICS',
      title: 'Academic Achievements',
      summary: 'Scientific track (AlphaMorphism + Theory of Digital Cemetery) and verified academic certificates.',
      viewLabel: 'View',
      openImagePrefix: 'Open image',
    },
    contact: {
      eyebrow: 'WORKING FORMAT',
      titlePrefix: 'Professional profile:',
      titleAccent: 'ownership, delivery speed, and architectural precision.',
      summary: 'Page structure follows execution priority: ShoksSAT -> OperonCRM -> additional cases -> academic achievements.',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      telegramLabel: 'Telegram',
    },
    lightbox: {
      close: 'Close',
      closeAria: 'Close image preview',
      previousAria: 'Show previous image',
      nextAria: 'Show next image',
      hint: 'Esc to close · Use ←/→ to navigate',
    },
    shotCard: {
      viewLabel: 'View',
      openImagePrefix: 'Open image',
      openSourceLabel: 'Open source',
    },
  },
  ru: {
    meta: {
      title: 'samanwirst — Портфолио продуктов',
      description:
        'Портфолио samanwirst с подтвержденными инженерными материалами: архитектура, runtime-скрины, артефакты GitHub и Telegram.',
    },
    topBar: {
      navAria: 'Основная навигация',
      shoks: 'ShoksSAT',
      operon: 'Operon',
      others: 'Проекты',
      academic: 'Академия',
      contact: 'Контакты',
      localeSwitchAria: 'Сменить язык',
      localeRu: 'RU',
      localeEn: 'EN',
    },
    hero: {
      eyebrow: 'ПОРТФОЛИО ПРОДУКТОВ · ИНТЕРАКТИВНЫЙ КЕЙСБУК',
      title:
        'Я создаю продукты с высоким импактом: быстро довожу их до релиза, строю устойчивую архитектуру и подтверждаю ценность измеримыми результатами.',
      summary: 'Ключевой кейс: ShoksSAT (CTO), затем архитектурный разбор OperonCRM и дополнительные инженерные проекты.',
      caseButton: 'Кейс ShoksSAT',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      telegramLabel: 'Telegram',
      snapshotTitle: 'Срез портфолио · 20 апреля 2026',
      roleLabel: 'Роль',
      roleValue: 'CTO @ ShoksSAT',
      primaryProductLabel: 'Основной продукт',
      primaryProductValue: 'ShoksSAT',
      architectureCaseLabel: 'Архитектурный кейс',
      architectureCaseValue: 'OperonCRM',
      workingFormat:
        'Ниже рабочий формат портфолио: ключевые разделы, фактические метрики, интерактивные технические блоки и подтверждающие материалы.',
    },
    navigator: {
      eyebrow: 'ИНТЕРАКТИВНЫЙ НАВИГАТОР',
      title: 'Ключевые разделы портфолио',
      sectionLabel: 'Раздел',
    },
    shoks: {
      eyebrow: 'РАЗДЕЛ 01 · SHOKSSAT',
      title: 'ShoksSAT — ключевой продуктовый кейс (CTO)',
      roleScopeTitle: 'Роль и зона ответственности',
      roleScopeSummary: 'Фокус на продакшене: архитектура платформы подготовки к SAT, быстрая поставка фич и поддержка growth-цикла.',
      scoreboardTitle: 'Метрики ShoksSAT',
      shotLinkLabel: 'Открыть Telegram',
    },
    operon: {
      eyebrow: 'РАЗДЕЛ 02 · OPERONCRM',
      title: 'OperonCRM — архитектура и дисциплина API-контракта',
      architectureTitle: 'Архитектура (интерактивно)',
      runtimeChecksTitle: 'Runtime-проверки (интерактивно)',
      runtimeCheckPrefix: 'Проверка',
      scoreboardTitle: 'Метрики OperonCRM',
      shotLinkLabel: 'Открыть endpoint',
      fallbackTag: 'локальный runtime-скрин',
    },
    others: {
      eyebrow: 'РАЗДЕЛ 03 · ПРОЕКТЫ',
      title: 'Дополнительные проекты и инженерный журнал',
      summary: 'Раздел о коммерческой разработке, open-source работе и инженерных артефактах из активных проектов.',
      timelineTitle: 'Таймлайн коммерческого опыта',
      defaultRepoLinkLabel: 'Открыть репозиторий',
      journalTitle: 'Инженерный журнал (Telegram)',
      shotLinkLabel: 'Открыть пост в Telegram',
    },
    academic: {
      eyebrow: 'РАЗДЕЛ 04 · АКАДЕМИЯ',
      title: 'Академические достижения',
      summary: 'Научный трек (AlphaMorphism + Theory of Digital Cemetery) и подтвержденные академические сертификаты.',
      viewLabel: 'Смотреть',
      openImagePrefix: 'Открыть изображение',
    },
    contact: {
      eyebrow: 'РАБОЧИЙ ФОРМАТ',
      titlePrefix: 'Профессиональный профиль:',
      titleAccent: 'ответственность, скорость поставки и архитектурная точность.',
      summary: 'Структура страницы следует приоритету исполнения: ShoksSAT -> OperonCRM -> дополнительные кейсы -> академические достижения.',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      telegramLabel: 'Telegram',
    },
    lightbox: {
      close: 'Закрыть',
      closeAria: 'Закрыть просмотр изображения',
      previousAria: 'Показать предыдущее изображение',
      nextAria: 'Показать следующее изображение',
      hint: 'Esc для закрытия · Используйте ←/→ для навигации',
    },
    shotCard: {
      viewLabel: 'Смотреть',
      openImagePrefix: 'Открыть изображение',
      openSourceLabel: 'Открыть источник',
    },
  },
};

export const portfolioByLocale = {
  en: portfolioDataEn,
  ru: portfolioDataRu,
} as const;

export type PortfolioLocaleData = (typeof portfolioByLocale)[Locale];
