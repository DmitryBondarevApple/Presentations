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
- **Slides (14)**: Cover, Problem, Solution, HowItWorks, WhyNow, Market, Audience, Differentiation, BusinessModel, Stage, GTM, Roadmap, Team, Round
- **PDF**: `NoteAllPdfGenerator.jsx` (A4 Landscape, 14 pages, shared PdfComponents)
- **Images**: `logo-noteall.png`, `favicon.png`, `founder.png`

### 4. NoteAll One Pager
- **Route**: `/onepager`
- **Theme**: Same as NoteAll Investment (dark navy + teal accent)
- **Layout**: 3x3 grid (Problem, Solution, Market | BizModel, GTM, Stage | Team[2col], Round)
- **Constraints**: Fits exactly on one screen (no scroll) and one A4 landscape page
- **PDF**: `NoteAllOnePagerPdf.jsx` (single A4 Landscape page)
- **Build script**: `build-noteall-onepager.sh`

## Cross-cutting Features
- Mobile responsive (100dvh, safe-area)
- Swipe/keyboard/dots navigation
- PDF generation (A4 landscape)
- Standalone build scripts per presentation
- Dynamic document.title per presentation
- Fullscreen mode
- Content fill rate >= 70% on all slides
- Open Graph (OG) tags and images for social sharing

## Key Files
- `frontend/src/pages/NoteAllOnePager.jsx` — Веб-версия One Pager
- `frontend/src/components/NoteAllOnePagerPdf.jsx` — PDF-генератор One Pager (1 страница)
- `frontend/src/components/noteall-slides/NASlide13Team.jsx` — Слайд «Команда» с фото основателя
- `frontend/src/components/NoteAllPdfGenerator.jsx` — PDF-генератор NoteAll (14 слайдов)
- `frontend/src/pages/NoteAllInvestPresentation.jsx` — Веб-версия NoteAll презентации
- `frontend/src/components/pdf-shared/PdfComponents.jsx` — Переиспользуемые PDF-компоненты
- `docs/PDF_GENERATION_GUIDE.md` — Инструкция по созданию PDF
- `docs/DEPLOY_GUIDE.md` — Гайд по деплою

## Latest Session (Feb 2026)
- Adjusted One Pager grid proportions: top row 1.25fr, middle 1fr, bottom 0.75fr
- Increased all font sizes in One Pager (web + PDF)
- Added "10–20x Сокращение расходов на разработку" to ТЕКУЩАЯ СТАДИЯ section
- Added "< 3 мес. ROAS" metric to РАУНД section in PDF
- Reduced Team section height, increased header and top row
- Testing: 100% pass rate (all 9 sections, no scroll, PDF download, regression routes)

## Backlog
- P1: Fix .gitignore to allow deploy-* directories to be pushed to GitHub
- P1: Verify build-noteall-onepager.sh works correctly (OG tags, paths)
- P1: Confirm route preference for noteall.ru (FranchCamp -> `/`?)
- P2: QR-коды на финальные слайды
- P3: CSS рефакторинг (общие обёртки для слайдов)
