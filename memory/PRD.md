# Presentation App PRD

## Описание
Веб-приложение для создания и демонстрации бизнес-презентаций с поддержкой PDF-экспорта (A4 Landscape).

## Презентации
| Название | Роут | Слайдов | Статус |
|----------|-------|---------|--------|
| Ростелеком | `/` | 15 | DONE |
| FranchCamp | `/franchcamp` | 17 | DONE |
| Emergent Masterclass | `/emergent` | 15 | DONE |
| MakeUsBeautiful | `/makeusbeautiful` | 14 | DONE |
| NoteAll Invest | `/invest` | 14 | DONE |
| NoteAll One Pager | `/onepager` | 1 page | DONE |
| AX10 | `/ax10` | 16 | DONE |

## Технологии
- React + Tailwind CSS + Framer Motion
- @react-pdf/renderer (A4 Landscape PDF)
- Bash Static Export (build-*.sh скрипты)
- Docker + Nginx на presentations.noteall.ru

## Деплой
- Хост: `presentations.noteall.ru`
- Docker-контейнер: `voice-workspace-frontend-1`
- Volume mount: `/var/www/presentations` -> контейнер
- SSL: Let's Encrypt (автообновление certbot)
- Документация: `/app/docs/DEPLOY_GUIDE.md`

## Завершённые задачи (07 апреля 2026)
- [x] Создана презентация AX10 — 16 слайдов (Cover -> Problem -> Solution -> Process -> Data -> AI -> Transparency -> Deliverables -> Independent TZ -> Client Choice -> Dev Partner -> AI-first -> No Lock-in -> Business Effect -> Format -> Final/CTA)
- [x] PDF-генератор AX10 (A4 Landscape, 16 страниц)
- [x] Билд-скрипт build-ax10.sh
- [x] Nginx location /ax10/ в presentations.conf
- [x] Мобильная адаптивность
- [x] Свайп, клавиатура, точечная навигация
- [x] Тестирование: 100% PASSED (iteration_9.json)

## Бэклог
- [ ] P1: QR-коды на финальные слайды
- [ ] P2: CSS-рефакторинг (общие обёртки для слайдов)
- [ ] P3: OG-теги и OG-картинка для AX10

## Критические правила
- Перед деплоем ВСЕГДА пересобирать билд
- На проде ВСЁ через Docker (voice-workspace-frontend-1)
- Команды для терминала — каждая ОТДЕЛЬНОЙ строкой
- Nginx reload: `sudo docker exec voice-workspace-frontend-1 nginx -s reload`
