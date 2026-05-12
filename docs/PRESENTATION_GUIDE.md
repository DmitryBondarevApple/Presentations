# Руководство по созданию презентаций

> Полный цикл: дизайн → веб-слайды → PDF-генератор → билд → деплой

---

## Оглавление

1. [Архитектура проекта](#1-архитектура-проекта)
2. [Стек технологий](#2-стек-технологий)
3. [Дизайн-система](#3-дизайн-система)
4. [Создание веб-слайдов](#4-создание-веб-слайдов)
5. [PDF-генератор](#5-pdf-генератор)
6. [Предгенерация и скачивание PDF](#6-предгенерация-и-скачивание-pdf)
7. [Страница презентации](#7-страница-презентации)
8. [Билд и деплой](#8-билд-и-деплой)
9. [Чеклист перед сдачей](#9-чеклист-перед-сдачей)
10. [Известные грабли и решения](#10-известные-грабли-и-решения)

---

## 1. Архитектура проекта

```
frontend/src/
├── components/
│   ├── {name}-slides/              # Веб-слайды (React + Tailwind)
│   │   ├── {PX}SlideContainer.jsx  # Обёртка слайда (лейбл, номер, фон)
│   │   ├── {PX}Slide01Cover.jsx    # Титульный слайд
│   │   ├── {PX}Slide02Problem.jsx  # Остальные слайды
│   │   └── ...
│   ├── {Name}PdfGenerator.jsx      # PDF-генератор (@react-pdf/renderer)
│   └── pdf-shared/
│       └── PdfComponents.jsx       # Общие компоненты PDF (шрифты, утилиты)
├── pages/
│   └── {Name}Presentation.jsx      # Страница с навигацией и PDF-кнопкой
└── App.js                          # Роуты
```

### Именование

| Элемент | Паттерн | Пример |
|---------|---------|--------|
| Папка слайдов | `{prefix}-slides/` | `perviy-bit-slides/` |
| Компонент слайда | `{PX}Slide{NN}{Name}.jsx` | `PBSlide04Solution.jsx` |
| Контейнер | `{PX}SlideContainer.jsx` | `PBSlideContainer.jsx` |
| PDF-генератор | `{Name}PdfGenerator.jsx` | `PerviyBitPdfGenerator.jsx` |
| Страница | `{Name}Presentation.jsx` | `PerviyBitPresentation.jsx` |
| Билд-скрипт | `build-{name}.sh` | `build-perviy-bit.sh` |

---

## 2. Стек технологий

### Веб-слайды
- **React** + **Tailwind CSS** — адаптивная вёрстка
- **Framer Motion** — анимации переходов (опционально)
- **Lucide React** — иконки (НЕ emoji)
- **Shadcn/UI** — базовые UI-компоненты (`/components/ui/`)

### PDF-генератор
- **@react-pdf/renderer** v4.x — генерация PDF в браузере
- Формат: **A4 Landscape** (`841.89 × 595.28 pt`)
- Шрифт: **Inter** (Google Fonts, с поддержкой кириллицы)

---

## 3. Дизайн-система

### 3.1. Цветовая схема

Каждая презентация имеет свой акцентный цвет. Палитра задаётся через объект темы:

```js
// Noteall — teal
{ accent: "#0d9488", bg: "#0f172a", fg: "#f1f5f9", ... }

// Emergent — lime green  
// Через CSS: '--accent': '82 84% 55%'

// MakeUsBeautiful — forest green
{ accent: "#2d9b6a", bg: "#0a0a0a", fg: "#fafafa", ... }
```

### 3.2. Light/Dark темы

Для PDF всегда поддерживаются **обе темы** — Light и Dark. Пользователь выбирает при скачивании.

```js
const THEMES = {
  light: {
    bg: "#ffffff", fg: "#0f172a",
    muted: "#475569", dim: "#94a3b8",
    accent: "#0d9488",
    border: "#e2e8f0", card: "#f8fafc",
  },
  dark: {
    bg: "#0f172a", fg: "#f1f5f9",
    muted: "#94a3b8", dim: "#64748b",
    accent: "#2dd4bf",
    border: "#334155", card: "#1e293b",
  },
};
```

### 3.3. Типографика

| Элемент | Web (Tailwind) | PDF (pt) |
|---------|---------------|----------|
| H1 (заголовок слайда) | `text-xl sm:text-2xl md:text-5xl` | `26-32` |
| Подзаголовок | `text-sm sm:text-base md:text-xl` | `13-15` |
| Основной текст | `text-xs sm:text-sm md:text-lg` | `12-15` |
| Номер в карточке | `text-lg md:text-2xl` | `20-22` |
| Мелкий текст/теги | `text-[10px] md:text-xs` | `10-11` |
| Лейбл секции | `text-[10px] sm:text-xs md:text-base` | `11-12` |

### 3.4. Правило акцентного цвета в заголовках

> **Переход цвета начинается СРАЗУ после знака препинания** (запятой, тире, двоеточия).
> Предлоги и союзы («к», «а», «чем» и т.д.) включаются в акцентную часть.

```jsx
// ✅ Правильно
<h2>На выходе — не транскрипт, <span className="text-accent">а рабочий документ</span></h2>
<h2>От записи — <span className="text-accent">к структурированному результату</span></h2>

// ❌ Неправильно
<h2>На выходе — не транскрипт, а <span className="text-accent">рабочий документ</span></h2>
```

### 3.5. Нумерация в карточках

Числа в карточках (01, 02, 03...) должны быть заметными:
```jsx
// ✅ Хорошо — видно
<span className="text-accent/70">01</span>

// ❌ Плохо — слишком бледно
<span className="text-accent/30">01</span>
```

---

## 4. Создание веб-слайдов

### 4.1. Контейнер слайда (`SlideContainer`)

Каждый слайд оборачивается в контейнер, который:
- Задаёт фон `bg-background`
- Показывает лейбл секции (вверху слева) и номер слайда (вверху справа)
- Добавляет декоративные градиенты
- Размещает брендинг внизу

```jsx
export const PBSlideContainer = ({ children, number, label, className }) => {
  const TOTAL = 13; // ← Общее число слайдов
  return (
    <div className={cn("w-full h-full flex flex-col relative bg-background", className)}>
      {/* Декоративные градиенты */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle at top right, hsl(174 80% 42%), transparent 70%)' }} />

      {/* Хедер: лейбл + номер */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 pt-3 md:pt-6 shrink-0">
        <span className="font-heading text-[10px] sm:text-xs md:text-base tracking-[0.18em] text-muted-foreground uppercase">
          {label}
        </span>
        <span className="font-body text-[10px] sm:text-xs md:text-base text-muted-foreground">
          {String(number).padStart(2, '0')}&nbsp;/&nbsp;{TOTAL}
        </span>
      </div>

      {/* Контент слайда */}
      <div className="flex-1 overflow-y-auto flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-2 sm:py-4 md:py-6">
        {children}
      </div>
    </div>
  );
};
```

### 4.2. Типовой слайд

```jsx
import { PBSlideContainer } from './PBSlideContainer';

const PBSlide02Problem = () => (
  <PBSlideContainer number={2} label="Проблема">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6">
      Заголовок <span className="text-accent">с акцентом</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-3 sm:mb-5 md:mb-10 max-w-4xl">
      Подзаголовок с описанием
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-6">
      {/* Карточки */}
    </div>
  </PBSlideContainer>
);
export default PBSlide02Problem;
```

### 4.3. Титульный и финальный слайды

Титульный и финальный слайды НЕ используют `SlideContainer` — они имеют собственную центрированную разметку.

### 4.4. Адаптивность

Каждый слайд должен выглядеть хорошо на:
- Мобильном (320-640px)
- Планшете (768-1024px)
- Десктопе (1280+)

Правила:
- Всегда задавать `sm:`, `md:`, `lg:` брейкпоинты для размеров шрифтов, отступов, сеток
- `grid-cols-1 sm:grid-cols-2 md:grid-cols-3` — сетки адаптивны
- Текст не должен обрезаться на мобилке

### 4.5. data-testid

Каждый интерактивный элемент должен иметь `data-testid`:
```jsx
<h2 data-testid="pb-problem-title">...</h2>
<button data-testid="pb-prev-btn">Назад</button>
<button data-testid={`pb-dot-${i}`} />
```

---

## 5. PDF-генератор

### 5.1. Структура файла

```jsx
import React from "react";
import { Document, Page, View, Text, Image, Link, pdf } from "@react-pdf/renderer";
import { registerInterFont, getImageBase } from "./pdf-shared/PdfComponents";

registerInterFont(); // ← Обязательно! Без этого кириллица не работает

const PW = 841.89;  // A4 Landscape width
const PH = 595.28;  // A4 Landscape height

// ← МУТАБЕЛЬНАЯ переменная, НЕ const
let T = THEMES.light;

// ← pg ДОЛЖНА быть ФУНКЦИЕЙ, если T мутабельна
const ps = () => ({
  fontFamily: "Inter",
  width: PW, height: PH,
  backgroundColor: T.bg, color: T.fg,
  padding: 30,
});
```

### 5.2. Критические правила лейаута PDF

> **@react-pdf/renderer рендерит НЕ как браузер.** Многие CSS-свойства работают иначе.

#### ❌ НЕЛЬЗЯ

| Что | Почему |
|-----|--------|
| `flex: 1` + `justifyContent: "center"` на обёртке страницы | Контент уезжает за пределы страницы |
| `const pg = { ... }` при мутабельной теме `T` | Значения закэшируются из первой темы |
| `style={pg}` когда `pg` — функция | Развернётся сама функция, а не её результат |
| `URL.revokeObjectURL()` сразу после `a.click()` | Браузер не успеет начать скачивание |
| `<button onClick={...}>` для скачивания blob | React может удалить элемент из DOM до начала загрузки |

#### ✅ НУЖНО

| Что | Как |
|-----|-----|
| Вертикальная центровка | Обёртка `Body` с `justifyContent: "center"` внутри `<Page>` |
| Динамическая тема | `let T = THEMES.light` + функция `ps()` |
| Явные размеры шрифтов | Всегда указывать `fontSize` на каждом `<Text>` |
| Отступы через `margin`/`padding` | Не полагаться на `gap` (поддержка ограничена) |
| Скачивание через `<a href={blobUrl} download>` | Реальные ссылки, НЕ программные клики |

### 5.3. Компонент Body для центровки

```jsx
const Body = ({ children, num, label }) => (
  <View style={{ flex: 1, padding: "28 36", justifyContent: "center" }}>
    {(num || label) && (
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 16 }}>
        <Text style={{ fontSize: 12, fontWeight: 700, color: T.accent, letterSpacing: 1.5, textTransform: "uppercase" }}>
          {label}
        </Text>
        <Text style={{ fontSize: 12, color: T.dim }}>
          {String(num).padStart(2, "0")} / {TOTAL}
        </Text>
      </View>
    )}
    {children}
  </View>
);

// Использование:
const S02 = () => (
  <Page size={[PW, PH]} style={centeredPage()}>
    <Body num={2} label="ПРОБЛЕМА">
      <H>Заголовок <HA>с акцентом</HA></H>
      <Sub>Подзаголовок</Sub>
      {/* контент */}
    </Body>
  </Page>
);
```

### 5.4. Хелперы

Типовые компоненты для переиспользования в PDF:

```jsx
const H = ({ children }) => (
  <Text style={{ fontSize: 30, fontWeight: 700, color: T.fg, marginBottom: 8, lineHeight: 1.2 }}>
    {children}
  </Text>
);

const HA = ({ children }) => (
  <Text style={{ fontSize: 30, fontWeight: 700, color: T.accent, lineHeight: 1.2 }}>
    {children}
  </Text>
);

const Sub = ({ children }) => (
  <Text style={{ fontSize: 15, color: T.muted, lineHeight: 1.45, marginBottom: 18, maxWidth: 620 }}>
    {children}
  </Text>
);

const Li = ({ children }) => (
  <View style={{ flexDirection: "row", gap: 6, alignItems: "flex-start", marginBottom: 5 }}>
    <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: T.accent, marginTop: 6 }} />
    <Text style={{ fontSize: 14, color: T.muted, lineHeight: 1.45, flex: 1 }}>{children}</Text>
  </View>
);

const Card = ({ children, accent, style }) => (
  <View style={{
    flex: 1, backgroundColor: T.card, borderRadius: 6, padding: 16,
    borderWidth: accent ? 2.5 : 0.5,
    borderColor: accent ? T.accent : T.border,
    ...style
  }}>
    {children}
  </View>
);

const Tag = ({ children }) => (
  <View style={{ backgroundColor: T.accentBg, borderRadius: 3, paddingHorizontal: 8, paddingVertical: 3, alignSelf: "flex-start" }}>
    <Text style={{ fontSize: 11, fontWeight: 700, color: T.accent, letterSpacing: 0.5 }}>{children}</Text>
  </View>
);
```

### 5.5. Заполняемость страницы

> **Каждый слайд PDF должен заполнять минимум 60-70% площади страницы.**

- Заголовки: `fontSize: 28-32`
- Основной текст: `fontSize: 14-16`
- Карточки: `padding: 14-18`
- Используйте `Body` с `justifyContent: "center"` — контент центрируется вертикально

### 5.6. Изображения в PDF

```jsx
<Image
  src={`${imgBase}/images/{folder}/{file}.png`}
  style={{ width: 340, height: 240, objectFit: "contain", borderRadius: 4 }}
/>
```

- `imgBase` передаётся через props из функции генерации
- Используйте `objectFit: "contain"` для сохранения пропорций
- Указывайте явные `width` и `height`

---

## 6. Предгенерация и скачивание PDF

### 6.1. Экспорт функции предгенерации

```jsx
export async function preGenerate{Name}Pdfs() {
  const imgBase = getImageBase(); // или window.location.origin + process.env.PUBLIC_URL

  T = THEMES.light;
  const lightBlob = await pdf(<MyDoc imgBase={imgBase} />).toBlob();

  T = THEMES.dark;
  const darkBlob = await pdf(<MyDoc imgBase={imgBase} />).toBlob();

  return { light: lightBlob, dark: darkBlob };
}
```

### 6.2. Предгенерация при загрузке страницы

PDF генерируется **один раз при монтировании** страницы. Кнопка PDF работает только на скачивание.

```jsx
const [pdfUrls, setPdfUrls] = useState(null);
const [pdfLoading, setPdfLoading] = useState(true);

useEffect(() => {
  let cancelled = false;
  const urls = { light: null, dark: null };

  preGenerate{Name}Pdfs()
    .then(blobs => {
      if (cancelled) return;
      urls.light = URL.createObjectURL(blobs.light);
      urls.dark  = URL.createObjectURL(blobs.dark);
      setPdfUrls(urls);
      setPdfLoading(false);
    })
    .catch(e => { console.error(e); if (!cancelled) setPdfLoading(false); });

  return () => {
    cancelled = true;
    if (urls.light) URL.revokeObjectURL(urls.light);
    if (urls.dark)  URL.revokeObjectURL(urls.dark);
  };
}, []);
```

### 6.3. Дропдаун выбора темы

```jsx
{showThemeMenu && pdfUrls && (
  <div className="absolute bottom-full right-0 mb-2 bg-card border border-border rounded-lg shadow-xl min-w-[170px] z-50">
    <a href={pdfUrls.light}
      download="Presentation_Light.pdf"
      onClick={() => setTimeout(() => setShowThemeMenu(false), 800)}
      className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent/10 flex items-center gap-2.5 no-underline">
      ☀️ Светлая тема
    </a>
    <a href={pdfUrls.dark}
      download="Presentation_Dark.pdf"
      onClick={() => setTimeout(() => setShowThemeMenu(false), 800)}
      className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent/10 border-t border-border flex items-center gap-2.5 no-underline">
      🌙 Тёмная тема
    </a>
  </div>
)}
```

**Критически важно:**
- Используйте реальные `<a href={blobUrl} download={filename}>`, а НЕ `<button onClick={downloadBlob}>`
- `setTimeout(() => setShowThemeMenu(false), 800)` — задержка, чтобы `<a>` не исчезал из DOM до начала загрузки
- `z-index: 50` на дропдаун + `z-index: 20` на нижнюю панель — чтобы дропдаун не перекрывался слайдом

---

## 7. Страница презентации

### 7.1. Нижняя панель

```jsx
<div className="shrink-0 flex items-center justify-between px-3 sm:px-4 md:px-8 py-1.5 sm:py-2 md:py-3
  border-t border-border bg-card/50 backdrop-blur-sm relative z-20">
  {/* ← z-20 обязателен! Иначе слайд перекроет дропдаун PDF */}
  <button>Назад</button>
  <div>{/* Точки навигации */}</div>
  <div>
    {/* PDF-кнопка с дропдауном */}
    <button>Далее</button>
  </div>
</div>
```

### 7.2. Навигация

- **Стрелки клавиатуры**: ArrowRight/ArrowLeft/Space
- **Свайп**: Touch events (опционально)
- **Точки**: Клик по любой точке — переход к слайду
- **Fullscreen**: Кнопка входа/выхода из полноэкранного режима (опционально)

### 7.3. Светлая веб-версия

Для создания светлой версии — переопределите CSS-переменные на корневом контейнере:

```jsx
export default function MyPresentation({ light = false }) {
  return (
    <div style={{
      ...(light ? {
        '--background': '0 0% 100%',
        '--foreground': '240 10% 10%',
        '--card': '210 20% 96%',
        '--muted-foreground': '220 10% 45%',
        '--border': '220 15% 88%',
        // ...
      } : {}),
    }}>
```

---

## 8. Билд и деплой

### 8.1. Билд-скрипт

Каждая презентация имеет отдельный билд-скрипт (`build-{name}.sh`):

```bash
#!/bin/bash
set -e

DEPLOY_DIR="/app/deploy-{name}"
FRONTEND_DIR="/app/frontend"
BASE_PATH="/{name}"

# 1. Очистка
rm -rf "$DEPLOY_DIR" && mkdir -p "$DEPLOY_DIR"

# 2. Бэкап оригинальных файлов
cp "$FRONTEND_DIR/src/App.js" "$FRONTEND_DIR/src/App.js.bak"
cp "$FRONTEND_DIR/.env" "$FRONTEND_DIR/.env.bak"

# 3. Специальный App.js (только одна презентация)
cat > "$FRONTEND_DIR/src/App.js" << 'APPEOF'
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPresentation from "@/pages/MyPresentation";

function App() {
  return (
    <BrowserRouter basename="/{name}">
      <Routes>
        <Route path="/" element={<MyPresentation />} />
        <Route path="*" element={<MyPresentation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
APPEOF

# 4. .env для продакшна
cat > "$FRONTEND_DIR/.env" << ENVEOF
REACT_APP_BACKEND_URL=
PUBLIC_URL=${BASE_PATH}
ENVEOF

# 5. Сборка
cd "$FRONTEND_DIR" && npx craco build 2>&1

# 6. Копирование результата
cp -r "$FRONTEND_DIR/build/"* "$DEPLOY_DIR/"

# 7. Восстановление оригинальных файлов
mv "$FRONTEND_DIR/src/App.js.bak" "$FRONTEND_DIR/src/App.js"
mv "$FRONTEND_DIR/.env.bak" "$FRONTEND_DIR/.env"

# 8. OG-теги
sed -i 's|<title>.*</title>|<title>Заголовок презентации</title>|' "$DEPLOY_DIR/index.html"
# + инъекция og:title, og:description, og:image, og:url, twitter:card
```

### 8.2. OG-изображение

- Размер: **1920×1080**, JPEG, quality=85
- Источник: скриншот титульного слайда (без нижней панели навигации)
- Сохраняется в `public/images/{name}/og-{name}.jpg`

### 8.3. Nginx location

Для каждой презентации добавляется блок:
```nginx
location /{name}/ {
    try_files $uri $uri/ /{name}/index.html;
    add_header Cache-Control "no-cache, no-store, must-revalidate";
}
```

### 8.4. Деплой на сервер

```bash
# 1. Save to GitHub
# 2. На сервере:
cd /tmp && rm -rf Presentations
git clone https://github.com/{repo}/Presentations.git
sudo cp -r /tmp/Presentations/deploy-{name}/* /var/www/presentations/{name}/
sudo chown -R www-data:www-data /var/www/presentations/{name}
# Nginx reload — только если добавлен новый location
sudo docker exec {container-name} nginx -s reload
rm -rf /tmp/Presentations
```

### 8.5. OG-теги и Telegram

> Краулеры Telegram заблокированы в России. Для корректного отображения OG-превью используйте прокси-ссылки:
> `https://s.noteall.ru/presentations/{name}/` вместо `https://presentations.noteall.ru/{name}/`

---

## 9. Чеклист перед сдачей

### Веб-версия
- [ ] Все слайды отображаются (проверить количество точек навигации)
- [ ] Навигация: стрелки, точки, свайп
- [ ] Нумерация слайдов корректная (`NN / TOTAL`)
- [ ] Адаптивность: мобилка, планшет, десктоп
- [ ] Акцентные цвета после знаков препинания (правило из раздела 3.4)
- [ ] `data-testid` на всех интерактивных элементах

### PDF
- [ ] Кнопка PDF показывает дропдаун Light/Dark
- [ ] Оба PDF скачиваются (проверить размер файла > 100 KB)
- [ ] Кириллица отображается корректно (не кракозябры)
- [ ] Контент заполняет ≥60% каждой страницы
- [ ] Вертикальная центровка на всех слайдах
- [ ] Цвета Dark-темы: тёмный фон, светлый текст
- [ ] Цвета Light-темы: белый фон, тёмный текст
- [ ] Изображения отображаются (не битые)

### Билд и деплой
- [ ] Билд-скрипт создан и работает
- [ ] OG-теги инжектированы в `index.html`
- [ ] OG-изображение в deploy-папке
- [ ] Nginx location добавлен в конфиг
- [ ] Страница доступна на продакшне

---

## 10. Известные грабли и решения

### Кириллица в PDF отображается кракозябрами

**Причина:** Шрифт не зарегистрирован или зарегистрирован некорректно.

**Решение:** Использовать `registerInterFont()` из `pdf-shared/PdfComponents.jsx`. НЕ дублировать регистрацию `Font.register` локально. Если дублируете — убедитесь, что URL шрифтов идентичны.

### PDF слайд всегда белый, игнорирует тему

**Причина:** `const T = {...}` вместо `let T`. Или `style={pg}` вместо `style={pg()}`.

**Решение:**
```js
// ✅ let — тему можно менять перед генерацией
let T = THEMES.dark;

// ✅ pg — функция, вызывается каждый раз заново
const pg = () => ({ backgroundColor: T.bg, ... });

// ✅ В JSX вызываем как функцию
<Page style={pg()}>
// Или с расширением:
<Page style={{ ...pg(), justifyContent: "center" }}>
```

### PDF не скачивается при клике

**Причина 1:** `<button onClick={downloadBlob}>` — React удаляет элемент из DOM при `setShowMenu(false)`.

**Решение:** Используйте `<a href={blobUrl} download={filename}>` + `setTimeout` перед закрытием меню.

**Причина 2:** z-index — слайд перекрывает дропдаун.

**Решение:** `relative z-20` на нижней панели навигации.

### Контент в PDF прижат к верху

**Причина:** Отсутствие вертикальной центровки.

**Решение:** Оберните контент в `<Body>` компонент с `justifyContent: "center"`.

НЕ используйте `justifyContent: "center"` на самом `<Page>` — это может вызвать overflow.

### Рамка обрезается в PDF

**Причина:** `@react-pdf/renderer` рендерит `borderWidth` внутрь элемента.

**Решение:** Добавьте `marginTop: 4-6` к элементу с рамкой.

### Buffer is not defined (warning)

**Причина:** Известная проблема `@react-pdf/renderer` v4.x в браузере.

**Решение:** Игнорировать — PDF генерируется корректно несмотря на warning.

---

## Приложение: Существующие презентации

| Название | Роут | Слайдов | Деплой |
|----------|------|---------|--------|
| Noteall Product | `/product` | 14 | `presentations.noteall.ru/product` |
| Noteall Product Short | `/product-short` | 13 | `presentations.noteall.ru/product-short` |
| Noteall x Первый Бит | `/perviy-bit` | 13 | `presentations.noteall.ru/perviy-bit` |
| Emergent Masterclass | `/emergent` | 23 | `presentations.noteall.ru/emergent` |
| AX10 | `/ax10` | 16 | `presentations.noteall.ru/ax10` |
| AX10 One Pager | `/ax10-onepager` | 1 | `presentations.noteall.ru/ax10-onepager` |
| Noteall Invest | `/invest` | 14 | `presentations.noteall.ru/invest` |
| NoteAll One Pager | `/onepager` | 1 | `presentations.noteall.ru/onepager` |
| FranchCamp | `/franchcamp` | 17 | `presentations.noteall.ru/franchcamp` |
| Сделай красиво! | `/makeusbeautiful` | 10 | `presentations.makeusbeautiful.ru/company` |
| Сделай красиво! Light | `/makeusbeautiful-light` | 10 | `presentations.makeusbeautiful.ru/company-light` |
