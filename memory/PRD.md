# FranchCamp & Rostelecom Presentation App

## Original Problem Statement
Build a 9-slide presentation for "FranchCamp" client, presented by Hop.Agency. The app proposes AI training workshops for franchisors featuring three platforms: Noteall, EchoMind, and Emergent.sh. This presentation coexists with the previously created "Rostelecom" presentation.

## Architecture
- **Frontend**: React + Vite + Tailwind CSS + Framer Motion
- **PDF**: @react-pdf/renderer
- **Routes**: `/` (Rostelecom), `/franchcamp` (FranchCamp)

## What's Implemented
- 9-slide FranchCamp web presentation with full navigation (arrows, dots, keyboard, touch swipe)
- PDF generation for FranchCamp presentation
- Desktop and mobile responsive layout for all slides
- Rostelecom presentation (14 slides) at root route

## Completed Bug Fixes
1. Typography fix: large readable fonts across all slides
2. Vertical alignment fix on slides 5 & 6
3. PDF crash fix (fontStyle italic removed)
4. PDF layout fix (overlapping columns, misaligned badge)
5. **Mobile responsiveness fix (P0)**: Added overflow-y-auto to slide containers, reduced mobile font sizes, 2-column grids on mobile, adjusted padding/spacing

## Key Files
- `frontend/src/App.js` - Router
- `frontend/src/pages/FranchCampPresentation.jsx` - Main FranchCamp page
- `frontend/src/components/franchcamp-slides/*.jsx` - 10 slide components
- `frontend/src/components/FranchCampPdfGenerator.jsx` - PDF generator

## Backlog
- **P1**: Confirm route preference (FranchCamp on `/` vs `/franchcamp`)
- **P2**: Add QR code to final slide
- **P3**: CSS refactoring for maintainability
