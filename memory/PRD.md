# Презентации Hop.Agency

## Описание
Веб-приложение для просмотра и скачивания презентаций Hop.Agency.

## Презентации

### 1. Ростелеком (`/`)
- 14 слайдов коммерческого предложения для ПАО «Ростелеком»
- PDF-генерация через @react-pdf/renderer

### 2. FranchCamp (`/franchcamp`)
- 9 слайдов — предложение для организаторов FranchCamp
- Тема: ИИ как часть пакета для франчайзи
- 3 блока: Noteall, EchoMind, Emergent.sh
- PDF-генерация через @react-pdf/renderer

## Функционал
- Навигация: стрелки клавиатуры, кнопки, точки прогресса, свайпы
- PDF-генерация (векторный PDF, выделяемый текст, кириллица)
- Полноэкранный режим, плавные анимации (framer-motion)

## Технический стек
- React + Tailwind CSS + shadcn/ui
- framer-motion (веб-анимации)
- @react-pdf/renderer (PDF-генерация)
- Шрифт Inter (с кириллицей) для PDF

## Структура
```
/app/frontend/src/
├── components/
│   ├── PdfGenerator.jsx              ← PDF для Ростелеком
│   ├── FranchCampPdfGenerator.jsx    ← PDF для FranchCamp
│   ├── slides/                       ← Веб-слайды Ростелеком
│   ├── franchcamp-slides/            ← Веб-слайды FranchCamp
│   └── ui/                           ← shadcn
├── pages/
│   ├── Presentation.jsx              ← Ростелеком (/)
│   └── FranchCampPresentation.jsx    ← FranchCamp (/franchcamp)
/app/docs/
│   └── WEB_TO_PDF_STYLE_GUIDE.md     ← Style guide: веб → PDF
```

## Выполнено
- [x] Веб-презентация Ростелеком — 14 слайдов
- [x] PDF Ростелеком — @react-pdf/renderer
- [x] Веб-презентация FranchCamp — 9 слайдов
- [x] PDF FranchCamp — @react-pdf/renderer
- [x] Кириллица (Inter)
- [x] Style guide: WEB_TO_PDF_STYLE_GUIDE.md
- [x] Маршрутизация: / и /franchcamp
- [x] Тестирование: 17/17 тестов пройдено (iteration_1)

## Задачи
Нет открытых задач.

## Будущее
- [ ] Главная страница с выбором презентации
- [ ] Динамическая загрузка контента из JSON/БД
- [ ] Универсальный компонент презентации
