# Presentation App — PRD

## Original Problem Statement
Build web presentations for Hop.Agency with full navigation, PDF generation, mobile responsiveness, and standalone deployment. Hosted on `presentations.noteall.ru` (separate subdomain, isolated from main site deploys).

## Architecture
- **Frontend**: React + Tailwind CSS + Framer Motion
- **PDF**: @react-pdf/renderer
- **Routes**: `/` (Rostelecom), `/franchcamp` (FranchCamp), `/emergent` (Emergent Masterclass)
- **Hosting**: `presentations.noteall.ru` (Docker volume mount + separate Nginx server block)

## Production URLs
- https://presentations.noteall.ru/franchcamp
- https://presentations.noteall.ru/emergent

## What's Implemented

### Rostelecom (14 slides) — Route: `/`
### FranchCamp (9 slides) — Route: `/franchcamp`, accent: orange
### Emergent Masterclass (15 slides) — Route: `/emergent`, accent: lime

### Cross-cutting: mobile (100dvh, safe-area), swipe/keyboard/dots nav, PDF gen, standalone build scripts

## Deployment
- Subdomain `presentations.noteall.ru` → same IP as noteall.ru (185.246.220.121)
- Nginx config: `/etc/nginx/presentations.conf` → mounted as volume into Docker container
- Files: `/var/www/presentations/{name}/` → mounted read-only into container
- SSL: Let's Encrypt certbot for presentations.noteall.ru
- Full instructions: `docs/DEPLOY_GUIDE.md`

## Key Files
- `server-config/presentations.conf` — Nginx config for the subdomain
- `build-franchcamp.sh`, `build-emergent.sh` — standalone build scripts (BASE_PATH: /franchcamp, /emergent)
- `docs/DEPLOY_GUIDE.md` — full deployment guide with architecture diagram

## Backlog
- P2: QR-коды на финальные слайды
- P3: CSS рефакторинг
