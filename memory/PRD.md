# FranchCamp & Rostelecom Presentation App

## Original Problem Statement
Build a 9-slide presentation for "FranchCamp" client, presented by Hop.Agency. The app proposes AI training workshops for franchisors featuring three platforms: Noteall, EchoMind, and Emergent.sh. This presentation coexists with the previously created "Rostelecom" presentation.

## Architecture
- **Frontend**: React + Vite + Tailwind CSS + Framer Motion
- **PDF**: @react-pdf/renderer
- **Routes**: `/` (Rostelecom), `/franchcamp` (FranchCamp)

## What's Implemented
- 9-slide FranchCamp web presentation with full navigation (arrows, dots, keyboard, touch swipe)
- PDF generation for FranchCamp presentation (@react-pdf/renderer)
- Desktop and mobile responsive layout for all 9 slides
- Rostelecom presentation (14 slides) at root route
- Mobile-first adaptive design with `100dvh`, safe-area insets, overflow-y-auto

## Completed Bug Fixes
1. Typography fix: large readable fonts across all slides
2. Vertical alignment fix on slides 5 & 6
3. PDF crash fix (fontStyle italic removed — Inter has no italic variant)
4. PDF layout fix (overlapping columns on slide 9, misaligned badge on slide 1)
5. **Mobile responsiveness fix (P0)**: overflow-y-auto, reduced fonts/padding, 2-col grids
6. **iOS Safari viewport fix**: `100dvh` instead of `h-screen`, `viewport-fit=cover`, `env(safe-area-inset-bottom)`

## Key Files
- `frontend/src/App.js` — Router (`/` and `/franchcamp`)
- `frontend/src/pages/FranchCampPresentation.jsx` — Main page, navigation, touch swipe
- `frontend/src/components/franchcamp-slides/*.jsx` — 10 slide components (9 slides + container)
- `frontend/src/components/FranchCampPdfGenerator.jsx` — PDF generator

## Project Documentation
- `docs/WEB_TO_PDF_STYLE_GUIDE.md` — Правила переноса дизайна из веба в PDF
- `docs/MOBILE_RESPONSIVENESS_GUIDE.md` — Правила мобильной адаптивности (viewport, overflow, типографика)

## Key Technical Decisions
- **`100dvh`** для высоты контейнера — учитывает тулбар Safari на iPhone
- **`viewport-fit=cover`** + `env(safe-area-inset-bottom)` — поддержка safe area
- **`overflow-y-auto`** на контентной области слайда — прокрутка при переполнении
- **`justify-start lg:justify-center`** — контент прижат к верху на мобильном, центрирован на десктопе
- **`grid-cols-2 lg:grid-cols-4`** — компактные карточки на мобильном

## Backlog
- **P1**: Подтвердить предпочтение роута (FranchCamp на `/` или оставить `/franchcamp`)
- **P2**: QR-код на финальный слайд
- **P3**: CSS рефакторинг
