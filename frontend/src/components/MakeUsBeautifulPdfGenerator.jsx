/**
 * MakeUsBeautiful PDF Generator
 * Built with @react-pdf/renderer
 *
 * Design: Dark theme with green accent (matching makeusbeautiful.ru)
 * Font: Inter (with Cyrillic)
 * Page: A4 Landscape (841.89 x 595.28 pt)
 * Slides: 10
 */
import React from "react";
import {
  Document, Page, View, Text, StyleSheet, Font, Svg, Circle, pdf,
} from "@react-pdf/renderer";

Font.register({
  family: "Inter",
  fonts: [
    { src: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf", fontWeight: 400 },
    { src: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYMZg.ttf", fontWeight: 600 },
    { src: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZg.ttf", fontWeight: 700 },
  ],
});

const T = {
  bg:      "#0a0a0a",
  bg2:     "#141414",
  fg:      "#fafafa",
  fg2:     "#d0d4d8",
  muted:   "#8b9296",
  dim:     "#6b7074",
  accent:  "#2d9b6a",
  accent2: "#3dc484",
  accentBg:"rgba(45,155,106,0.12)",
  border:  "#1e2a24",
  border2: "#2a3d32",
};

const PW = 841.89;
const PH = 595.28;
const PAD = 40;
const TOTAL = 10;

const s = StyleSheet.create({
  page: {
    width: PW, height: PH, backgroundColor: T.bg, color: T.fg,
    fontFamily: "Inter", fontSize: 11, padding: PAD,
    position: "relative", overflow: "hidden",
  },
  h1: { fontWeight: 700, fontSize: 34, letterSpacing: -0.5, lineHeight: 1.2 },
  h2: { fontWeight: 700, fontSize: 28, letterSpacing: -0.5, lineHeight: 1.2 },
  h3: { fontWeight: 600, fontSize: 18, lineHeight: 1.3 },
  body: { fontWeight: 400, fontSize: 11, lineHeight: 1.55, color: T.muted },
  caption: { fontWeight: 400, fontSize: 9, color: T.dim },
  label: { fontWeight: 700, fontSize: 8, letterSpacing: 1.5, textTransform: "uppercase", color: T.muted },
});

const Header = ({ label, num }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexShrink: 0 }}>
    {label ? <Text style={s.label}>{label}</Text> : <View />}
    {num && <Text style={{ fontSize: 8, color: T.dim }}>{String(num).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}</Text>}
  </View>
);

const Brand = () => (
  <Text style={{ position: "absolute", bottom: 16, left: PAD, fontSize: 7, letterSpacing: 1.8, color: "#2a3d32" }}>
    СДЕЛАЙ<Text style={{ color: T.accent }}> КРАСИВО</Text>
  </Text>
);

const Dot = ({ size = 5 }) => (
  <Svg width={size} height={size} style={{ marginTop: 4, flexShrink: 0 }}>
    <Circle cx={size / 2} cy={size / 2} r={size / 2} fill={T.accent} />
  </Svg>
);

const Badge = ({ children, solid }) => (
  <View style={{
    backgroundColor: solid ? T.accent : T.accentBg,
    borderRadius: 4, padding: "3 10", alignSelf: "flex-start",
  }}>
    <Text style={{ fontSize: 8, fontWeight: 700, letterSpacing: 1.2, color: solid ? "#fff" : T.accent }}>
      {children}
    </Text>
  </View>
);

const Card = ({ children, accentBorder, style }) => (
  <View style={[{
    backgroundColor: T.bg2, borderRadius: 8,
    borderWidth: 1, borderColor: T.border, padding: 20,
  }, accentBorder && { borderLeftWidth: 3, borderLeftColor: T.accent }, style]}>
    {children}
  </View>
);

const Divider = ({ width = 50, color = T.border, mt = 0, mb = 0 }) => (
  <View style={{ width, height: 1.5, backgroundColor: color, marginTop: mt, marginBottom: mb, opacity: 0.6 }} />
);

const NumBadge = ({ n }) => (
  <View style={{
    width: 28, height: 28, borderRadius: 6, backgroundColor: T.accentBg,
    justifyContent: "center", alignItems: "center", marginBottom: 14,
  }}>
    <Text style={{ color: T.accent, fontSize: 13, fontWeight: 700 }}>{n}</Text>
  </View>
);

const BgDeco = () => (
  <View style={{ position: "absolute", top: 0, right: 0, width: 300, height: 300, overflow: "hidden" }}>
    <Svg width={300} height={300}>
      <Circle cx={220} cy={80} r={140} fill="none" stroke={T.accent} strokeWidth={0.5} opacity={0.06} />
      <Circle cx={220} cy={80} r={80} fill="none" stroke={T.accent} strokeWidth={0.5} opacity={0.04} />
    </Svg>
  </View>
);

/* SLIDE 1: COVER */
const S1 = () => (
  <Page size={[PW, PH]} style={[s.page, { justifyContent: "center", alignItems: "center" }]}>
    <BgDeco />
    <Text style={{ fontSize: 18, fontWeight: 700, letterSpacing: 4, marginBottom: 40, color: T.fg }}>
      СДЕЛАЙ<Text style={{ color: T.accent }}> КРАСИВО!</Text>
    </Text>
    <Badge>СЕЗОННЫЙ ДЕКОР ПОД КЛЮЧ</Badge>
    <Text style={[s.h1, { fontSize: 32, textAlign: "center", maxWidth: 620, marginTop: 20 }]}>
      Оформляем так, чтобы{"\n"}<Text style={{ color: T.accent }}>к вам заходили</Text>
    </Text>
    <Text style={{ fontSize: 12, color: T.muted, marginTop: 20, textAlign: "center", maxWidth: 520, lineHeight: 1.6 }}>
      Входные группы, витрины и фасады для ресторанов, кофеен и магазинов.
      Концепция, смета, материалы, монтаж и демонтаж.
    </Text>
    <Divider width={50} color={T.accent} mt={28} mb={16} />
    <Text style={{ fontSize: 10, color: T.dim, textAlign: "center", maxWidth: 480, lineHeight: 1.5 }}>
      Чтобы вашу точку заметили с улицы и выбрали в сезон
    </Text>
  </Page>
);

/* SLIDE 2: PROBLEM */
const S2 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Зачем это нужно" num={2} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 28, marginBottom: 20 }]}>
        Решение принимается <Text style={{ color: T.accent }}>на улице</Text>
      </Text>
      <Text style={[s.body, { fontSize: 11, lineHeight: 1.7, marginBottom: 18 }]}>
        В офлайн-бизнесе у вас есть 3 секунды. Прохожий видит фасад, витрину, вход — и решает:
        зайти или пройти мимо. Сезонный декор работает как визуальная реклама.
      </Text>
      <View style={{ gap: 10, marginBottom: 20 }}>
        {[
          "Без декора — вы один из многих. С декором — вас замечают и выбирают",
          "Прохожий останавливается, фотографирует, заходит. Пост в соцсетях — бесплатная реклама",
          "Конкуренция усиливается в декабре, к 8 Марта, в сезон распродаж",
        ].map((t, i) => (
          <View key={i} style={{ flexDirection: "row", gap: 8, alignItems: "flex-start" }}>
            <Dot size={5} />
            <Text style={{ fontSize: 10, color: T.fg2, lineHeight: 1.5, flex: 1 }}>{t}</Text>
          </View>
        ))}
      </View>
      <Card accentBorder style={{ padding: 14 }}>
        <Text style={{ fontSize: 11, color: T.fg2, lineHeight: 1.5 }}>
          <Text style={{ fontWeight: 600, color: T.fg }}>Ключевой тезис: </Text>
          если не украсить — покупатель будет разочарован и уйдёт к конкурентам.
          Декор — это не расход, а инвестиция в трафик.
        </Text>
      </Card>
    </View>
    <Brand />
  </Page>
);

/* SLIDE 3: DATA */
const dataStats = [
  { n: "+30–50%", l: "посетителей от витрины", src: "NZR" },
  { n: "+20%", l: "пешеходного трафика", src: "ICSC" },
  { n: "+15%", l: "продаж в сезон", src: "Deloitte" },
  { n: "90%", l: "учитывают декор", src: "NRF" },
];
const extraStats = [
  { n: "+10–15%", l: "средний чек (РФ)" },
  { n: "+30%", l: "длительность визита" },
  { n: "58%", l: "вдохновляются через соцсети" },
];
const S3 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Цифры" num={3} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 28, marginBottom: 6 }]}>
        Декор <Text style={{ color: T.accent }}>работает</Text>
      </Text>
      <Text style={[s.body, { marginBottom: 20 }]}>
        Данные отраслевых исследований и кейсов из России и международной практики
      </Text>
      <View style={{ flexDirection: "row", gap: 12, marginBottom: 16 }}>
        {dataStats.map((st, i) => (
          <Card key={i} style={{ flex: 1, padding: 16 }}>
            <Text style={{ fontSize: 22, fontWeight: 700, color: T.accent, lineHeight: 1 }}>{st.n}</Text>
            <Text style={{ fontSize: 9, color: T.fg2, marginTop: 6 }}>{st.l}</Text>
            <Text style={{ fontSize: 7, color: T.dim, marginTop: 4 }}>{st.src}</Text>
          </Card>
        ))}
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        {extraStats.map((st, i) => (
          <View key={i} style={{ flex: 1, backgroundColor: T.bg2, borderRadius: 6, padding: 10, borderWidth: 1, borderColor: T.border }}>
            <Text style={{ fontSize: 16, fontWeight: 700, color: T.accent, opacity: 0.8 }}>{st.n}</Text>
            <Text style={{ fontSize: 8, color: T.muted, marginTop: 4 }}>{st.l}</Text>
          </View>
        ))}
      </View>
      <Text style={{ fontSize: 8, color: T.dim, marginTop: 14, fontStyle: "italic" }}>
        Фактический эффект зависит от локации, предложения и сервиса.
      </Text>
    </View>
    <Brand />
  </Page>
);

/* SLIDE 4: ABOUT */
const S4 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="О нас" num={4} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 28, marginBottom: 6 }]}>
        Декор как <Text style={{ color: T.accent }}>бизнес-инструмент</Text>
      </Text>
      <Text style={[s.body, { marginBottom: 20 }]}>
        Мы понимаем задачи бизнеса изнутри — и смотрим на оформление как на способ увеличить трафик и выручку
      </Text>
      <View style={{ flexDirection: "row", gap: 14 }}>
        <View style={{ flex: 1.2 }}>
          <Card style={{ padding: 16, marginBottom: 12 }}>
            <Text style={{ fontSize: 13, fontWeight: 700, color: T.fg, marginBottom: 4 }}>Наталья Ромашова</Text>
            <Text style={{ fontSize: 10, color: T.fg2, lineHeight: 1.5 }}>
              Ведущий менеджер по аренде в крупнейшей сети ТРК Санкт-Петербурга. Работала с ритейл-брендами, ресторанами и операторами фастфуда.
            </Text>
          </Card>
          <Card style={{ padding: 16 }}>
            <Text style={{ fontSize: 13, fontWeight: 700, color: T.fg, marginBottom: 4 }}>Мария Алехина</Text>
            <Text style={{ fontSize: 10, color: T.fg2, lineHeight: 1.5 }}>
              Менеджер по развитию крупных сетевых ритейлеров. Понимает задачи ритейл-бизнеса изнутри — от операционки до маркетинга.
            </Text>
          </Card>
        </View>
        <View style={{ flex: 0.8 }}>
          <Card style={{ padding: 20, height: "100%", justifyContent: "center" }}>
            <Text style={{ fontSize: 48, fontWeight: 700, color: T.accent, lineHeight: 1 }}>30+</Text>
            <Text style={{ fontSize: 14, fontWeight: 600, color: T.fg, marginTop: 10 }}>лет в коммерции</Text>
            <Text style={{ fontSize: 10, color: T.muted, marginTop: 6, lineHeight: 1.5 }}>
              Суммарный опыт в управлении коммерческой недвижимостью и развитии сетевого ритейла
            </Text>
            <Divider width={30} color={T.accent} mt={12} mb={8} />
            <Text style={{ fontSize: 9, color: T.dim }}>Санкт-Петербург</Text>
          </Card>
        </View>
      </View>
    </View>
    <Brand />
  </Page>
);

/* SLIDE 5: SERVICES */
const seasons = [
  { tag: "ДЕК", title: "Новый год", desc: "Хвоя, огни, композиции, фотозоны" },
  { tag: "МАРТ", title: "8 Марта", desc: "Весенний декор в фирменных цветах" },
  { tag: "АПР", title: "Пасха", desc: "Светлые композиции, венки, подсветка" },
  { tag: "МАЙ", title: "День Победы", desc: "Торжественное оформление, символика" },
  { tag: "ЛЕТО", title: "Летний декор", desc: "Зелень, гирлянды, фототочки" },
  { tag: "ОСЕНЬ", title: "Осенний декор", desc: "Тёплая палитра, ветви, подсветка" },
];
const S5 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Услуги" num={5} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 28, marginBottom: 6 }]}>
        Партнёр <Text style={{ color: T.accent }}>на весь год</Text>
      </Text>
      <Text style={[s.body, { marginBottom: 20 }]}>
        Сезонное оформление под ключ — под праздник, сезон и стиль вашего бренда
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
        {seasons.map((se, i) => (
          <Card key={i} style={{ width: "31%", padding: 14 }}>
            <Badge>{se.tag}</Badge>
            <Text style={{ fontSize: 13, fontWeight: 700, color: T.fg, marginTop: 8, marginBottom: 4 }}>{se.title}</Text>
            <Text style={{ fontSize: 9, color: T.muted, lineHeight: 1.4 }}>{se.desc}</Text>
          </Card>
        ))}
      </View>
    </View>
    <Brand />
  </Page>
);

/* SLIDE 6: PROCESS */
const steps = [
  { n: "01", t: "Замер", d: "Выезд, анализ, фото" },
  { n: "02", t: "Концепция", d: "Эскиз + смета" },
  { n: "03", t: "Согласование", d: "УК и собственник" },
  { n: "04", t: "Закупка", d: "Материалы и крепёж" },
  { n: "05", t: "Монтаж", d: "Установка, проверка" },
  { n: "06", t: "Сдача", d: "Уборка, приёмка" },
  { n: "07", t: "Демонтаж", d: "После сезона" },
];
const S6 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Процесс" num={6} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 28, marginBottom: 6 }]}>
        Как мы <Text style={{ color: T.accent }}>работаем</Text>
      </Text>
      <Text style={[s.body, { marginBottom: 20 }]}>
        От замера до демонтажа — всё под ключ, без сюрпризов по бюджету
      </Text>
      <View style={{ flexDirection: "row", gap: 8 }}>
        {steps.map((st, i) => (
          <View key={i} style={{ flex: 1, backgroundColor: T.bg2, borderRadius: 8, borderTopWidth: 3, borderTopColor: T.accent, borderWidth: 1, borderColor: T.border, padding: 12 }}>
            <Text style={{ fontSize: 9, fontWeight: 700, color: T.accent, opacity: 0.7 }}>{st.n}</Text>
            <Text style={{ fontSize: 11, fontWeight: 700, color: T.fg, marginTop: 6 }}>{st.t}</Text>
            <Text style={{ fontSize: 8, color: T.muted, marginTop: 4 }}>{st.d}</Text>
          </View>
        ))}
      </View>
      <Card accentBorder style={{ padding: 14, marginTop: 20 }}>
        <Text style={{ fontSize: 11, color: T.fg2, lineHeight: 1.5 }}>
          <Text style={{ fontWeight: 600, color: T.fg }}>Сроки: </Text>
          типовой монтаж — 1–3 дня. Точная дата согласуется с учётом доступности и графика работы заведения.
        </Text>
      </Card>
    </View>
    <Brand />
  </Page>
);

/* SLIDE 7: WHAT'S INCLUDED */
const included = [
  "Выезд на объект и замеры",
  "Разработка концепции",
  "Эскиз / 3D-визуализация",
  "Детальная смета",
  "Закупка материалов",
  "Доставка на объект",
  "Профессиональный монтаж",
  "Проверка подсветки",
  "Уборка зоны",
  "Фотофиксация",
  "Гарантия на сезон",
  "Демонтаж",
];
const conditions = [
  { t: "Доступ", d: "Доступ к входной группе и электропитание 220В" },
  { t: "Требования УК", d: "Подберём решение под условия" },
  { t: "Оплата", d: "50% предоплата, 50% после приёмки" },
];
const S7 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Что входит" num={7} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 28, marginBottom: 6 }]}>
        Всё <Text style={{ color: T.accent }}>включено</Text>
      </Text>
      <Text style={[s.body, { marginBottom: 20 }]}>
        Без скрытых платежей — вы знаете полную стоимость до начала работ
      </Text>
      <View style={{ flexDirection: "row", gap: 14 }}>
        <Card style={{ flex: 1.2, padding: 16 }}>
          <Text style={{ fontSize: 10, fontWeight: 600, color: T.fg, marginBottom: 10 }}>Состав работ и услуг:</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
            {included.map((item, i) => (
              <View key={i} style={{ flexDirection: "row", gap: 6, alignItems: "center", width: "46%" }}>
                <Dot size={4} />
                <Text style={{ fontSize: 9, color: T.fg2 }}>{item}</Text>
              </View>
            ))}
          </View>
        </Card>
        <View style={{ flex: 0.8, gap: 10 }}>
          {conditions.map((c, i) => (
            <Card key={i} accentBorder style={{ padding: 14 }}>
              <Text style={{ fontSize: 10, fontWeight: 700, color: T.fg, marginBottom: 4 }}>{c.t}</Text>
              <Text style={{ fontSize: 9, color: T.muted, lineHeight: 1.4 }}>{c.d}</Text>
            </Card>
          ))}
        </View>
      </View>
    </View>
    <Brand />
  </Page>
);

/* SLIDE 8: PORTFOLIO (text-only in PDF since images are complex) */
const S8 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Портфолио" num={8} />
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={[s.h2, { fontSize: 28, marginBottom: 6, textAlign: "center" }]}>
        Примеры <Text style={{ color: T.accent }}>работ</Text>
      </Text>
      <Text style={[s.body, { marginBottom: 24, textAlign: "center" }]}>
        Реальные проекты оформления входных групп и витрин
      </Text>
      <View style={{ flexDirection: "row", gap: 12, width: "100%" }}>
        {[
          { title: "Новогодний декор входной группы", desc: "Хвойная арка с тёплой подсветкой и декоративными элементами" },
          { title: "Хвойная гирлянда с подсветкой", desc: "Объёмная гирлянда на козырьке со световыми акцентами" },
          { title: "Праздничное оформление фасада", desc: "Полное оформление входной зоны в праздничной тематике" },
          { title: "Вертикальные композиции", desc: "Стойки у входа с подвесами из бус и тёплой подсветкой" },
        ].map((p, i) => (
          <Card key={i} style={{ flex: 1, padding: 16 }}>
            <NumBadge n={String(i + 1).padStart(2, "0")} />
            <Text style={{ fontSize: 12, fontWeight: 700, color: T.fg, marginBottom: 8 }}>{p.title}</Text>
            <Text style={[s.body, { fontSize: 10 }]}>{p.desc}</Text>
          </Card>
        ))}
      </View>
      <Text style={{ fontSize: 9, color: T.dim, marginTop: 20 }}>
        Фотографии доступны в веб-версии презентации: presentations.makeusbeautiful.ru
      </Text>
    </View>
    <Brand />
  </Page>
);

/* SLIDE 9: PRICING */
const packages = [
  { tag: "СТАРТ", title: "Концепция", price: "от 5 000 ₽", items: ["Выезд на объект", "Анализ входной группы", "Эскиз концепции", "Смета"] },
  { tag: "БАЗОВЫЙ", title: "Базовое оформление", price: "от 15 000 ₽", items: ["Концепция включена", "Базовые материалы", "Монтаж и демонтаж", "Гарантия на сезон"] },
  { tag: "ПРЕМИУМ", title: "Авторский дизайн", price: "от 35 000 ₽", items: ["Уникальная концепция", "Премиум материалы", "3D-визуализация", "Полное сопровождение"], popular: true },
  { tag: "ОБНОВЛЕНИЕ", title: "Переоформление", price: "от 20 000 ₽", items: ["Демонтаж старого", "Новая концепция", "Новые материалы", "Быстрые сроки"] },
];
const S9 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Стоимость" num={9} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 28, marginBottom: 6 }]}>
        Прозрачные <Text style={{ color: T.accent }}>цены</Text>
      </Text>
      <Text style={[s.body, { marginBottom: 20 }]}>
        Понятный состав работ, без скрытых платежей. Точная смета — после замера.
      </Text>
      <View style={{ flexDirection: "row", gap: 12 }}>
        {packages.map((pkg, i) => (
          <View key={i} style={{
            flex: 1, backgroundColor: T.bg2, borderRadius: 8, padding: 16,
            borderWidth: pkg.popular ? 2 : 1,
            borderColor: pkg.popular ? T.accent : T.border,
          }}>
            <View style={{ flexDirection: "row", gap: 6, marginBottom: 10 }}>
              <Badge>{pkg.tag}</Badge>
              {pkg.popular && <Badge solid>ХИТ</Badge>}
            </View>
            <Text style={{ fontSize: 12, fontWeight: 700, color: T.fg, marginBottom: 6 }}>{pkg.title}</Text>
            <Text style={{ fontSize: 18, fontWeight: 700, color: T.accent, marginBottom: 12 }}>{pkg.price}</Text>
            <View style={{ gap: 6 }}>
              {pkg.items.map((item, j) => (
                <View key={j} style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
                  <Dot size={3} />
                  <Text style={{ fontSize: 9, color: T.muted }}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
      <Text style={{ fontSize: 8, color: T.dim, marginTop: 14, fontStyle: "italic" }}>
        Для объектов с 4+ входными группами — индивидуальные условия.
      </Text>
    </View>
    <Brand />
  </Page>
);

/* SLIDE 10: CTA */
const S10 = () => (
  <Page size={[PW, PH]} style={[s.page, { justifyContent: "center", alignItems: "center" }]}>
    <BgDeco />
    <Text style={[s.h2, { fontSize: 26, textAlign: "center", marginBottom: 16 }]}>
      Следующий шаг —{"\n"}<Text style={{ color: T.accent }}>бесплатная консультация</Text>
    </Text>
    <Text style={{ fontSize: 11, color: T.fg2, textAlign: "center", maxWidth: 500, lineHeight: 1.6, marginBottom: 20 }}>
      Подскажем, какое оформление подойдёт вашему объекту, как уложиться в бюджет
      и что обычно согласуют управляющие компании.
    </Text>
    <Divider width={50} color={T.accent} mb={20} />
    <View style={{ flexDirection: "row", gap: 50, marginBottom: 20 }}>
      {[
        { label: "Телефон", value: "+7 (921) 922-44-00" },
        { label: "Email", value: "Romashova_n@mail.ru" },
        { label: "Telegram", value: "Написать в Telegram" },
      ].map((c, i) => (
        <View key={i} style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 8, color: T.dim, marginBottom: 4 }}>{c.label}</Text>
          <Text style={{ fontSize: 11, fontWeight: 700, color: T.fg }}>{c.value}</Text>
        </View>
      ))}
    </View>
    <Card style={{ padding: 14, maxWidth: 420 }}>
      <Text style={{ fontSize: 10, color: T.fg2, textAlign: "center", lineHeight: 1.5 }}>
        Оставьте заявку — и мы подготовим <Text style={{ fontWeight: 600, color: T.accent }}>1–2 варианта концепции</Text> с предварительной сметой для вашего объекта. Бесплатно.
      </Text>
    </Card>
    <Text style={{ fontSize: 16, fontWeight: 700, letterSpacing: 3, color: T.fg, marginTop: 24 }}>
      СДЕЛАЙ<Text style={{ color: T.accent }}> КРАСИВО!</Text>
    </Text>
    <Text style={{ fontSize: 9, color: T.dim, marginTop: 8 }}>makeusbeautiful.ru</Text>
  </Page>
);

const MakeUsBeautifulDocument = () => (
  <Document title="Сделай красиво! — Сезонный декор под ключ" author="Сделай красиво!">
    <S1 /><S2 /><S3 /><S4 /><S5 /><S6 /><S7 /><S8 /><S9 /><S10 />
  </Document>
);

export async function generateMakeUsBeautifulPdf(onProgress) {
  if (onProgress) onProgress("Генерация PDF...");
  const blob = await pdf(<MakeUsBeautifulDocument />).toBlob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "SdelaiKrasivo_Presentation.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
