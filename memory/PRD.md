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
| AX10 One Pager | `/ax10-onepager` | 1 page | DONE |

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

## Завершённые задачи
- [x] Создана презентация AX10 — 16 слайдов
- [x] PDF-генератор AX10 (A4 Landscape, 16 страниц)
- [x] Билд-скрипт build-ax10.sh
- [x] Nginx location /ax10/ в presentations.conf
- [x] AX10 One Pager — Dark Swiss дизайн (переписан по design_guidelines.json)
- [x] PDF-генератор One Pager синхронизирован с новым веб-дизайном
- [x] OG-скриншот обновлён с нового тёмного дизайна
- [x] Билд build-ax10-onepager.sh пересобран
- [x] Полные имена в команде: Сергей Мартюшев, Сергей Бобылев, Дмитрий Бондарев, Сергей Томилов

## Бэклог
- [ ] P2: QR-коды на финальные слайды
- [ ] P3: CSS-рефакторинг (общие обёртки для слайдов)

## Критические правила
- Перед деплоем ВСЕГДА пересобирать билд
- На проде ВСЁ через Docker (voice-workspace-frontend-1)
- OG-картинки = только скриншоты титульных слайдов (НЕ AI-генерация)
- PDF: НЕ использовать flex:1 + justifyContent:center для обёрток страниц
- Nginx reload: `sudo docker exec voice-workspace-frontend-1 nginx -s reload`
