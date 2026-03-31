# Presentation App — PRD

## Original Problem Statement
Build web presentations for Hop.Agency with full navigation, PDF generation, mobile responsiveness, and standalone deployment to noteall.ru. Currently houses three presentations: Rostelecom, FranchCamp, and Emergent Masterclass.

## Architecture
- **Frontend**: React + Vite + Tailwind CSS + Framer Motion
- **PDF**: @react-pdf/renderer
- **Routes**: `/` (Rostelecom), `/franchcamp` (FranchCamp), `/emergent` (Emergent Masterclass)

## What's Implemented

### Rostelecom Presentation (14 slides)
- Route: `/`
- Full navigation, PDF generation

### FranchCamp Presentation (9 slides)
- Route: `/franchcamp`
- Deploy: `noteall.ru/presentations/franchcamp`
- Build script: `build-franchcamp.sh`
- Accent: Orange/coral

### Emergent Masterclass Presentation (15 slides) — NEW
- Route: `/emergent`
- Deploy target: `noteall.ru/presentations/emergent`
- Build script: `build-emergent.sh`
- Accent: Lime/green (`--accent: 82 84% 55%`)
- Topic: "От идеи до продукта с ИИ-агентами" для студентов университета
- 15 slides covering: AI context, idea→product path, user problems, requirements, Emergent as digital team, practical tips, documentation
- PDF generator: `EmergentPdfGenerator.jsx`

### Cross-cutting Features
- Mobile-first adaptive design with `100dvh`, safe-area insets, `overflow-y-auto`
- Touch swipe, keyboard, and dot navigation
- PDF generation for all presentations
- Standalone static build scripts for deployment

## Key Files
- `frontend/src/App.js` — Router (`/`, `/franchcamp`, `/emergent`)
- `frontend/src/pages/EmergentPresentation.jsx` — Emergent presentation page
- `frontend/src/components/emergent-slides/*.jsx` — 16 slide components (15 slides + container)
- `frontend/src/components/EmergentPdfGenerator.jsx` — PDF generator (15 pages)
- `build-emergent.sh` — Standalone build script for `noteall.ru/presentations/emergent`
- `frontend/src/pages/FranchCampPresentation.jsx` — FranchCamp page
- `frontend/src/components/franchcamp-slides/*.jsx` — FranchCamp slides
- `frontend/src/components/FranchCampPdfGenerator.jsx` — FranchCamp PDF

## Project Documentation
- `docs/DEPLOY_GUIDE.md` — Деплой на noteall.ru (Docker, Nginx, volume, обновление, добавление новых презентаций)
- `docs/MOBILE_RESPONSIVENESS_GUIDE.md` — Мобильная адаптивность (viewport, overflow, типографика)
- `docs/WEB_TO_PDF_STYLE_GUIDE.md` — Генерация PDF

## Key Technical Decisions
- **`100dvh`** для высоты контейнера — учитывает тулбар Safari на iPhone
- **`viewport-fit=cover`** + `env(safe-area-inset-bottom)` — поддержка safe area
- **Scoped CSS variables** — акцентный цвет переопределяется в wrapper div каждой презентации
- **`overflow-y-auto`** на контентной области слайда — прокрутка при переполнении
- **Standalone build scripts** — `build-franchcamp.sh` и `build-emergent.sh` создают изолированные сборки

## Deployment
- Each presentation has its own build script that creates a standalone static build
- Deploy path: `noteall.ru/presentations/{name}/`
- Build creates `deploy-{name}/` folder with all static assets
- Volume mount on server: `/var/www/presentations/` → Docker container

## Backlog
- **P1**: Подтвердить предпочтение роута (FranchCamp на `/` или оставить `/franchcamp`)
- **P2**: QR-код на финальные слайды
- **P3**: CSS рефакторинг — общие компоненты для слайдов
