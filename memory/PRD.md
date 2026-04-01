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

## Latest Session (Feb 2026)
- Created 10-slide "Сделай красиво!" presentation at /makeusbeautiful
- Extracted 5 portfolio photos from commercial proposal PDF
- Built static export to makeusbeautiful/company/
- Created Nginx config for presentations.makeusbeautiful.ru
- Updated DEPLOY_GUIDE.md with makeusbeautiful deployment instructions
- Testing agent: 100% pass rate (desktop, mobile, regression)

## Backlog
- P1: Deploy presentations.makeusbeautiful.ru (DNS, SSL, Docker volumes)
- P1: Confirm route preference for noteall.ru (FranchCamp → `/`?)
- P2: QR-коды на финальные слайды
- P3: CSS рефакторинг (общие обёртки для слайдов)
