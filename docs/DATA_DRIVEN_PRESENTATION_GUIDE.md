# Data-Driven Presentation Guide (шаблон `/ai-competitors`)

Эталонная архитектура для быстрого создания новых лекционных презентаций.
Презентация `/ai-competitors` («Анализ конкурентов, SWOT и поиск ниши с помощью ИИ»,
38 слайдов) — референс. Один источник данных → Web-просмотр + PDF (Light/Dark).

---

## 1. Принцип

Вся презентация описывается **одним файлом данных** (массив слайдов из типовых
блоков). Два рендерера читают эти данные:

- **Web** — интерактивный просмотр в браузере (компоненты + Tailwind).
- **PDF** — `@react-pdf/renderer`, A4 Landscape, две темы (Light/Dark),
  предгенерируется при загрузке страницы.

Контент и вёрстка разделены: чтобы изменить текст — правим только данные;
чтобы изменить вид блока — правим примитив в двух рендерерах.

---

## 2. Структура файлов

```
/app/frontend/src/
├── data/
│   └── aiCompetitorsSlides.js          # ИСТОЧНИК ИСТИНЫ: контент + схема блоков
├── components/
│   ├── ai-slides/
│   │   └── AICContainer.jsx            # Web-рендерер (примитивы + Block switch)
│   └── AICompetitorsPdfGenerator.jsx   # PDF-рендерер (примитивы + renderBlock)
└── pages/
    └── AICompetitorsPresentation.jsx   # Страница: навигация, dot-bar, PDF-меню
```

Роут регистрируется в `/app/frontend/src/App.js`:
```jsx
import AICompetitorsPresentation from "@/pages/AICompetitorsPresentation";
<Route path="/ai-competitors" element={<AICompetitorsPresentation />} />
```

Общие PDF-утилиты (шрифт, путь к картинкам): `components/pdf-shared/PdfComponents.jsx`
(`registerInterFont`, `getImageBase`).

---

## 3. Схема данных (`data/*.js`)

Экспортируется:
- `LECTURER` — `{ name, role, photo }` (фото из `/public/...`).
- `COVER` — `{ kicker, title, subtitle }` для титульного слайда.
- `SLIDES` — массив слайдов.
- `TOTAL = SLIDES.length + 1` (+1 — титульный).
- `fmtList(items)` — форматирование булитов (см. §4).
- `isDense(slide)` — флаг плотности слайда (см. §5).

### Слайд

```js
{
  // n — необязательное информационное поле; нумерация в шапке вычисляется по
  //     позиции в массиве (см. §8), поэтому при вставке слайдов n можно не трогать.
  n: 12,
  dense: false,            // (опц.) принудительно переопределить плотность шрифта
  label: "Промпт",         // кикер в шапке (UPPERCASE)
  t: "Как ставить",        // заголовок (тёмный)
  a: "задачу ИИ",          // акцентная (teal) часть заголовка — печатается после t
  final: true,             // (опц.) добавляет блок лектора внизу (финальный слайд)
  blocks: [ /* массив блоков */ ],
}
```

### Типы блоков (`b.k`)

| `k`        | Поля | Назначение |
|------------|------|------------|
| `lead`     | `text` | Вводный абзац (приглушённый). |
| `note`     | `text` | Подсветка-вывод (карточка с левой teal-полосой). |
| `callout`  | `title, text` | Цитата/пример (карточка с заголовком). |
| `bul`      | `eyebrow?, items[], cols(1\|2\|3)` | Маркированный список (см. §4). |
| `cards`    | `items[{n?,title?,desc?}], cols(2\|3\|4)` | Карточки с верхней teal-полосой. |
| `compare`  | `items[{name,strong,weak}]` | 3 колонки: сильные/слабые стороны. |
| `pairs`    | `items[{weak,strong}]` | Пары «слабо → сильнее». |
| `prompt`   | `intro, paras[]` | Нумерованный промпт в карточке. |
| `swot`     | `s[],w[],o[],t[]` | 4 квадранта SWOT (цвет-код: pos/neg). |
| `map`      | `x,y,points[{label,desc}],hypothesis?` | Текстовая карта (оси + точки). |
| `quadrant` | `x{left,right},y{bottom,top},points[{x,y,label,hl?}],zone?{x,y,w,h},insight?` | **Визуальная** карта позиционирования: оси, зона ниши, нумерованные маркеры + легенда. |
| `actions`  | `items[{factor,action}]` | Строки «фактор → действие». |
| `groups`   | `items[{title,items[]}]` | 3 колонки сгруппированных списков. |
| `formula`  | `text` | Центрированная формула в teal-плашке. |

#### Блок `quadrant` (координаты)
- `points[].x` / `.y` ∈ `[0..1]`: `x` — слева(0)→справа(1), `y` — снизу(0)→сверху(1).
- `hl: true` — выделенный (teal) маркер «Новый продукт».
- `zone {x,y,w,h}` — прямоугольник ниши; `(x,y)` — **левый нижний** угол в долях.
- `insight` — короткий вывод под легендой.

---

## 4. Правило булитов (`fmtList`)

Каждый пункт: с заглавной буквы, «;» в конце, последний — «.».

```js
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const stripEnd = (s) => s.replace(/[.;]+\s*$/, "").trim();
export const fmtList = (items) =>
  items.map((it, i) => cap(stripEnd(it)) + (i === items.length - 1 ? "." : ";"));
```

В данных пункты пишутся в нижнем регистре без знаков препинания — `fmtList`
приводит их к правилу в обоих рендерерах (`bul`, `swot`, `groups`).

---

## 5. Типографика (важно!)

Строгое правило заказчика: **1 размер заголовка + максимум 2 размера основного текста.**

- **Заголовок** — единый размер (`TITLE`).
- **Основной текст** — два размера: основной (`PB`/`BP`) и меньший для плотных
  слайдов (`SB`/`BS`).

```js
// Web (AICContainer.jsx)
const TITLE = "text-xl sm:text-3xl md:text-5xl";
const PB = "text-sm sm:text-base md:text-xl";        // основной (эталон — слайд 12)
const SB = "text-[13px] sm:text-sm md:text-base";    // меньший (плотные слайды)

// PDF (AICompetitorsPdfGenerator.jsx)
const TITLE = 28;  const BP = 14;  const BS = 11;
```

Выбор размера — через `isDense(slide)`:
```js
export const isDense = (s) => {
  if (typeof s.dense === "boolean") return s.dense;   // явное переопределение
  return (s.blocks || []).some((b) =>
    (b.k === "bul" && ((b.items && b.items.length >= 8) || b.cols === 3)) ||
    ["compare", "swot", "map", "groups"].includes(b.k) ||
    (b.k === "cards" && b.items && b.items.length >= 5)
  );
};
```
Если автоопределение даёт нежелательный результат — ставим `dense: false` (или `true`)
прямо на слайде. Это нужно, когда визуально слайд просторный, но по эвристике
считается плотным (пример: слайды «Вопросы»/«Чек-лист»/«Жалобы»).

Web прокидывает плотность через `DenseCtx`; PDF — через проп `bs` в примитивы.

---

## 6. Web-рендерер (`AICContainer.jsx`)

- `AICShell` — каркас слайда: фон, декоративные радиальные пятна, шапка
  (label слева, «… · NN / TOTAL» справа), скролл-контейнер по центру.
- Примитивы: `H2, Lead, Eyebrow, Note, Callout, Bullet(s), Cards, Compare,
  Pairs, Prompt, Swot, MapAxes, Quadrant, Actions, Groups, Formula`.
- `Block` — switch по `b.k` → нужный примитив.
- `AICStandardSlide({ slide, num })` — оборачивает блоки, добавляет лектора при `final`.
- `Lecturer` — фото + имя + роль (используется на титуле и финале).
- Тема изолирована классом `theme-tochka` (teal `--accent`) на корне страницы —
  не влияет на другие презентации.

**Акцент в заголовке**: акцентной делается часть `a` (после `t`). Цвет меняется
сразу после знака препинания; предлоги/союзы включаются в акцентную часть.

---

## 7. PDF-рендерер (`AICompetitorsPdfGenerator.jsx`)

- `THEMES = { light, dark }`; активная тема — модульная переменная `T`.
- `preGenerateAICPdfs()` рендерит обе темы (`pdf(<Deck/>).toBlob()`), возвращает
  `{ light, dark }` (Blob). Страница создаёт blob-URL и отдаёт через `<a download>`.
- `Cover` (титульный) → `ContentPage` × N. Лектор — на cover и `final`.
- Примитивы зеркалят Web; размеры в точках (A4 Landscape: 841.89 × 595.28).

### ⚠️ Грабли `@react-pdf/renderer` (обязательно соблюдать)

1. **Нет CSS-шорткатов бордера.** Только longhand:
   `borderTopWidth/Color`, `borderLeftWidth/Color`, … Шорткат `border`/`borderTop`
   ломает рендер.
2. **`borderWidth: 0` ломает рендер** → ошибка `Invalid border width: undefined`
   (0 — falsy, парсер бордера получает `undefined`). Для безбордерных элементов
   border-свойства **не задавать вовсе** (условно подмешивать объект стиля).
3. **`gap` / `columnGap` / `rowGap`** поддерживаются (react-pdf 4.x). Для раскладки
   карточек используем `flexWrap: "wrap"` + `justifyContent: "flex-start"` +
   `columnGap` (НЕ `space-between`, иначе остаток строки «распирается» по краям —
   например 5-я карточка уезжает в 3-ю колонку вместо 2-й).
4. **Абсолютное позиционирование** работает (`position:"absolute"`, `left/top` в
   точках или процентах). Блок `quadrant` строится так: фикс. размер плота
   (W×H в pt) + точки по формуле `left = x*W`, `top = (1-y)*H`.
5. **Шрифт** регистрируется из gstatic (`registerInterFont`). В офлайн-окружении
   используется fallback — на вёрстку влияет мало, но текст лучше проверять.
6. **Картинки** (`<Image src>`): в браузере путь строится из `getImageBase()`
   (origin + PUBLIC_URL). Файлы — в `/app/frontend/public/...`.

---

## 8. Нумерация слайдов (индексная)

Номер в шапке вычисляется **по позиции в массиве**, а не по полю `n`:

```jsx
// Page: cover = 1, SLIDES[current-1] = current+1
<AICStandardSlide slide={SLIDES[current - 1]} num={current + 1} />

// PDF Deck:
{SLIDES.map((s, idx) => <ContentPage key={idx} slide={s} num={idx + 2} />)}
```

➡️ **Вставка/удаление слайдов не требует ручной перенумерации.** `TOTAL`
пересчитывается автоматически (`SLIDES.length + 1`), dot-bar и шапки подхватывают.

---

## 9. Как создать НОВУЮ презентацию (чек-лист)

1. **Данные.** Скопировать `data/aiCompetitorsSlides.js` →
   `data/<name>Slides.js`. Заменить `COVER`, `LECTURER`, `SLIDES`. Текст брать
   дословно из исходника (docx). Булиты — нижним регистром без пунктуации.
2. **Web.** Скопировать `components/ai-slides/AICContainer.jsx` →
   `components/<x>-slides/<X>Container.jsx`. Переименовать импорт данных,
   контексты (`AICTotal`/`DenseCtx`), data-testid префикс. Если нужны новые типы
   блоков — добавить примитив + кейс в `Block`.
3. **PDF.** Скопировать `AICompetitorsPdfGenerator.jsx` →
   `<X>PdfGenerator.jsx`. Обновить импорт данных, заголовок шапки, имена файлов
   PDF (`<X>_Light.pdf` / `_Dark.pdf`), палитру `THEMES` при необходимости.
4. **Страница.** Скопировать `pages/AICompetitorsPresentation.jsx` →
   `pages/<X>Presentation.jsx`. Обновить импорты, `document.title`, `CoverSlide`,
   data-testid, класс темы.
5. **Роут.** Добавить `<Route path="/<route>" .../>` в `App.js`.
6. **Тема.** Если акцент другой — добавить изолированный класс в `index.css`
   (`.theme-<x> { --accent: <H S% L%> }`), обернуть корень страницы этим классом.
7. **Картинки** (фото лектора, лого) — в `/app/frontend/public/images/<x>/`.
8. **Проверка** (см. §10): Web-скриншоты + рендер PDF в Node.

> Бэклог-рефактор: вынести общие PDF-примитивы трёх презентаций
> (`StartupMarket`, `Tochka`, `AICompetitors`) в `components/pdf-shared/`.

---

## 10. Проверка / тестирование

### Web
Скриншот-тулом по `${REACT_APP_BACKEND_URL}/<route>`, навигация стрелками
(`ArrowRight`). Проверять переполнение, акцент темы, корректность блоков.
`current = displayedNum - 1` (титул = 0).

### PDF (рендер в Node, без браузера)
`@react-pdf` рендерит и в Node (шрифт тянется с gstatic; картинки — по локальному
пути, если выставить `global.window.location.origin = "/app/frontend/public"`).

Алгоритм (одноразовый скрипт в `/app/frontend`, чтобы резолвился `node_modules`):
1. `@babel/core` + пресеты `@babel/preset-env` (target node) и `@babel/preset-react`
   транспилируют 3 файла (данные, PDF-примитивы, PDF-генератор); заменить алиасы
   `@/data/...` → относительные пути.
2. `require` собранного генератора → `await preGenerateAICPdfs()` →
   `Buffer.from(await blob.arrayBuffer())` → записать `.pdf`.
3. Постранично в PNG через **PyMuPDF** (`fitz`): `doc[p].get_pixmap(dpi=95).save(...)`.
4. Картинку положить в `/app/frontend/public/` и открыть скриншот-тулом
   (или склеить страницы в монтаж через PIL). Проверить число страниц
   (`doc.page_count == TOTAL`), отсутствие обрезки, цвета/раскладку.
5. Удалить временные файлы из `public/` и `/tmp`.

Признаки успеха: PDF генерируется без `PDF pre-gen failed` в консоли;
число страниц = `TOTAL`; нет обрезки текста; обе темы валидны.

---

## 11. История `/ai-competitors` (для контекста)

- 35 → **38 слайдов**: добавлены 3 визуальных квадранта (`quadrant`) после карт.
- Единая типографика (1 заголовок + 2 размера тела); `isDense` + флаг `dense`.
- Индексная нумерация.
- В PDF: 5-я карточка под 2-й (Cards: `flex-start` + `columnGap`);
  увеличенный шрифт на просторных слайдах (`dense:false`); яркие (teal) подписи осей.
- Лектор: Дмитрий Бондарев, руководитель департамента аналитики hop.agency
  (фото `/images/tochka/speaker.png`).

Подробный журнал изменений — в `/app/memory/PRD.md`.
