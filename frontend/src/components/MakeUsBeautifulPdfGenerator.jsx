/**
 * MakeUsBeautiful PDF Generator — v2
 * A4 Landscape (841.89 x 595.28 pt)
 * Design: fill 70%+ of page, large fonts, green accent
 */
import React from "react";
import {
  Document, Page, View, Text, Font, Svg, Circle, Image, pdf,
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
  bg: "#0a0a0a", bg2: "#141414", fg: "#fafafa", fg2: "#d0d4d8",
  muted: "#8b9296", dim: "#6b7074", accent: "#2d9b6a", accent2: "#3dc484",
  accentBg: "rgba(45,155,106,0.12)", border: "#1e2a24", border2: "#2a3d32",
};

const PW = 841.89;
const PH = 595.28;
const PX = 36;
const PY = 30;
const TOTAL = 10;

const pg = {
  width: PW, height: PH, backgroundColor: T.bg, color: T.fg,
  fontFamily: "Inter", padding: `${PY} ${PX}`, position: "relative",
};

/* ── Helpers ── */
const Header = ({ label, num }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 12 }}>
    {label ? <Text style={{ fontWeight: 700, fontSize: 11, letterSpacing: 2, color: T.muted, textTransform: "uppercase" }}>{label}</Text> : <View />}
    {num && <Text style={{ fontSize: 11, color: T.dim }}>{String(num).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}</Text>}
  </View>
);

const Brand = () => (
  <Text style={{ position: "absolute", bottom: 14, left: PX, fontSize: 8, letterSpacing: 2, color: "#2a3d32" }}>
    СДЕЛАЙ<Text style={{ color: T.accent }}> КРАСИВО</Text>
  </Text>
);

const Dot = ({ size = 6 }) => (
  <Svg width={size} height={size} style={{ marginTop: 5, flexShrink: 0 }}>
    <Circle cx={size / 2} cy={size / 2} r={size / 2} fill={T.accent} />
  </Svg>
);

const Badge = ({ children, solid }) => (
  <View style={{ backgroundColor: solid ? T.accent : T.accentBg, borderRadius: 4, padding: "4 14", alignSelf: "flex-start" }}>
    <Text style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, color: solid ? "#fff" : T.accent }}>{children}</Text>
  </View>
);

const Card = ({ children, accentBorder, style }) => (
  <View style={[{ backgroundColor: T.bg2, borderRadius: 8, borderWidth: 1, borderColor: T.border, padding: 18 },
    accentBorder && { borderLeftWidth: 3, borderLeftColor: T.accent }, style]}>
    {children}
  </View>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 1: COVER                                         */
/* ═══════════════════════════════════════════════════════ */
const S1 = () => (
  <Page size={[PW, PH]} style={{ ...pg, justifyContent: "center", alignItems: "center" }}>
    <Text style={{ fontSize: 22, fontWeight: 700, letterSpacing: 5, marginBottom: 24 }}>
      СДЕЛАЙ<Text style={{ color: T.accent }}> КРАСИВО!</Text>
    </Text>
    <View style={{ alignItems: "center", marginBottom: 18 }}>
      <Badge>СЕЗОННЫЙ ДЕКОР ПОД КЛЮЧ</Badge>
    </View>
    <Text style={{ fontSize: 40, fontWeight: 700, textAlign: "center", lineHeight: 1.2, maxWidth: 650 }}>
      Оформляем так, чтобы{"\n"}<Text style={{ color: T.accent }}>к вам заходили</Text>
    </Text>
    <Text style={{ fontSize: 16, color: T.muted, marginTop: 20, textAlign: "center", maxWidth: 560, lineHeight: 1.6 }}>
      Входные группы, витрины и фасады для ресторанов, кофеен и магазинов.
      Концепция, смета, материалы, монтаж и демонтаж.
    </Text>
    <View style={{ width: 50, height: 2, backgroundColor: T.accent, marginTop: 24, marginBottom: 14, opacity: 0.6 }} />
    <Text style={{ fontSize: 13, color: T.dim, textAlign: "center" }}>
      Чтобы вашу точку заметили с улицы и выбрали в сезон
    </Text>
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 2: PROBLEM                                       */
/* ═══════════════════════════════════════════════════════ */
const S2 = ({ imgBase }) => (
  <Page size={[PW, PH]} style={pg}>
    <Header label="Зачем это нужно" num={2} />
    <Text style={{ fontSize: 36, fontWeight: 700, marginBottom: 14, lineHeight: 1.15 }}>
      Решение принимается <Text style={{ color: T.accent }}>на улице</Text>
    </Text>
    <View style={{ flexDirection: "row", gap: 16 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 14, color: T.fg2, lineHeight: 1.7, marginBottom: 14 }}>
          В офлайн-бизнесе у вас есть 3 секунды. Прохожий видит фасад, витрину, вход — и решает:
          зайти или пройти мимо. Сезонный декор работает как визуальная реклама.
        </Text>
        <View style={{ gap: 10, marginBottom: 16 }}>
          {[
            "Без декора — вы один из многих. С декором — вас замечают и выбирают",
            "Прохожий останавливается, фотографирует, заходит. Пост в соцсетях — бесплатная реклама",
            "Конкуренция усиливается в декабре, к 8 Марта, в сезон распродаж",
          ].map((t, i) => (
            <View key={i} style={{ flexDirection: "row", gap: 8 }}>
              <Dot />
              <Text style={{ fontSize: 13, color: T.fg2, lineHeight: 1.5, flex: 1 }}>{t}</Text>
            </View>
          ))}
        </View>
        <Card accentBorder style={{ padding: 14 }}>
          <Text style={{ fontSize: 13, color: T.fg2, lineHeight: 1.5 }}>
            <Text style={{ fontWeight: 700, color: T.fg }}>Ключевой тезис: </Text>
            если не украсить — покупатель будет разочарован и уйдёт к конкурентам. Декор — это не расход, а инвестиция в трафик.
          </Text>
        </Card>
      </View>
      <View style={{ width: 200 }}>
        <Image src={`${imgBase}/images/mb/kp-photo-1.jpeg`} style={{ width: 200, height: 280, objectFit: "cover", borderRadius: 8 }} />
      </View>
    </View>
    <Brand />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 3: DATA                                          */
/* ═══════════════════════════════════════════════════════ */
const dataStats = [
  { n: "+30–50%", l: "посетителей от оформленной витрины", src: "NZR, 2018" },
  { n: "+20%", l: "пешеходного трафика в украшенных ТЦ", src: "ICSC" },
  { n: "+15%", l: "к объёму продаж в сезон", src: "Deloitte" },
  { n: "90%", l: "покупателей учитывают декор при выборе", src: "NRF" },
];
const extraStats = [
  { n: "+10–15%", l: "рост среднего чека при оформлении (РФ)" },
  { n: "+30%", l: "увеличение длительности визита" },
  { n: "58%", l: "потребителей вдохновляются через соцсети" },
];
const S3 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Header label="Цифры" num={3} />
    <Text style={{ fontSize: 36, fontWeight: 700, marginBottom: 6, lineHeight: 1.15 }}>
      Декор <Text style={{ color: T.accent }}>работает</Text>
    </Text>
    <Text style={{ fontSize: 14, color: T.muted, marginBottom: 18, lineHeight: 1.5 }}>
      Данные отраслевых исследований и кейсов из России и международной практики
    </Text>
    <View style={{ flexDirection: "row", gap: 14, marginBottom: 18 }}>
      {dataStats.map((st, i) => (
        <Card key={i} style={{ flex: 1, padding: 18 }}>
          <Text style={{ fontSize: 28, fontWeight: 700, color: T.accent, lineHeight: 1.1 }}>{st.n}</Text>
          <Text style={{ fontSize: 12, color: T.fg2, marginTop: 8, lineHeight: 1.4 }}>{st.l}</Text>
          <Text style={{ fontSize: 9, color: T.dim, marginTop: 6 }}>{st.src}</Text>
        </Card>
      ))}
    </View>
    <View style={{ flexDirection: "row", gap: 12 }}>
      {extraStats.map((st, i) => (
        <Card key={i} style={{ flex: 1, padding: 14 }}>
          <Text style={{ fontSize: 22, fontWeight: 700, color: T.accent, opacity: 0.85, lineHeight: 1.1 }}>{st.n}</Text>
          <Text style={{ fontSize: 11, color: T.muted, marginTop: 6, lineHeight: 1.4 }}>{st.l}</Text>
        </Card>
      ))}
    </View>
    <Text style={{ fontSize: 10, color: T.dim, marginTop: 14 }}>
      Фактический эффект зависит от локации, предложения, сервиса и способности бизнеса монетизировать возросший интерес.
    </Text>
    <Brand />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 4: ABOUT — fixed right card height               */
/* ═══════════════════════════════════════════════════════ */
const S4 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Header label="О нас" num={4} />
    <Text style={{ fontSize: 36, fontWeight: 700, marginBottom: 6, lineHeight: 1.15 }}>
      Декор как <Text style={{ color: T.accent }}>бизнес-инструмент</Text>
    </Text>
    <Text style={{ fontSize: 14, color: T.muted, marginBottom: 18, lineHeight: 1.5 }}>
      Мы понимаем задачи бизнеса изнутри — и смотрим на оформление как на способ увеличить трафик и выручку
    </Text>
    <View style={{ flexDirection: "row", gap: 16 }}>
      <View style={{ flex: 1 }}>
        <Card style={{ padding: 20, marginBottom: 14 }}>
          <Text style={{ fontSize: 18, fontWeight: 700, color: T.fg, marginBottom: 8 }}>Наталья Ромашова</Text>
          <Text style={{ fontSize: 13, color: T.fg2, lineHeight: 1.6 }}>
            Ведущий менеджер по аренде в крупнейшей сети ТРК Санкт-Петербурга. Работала с ритейл-брендами, ресторанами и операторами фастфуда.
          </Text>
        </Card>
        <Card style={{ padding: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 700, color: T.fg, marginBottom: 8 }}>Мария Алехина</Text>
          <Text style={{ fontSize: 13, color: T.fg2, lineHeight: 1.6 }}>
            Менеджер по развитию крупных сетевых ритейлеров. Понимает задачи ритейл-бизнеса изнутри — от операционки до маркетинга.
          </Text>
        </Card>
      </View>
      <Card style={{ width: 280, padding: 24, justifyContent: "center" }}>
        <Text style={{ fontSize: 64, fontWeight: 700, color: T.accent, lineHeight: 1 }}>30+</Text>
        <Text style={{ fontSize: 18, fontWeight: 600, color: T.fg, marginTop: 12 }}>лет в коммерции</Text>
        <Text style={{ fontSize: 13, color: T.muted, marginTop: 8, lineHeight: 1.5 }}>
          Суммарный опыт в управлении коммерческой недвижимостью и развитии сетевого ритейла
        </Text>
        <View style={{ width: 30, height: 2, backgroundColor: T.accent, marginTop: 14, marginBottom: 8, opacity: 0.5 }} />
        <Text style={{ fontSize: 12, color: T.dim }}>Санкт-Петербург</Text>
      </Card>
    </View>
    <Brand />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 5: SERVICES                                      */
/* ═══════════════════════════════════════════════════════ */
const seasons = [
  { tag: "ДЕКАБРЬ", title: "Новый год", desc: "Хвоя, огни, композиции, фотозоны. Самый востребованный сезон." },
  { tag: "МАРТ", title: "8 Марта", desc: "Нежный весенний декор в фирменных цветах. Акцент на витрину и вход." },
  { tag: "АПРЕЛЬ", title: "Пасха", desc: "Светлые композиции в пастельных тонах. Венки, подсветка." },
  { tag: "МАЙ", title: "День Победы", desc: "Сдержанное торжественное оформление. Символика, цветочные акценты." },
  { tag: "ИЮНЬ–АВГ", title: "Летний декор", desc: "Зелень, гирлянды, лёгкие композиции, фототочки для гостей." },
  { tag: "СЕНТ–НОЯБ", title: "Осенний декор", desc: "Тёплая палитра и сезонные мотивы. Ветви, листья, подсветка." },
];
const S5 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Header label="Услуги" num={5} />
    <Text style={{ fontSize: 36, fontWeight: 700, marginBottom: 6, lineHeight: 1.15 }}>
      Партнёр <Text style={{ color: T.accent }}>на весь год</Text>
    </Text>
    <Text style={{ fontSize: 14, color: T.muted, marginBottom: 18, lineHeight: 1.5 }}>
      Сезонное оформление под ключ — под праздник, сезон и стиль вашего бренда
    </Text>
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
      {seasons.map((se, i) => (
        <Card key={i} style={{ width: "31%", padding: 18 }}>
          <Badge>{se.tag}</Badge>
          <Text style={{ fontSize: 16, fontWeight: 700, color: T.fg, marginTop: 10, marginBottom: 6 }}>{se.title}</Text>
          <Text style={{ fontSize: 12, color: T.muted, lineHeight: 1.5 }}>{se.desc}</Text>
        </Card>
      ))}
    </View>
    <Brand />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 6: PROCESS — large cards, fill page              */
/* ═══════════════════════════════════════════════════════ */
const steps = [
  { n: "01", t: "Замер", d: "Выезд на объект, анализ входной группы и витрины, фотофиксация" },
  { n: "02", t: "Концепция", d: "Эскиз оформления в стиле вашей точки + детальная смета" },
  { n: "03", t: "Согласование", d: "Учитываем требования УК и собственника здания" },
  { n: "04", t: "Закупка", d: "Материалы и крепёж от проверенных поставщиков" },
  { n: "05", t: "Монтаж", d: "Профессиональная установка, проверка подсветки и крепежа" },
  { n: "06", t: "Сдача", d: "Уборка зоны, фотофиксация результата, приёмка" },
  { n: "07", t: "Демонтаж", d: "Аккуратный демонтаж после окончания сезона" },
];
const S6 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Header label="Процесс" num={6} />
    <Text style={{ fontSize: 36, fontWeight: 700, marginBottom: 6, lineHeight: 1.15 }}>
      Как мы <Text style={{ color: T.accent }}>работаем</Text>
    </Text>
    <Text style={{ fontSize: 14, color: T.muted, marginBottom: 16, lineHeight: 1.5 }}>
      От замера до демонтажа — всё под ключ, без сюрпризов по бюджету
    </Text>
    <View style={{ flexDirection: "row", gap: 12, marginBottom: 12 }}>
      {steps.slice(0, 4).map((st, i) => (
        <View key={i} style={{
          flex: 1, backgroundColor: T.bg2, borderRadius: 8,
          borderTopWidth: 3, borderTopColor: T.accent,
          borderWidth: 1, borderColor: T.border, padding: 14,
        }}>
          <Text style={{ fontSize: 11, fontWeight: 700, color: T.accent, opacity: 0.7 }}>{st.n}</Text>
          <Text style={{ fontSize: 14, fontWeight: 700, color: T.fg, marginTop: 8 }}>{st.t}</Text>
          <Text style={{ fontSize: 11, color: T.muted, marginTop: 6, lineHeight: 1.5 }}>{st.d}</Text>
        </View>
      ))}
    </View>
    <View style={{ flexDirection: "row", gap: 12, marginBottom: 12 }}>
      {steps.slice(4).map((st, i) => (
        <View key={i} style={{
          flex: 1, backgroundColor: T.bg2, borderRadius: 8,
          borderTopWidth: 3, borderTopColor: T.accent,
          borderWidth: 1, borderColor: T.border, padding: 14,
        }}>
          <Text style={{ fontSize: 11, fontWeight: 700, color: T.accent, opacity: 0.7 }}>{st.n}</Text>
          <Text style={{ fontSize: 14, fontWeight: 700, color: T.fg, marginTop: 8 }}>{st.t}</Text>
          <Text style={{ fontSize: 11, color: T.muted, marginTop: 6, lineHeight: 1.5 }}>{st.d}</Text>
        </View>
      ))}
    </View>
    <Card accentBorder style={{ padding: 16 }}>
      <Text style={{ fontSize: 14, color: T.fg2, lineHeight: 1.5 }}>
        <Text style={{ fontWeight: 700, color: T.fg }}>Сроки: </Text>
        типовой монтаж — 1–3 дня. Точная дата согласуется с учётом доступности и графика работы заведения.
      </Text>
    </Card>
    <Brand />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 7: WHAT'S INCLUDED                               */
/* ═══════════════════════════════════════════════════════ */
const included = [
  "Выезд на объект и замеры", "Разработка индивидуальной концепции",
  "Эскиз или 3D-визуализация", "Детальная смета до начала работ",
  "Закупка материалов и крепежа", "Доставка на объект",
  "Профессиональный монтаж", "Проверка подсветки и надёжности",
  "Уборка зоны после монтажа", "Фотофиксация результата",
  "Гарантия на весь сезон", "Демонтаж после окончания периода",
];
const conditions = [
  { t: "Доступ", d: "Обеспечиваете доступ к входной группе и электропитание 220В" },
  { t: "Требования УК", d: "При ограничениях по крепежу или материалам — подберём решение под условия" },
  { t: "Оплата", d: "50% предоплата после согласования, 50% — после приёмки монтажа" },
];
const S7 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Header label="Что входит" num={7} />
    <Text style={{ fontSize: 36, fontWeight: 700, marginBottom: 6, lineHeight: 1.15 }}>
      Всё <Text style={{ color: T.accent }}>включено</Text>
    </Text>
    <Text style={{ fontSize: 14, color: T.muted, marginBottom: 18, lineHeight: 1.5 }}>
      Без скрытых платежей — вы знаете полную стоимость до начала работ
    </Text>
    <View style={{ flexDirection: "row", gap: 16 }}>
      <Card style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 14, fontWeight: 600, color: T.fg, marginBottom: 14 }}>Состав работ и услуг:</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
          {included.map((item, i) => (
            <View key={i} style={{ flexDirection: "row", gap: 7, alignItems: "flex-start", width: "46%" }}>
              <Dot size={5} />
              <Text style={{ fontSize: 12, color: T.fg2, lineHeight: 1.4 }}>{item}</Text>
            </View>
          ))}
        </View>
      </Card>
      <View style={{ width: 280, gap: 12 }}>
        {conditions.map((c, i) => (
          <Card key={i} accentBorder style={{ padding: 16 }}>
            <Text style={{ fontSize: 14, fontWeight: 700, color: T.fg, marginBottom: 6 }}>{c.t}</Text>
            <Text style={{ fontSize: 12, color: T.muted, lineHeight: 1.5 }}>{c.d}</Text>
          </Card>
        ))}
      </View>
    </View>
    <Brand />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 8: PORTFOLIO — with images                       */
/* ═══════════════════════════════════════════════════════ */
const S8 = ({ imgBase }) => (
  <Page size={[PW, PH]} style={pg}>
    <Header label="Портфолио" num={8} />
    <Text style={{ fontSize: 36, fontWeight: 700, marginBottom: 6, lineHeight: 1.15 }}>
      Примеры <Text style={{ color: T.accent }}>работ</Text>
    </Text>
    <Text style={{ fontSize: 14, color: T.muted, marginBottom: 16, lineHeight: 1.5 }}>
      Реальные проекты оформления входных групп и витрин
    </Text>
    <View style={{ flexDirection: "row", gap: 12 }}>
      {[
        { src: `${imgBase}/images/mb/kp-photo-2.jpeg`, label: "Новогодний декор входной группы" },
        { src: `${imgBase}/images/mb/kp-photo-4.jpeg`, label: "Хвойная гирлянда с подсветкой" },
        { src: `${imgBase}/images/mb/kp-photo-1.jpeg`, label: "Праздничное оформление фасада" },
        { src: `${imgBase}/images/mb/kp-photo-5.jpeg`, label: "Вертикальные композиции у входа" },
      ].map((p, i) => (
        <View key={i} style={{ flex: 1, borderRadius: 8, overflow: "hidden", borderWidth: 1, borderColor: T.border }}>
          <Image src={p.src} style={{ width: "100%", height: 280, objectFit: "cover" }} />
          <View style={{ backgroundColor: T.bg2, padding: 10 }}>
            <Text style={{ fontSize: 11, fontWeight: 600, color: T.fg2 }}>{p.label}</Text>
          </View>
        </View>
      ))}
    </View>
    <Brand />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 9: PRICING                                       */
/* ═══════════════════════════════════════════════════════ */
const packages = [
  { tag: "СТАРТ", title: "Концепция и смета", price: "от 5 000 ₽", items: ["Выезд на объект", "Анализ входной группы", "Эскиз концепции", "Смета материалов и работ"] },
  { tag: "БАЗОВЫЙ", title: "Базовое оформление", price: "от 15 000 ₽", items: ["Концепция включена", "Базовые материалы", "Монтаж и демонтаж", "Гарантия на сезон"] },
  { tag: "ПРЕМИУМ", title: "Авторский дизайн", price: "от 35 000 ₽", items: ["Уникальная концепция", "Премиум материалы", "3D-визуализация", "Полное сопровождение", "Поддержка в сезон"], popular: true },
  { tag: "ОБНОВЛЕНИЕ", title: "Переоформление", price: "от 20 000 ₽", items: ["Демонтаж старого декора", "Новая концепция", "Обновление материалов", "Быстрые сроки"] },
];
const S9 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Header label="Стоимость" num={9} />
    <Text style={{ fontSize: 36, fontWeight: 700, marginBottom: 6, lineHeight: 1.15 }}>
      Прозрачные <Text style={{ color: T.accent }}>цены</Text>
    </Text>
    <Text style={{ fontSize: 14, color: T.muted, marginBottom: 18, lineHeight: 1.5 }}>
      Понятный состав работ, без скрытых платежей. Точная смета — после замера.
    </Text>
    <View style={{ flexDirection: "row", gap: 14 }}>
      {packages.map((pkg, i) => (
        <View key={i} style={{
          flex: 1, backgroundColor: T.bg2, borderRadius: 8, padding: 18,
          borderWidth: pkg.popular ? 2 : 1,
          borderColor: pkg.popular ? T.accent : T.border,
          minHeight: 240,
        }}>
          <View style={{ flexDirection: "row", gap: 6, marginBottom: 12 }}>
            <Badge>{pkg.tag}</Badge>
            {pkg.popular && <Badge solid>ХИТ</Badge>}
          </View>
          <Text style={{ fontSize: 15, fontWeight: 700, color: T.fg, marginBottom: 8 }}>{pkg.title}</Text>
          <Text style={{ fontSize: 24, fontWeight: 700, color: T.accent, marginBottom: 14 }}>{pkg.price}</Text>
          <View style={{ gap: 8 }}>
            {pkg.items.map((item, j) => (
              <View key={j} style={{ flexDirection: "row", gap: 7, alignItems: "flex-start" }}>
                <Dot size={4} />
                <Text style={{ fontSize: 11, color: T.muted, lineHeight: 1.4 }}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
    <Text style={{ fontSize: 11, color: T.dim, marginTop: 14 }}>
      Для объектов с 4+ входными группами — индивидуальные условия. Стоимость фиксируется в смете до начала работ.
    </Text>
    <Brand />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 10: CTA                                          */
/* ═══════════════════════════════════════════════════════ */
const S10 = () => (
  <Page size={[PW, PH]} style={{ ...pg, justifyContent: "center", alignItems: "center" }}>
    <Text style={{ fontSize: 34, fontWeight: 700, textAlign: "center", lineHeight: 1.2, marginBottom: 16 }}>
      Следующий шаг —{"\n"}<Text style={{ color: T.accent }}>бесплатная консультация</Text>
    </Text>
    <Text style={{ fontSize: 14, color: T.fg2, textAlign: "center", maxWidth: 520, lineHeight: 1.6, marginBottom: 20 }}>
      Подскажем, какое оформление подойдёт вашему объекту, как уложиться в бюджет
      и что обычно согласуют управляющие компании.
    </Text>
    <View style={{ width: 50, height: 2, backgroundColor: T.accent, marginBottom: 20, opacity: 0.6 }} />
    <View style={{ flexDirection: "row", gap: 60, marginBottom: 24 }}>
      {[
        { label: "Телефон", value: "+7 (921) 922-44-00" },
        { label: "Email", value: "Romashova_n@mail.ru" },
        { label: "Telegram", value: "Написать в Telegram" },
      ].map((c, i) => (
        <View key={i} style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 10, color: T.dim, marginBottom: 5 }}>{c.label}</Text>
          <Text style={{ fontSize: 14, fontWeight: 700, color: T.fg }}>{c.value}</Text>
        </View>
      ))}
    </View>
    <Card style={{ padding: 18, maxWidth: 460 }}>
      <Text style={{ fontSize: 13, color: T.fg2, textAlign: "center", lineHeight: 1.6 }}>
        Оставьте заявку — и мы подготовим <Text style={{ fontWeight: 700, color: T.accent }}>1–2 варианта концепции</Text> с предварительной сметой для вашего объекта. Бесплатно.
      </Text>
    </Card>
    <Text style={{ fontSize: 20, fontWeight: 700, letterSpacing: 4, marginTop: 24 }}>
      СДЕЛАЙ<Text style={{ color: T.accent }}> КРАСИВО!</Text>
    </Text>
    <Text style={{ fontSize: 11, color: T.dim, marginTop: 8 }}>makeusbeautiful.ru</Text>
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* DOCUMENT                                               */
/* ═══════════════════════════════════════════════════════ */
const MBDoc = ({ imgBase }) => (
  <Document title="Сделай красиво! — Сезонный декор под ключ" author="Сделай красиво!">
    <S1 /><S2 imgBase={imgBase} /><S3 /><S4 /><S5 /><S6 /><S7 /><S8 imgBase={imgBase} /><S9 /><S10 />
  </Document>
);

export async function generateMakeUsBeautifulPdf(onProgress) {
  if (onProgress) onProgress("Генерация PDF...");
  const imgBase = window.location.origin + (process.env.PUBLIC_URL || '');
  const blob = await pdf(<MBDoc imgBase={imgBase} />).toBlob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "SdelaiKrasivo_Presentation.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
