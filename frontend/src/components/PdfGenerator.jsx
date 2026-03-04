/**
 * PDF Generator v3 — Premium Design
 * Built with @react-pdf/renderer following design_guidelines.json
 *
 * Design: Dark Tech / Corporate Innovation
 * Font: Inter (with Cyrillic) – all weights
 * Page: A4 Landscape (841.89 × 595.28 pt)
 */
import React from "react";
import {
  Document, Page, View, Text, StyleSheet, Font, Svg, Circle, Rect, Line, pdf,
} from "@react-pdf/renderer";

/* ═══════════════════════════════════════════
   FONT REGISTRATION (Inter with Cyrillic)
   ═══════════════════════════════════════════ */
Font.register({
  family: "Inter",
  fonts: [
    { src: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf", fontWeight: 400 },
    { src: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYMZg.ttf", fontWeight: 600 },
    { src: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZg.ttf", fontWeight: 700 },
  ],
});

/* ═══════════════════════════════════════════
   DESIGN TOKENS
   ═══════════════════════════════════════════ */
const T = {
  bg:      "#0a0a2e",
  bg2:     "#141442",
  bg3:     "#1a1a4f",
  fg:      "#fafafa",
  fg2:     "#d0d4e0",
  muted:   "#8b92ab",
  dim:     "#6b7190",
  accent:  "#e8663c",
  accent2: "#ff8b66",
  accentBg:"rgba(232,102,60,0.12)",
  border:  "#2a2a5c",
  border2: "#3d3d75",
};

const PW = 841.89;
const PH = 595.28;
const PAD = 40;

/* ═══════════════════════════════════════════
   BASE STYLES
   ═══════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════
   REUSABLE COMPONENTS
   ═══════════════════════════════════════════ */

/* Page Header */
const Header = ({ label, num }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexShrink: 0 }}>
    {label ? <Text style={s.label}>{label}</Text> : <View />}
    {num && <Text style={{ fontSize: 8, color: T.dim }}>{String(num).padStart(2, "0")} / 14</Text>}
  </View>
);

/* Brand Footer */
const Brand = () => (
  <Text style={{ position: "absolute", bottom: 16, left: PAD, fontSize: 7, letterSpacing: 1.8, color: "#3a3f5a" }}>
    HOP<Text style={{ color: "#5a3020" }}>.</Text>AGENCY
  </Text>
);

/* Accent Dot / Bullet */
const Dot = ({ size = 5 }) => (
  <Svg width={size} height={size} style={{ marginTop: 4, flexShrink: 0 }}>
    <Circle cx={size / 2} cy={size / 2} r={size / 2} fill={T.accent} />
  </Svg>
);

/* Badge */
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

/* Card */
const Card = ({ children, accentBorder, style }) => (
  <View style={[{
    backgroundColor: T.bg2, borderRadius: 8,
    borderWidth: 1, borderColor: T.border, padding: 20,
  }, accentBorder && { borderLeftWidth: 3, borderLeftColor: T.accent }, style]}>
    {children}
  </View>
);

/* Horizontal Divider */
const Divider = ({ width = 50, color = T.border, mt = 0, mb = 0 }) => (
  <View style={{ width, height: 1.5, backgroundColor: color, marginTop: mt, marginBottom: mb, opacity: 0.6 }} />
);

/* Vertical separator */
const VSep = () => (
  <View style={{ width: 1, backgroundColor: T.border, opacity: 0.4, marginHorizontal: 8 }} />
);

/* Number badge for cards */
const NumBadge = ({ n }) => (
  <View style={{
    width: 28, height: 28, borderRadius: 6, backgroundColor: T.accentBg,
    justifyContent: "center", alignItems: "center", marginBottom: 14,
  }}>
    <Text style={{ color: T.accent, fontSize: 13, fontWeight: 700 }}>{n}</Text>
  </View>
);

/* Background decoration — decorative circles within content area */
const BgDeco = () => (
  <View style={{ position: "absolute", top: 0, right: 0, width: 300, height: 300, overflow: "hidden" }}>
    <Svg width={300} height={300}>
      <Circle cx={220} cy={80} r={140} fill="none" stroke={T.accent} strokeWidth={0.5} opacity={0.06} />
      <Circle cx={220} cy={80} r={80} fill="none" stroke={T.accent} strokeWidth={0.5} opacity={0.04} />
    </Svg>
  </View>
);

/* ════════════════════════════════════════════
   SLIDE 1: TITLE
   ════════════════════════════════════════════ */
const S1 = () => (
  <Page size={[PW, PH]} style={[s.page, { justifyContent: "center", alignItems: "center" }]}>
    <BgDeco />
    <Text style={{ fontSize: 18, fontWeight: 700, letterSpacing: 5, marginBottom: 48, color: T.fg }}>
      HOP<Text style={{ color: T.accent }}>.</Text>AGEN<Text style={{ color: T.accent }}>C</Text>Y
    </Text>
    <Text style={[s.h1, { fontSize: 36, textAlign: "center", maxWidth: 620 }]}>
      Сопровождение вывода внутренних продуктов{" "}
      <Text style={{ color: T.accent }}>ПАО «Ростелеком»</Text>{" "}
      на общероссийский рынок
    </Text>
    <Text style={{ fontSize: 14, color: T.muted, marginTop: 28, letterSpacing: 1 }}>Коммерческое предложение</Text>
    <Divider width={50} color={T.accent} mt={32} mb={20} />
    <Badge>2025</Badge>
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 2: CONTEXT
   ════════════════════════════════════════════ */
const contextBullets = [
  "Определён трек по проверке внешнего спроса на внутренние продукты",
  "Продукты проходят масштабное внутреннее тестирование и доработку",
  "Выход во внешние продажи привязан к завершению внутреннего цикла",
  "Существует интерес к ранней проверке внешнего спроса",
];
const S2 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Контекст" num={2} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 30, marginBottom: 28 }]}>
        Контекст и основание{"\n"}<Text style={{ color: T.accent }}>для предложения</Text>
      </Text>
      <View style={{ flexDirection: "row", gap: 0 }}>
        <View style={{ flex: 1, paddingRight: 24, borderRightWidth: 1, borderRightColor: T.border }}>
          <Text style={[s.body, { fontSize: 12, lineHeight: 1.7 }]}>
            Предложение подготовлено по итогам рабочей встречи команд
            Hop.Agency и ПАО «Ростелеком», на которой обсуждались
            практические форматы сотрудничества и отдельный трек по проверке
            внешнего спроса на внутренние продукты.
          </Text>
        </View>
        <View style={{ flex: 1, paddingLeft: 24, gap: 12 }}>
          {contextBullets.map((t, i) => (
            <View key={i} style={{ flexDirection: "row", gap: 8, alignItems: "flex-start" }}>
              <Dot size={5} />
              <Text style={{ fontSize: 11, color: T.fg2, lineHeight: 1.5, flex: 1 }}>{t}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 3: SUBJECT — 3 focus areas
   ════════════════════════════════════════════ */
const focusAreas = [
  { title: "Упаковка продукта", sub: "для внешнего рынка", desc: "Позиционирование, целевая аудитория, ценность, коммерческие материалы" },
  { title: "Проверка спроса", sub: "в контролируемом формате", desc: "Короткие циклы валидации на заранее согласованных сегментах" },
  { title: "Маршрутизация", sub: "в коммерческий запуск", desc: "План пилотов, критерии готовности, поддержка продаж и партнёрского запуска" },
];
const S3 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Предмет предложения" num={3} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 30, marginBottom: 32 }]}>
        Три фокуса <Text style={{ color: T.accent }}>сотрудничества</Text>
      </Text>
      <View style={{ flexDirection: "row", gap: 14 }}>
        {focusAreas.map((a, i) => (
          <Card key={i} style={{ flex: 1 }}>
            <NumBadge n={i + 1} />
            <Text style={[s.h3, { marginBottom: 4 }]}>{a.title}</Text>
            <Text style={{ fontSize: 10, color: T.accent, marginBottom: 16 }}>{a.sub}</Text>
            <Text style={s.body}>{a.desc}</Text>
          </Card>
        ))}
      </View>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 4: GOAL
   ════════════════════════════════════════════ */
const S4 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Цель программы" num={4} />
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Svg width={40} height={40} style={{ marginBottom: 20 }}>
        <Circle cx={20} cy={20} r={18} fill="none" stroke={T.accent} strokeWidth={1.5} />
        <Circle cx={20} cy={20} r={10} fill="none" stroke={T.accent} strokeWidth={1.5} />
        <Circle cx={20} cy={20} r={3} fill={T.accent} />
      </Svg>
      <Text style={[s.h2, { fontSize: 26, textAlign: "center", maxWidth: 580 }]}>
        Сформировать для выбранных внутренних продуктов Ростелекома{" "}
        <Text style={{ color: T.accent }}>готовность к внешнему рынку</Text>{" "}
        и подтвердить спрос на целевых сегментах
      </Text>
      <Divider width={50} color={T.border} mt={24} mb={20} />
      <Text style={{ fontSize: 13, color: T.muted, textAlign: "center", maxWidth: 460, lineHeight: 1.5 }}>
        Чтобы ускорить коммерческий запуск в масштабе РФ после завершения внутренних циклов доработки
      </Text>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 5: TASKS
   ════════════════════════════════════════════ */
const tasks = [
  "Определение целевых сегментов и сценариев применения",
  "Формирование конкурентного позиционирования и ценностного предложения",
  "Уточнение модели монетизации и структуры коммерческого предложения",
  "Подготовка комплекта материалов для продаж и партнёрского продвижения",
  "Организация коротких циклов проверки спроса на внешней аудитории",
  "Формирование плана пилотов и критериев готовности к масштабированию",
  "Синхронизация с внутренними владельцами продукта и подразделениями",
];
const S5 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Задачи" num={5} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 30, marginBottom: 32 }]}>
        Задачи <Text style={{ color: T.accent }}>программы</Text>
      </Text>
      <View style={{ flexDirection: "row", gap: 40 }}>
        <View style={{ flex: 1, gap: 14 }}>
          {tasks.slice(0, 4).map((t, i) => (
            <View key={i} style={{ flexDirection: "row", gap: 12, alignItems: "flex-start" }}>
              <Text style={{ fontSize: 14, fontWeight: 700, color: T.accent, width: 26 }}>{String(i + 1).padStart(2, "0")}</Text>
              <Text style={{ fontSize: 12, color: T.fg2, lineHeight: 1.5, flex: 1 }}>{t}</Text>
            </View>
          ))}
        </View>
        <VSep />
        <View style={{ flex: 1, gap: 14 }}>
          {tasks.slice(4).map((t, i) => (
            <View key={i} style={{ flexDirection: "row", gap: 12, alignItems: "flex-start" }}>
              <Text style={{ fontSize: 14, fontWeight: 700, color: T.accent, width: 26 }}>{String(i + 5).padStart(2, "0")}</Text>
              <Text style={{ fontSize: 12, color: T.fg2, lineHeight: 1.5, flex: 1 }}>{t}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 6: RESULTS PACKAGE (9 items)
   ════════════════════════════════════════════ */
const results = [
  { l: "Позиционирование", d: "1-2 варианта для внешней аудитории" },
  { l: "Карта сегментов", d: "Профили идеальных клиентов" },
  { l: "Боли и эффекты", d: "Ключевые боли и измеримые результаты" },
  { l: "Карта ЛПР", d: "SPACE по определению ЛПР" },
  { l: "Ценообразование", d: "Гипотезы и варианты упаковки" },
  { l: "Материалы продаж", d: "Одностраничник, презентация, шаблоны" },
  { l: "План пилотов", d: "Кого берём, что измеряем, критерии" },
  { l: "Реестр рисков", d: "Правовые и репутационные ограничения" },
  { l: "Маршрут запуска", d: "Через каналы Ростелекома" },
];
const S6 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Результаты" num={6} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { marginBottom: 4 }]}>Пакет готовности <Text style={{ color: T.accent }}>к рынку</Text></Text>
      <Text style={[s.body, { marginBottom: 24 }]}>По каждому продукту — до 5 продуктов на цикл</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
        {results.map((r, i) => (
          <View key={i} style={{
            width: "31.5%", backgroundColor: T.bg2, borderRadius: 8, padding: "12 14",
            borderWidth: 1, borderColor: T.border,
            flexDirection: "row", gap: 10, alignItems: "flex-start",
          }}>
            <Dot size={6} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 11, fontWeight: 600, color: T.fg }}>{r.l}</Text>
              <Text style={[s.caption, { marginTop: 3 }]}>{r.d}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 7: SUMMARY (3 cards)
   ════════════════════════════════════════════ */
const summary = [
  { t: "Рейтинг продуктов", d: "По готовности к выходу на рынок и по силе подтверждённого спроса" },
  { t: "Рекомендации по запуску", d: "Какие продукты выводить первыми, какие доработать, какие отложить" },
  { t: "План следующего цикла", d: "Предложение по масштабированию подхода и следующей волне продуктов" },
];
const S7 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Сводные результаты" num={7} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 30, marginBottom: 32 }]}>
        Сводные результаты <Text style={{ color: T.accent }}>программы</Text>
      </Text>
      <View style={{ flexDirection: "row", gap: 14 }}>
        {summary.map((item, i) => (
          <Card key={i} style={{ flex: 1 }}>
            <NumBadge n={i + 1} />
            <Text style={[s.h3, { fontSize: 15, marginBottom: 10 }]}>{item.t}</Text>
            <Text style={s.body}>{item.d}</Text>
          </Card>
        ))}
      </View>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 8: WHY HOP (HIGH IMPACT STATS)
   ════════════════════════════════════════════ */
const stats = [
  { n: "38", l: "программ", sub: "акселерации за 2023–2025" },
  { n: "600+", l: "проектов", sub: "прошли полную оценку" },
  { n: "900+", l: "участников", sub: "инвестиционного клуба" },
];
const S8 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="О нас" num={8} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 32, marginBottom: 32 }]}>
        Почему <Text style={{ color: T.accent }}>Hop.Agency</Text>
      </Text>
      <View style={{ flexDirection: "row", marginBottom: 32 }}>
        {stats.map((st, i) => (
          <React.Fragment key={i}>
            {i > 0 && <VSep />}
            <View style={{ flex: 1, paddingHorizontal: i === 1 ? 16 : 0 }}>
              <Text style={{ fontSize: 64, fontWeight: 700, color: T.accent, lineHeight: 1 }}>{st.n}</Text>
              <Text style={{ fontSize: 15, fontWeight: 600, color: T.fg, marginTop: 8 }}>{st.l}</Text>
              <Text style={[s.body, { marginTop: 4 }]}>{st.sub}</Text>
            </View>
          </React.Fragment>
        ))}
      </View>
      <Divider width={50} color={T.accent} mb={16} />
      <Text style={[s.body, { fontSize: 12, lineHeight: 1.7, maxWidth: 560 }]}>
        Работаем на стыке корпоративных инноваций, управления развитием компаний
        на ранних стадиях и инвестиционной экспертизы. Практический опыт продвижения
        внутренних продуктов корпоративных партнёров на внешний рынок.
      </Text>
    </View>
    <Brand />
  </Page>
);

/* ─── Scope card helper ─── */
const ScopeCard = ({ num, title, tasks: t, results: r }) => (
  <Card accentBorder style={{ flex: 1, padding: "14 18" }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 10 }}>
      <Badge>{num}</Badge>
      <Text style={{ fontSize: 12, fontWeight: 700, color: T.fg }}>{title}</Text>
    </View>
    <Text style={[s.body, { fontSize: 10, lineHeight: 1.5, marginBottom: 5 }]}>
      <Text style={{ color: T.fg2, fontWeight: 600 }}>Задачи: </Text>{t}
    </Text>
    <Text style={[s.body, { fontSize: 10, lineHeight: 1.5 }]}>
      <Text style={{ color: T.fg2, fontWeight: 600 }}>Результаты: </Text>{r}
    </Text>
  </Card>
);

/* ════════════════════════════════════════════
   SLIDE 9: SCOPE 1 (stages 1-4)
   ════════════════════════════════════════════ */
const S9 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Содержание работ · 1/2" num={9} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 26, marginBottom: 20 }]}>
        Содержание работ <Text style={{ color: T.muted, fontWeight: 400, fontSize: 16 }}>(этапы 1–4)</Text>
      </Text>
      <View style={{ gap: 10 }}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <ScopeCard num="01" title="Запуск и процедурные решения" tasks="Список продуктов, рабочий календарь, правила работы с данными, шаблоны" results="Паспорт программы, матрица ролей, чек-лист ограничений" />
          <ScopeCard num="02" title="Отбор и приоритезация продуктов" tasks="Критерии выхода, экспресс-оценка готовности, выбор до 5 продуктов" results="Карта показателей, финальный список, карта зависимостей" />
        </View>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <ScopeCard num="03" title="Диагностика продукта и ценность" tasks="Сбор фактуры, сценарии применения, эффекты, позиционирование" results="JTBD/сценарии, ценностное предложение, профиль клиента" />
          <ScopeCard num="04" title="Анализ рынка и конкурентов" tasks="Кабинетное исследование, конкурентная карта, анализ аналогов" results="Карта конкурентов, сегментация, гипотезы дифференциации" />
        </View>
      </View>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 10: SCOPE 2 (stages 5-8)
   ════════════════════════════════════════════ */
const S10 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Содержание работ · 2/2" num={10} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 26, marginBottom: 20 }]}>
        Содержание работ <Text style={{ color: T.muted, fontWeight: 400, fontSize: 16 }}>(этапы 5–8)</Text>
      </Text>
      <View style={{ gap: 10 }}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <ScopeCard num="05" title="Коммерческая упаковка" tasks="Набор материалов, структура предложения, экономический эффект, возражения" results="Одностраничник, презентация, FAQ, шаблоны, калькулятор эффекта" />
          <ScopeCard num="06" title="Проверка внешнего спроса" tasks="Интервью, встречи, фиксация сигналов интереса и условий пилота" results="Реестр контактов, протоколы, карта интереса, список для пилотов" />
        </View>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <ScopeCard num="07" title="Проектирование пилотов" tasks="Дизайн пилота, критерии успеха, роли сторон, требования по безопасности" results="Паспорт пилота, KPI, план-график, реестр рисков" />
          <ScopeCard num="08" title="Финальная защита и план" tasks="Итоговая сессия, фиксация решений, рекомендации по следующей волне" results="Итоговый отчёт, решения по продуктам, дорожная карта" />
        </View>
      </View>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 11: TEAM
   ════════════════════════════════════════════ */
const team = [
  { role: "Аналитик", count: "2 чел.", desc: "Анализ рынка, сбор и структурирование данных, построение моделей" },
  { role: "Старший аналитик", count: "1 чел.", desc: "Методология исследования, анализ трендов, подготовка выводов" },
  { role: "Дизайнер", count: "1 чел.", desc: "Подготовка executive-презентации и резюме проекта" },
  { role: "Координатор", count: "1 чел.", desc: "Контроль сроков, взаимодействие с заказчиком" },
];
const S11 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Команда" num={11} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 30, marginBottom: 28 }]}>
        Команда <Text style={{ color: T.accent }}>проекта</Text>
      </Text>
      <View style={{ flexDirection: "row", gap: 12 }}>
        {team.map((m, i) => (
          <Card key={i} style={{ flex: 1 }}>
            <NumBadge n={i + 1} />
            <Text style={{ fontSize: 14, fontWeight: 700, color: T.fg }}>{m.role}</Text>
            <Text style={{ fontSize: 10, color: T.accent, marginTop: 3, marginBottom: 14 }}>{m.count}</Text>
            <Text style={s.body}>{m.desc}</Text>
          </Card>
        ))}
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginTop: 20 }}>
        <Text style={{ fontSize: 12, color: T.muted }}>Итого:</Text>
        <Text style={{ fontSize: 18, fontWeight: 700, color: T.fg }}>5 специалистов</Text>
      </View>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 12: ROADMAP (Enhanced Gantt)
   ════════════════════════════════════════════ */
const WEEKS = 12;
const stages = [
  { name: "Запуск проекта, NDA", s: 1, e: 1 },
  { name: "Отбор продуктов", s: 1, e: 2 },
  { name: "Диагностика, ценность", s: 2, e: 4 },
  { name: "Анализ рынка", s: 3, e: 4 },
  { name: "Коммерческая упаковка", s: 5, e: 6 },
  { name: "Проверка спроса", s: 6, e: 8 },
  { name: "Проектирование пилотов", s: 8, e: 12 },
  { name: "Финальная защита", s: 12, e: 12 },
];
const CHART_LEFT = 170;
const CHART_W = PW - PAD * 2 - CHART_LEFT;
const ROW_H = 28;
const S12 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Дорожная карта" num={12} />
    <Text style={[s.h2, { marginBottom: 20 }]}>
      Дорожная карта <Text style={{ color: T.accent }}>· 12 недель</Text>
    </Text>
    <View style={{ flex: 1, justifyContent: "center" }}>
      {/* week header */}
      <View style={{ flexDirection: "row", marginBottom: 8 }}>
        <View style={{ width: CHART_LEFT }} />
        <View style={{ flexDirection: "row", width: CHART_W }}>
          {Array.from({ length: WEEKS }, (_, i) => (
            <View key={i} style={{ width: CHART_W / WEEKS, alignItems: "center" }}>
              <Text style={[s.caption, { fontSize: 8 }]}>{i + 1}</Text>
            </View>
          ))}
        </View>
      </View>
      {/* grid lines + bars */}
      {stages.map((st, i) => (
        <View key={i} style={{ flexDirection: "row", alignItems: "center", height: ROW_H, marginBottom: 4 }}>
          <View style={{ width: CHART_LEFT }}>
            <Text style={{ fontSize: 10, color: T.fg2, textAlign: "right", paddingRight: 16 }}>{st.name}</Text>
          </View>
          <View style={{ width: CHART_W, height: ROW_H - 4, backgroundColor: T.bg2, borderRadius: 4, position: "relative" }}>
            {/* vertical grid lines */}
            {Array.from({ length: WEEKS - 1 }, (_, k) => (
              <View key={k} style={{
                position: "absolute", left: ((k + 1) / WEEKS) * CHART_W, top: 0,
                width: 0.5, height: ROW_H - 4, backgroundColor: T.border, opacity: 0.3,
              }} />
            ))}
            <View style={{
              position: "absolute", top: 2, height: ROW_H - 8, borderRadius: 4,
              backgroundColor: T.accent, opacity: 0.8,
              left: ((st.s - 1) / WEEKS) * CHART_W + 1,
              width: ((st.e - st.s + 1) / WEEKS) * CHART_W - 2,
            }} />
          </View>
        </View>
      ))}
    </View>
    <Text style={[s.caption, { marginTop: 8 }]}>* Длительность зависит от скорости обработки материалов со стороны клиента</Text>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 13: PRICING (Premium Card)
   ════════════════════════════════════════════ */
const S13 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Стоимость" num={13} />
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Card style={{
        padding: "36 56", alignItems: "center",
        borderColor: T.border2, borderWidth: 1,
      }}>
        <Text style={[s.h2, { fontSize: 28, marginBottom: 28, textAlign: "center" }]}>
          Стоимость <Text style={{ color: T.accent }}>проекта</Text>
        </Text>
        <Text style={{ fontSize: 18, color: T.dim, textDecoration: "line-through" }}>3 500 000 ₽</Text>
        <View style={{ marginTop: 12 }}>
          <Badge solid>СКИДКА 15%</Badge>
        </View>
        <Text style={{ fontSize: 56, fontWeight: 700, color: T.fg, marginTop: 16, lineHeight: 1 }}>
          2 975 000 <Text style={{ fontSize: 24, color: T.muted }}>₽</Text>
        </Text>
        <Divider width={60} color={T.border} mt={20} mb={16} />
        <Text style={{ fontSize: 13, color: T.muted }}>В том числе НДС 5%</Text>
        <Text style={[s.caption, { marginTop: 6 }]}>Предложение действительно 2 месяца</Text>
      </Card>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 14: CONTACT
   ════════════════════════════════════════════ */
const contacts = [
  { name: "Ширшов Ярослав", phone: "+7-985-364-0416", tg: "@veronaj" },
  { name: "Старостина Наталья", phone: "+7-926-295-8288", tg: "@NataschaStar" },
];
const S14 = () => (
  <Page size={[PW, PH]} style={[s.page, { justifyContent: "center", alignItems: "center" }]}>
    <Text style={[s.h1, { marginBottom: 32 }]}>Спасибо за внимание</Text>
    <View style={{ flexDirection: "row", gap: 56, marginBottom: 24 }}>
      {contacts.map((c, i) => (
        <View key={i} style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 15, fontWeight: 700, color: T.fg, marginBottom: 8 }}>{c.name}</Text>
          <Text style={{ fontSize: 11, color: T.muted, marginBottom: 3 }}>{c.phone}</Text>
          <Text style={{ fontSize: 11, color: T.muted }}>{c.tg}</Text>
        </View>
      ))}
    </View>
    <Text style={{ fontSize: 11, color: T.muted, marginBottom: 24 }}>hello@hop.agency</Text>
    <Text style={{ fontSize: 17, fontWeight: 700, letterSpacing: 4, color: T.fg }}>
      HOP<Text style={{ color: T.accent }}>.</Text>AGEN<Text style={{ color: T.accent }}>C</Text>Y
    </Text>
  </Page>
);

/* ═══════════════════════════════════════════
   DOCUMENT
   ═══════════════════════════════════════════ */
const PresentationDocument = () => (
  <Document title="Презентация Ростелеком — Hop.Agency" author="Hop.Agency">
    <S1 /><S2 /><S3 /><S4 /><S5 /><S6 /><S7 /><S8 /><S9 /><S10 /><S11 /><S12 /><S13 /><S14 />
  </Document>
);

/* ═══════════════════════════════════════════
   GENERATE & DOWNLOAD
   ═══════════════════════════════════════════ */
export async function generatePresentationPdf(onProgress) {
  if (onProgress) onProgress("Генерация PDF…");
  const blob = await pdf(<PresentationDocument />).toBlob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Презентация_Ростелеком_HopAgency.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
