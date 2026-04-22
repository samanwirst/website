import type {
  AcademicAchievement,
  ArchitectureNode,
  EvidenceShot,
  FocusTrack,
  Metric,
  ProjectHighlight,
  WorkExperience,
} from '@/types/portfolio';

export const focusTracks = [
  {
    index: '01',
    title: 'ShoksSAT · CTO Product',
    tag: 'Primary',
    summary: 'EdTech platform, production delivery, full-cycle ownership.',
    meta: 'Core case',
    href: '#shoks',
    completion: 100,
  },
  {
    index: '02',
    title: 'OperonCRM · Architecture',
    tag: 'Deep Dive',
    summary: 'Multi-role CRM, subdomain routing, API contract discipline.',
    meta: 'System design',
    href: '#operon',
    completion: 86,
  },
  {
    index: '03',
    title: 'Other Projects',
    tag: 'Portfolio',
    summary: 'Commercial delivery, OSS tools, and engineering experiments.',
    meta: 'Shipped breadth',
    href: '#others',
    completion: 74,
  },
  {
    index: '04',
    title: 'Academic Evidence',
    tag: 'Credentials',
    summary: 'Active research tracks and verified certificates.',
    meta: 'Research + credentials',
    href: '#academic',
    completion: 82,
  },
] satisfies readonly FocusTrack[];

export const shoksMetrics = [
  {
    value: '190',
    label: 'Commits in shoksi-platform',
    note: 'Jun 24, 2025 -> Mar 04, 2026',
  },
  { value: '38', label: 'Next.js pages', note: 'client/src/app/**/page.tsx' },
  { value: '42', label: 'React components', note: 'client/src/components/*.tsx' },
  {
    value: '17',
    label: 'DRF resources',
    note: 'router.register across quickstart/logs/crm',
  },
] satisfies readonly Metric[];

export const shoksFacts = [
  'Role: CTO at ShoksSAT. I lead architecture and end-to-end feature delivery.',
  'Stack: Next.js + TypeScript + MUI/Chart.js on frontend, Django REST + PostgreSQL on backend.',
  'Product areas: mock sessions, template builder, admin tasks, leaderboard, family, finance/CRM.',
  'Backend scope: 17 DRF resources and a JWT login/refresh flow.',
  'Release and operations: docker-compose and Traefik configuration in-repo.',
] as const;

export const shoksShots = [
  {
    title: 'ShoksSAT Dashboard',
    caption: 'Production-style snapshot: progress tracks and score trajectory for students.',
    image: '/media/shoks/shoks-platform-first.png',
    link: 'https://t.me/samanwirst_blog/552',
  },
  {
    title: 'ShoksSAT Landing',
    caption: 'Public launch screen and value proposition positioning.',
    image: '/media/shoks/landing.png',
    link: 'https://t.me/samanwirst_blog/559',
  },
] satisfies readonly EvidenceShot[];

export const operonMetrics = [
  { value: '71', label: 'Commits in OperonCRM', note: 'Jan 16 -> Mar 04, 2026' },
  { value: '7', label: 'DRF router resources', note: 'users + 6 CRM entities' },
  {
    value: '77',
    label: 'OpenAPI operationId',
    note: 'Local schema at /api/schema',
  },
  { value: '37', label: 'Frontend pages', note: 'client/src/app/**/page.tsx' },
  { value: '47', label: 'UI components', note: 'client/src/components/*.tsx' },
  { value: '95KB', label: 'OpenAPI schema size', note: '95,258 bytes' },
] satisfies readonly Metric[];

export const operonArchitecture = [
  {
    layer: 'Edge Routing',
    details: 'Next proxy routes root and subdomains into admin/agent/tenant contexts.',
  },
  {
    layer: 'Auth Layer',
    details: 'JWT access/refresh with custom claims: platform_role, is_admin, is_agent, lang.',
  },
  {
    layer: 'Domain API',
    details: 'DRF ViewSets for users, companies, clients, transactions, products, services.',
  },
  {
    layer: 'Contract + Ops',
    details: 'drf-spectacular docs + compose/Traefik + production path on external PostgreSQL.',
  },
] satisfies readonly ArchitectureNode[];

export const runtimeChecks = [
  'python manage.py check -> System check identified no issues.',
  'python manage.py migrate -> No migrations to apply.',
  'Local runtime verified: backend on :9999 and frontend on :3333.',
] as const;

export const runtimeShots = [
  {
    title: 'OperonCRM Admin Workspace',
    caption: 'Live screen after authentication on local runtime: `admin.localhost:3333`.',
    image: '/media/operoncrm/transactions-page.png',
  },
  {
    title: 'Swagger /api/docs',
    caption: 'Live API documentation with real CRUD endpoints.',
    image: '/media/operoncrm/api-docs.png',
    link: 'http://127.0.0.1:9999/api/docs/',
  },
  {
    title: 'ReDoc /api/redoc',
    caption: 'Alternative API contract view with structured navigation.',
    image: '/media/operoncrm/redoc.png',
    link: 'http://127.0.0.1:9999/api/redoc/',
  },
] satisfies readonly EvidenceShot[];

export const journalShots = [
  {
    title: 'Post #611 · Search Logic',
    caption: 'Engineering note on fuzzy-search implementation and query logic.',
    image: '/media/telegram/post-611-vibecoding.jpg',
    link: 'https://t.me/samanwirst_blog/611',
  },
  {
    title: 'Post #592 · Infra Incident',
    caption: 'Real server incident and security response workflow.',
    image: '/media/telegram/post-592-server-maintenance.jpg',
    link: 'https://t.me/samanwirst_blog/592',
  },
] satisfies readonly EvidenceShot[];

export const projectHighlights = [
  {
    name: 'Payzor.co',
    summary:
      'Primary frontend contributor in a startup execution loop: product features, interface flows, API integrations, and rapid UX iterations.',
    meta: 'Commercial product · Feb 2025 - Jul 2025',
    link: 'https://www.payzor.co',
    linkLabel: 'Open product',
  },
  {
    name: 'Globstudy.org',
    summary:
      'Fullstack delivery in a shared leadership environment: production interfaces, integrations, release stability, and iteration support.',
    meta: 'Commercial product · Feb 2025 - Jul 2025',
    link: 'https://www.globstudy.org/',
    linkLabel: 'Open product',
  },
  {
    name: 'Synphora',
    summary: 'Open-source Telegram music sync app: bot onboarding, room auth PIN, realtime sync via Socket.IO.',
    meta: '12 commits · updated 2026-04-19',
    link: 'https://github.com/samanwirst/synphora',
  },
  {
    name: 'Master Battery',
    summary:
      'Commercial e-commerce project: an online store for purchasing automotive batteries, with ongoing web development and maintenance.',
    meta: 'Commercial project · Automotive battery online store',
    link: 'https://master-battery.ru',
    linkLabel: 'Open product',
  },
  {
    name: 'Theory of Digital Cemetery',
    summary: 'Reproducible Python scripts for the quantitative part of an IEEE manuscript.',
    meta: '2 commits · updated 2026-03-24',
    link: 'https://github.com/samanwirst/the_theory_of_digital_cemetery',
  },
  {
    name: 'Aerodeus',
    summary: 'MVP for logistics scenarios with a monorepo, product structure, and baseline infra setup.',
    meta: '9 commits · updated 2026-03-16',
    link: 'https://github.com/samango1/aerodeus',
  },
] satisfies readonly ProjectHighlight[];

export const workExperience = [
  {
    period: 'May 2025 - Feb 2026',
    role: 'CTO',
    company: 'ShoksSAT',
    summary:
      'Led architecture, release management, production deployment, and fullstack delivery for the SAT preparation platform.',
  },
  {
    period: 'Feb 2025 - Jul 2025',
    role: 'Fullstack Developer',
    company: 'Globstudy and Payzor',
    summary: 'Implemented web features, API integrations, and UX improvements while maintaining stable release cycles.',
  },
  {
    period: 'Mar 2024 - Nov 2024',
    role: 'Web / Python Developer',
    company: 'EIT and GivBox',
    summary: 'Built backend logic, automation flows, and production-ready web modules in parallel project environments.',
  },
] satisfies readonly WorkExperience[];

export const academicAchievements = [
  {
    kind: 'research',
    title: 'AlphaMorphism (Academic R&D): topology-guided AI for higher mathematics',
    detail:
      'A high-potential research initiative exploring topology-informed AI for formal reasoning and advanced mathematical computation.',
    date: '2026 · Ongoing Research Program',
    badge: 'R&D IN PROGRESS',
    status:
      'Confidential work in progress: currently focused on securing professors, research partners, and funding for controlled experiments.',
    facts: [
      'Research focus: topology, geometric representations, and neuro-symbolic reasoning for formal math workflows.',
      'Academic value: aims to improve reproducibility and efficiency in theorem-oriented computational research.',
      'Current phase: methodology refinement, experiment design, and collaboration setup with academic institutions.',
    ],
  },
  {
    kind: 'research',
    title: 'Theory of Digital Cemetery (IEEE Manuscript)',
    detail: 'Core research line with the IEEE-format manuscript maintained as the canonical written version.',
    date: 'IEEE Track · Active Manuscript',
    badge: 'IEEE DRAFT',
    status: 'Current scientific reference for this project is the IEEE DOCX version.',
    facts: [
      'Primary retained scientific project alongside AlphaMorphism.',
      'Positioned as the formal publication path for this research direction.',
    ],
    link: '/media/academic/theory-of-the-digital-cemetery-ieee.docx',
    linkLabel: 'Open IEEE manuscript (DOCX)',
  },
  {
    kind: 'certificate',
    title: '3rd Place in the Samarkand Regional Olympiad',
    detail: 'Confirmed by an official winner certificate.',
    date: 'July 19, 2025',
    image: '/media/academic/samarkand-olympiad-3rd.jpg',
  },
  {
    kind: 'certificate',
    title: 'Certificate from the Governor of Samarkand Region',
    detail: 'Awarded for developing an LMS with integrated AR + AI in an education workflow.',
    date: 'July 29, 2025',
    image: '/media/academic/samarkand-hokim-lms-ar-ai.jpg',
  },
] satisfies readonly AcademicAchievement[];

export const portfolioDataEn = {
  focusTracks,
  shoksMetrics,
  shoksFacts,
  shoksShots,
  operonMetrics,
  operonArchitecture,
  runtimeChecks,
  runtimeShots,
  journalShots,
  projectHighlights,
  workExperience,
  academicAchievements,
} as const;
