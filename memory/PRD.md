# Presentation App PRD

## Описание
Веб-приложение для создания и демонстрации бизнес-презентаций с поддержкой PDF-экспорта (A4 Landscape).

## Презентации
| Название | Роут | Слайдов | Статус |
|----------|-------|---------|--------|
| Ростелеком | `/` | 15 | DONE |
| FranchCamp | `/franchcamp` | 17 | DONE |
| Emergent Masterclass | `/emergent` | 23 | DONE |
| MakeUsBeautiful | `/makeusbeautiful` | 14 | DONE |
| NoteAll Invest | `/invest` | 14 | DONE |
| NoteAll One Pager | `/onepager` | 1 page | DONE |
| AX10 | `/ax10` | 16 | DONE |
| AX10 One Pager | `/ax10-onepager` | 1 page | DONE |
| Noteall Product | `/product` | 14 | DONE |
| Noteall Product (Short) | `/product-short` | 13 | DONE |
| Trackers Academy | `/trackers` | 54 | DONE |
| Perviy Bit | `/perviy-bit` | 13 | DONE |
| MakeUsBeautiful Light | `/makeusbeautiful-light` | 14 | DONE |

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
- [x] **2026-02 · Trackers Academy v2 (54 слайда)**: Блок Emergent (34-54) переписан под трекерскую оптику; 3 новых слайда (37 «Что меняется для трекера», 45 «Вопросы трекера команде Emergent», 53 «Новые риски AI-разработки»); B2B-примеры вместо студенческих (анализ звонков сервисных компаний, карточка лида); финал теперь «Роль трекера не исчезает»; PDF Light/Dark обновлены; testing_agent_v3_fork 100% PASS
- [x] **2026-02 · Trackers Academy: реорганизация порядка слайдов 34-54 под текст лекции** (Trackers_Speech_2.txt). Перестановки: Path/TrackerShift вынесены в начало блока (34-35), Known/Focus сдвинуты на 36-37; Result/System перенесены на 45-46 сразу после Emergent/Team; NewRisks сдвинут на 47 (раздел «Новые ошибки команд»); TrackerQs перенесён на 53 ближе к финалу. testing_agent_v3_fork: 15/15 spec-позиций + 6/6 sanity-позиций PASS, 0 console-ошибок.
- [x] Создана презентация AX10 — 16 слайдов
- [x] PDF-генератор AX10 (A4 Landscape, 16 страниц)
- [x] Билд-скрипт build-ax10.sh
- [x] Nginx location /ax10/ в presentations.conf
- [x] AX10 One Pager — Dark Swiss дизайн
- [x] PDF-генератор One Pager синхронизирован с новым веб-дизайном
- [x] OG-скриншот обновлён с нового тёмного дизайна
- [x] Билд build-ax10-onepager.sh пересобран
- [x] Noteall Product Presentation — 14 слайдов (`/product`)
- [x] PDF-генератор с предгенерацией Light/Dark тем при загрузке страницы
- [x] Селектор тем PDF — дропдаун с реальными `<a href download>` ссылками
- [x] Краткий вариант без слайда 13 (`/product-short`, 13 слайдов)
- [x] SlideTotal React Context для динамической нумерации слайдов
- [x] Исправлена синтаксическая ошибка NoteAllProductPdfGenerator.jsx
- [x] Исправлена обрезка рамки на слайде 12 в PDF (marginTop: 6)
- [x] Bug fix: z-index дропдауна PDF (слайд перекрывал меню)
- [x] Bug fix: DOM removal timing — setTimeout на закрытие меню после клика
- [x] Emergent Masterclass Part 2: 8 новых слайдов (16-23) — Результат, Система, Итерация, Развитие, Среды, Pipeline, Ценность, Роль человека
- [x] Скриншоты VetControl (dashboard, analytics, disease form) в public/images/emergent/

## Бэклог
- [ ] P1: Deploy `/trackers` v2 (54 слайда) на presentations.noteall.ru/trackers — ожидание команды пользователя
- [ ] P2: QR-коды на финальные слайды
- [ ] P3: CSS-рефакторинг (общие обёртки для слайдов)
- [ ] P3: Переименовать файлы слайдов Trackers под актуальные номера (drift: TASlide37Map.jsx ↔ slide 38, TASlide45System.jsx ↔ slide 47, TASlide51HumanRole.jsx ↔ slide 54)

## Архитектура PDF-генерации
- Обе темы (Light/Dark) предгенерируются при загрузке страницы через `preGenerateNoteAllProductPdfs()`
- Блобы конвертируются в blob URL через `URL.createObjectURL()`
- Дропдаун содержит реальные `<a href={blobUrl} download={filename}>` — браузер скачивает нативно
- `setTimeout(800ms)` перед закрытием меню, чтобы `<a>` не удалялся из DOM до начала загрузки
- Blob URLs очищаются при unmount через `URL.revokeObjectURL()`

## Критические правила
- Перед деплоем ВСЕГДА пересобирать билд
- На проде ВСЁ через Docker (voice-workspace-frontend-1)
- PDF: НЕ использовать flex:1 + justifyContent:center для обёрток страниц
- PDF download: НЕ использовать программный `a.click()` — только реальные `<a>` ссылки
- Bottom bar z-index: `relative z-20` чтобы дропдаун был выше слайд-области
- **Акцентный цвет в заголовках**: переход цвета СРАЗУ после знака препинания (запятой, тире, двоеточия). Предлоги и союзы ("к", "а", "чем" и т.д.) включаются в акцентную часть. Пример: "На выходе — не транскрипт, <accent>а рабочий документ</accent>"
