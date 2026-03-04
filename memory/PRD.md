# Презентация КП для ПАО «Ростелеком» — Hop.Agency

## Описание
Веб-приложение для просмотра и скачивания коммерческого предложения Hop.Agency для ПАО «Ростелеком».

## Функционал
- 14 слайдов с контентом из КП
- Навигация: стрелки клавиатуры, кнопки, точки прогресса, свайпы
- **PDF-генерация через @react-pdf/renderer** (векторный PDF, 64KB, выделяемый текст)
- Полноэкранный режим, плавные анимации (framer-motion)

## Технический стек
- React + Tailwind CSS + shadcn/ui
- framer-motion (веб-анимации)
- **@react-pdf/renderer** (PDF-генерация, заменил html2canvas + jsPDF)
- Шрифт Inter (с кириллицей) для PDF

## Структура проекта
```
/app/frontend/src/
├── components/
│   ├── PdfGenerator.jsx       ← PDF-генерация (@react-pdf/renderer)
│   ├── slides/                ← Веб-слайды (14 компонентов)
│   └── ui/                    ← shadcn компоненты
├── pages/
│   └── Presentation.jsx       ← Основной компонент
/app/docs/
│   └── WEB_TO_PDF_STYLE_GUIDE.md  ← Style guide: веб → PDF
/app/design_guidelines.json        ← Дизайн-гайд от дизайн-агента
```

## Выполнено
- [x] Веб-презентация 14 слайдов (hop.agency стиль)
- [x] PDF-генерация через @react-pdf/renderer (Premium дизайн)
- [x] Дизайн-система PDF: консолидированная тема, переиспользуемые компоненты
- [x] Кириллица (шрифт Inter с полной поддержкой)
- [x] SVG-декорации (титульный слайд)
- [x] Style guide: WEB_TO_PDF_STYLE_GUIDE.md
- [x] Design guidelines: design_guidelines.json
- [x] Удалён бэйдж "Made with Emergent"
- [x] Текст "В том числе НДС 5%" обновлён
- [x] Убрана зависимость от html2canvas + jsPDF

## Задачи
Нет открытых задач.
