# Style Guide: Перенос веб-дизайна в PDF
## @react-pdf/renderer — практическое руководство

---

## 1. Общие принципы

### Зачем отдельный дизайн для PDF?
Веб-компоненты (HTML/CSS) и PDF-компоненты (@react-pdf/renderer) — это **разные движки рендеринга**. Попытки "конвертировать" HTML в PDF через html2canvas всегда дают плохой результат: проблемы с layout, шрифтами, масштабированием.

**Правило #1**: PDF — это отдельный продукт. Используйте **общие дизайн-токены** (цвета, шрифты, spacing), но **раздельные компоненты**.

---

## 2. Технические ограничения @react-pdf/renderer

| Возможность | Веб (HTML/CSS) | PDF (@react-pdf/renderer) |
|---|---|---|
| Layout | CSS Grid + Flexbox | **Только Flexbox** |
| Z-index | Поддерживается | **Painter's algorithm** (порядок рендера) |
| Шрифты | @font-face (woff2, ttf) | **Только TTF** (регистрация через Font.register) |
| Анимации | CSS / framer-motion | **Не поддерживаются** |
| Градиенты | CSS linear/radial-gradient | **SVG linearGradient** (ограниченно) |
| Тени | box-shadow, text-shadow | **Не поддерживаются** (имитация через Svg) |
| Иконки | SVG / Icon fonts | **SVG примитивы** (Circle, Rect, Path, Line) |
| Единицы | px, rem, em, vh, % | **pt, %, flexbox** (1pt ≈ 1/72 дюйма) |

---

## 3. Типографика: px → pt

PDF использует **points (pt)** — физическую единицу (1pt = 1/72 дюйма).
Экранные пиксели — относительные единицы.

### Формула перевода
```
PDF_pt = Web_px × 0.55–0.65
```

### Рекомендуемая шкала

| Роль | Веб (px) | PDF (pt) | fontWeight |
|---|---|---|---|
| H1 (заголовок страницы) | 56–64px | 30–36pt | 700 |
| H2 (секция) | 40–48px | 26–30pt | 700 |
| H3 (подзаголовок) | 24–32px | 16–20pt | 600 |
| Body (основной текст) | 16–18px | 11–13pt | 400 |
| Caption (подписи) | 12–14px | 8–10pt | 400 |
| Label (метки) | 10–12px | 7–8pt | 700, uppercase |

### Межстрочный интервал (lineHeight)
- Заголовки: 1.15–1.25
- Тело: 1.45–1.6
- Капшены: 1.3

### Letter spacing
- H1/H2: -0.5 (tighter для крупных шрифтов)
- Labels: +1.5 (wider для uppercase)

---

## 4. Цвета: адаптация для печати

### Тёмная тема в PDF
Тёмные фоны в PDF **потребляют много тонера** при печати. Но для **экранного PDF** (отправка по email, показ на мониторе) тёмная тема — ОК.

### Рекомендации
- Фон: `#0a0a2e` (глубокий тёмно-синий, не чёрный)
- Текст: `#fafafa` (не чистый #fff — слишком контрастно)
- Muted текст: `#8b92ab` (должен быть читаемым при zoom 100%)
- Акцент: `#e8663c` (коралловый — хорошо контрастирует на тёмном)
- Карточки: `#141442` (чуть светлее фона — создаёт глубину)
- Граница: `#2a2a5c` (тонкая, opacity 0.6–0.8)

### Контрастность
Проверяйте контраст мелкого текста (caption, label) на тёмном фоне:
- Минимум: WCAG AA (4.5:1 для мелкого текста)
- `#6b7190` на `#0a0a2e` даёт ~3.8:1 — допустимо для caption, но не для body

---

## 5. Spacing: система отступов

### Страничные отступы (padding)
```
A4 Landscape: 841.89 × 595.28 pt
Рабочая область при padding 40pt: 761.89 × 515.28 pt
```

Рекомендуемый padding: **36–44pt** (≈ 13–15mm)

### Система spacing
```
gap_xs:     4pt
gap_small:  8pt
gap_medium: 14–16pt
gap_large:  24–32pt
gap_xl:     40–48pt
```

### Правила
- Между заголовком и контентом: `gap_large` (24–32pt)
- Между карточками: `gap_medium` (12–16pt)
- Внутри карточки: `padding: 18–24pt`
- Header (label + номер): `marginBottom: 14–18pt`
- Footer (бренд): `position: absolute, bottom: 14–18pt`

---

## 6. Layout: Flexbox вместо Grid

### CSS Grid → Flexbox
```jsx
// ВЕБ: CSS Grid 3 колонки
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 16px;

// PDF: Flexbox 3 колонки
<View style={{ flexDirection: "row", gap: 14 }}>
  <View style={{ flex: 1 }}>...</View>
  <View style={{ flex: 1 }}>...</View>
  <View style={{ flex: 1 }}>...</View>
</View>
```

### Процентная ширина для wrap
```jsx
// 3×3 grid с wrap
<View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
  <View style={{ width: "31.5%" }}>...</View>
  ...
</View>
```

### Вертикальное центрирование
```jsx
<View style={{ flex: 1, justifyContent: "center" }}>
  {/* контент */}
</View>
```

---

## 7. Компоненты: веб → PDF

### Карточка (Card)
```jsx
// ВЕБ
<div className="bg-card rounded-lg border p-6">

// PDF
<View style={{
  backgroundColor: "#141442",
  borderRadius: 8,
  borderWidth: 1,
  borderColor: "#2a2a5c",
  padding: 20,
}}>
```

### Badge
```jsx
<View style={{
  backgroundColor: "rgba(232,102,60,0.12)",  // полупрозрачный акцент
  borderRadius: 4,
  padding: "3 10",
  alignSelf: "flex-start",
}}>
  <Text style={{ fontSize: 8, fontWeight: 700, letterSpacing: 1.2, color: "#e8663c" }}>
    ТЕКСТ
  </Text>
</View>
```

### Разделитель
```jsx
<View style={{
  width: 50,
  height: 1.5,
  backgroundColor: "#2a2a5c",
  opacity: 0.6,
}} />
```

### SVG-иконки
Используйте простые геометрические формы вместо Lucide/FontAwesome:
```jsx
// Мишень (Target)
<Svg width={40} height={40}>
  <Circle cx={20} cy={20} r={18} fill="none" stroke="#e8663c" strokeWidth={1.5} />
  <Circle cx={20} cy={20} r={10} fill="none" stroke="#e8663c" strokeWidth={1.5} />
  <Circle cx={20} cy={20} r={3} fill="#e8663c" />
</Svg>
```

---

## 8. Шрифты: критические правила

### Кириллица
- **Не все Google Fonts имеют кириллицу в TTF!** (Space Grotesk — пример)
- Google Fonts API возвращает TTF для non-browser agents → часто Latin-only
- **Проверяйте**: загрузите TTF и проверьте Unicode range U+0400–U+04FF
- **Безопасные шрифты с кириллицей**: Inter, Roboto, Open Sans, Montserrat, Manrope, PT Sans/Serif, Noto Sans

### Font.register()
```jsx
Font.register({
  family: "Inter",
  fonts: [
    { src: "https://fonts.gstatic.com/.../Inter-Regular.ttf", fontWeight: 400 },
    { src: "https://fonts.gstatic.com/.../Inter-SemiBold.ttf", fontWeight: 600 },
    { src: "https://fonts.gstatic.com/.../Inter-Bold.ttf", fontWeight: 700 },
  ],
});
```

### Используйте один шрифт
Для надёжности используйте **один** шрифт-семью (Inter) с разными весами.
Различие заголовков и тела — через size/weight/letterSpacing.

---

## 9. Визуальная глубина без теней и градиентов

### Приёмы:
1. **Многослойные фоны**: bg → bg2 → bg3 (3 уровня яркости)
2. **SVG-декорации**: круги и линии с opacity 0.03–0.05
3. **Accent borders**: `borderLeftWidth: 3, borderLeftColor: accent`
4. **Render order** (painter's algorithm): фоновые элементы рендерятся первыми
5. **Вертикальные разделители** между колонками: opacity 0.3–0.4

---

## 10. Чек-лист перед релизом PDF

- [ ] Все тексты отображаются корректно (кириллица!)
- [ ] Шрифты встроены в PDF (не зависят от системных)
- [ ] Контент не обрезается на границах страницы
- [ ] Мелкий текст читаем при zoom 100%
- [ ] Карточки не пустые (flex: 1 растягивает)
- [ ] Номера страниц корректные
- [ ] Бренд-footer на каждой странице
- [ ] Текст выделяемый (не изображение)
- [ ] Файл < 500KB (вектор, не растр)
- [ ] Тестирование на разных PDF-reader'ах (Chrome, Preview, Acrobat)

---

## 11. Сравнение подходов генерации PDF

| Подход | Плюсы | Минусы |
|---|---|---|
| **html2canvas + jsPDF** | Рендерит любой HTML | Растр (тяжёлый), нечёткий текст, проблемы с flexbox/CSS |
| **window.print()** | Нативный, идеальный рендер | Только print dialog, нет программного контроля |
| **@react-pdf/renderer** | Вектор, лёгкий, выделяемый текст, flexbox | Свои компоненты (не HTML), нет Grid, ограниченный SVG |
| **Puppeteer (server)** | Идеальный HTML→PDF | Требует сервер, тяжёлый |

**Рекомендация**: `@react-pdf/renderer` для программной генерации на клиенте.
`Puppeteer` — если нужен 1:1 перенос HTML.

---

*Документ подготовлен на основе опыта разработки PDF для проекта Hop.Agency × Ростелеком.*
