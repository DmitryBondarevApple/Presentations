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
- **@react-pdf/renderer** (PDF-генерация)
- Шрифт Inter (с кириллицей) для PDF

## Структура
```
/app/frontend/src/
├── components/
│   ├── PdfGenerator.jsx       ← PDF-генерация (@react-pdf/renderer)
│   ├── slides/                ← Веб-слайды
│   └── ui/                    ← shadcn
├── pages/
│   └── Presentation.jsx       ← Основной компонент
/app/docs/
│   └── WEB_TO_PDF_STYLE_GUIDE.md  ← Style guide: веб → PDF
/app/design_guidelines.json        ← Дизайн-гайд
```

## Выполнено
- [x] Веб-презентация 14 слайдов (hop.agency стиль)
- [x] PDF через @react-pdf/renderer (Premium дизайн, дизайн-система)
- [x] Сбалансированный layout: натуральная высота карточек + вертикальное центрирование
- [x] Кириллица (Inter)
- [x] Style guide: WEB_TO_PDF_STYLE_GUIDE.md (включая раздел о балансировке layout)
- [x] Удалён бэйдж "Made with Emergent"
- [x] Текст "В том числе НДС 5%"

## Задачи
Нет открытых задач.
