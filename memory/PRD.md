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
- **Slides**: Cover, Problem, Data, About, Services, Process, Included, Portfolio, Pricing, CTA
- **Photos**: Extracted from KP PDF (kp-photo-1..5.jpeg)

### 3. NoteAll Investment (NEW — Feb 2026)
- **Route**: `/invest`
- **Theme**: Dark navy + teal accent (HSL 174 80% 42%)
- **Slides (13)**: Cover, Problem, Solution, HowItWorks, WhyNow, Market, Audience, Differentiation, BusinessModel, Stage, GTM, Roadmap, Round
- **PDF**: `NoteAllPdfGenerator.jsx` (A4 Landscape, uses shared PdfComponents)
- **Images**: `logo-noteall.png`, `favicon.png`

## Cross-cutting Features
- Mobile responsive (100dvh, safe-area)
- Swipe/keyboard/dots navigation
- PDF generation (A4 landscape)
- Standalone build scripts per presentation
- Dynamic document.title per presentation
- Fullscreen mode

## Key Files
- `server-config/presentations.conf` — Nginx: presentations.noteall.ru
- `server-config/makeusbeautiful-presentations.conf` — Nginx: presentations.makeusbeautiful.ru
- `docs/DEPLOY_GUIDE.md` — Full deployment guide for both subdomains
- `docs/PDF_GENERATION_GUIDE.md` — Практическая инструкция по созданию PDF
- `docs/WEB_TO_PDF_STYLE_GUIDE.md` — Технический справочник @react-pdf/renderer
- `frontend/src/components/pdf-shared/PdfComponents.jsx` — Переиспользуемые PDF-компоненты
- `frontend/src/components/NoteAllPdfGenerator.jsx` — PDF-генератор NoteAll (13 слайдов)
- `frontend/src/pages/NoteAllInvestPresentation.jsx` — Веб-версия NoteAll презентации

## Latest Session (Feb 2026)
- Created 13-slide NoteAll Investment presentation at /invest
- Built NoteAllPdfGenerator.jsx using shared PdfComponents (A4 Landscape)
- Added PDF download button to NoteAll presentation page
- Testing agent: 100% pass rate (desktop 1920x1080, mobile 390x844, regression)

## Backlog
- P1: Build script `build-noteall-invest.sh` + Nginx config for NoteAll deployment
- P1: Deploy presentations.makeusbeautiful.ru (DNS, SSL, Docker volumes)
- P1: Confirm route preference for noteall.ru (FranchCamp → `/`?)
- P2: QR-коды на финальные слайды
- P3: CSS рефакторинг (общие обёртки для слайдов)
