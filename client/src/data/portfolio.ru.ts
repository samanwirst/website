import type {
  AcademicAchievement,
  ArchitectureNode,
  EvidenceShot,
  FocusTrack,
  Metric,
  ProjectHighlight,
  WorkExperience,
} from '@/types/portfolio';

export const focusTracksRu = [
  {
    index: '01',
    title: 'ShoksSAT · Продукт CTO',
    tag: 'Основной',
    summary: 'EdTech-платформа, продакшен-поставка и ответственность за полный цикл.',
    meta: 'Ключевой кейс',
    href: '#shoks',
    completion: 100,
  },
  {
    index: '02',
    title: 'OperonCRM · Архитектура',
    tag: 'Разбор',
    summary: 'CRM с несколькими ролями, роутинг по сабдоменам и дисциплина API-контракта.',
    meta: 'Системный дизайн',
    href: '#operon',
    completion: 86,
  },
  {
    index: '03',
    title: 'Другие проекты',
    tag: 'Портфолио',
    summary: 'Коммерческая разработка, OSS-инструменты и инженерные эксперименты.',
    meta: 'Ширина поставки',
    href: '#others',
    completion: 74,
  },
  {
    index: '04',
    title: 'Академические доказательства',
    tag: 'Достижения',
    summary: 'Активные исследовательские направления и подтвержденные сертификаты.',
    meta: 'Наука + сертификаты',
    href: '#academic',
    completion: 82,
  },
] satisfies readonly FocusTrack[];

export const shoksMetricsRu = [
  {
    value: '190',
    label: 'Коммиты в shoksi-platform',
    note: '24 июн 2025 -> 04 мар 2026',
  },
  { value: '38', label: 'Страницы Next.js', note: 'client/src/app/**/page.tsx' },
  { value: '42', label: 'React-компоненты', note: 'client/src/components/*.tsx' },
  {
    value: '17',
    label: 'Ресурсы DRF',
    note: 'router.register в quickstart/logs/crm',
  },
] satisfies readonly Metric[];

export const shoksFactsRu = [
  'Роль: CTO в ShoksSAT. Веду архитектуру и доставку функционала end-to-end.',
  'Стек: Next.js + TypeScript + MUI/Chart.js на фронтенде, Django REST + PostgreSQL на бэкенде.',
  'Продуктовые области: пробные сессии, шаблоны, админ-задачи, лидерборд, family-модуль, финансы/CRM.',
  'Бэкенд-объем: 17 DRF-ресурсов и JWT auth-flow с login/refresh.',
  'Релизы и эксплуатация: docker-compose и конфигурация Traefik внутри репозитория.',
] as const;

export const shoksShotsRu = [
  {
    title: 'Дашборд ShoksSAT',
    caption: 'Продакшен-снимок: треки прогресса и динамика результатов учеников.',
    image: '/media/shoks/shoks-platform-first.png',
    link: 'https://t.me/samanwirst_blog/552',
  },
  {
    title: 'Лендинг ShoksSAT',
    caption: 'Публичный экран запуска и позиционирование ценности продукта.',
    image: '/media/shoks/landing.png',
    link: 'https://t.me/samanwirst_blog/559',
  },
] satisfies readonly EvidenceShot[];

export const operonMetricsRu = [
  { value: '71', label: 'Коммиты в OperonCRM', note: '16 янв -> 04 мар, 2026' },
  { value: '7', label: 'Ресурсы DRF router', note: 'users + 6 CRM-сущностей' },
  {
    value: '77',
    label: 'Операции OpenAPI',
    note: 'Локальная схема в /api/schema',
  },
  { value: '37', label: 'Страницы фронтенда', note: 'client/src/app/**/page.tsx' },
  { value: '47', label: 'UI-компоненты', note: 'client/src/components/*.tsx' },
  { value: '95KB', label: 'Размер схемы OpenAPI', note: '95,258 байт' },
] satisfies readonly Metric[];

export const operonArchitectureRu = [
  {
    layer: 'Пограничная маршрутизация',
    details: 'Next proxy маршрутизирует root и сабдомены в контексты admin/agent/tenant.',
  },
  {
    layer: 'Слой аутентификации',
    details: 'JWT access/refresh с кастомными claim: platform_role, is_admin, is_agent, lang.',
  },
  {
    layer: 'Доменный API',
    details: 'DRF ViewSet для users, companies, clients, transactions, products, services.',
  },
  {
    layer: 'Контракт и эксплуатация',
    details: 'drf-spectacular docs + compose/Traefik + продакшен-путь на внешнем PostgreSQL.',
  },
] satisfies readonly ArchitectureNode[];

export const runtimeChecksRu = [
  'python manage.py check -> системная проверка не выявила проблем.',
  'python manage.py migrate -> нет миграций для применения.',
  'Локальный runtime подтвержден: backend на :9999 и frontend на :3333.',
] as const;

export const runtimeShotsRu = [
  {
    title: 'OperonCRM Admin Workspace',
    caption: 'Рабочий экран после авторизации в локальном runtime: `admin.localhost:3333`.',
    image: '/media/operoncrm/transactions-page.png',
  },
  {
    title: 'Swagger /api/docs',
    caption: 'Живая API-документация с реальными CRUD endpoint.',
    image: '/media/operoncrm/api-docs.png',
    link: 'http://127.0.0.1:9999/api/docs/',
  },
  {
    title: 'ReDoc /api/redoc',
    caption: 'Альтернативное представление API-контракта со структурной навигацией.',
    image: '/media/operoncrm/redoc.png',
    link: 'http://127.0.0.1:9999/api/redoc/',
  },
] satisfies readonly EvidenceShot[];

export const journalShotsRu = [
  {
    title: 'Пост #611 · Логика поиска',
    caption: 'Инженерная заметка о реализации fuzzy-search и логике запросов.',
    image: '/media/telegram/post-611-vibecoding.jpg',
    link: 'https://t.me/samanwirst_blog/611',
  },
  {
    title: 'Пост #592 · Инфра-инцидент',
    caption: 'Реальный серверный инцидент и workflow по безопасности.',
    image: '/media/telegram/post-592-server-maintenance.jpg',
    link: 'https://t.me/samanwirst_blog/592',
  },
] satisfies readonly EvidenceShot[];

export const projectHighlightsRu = [
  {
    name: 'Payzor.co',
    summary:
      'Ключевой frontend-вклад в стартап-цикле: продуктовые фичи, интерфейсные сценарии, API-интеграции и быстрые UX-итерации.',
    meta: 'Коммерческий продукт · фев 2025 - июл 2025',
    link: 'https://www.payzor.co',
    linkLabel: 'Открыть продукт',
  },
  {
    name: 'Globstudy.org',
    summary:
      'Fullstack-поставка в среде совместного лидерства: продакшен-интерфейсы, интеграции, релизная стабильность и поддержка итераций.',
    meta: 'Коммерческий продукт · фев 2025 - июл 2025',
    link: 'https://www.globstudy.org/',
    linkLabel: 'Открыть продукт',
  },
  {
    name: 'Synphora',
    summary:
      'Open-source Telegram-приложение синхронизации музыки: onboarding в боте, PIN для room-auth и realtime sync через Socket.IO.',
    meta: '12 коммитов · обновлено 2026-04-19',
    link: 'https://github.com/samanwirst/synphora',
  },
  {
    name: 'Master Battery',
    summary:
      'Коммерческий e-commerce проект: интернет-магазин автомобильных аккумуляторов с постоянной веб-разработкой и поддержкой.',
    meta: 'Коммерческий проект · интернет-магазин аккумуляторов',
    link: 'https://master-battery.ru',
    linkLabel: 'Открыть продукт',
  },
  {
    name: 'Theory of Digital Cemetery',
    summary: 'Воспроизводимые Python-скрипты для количественной части IEEE-рукописи.',
    meta: '2 коммита · обновлено 2026-03-24',
    link: 'https://github.com/samanwirst/the_theory_of_digital_cemetery',
  },
  {
    name: 'Aerodeus',
    summary: 'MVP для логистических сценариев: монорепозиторий, продуктовая структура и базовая инфраструктура.',
    meta: '9 коммитов · обновлено 2026-03-16',
    link: 'https://github.com/samango1/aerodeus',
  },
] satisfies readonly ProjectHighlight[];

export const workExperienceRu = [
  {
    period: 'май 2025 - фев 2026',
    role: 'CTO',
    company: 'ShoksSAT',
    summary:
      'Руководил архитектурой, релиз-менеджментом, продакшен-деплоем и fullstack-доставкой для платформы подготовки к SAT.',
  },
  {
    period: 'фев 2025 - июл 2025',
    role: 'Fullstack Developer',
    company: 'Globstudy и Payzor',
    summary: 'Реализовывал web-фичи, API-интеграции и UX-улучшения при сохранении стабильного релизного цикла.',
  },
  {
    period: 'мар 2024 - ноя 2024',
    role: 'Web / Python Developer',
    company: 'EIT и GivBox',
    summary: 'Разрабатывал backend-логику, automation-flow и production-ready web-модули в параллельных проектах.',
  },
] satisfies readonly WorkExperience[];

export const academicAchievementsRu = [
  {
    kind: 'research',
    title: 'AlphaMorphism (Academic R&D): топологически управляемый AI для высшей математики',
    detail:
      'Исследовательская инициатива с высоким потенциалом, изучающая topology-informed AI для формального рассуждения и продвинутых математических вычислений.',
    date: '2026 · Активная исследовательская программа',
    badge: 'R&D В ПРОЦЕССЕ',
    status:
      'Конфиденциальная работа в процессе: текущий фокус на привлечении профессоров, исследовательских партнеров и финансирования для контролируемых экспериментов.',
    facts: [
      'Фокус исследований: топология, геометрические представления и нейро-символьное рассуждение для формальных математических workflow.',
      'Академическая ценность: повышение воспроизводимости и эффективности в theorem-oriented вычислительных исследованиях.',
      'Текущая фаза: уточнение методологии, дизайн экспериментов и настройка сотрудничества с академическими институтами.',
    ],
  },
  {
    kind: 'research',
    title: 'Theory of Digital Cemetery (IEEE Manuscript)',
    detail: 'Ключевая исследовательская линия, где IEEE-формат рукописи поддерживается как каноническая письменная версия.',
    date: 'IEEE Track · Активная рукопись',
    badge: 'IEEE DRAFT',
    status: 'Текущий научный референс по проекту — версия IEEE DOCX.',
    facts: [
      'Основной сохраненный научный проект наряду с AlphaMorphism.',
      'Позиционируется как формальный путь публикации этого направления.',
    ],
    link: '/media/academic/theory-of-the-digital-cemetery-ieee.docx',
    linkLabel: 'Открыть IEEE рукопись (DOCX)',
  },
  {
    kind: 'certificate',
    title: '3-е место на Самаркандской областной олимпиаде',
    detail: 'Подтверждено официальным сертификатом призера.',
    date: '19 июля 2025',
    image: '/media/academic/samarkand-olympiad-3rd.jpg',
  },
  {
    kind: 'certificate',
    title: 'Сертификат от хокима Самаркандской области',
    detail: 'Награда за разработку LMS с интеграцией AR + AI в образовательный процесс.',
    date: '29 июля 2025',
    image: '/media/academic/samarkand-hokim-lms-ar-ai.jpg',
  },
] satisfies readonly AcademicAchievement[];

export const portfolioDataRu = {
  focusTracks: focusTracksRu,
  shoksMetrics: shoksMetricsRu,
  shoksFacts: shoksFactsRu,
  shoksShots: shoksShotsRu,
  operonMetrics: operonMetricsRu,
  operonArchitecture: operonArchitectureRu,
  runtimeChecks: runtimeChecksRu,
  runtimeShots: runtimeShotsRu,
  journalShots: journalShotsRu,
  projectHighlights: projectHighlightsRu,
  workExperience: workExperienceRu,
  academicAchievements: academicAchievementsRu,
} as const;
