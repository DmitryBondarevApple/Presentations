# Presentation App — PRD

## Original Problem Statement
Build web presentations for multiple companies with full navigation, PDF generation, mobile responsiveness, and standalone deployment on dedicated subdomains.

## Architecture
- **Frontend**: React + Tailwind CSS + Framer Motion
- **PDF**: @react-pdf/renderer
- **Hosting**: Static deploys on subdomains via Docker + Nginx

## Projects

### 1. Hop.Agency (noteall.ru)
- **Subdomain**: `presentations.noteall.ru`
- **Routes**: `/` (Rostelecom), `/franchcamp` (FranchCamp), `/emergent` (Emergent Masterclass)
- **Deploy folders**: `deploy-franchcamp/`, `deploy-emergent/`
- **Build scripts**: `build-franchcamp.sh`, `build-emergent.sh`

### 2. Сделай красиво! (makeusbeautiful.ru)
- **Subdomain**: `presentations.makeusbeautiful.ru`
- **Routes**: `/company` (Презентация компании — 10 слайдов)
- **Deploy folder**: `makeusbeautiful/company/`
- **Build script**: `build-makeusbeautiful-company.sh`
- **Theme**: Dark background + green accent (HSL 152 50% 42%)

### 3. NoteAll Investment
- **Route**: `/invest`
- **Theme**: Dark navy + teal accent (HSL 174 80% 42%)
- **Slides (14)**: Cover, Problem, Solution, HowItWorks, WhyNow, Market, Audience, Differentiation, BusinessModel, Stage, GTM, Roadmap, **Team**, Round
- **PDF**: `NoteAllPdfGenerator.jsx` (A4 Landscape, 14 pages, shared PdfComponents)
- **Images**: `logo-noteall.png`, `favicon.png`, `founder.png`

## Cross-cutting Features
- Mobile responsive (100dvh, safe-area)
- Swipe/keyboard/dots navigation
- PDF generation (A4 landscape)
- Standalone build scripts per presentation
- Dynamic document.title per presentation
- Fullscreen mode
- Content fill rate ≥ 70% on all slides

## Key Files
- `frontend/src/components/noteall-slides/NASlide13Team.jsx` — Слайд «Команда» с фото основателя
- `frontend/src/components/NoteAllPdfGenerator.jsx` — PDF-генератор NoteAll (14 слайдов)
- `frontend/src/pages/NoteAllInvestPresentation.jsx` — Веб-версия NoteAll презентации
- `frontend/src/components/pdf-shared/PdfComponents.jsx` — Переиспользуемые PDF-компоненты
- `docs/PDF_GENERATION_GUIDE.md` — Инструкция по созданию PDF
- `docs/DEPLOY_GUIDE.md` — Гайд по деплою

## Latest Session (Feb 2026)
- Created 14-slide NoteAll Investment presentation at /invest
- Added Team slide (#13) with founder photo and bio
- Increased content fill rate to ≥70% on all slides (bigger cards, more spacing, reduced padding)
- Built NoteAllPdfGenerator.jsx with 14 slides using shared PdfComponents
- Testing: 100% pass rate (desktop, mobile, PDF download, regression)

## Backlog
- P1: Build script `build-noteall-invest.sh` + Nginx config for NoteAll deployment
- P1: Deploy presentations.makeusbeautiful.ru (DNS, SSL, Docker volumes)
- P1: Confirm route preference for noteall.ru (FranchCamp → `/`?)
- P2: QR-коды на финальные слайды
- P3: CSS рефакторинг (общие обёртки для слайдов)
