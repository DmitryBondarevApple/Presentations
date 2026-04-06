# Паттерн мобильной вёрстки слайдов

Документ описывает систему адаптивной типографики и отступов для презентационных слайдов.
Все слайды должны строго следовать этим правилам.

## Брейкпоинты

| Токен | Ширина | Устройство |
|-------|--------|------------|
| (base) | < 640px | Смартфон (390px) |
| `sm:` | ≥ 640px | Большой смартфон / маленький планшет |
| `md:` | ≥ 768px | Планшет / десктоп |
| `lg:` | ≥ 1024px | Десктоп |

## NASlideContainer

Общий контейнер для всех слайдов (кроме Cover). Ключевые классы:

```
Хедер:    px-4 sm:px-6 md:px-12 lg:px-16  pt-3 md:pt-6
Контент:  px-4 sm:px-6 md:px-12 lg:px-16  py-2 sm:py-4 md:py-6  pb-8 lg:pb-10
Контент:  justify-center (вертикальное центрирование на ВСЕХ экранах)
```

**Важно:** `justify-center` применяется на всех размерах экрана, не только на `lg`. Это предотвращает пустоту внизу мобильных экранов.

## Типографика

### Заголовки H2 (главные заголовки слайдов)

```
text-xl sm:text-2xl md:text-5xl font-bold
```

### Подзаголовки (описательный текст под заголовком)

```
text-sm sm:text-base md:text-xl  leading-snug sm:leading-relaxed
```

### Заголовки карточек

```
text-sm sm:text-base md:text-xl font-bold
```

### Текст внутри карточек (описания)

```
text-xs sm:text-sm md:text-lg  leading-snug sm:leading-relaxed
```

### Мелкий текст (подписи, источники)

```
text-[10px] sm:text-xs md:text-sm
```

### Крупные числа/метрики

```
text-3xl sm:text-4xl md:text-6xl font-bold  (большие акцентные цифры)
text-base sm:text-xl md:text-4xl font-bold  (средние цифры в карточках)
text-lg sm:text-2xl md:text-5xl font-bold   (цифры в строчных карточках)
```

### Бейджи/теги

```
text-[10px] sm:text-xs md:text-sm font-bold tracking-wider
px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5
```

## Отступы

### Карточки (padding)

```
p-2.5 sm:p-5 md:p-7     — стандартная карточка
p-3 sm:p-5 md:p-8       — карточка с крупным контентом (числа)
p-2.5 sm:p-4 md:p-6     — callout-блок (с accent-бордером)
p-1.5 sm:p-2.5 md:p-4   — компактная карточка (списки)
```

### Зазоры между элементами (gap)

```
gap-2 sm:gap-4 md:gap-8   — между карточками в сетке
gap-1.5 sm:gap-2 md:gap-3 — между элементами внутри карточки
```

### Вертикальные отступы (margin-bottom)

```
mb-1 sm:mb-2 md:mb-4      — после заголовка H2
mb-2 sm:mb-5 md:mb-10     — после подзаголовка (перед контентом)
mb-2 sm:mb-4 md:mb-8      — после блока карточек
```

## Сетки

### 2×2 карточки (Solution, Audience, Differentiation)

```html
<div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-8">
```

На мобильных **всегда 2 колонки** — не 1. Контент помещается за счёт компактных отступов и шрифтов.

### 4 карточки в ряд (HowItWorks)

```html
<div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-6">
```

На мобильных — 2×2, на десктопе — 4 в ряд.

### 3 карточки в ряд (WhyNow, Stage, Roadmap)

```html
<div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-8">
```

На мобильных — вертикальный стек, на `sm+` — горизонтальный ряд.

### 2 колонки (Market, BusinessModel)

```html
<div className="flex flex-col lg:flex-row gap-2 sm:gap-4 md:gap-6">
```

На мобильных — вертикальный стек, на `lg` — две колонки.

## Специальные слайды

### Cover (титульный)

Не использует NASlideContainer. Собственная вёрстка:
```
justify-center items-center  — всегда центрирован
Логотип:  h-10 sm:h-14 md:h-24
Заголовок: text-xl sm:text-2xl md:text-5xl lg:text-6xl
Подзаголовок: text-sm sm:text-base md:text-xl lg:text-2xl
Мелкий текст: text-xs sm:text-sm md:text-lg
```

### Team (с фото)

Фото и текст на мобильных — `flex-col-reverse` (фото вверху, текст внизу):
```html
<div className="flex flex-col-reverse lg:flex-row gap-3 md:gap-8">
```

Фото на мобильных — в строку с карточкой «30+»:
```html
<div className="w-full lg:w-64 flex flex-row lg:flex-col items-center gap-3 md:gap-5">
  <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-56 md:h-56 lg:w-60 lg:h-60 ...">
```

### Round (последний слайд)

Использует NASlideContainer (не кастомный лейаут). Цели на мобильных — отдельная горизонтальная строка:
```html
<!-- Desktop: цели рядом с каждой карточкой -->
<div className="hidden lg:flex ...">

<!-- Mobile: цели в отдельном ряду -->
<div className="flex gap-2 mb-3 lg:hidden">
```

## Чеклист перед финализацией

1. Все заголовки H2 используют `text-xl sm:text-2xl md:text-5xl`?
2. Нет `text-[9px]` — минимальный размер `text-[10px]`?
3. Все сетки 2×2 на мобильных (не 1-колоночные)?
4. `justify-center` в NASlideContainer без `justify-start`?
5. Нет горизонтального скролла на 390px?
6. Контент центрирован вертикально (нет пустоты снизу)?
