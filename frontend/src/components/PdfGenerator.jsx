/**
 * Direct PDF generation using @react-pdf/renderer.
 * NO html2canvas, NO DOM rendering.
 * Generates a proper vector PDF with selectable text.
 */
import React from "react";
import {
  Document, Page, View, Text, StyleSheet, Font, Svg, Circle, Rect, Line, pdf,
} from "@react-pdf/renderer";

/* ═══════ Font Registration ═══════ */
Font.register({
  family: "Inter",
  fonts: [
    { src: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf", fontWeight: 400 },
    { src: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYMZg.ttf", fontWeight: 600 },
    { src: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZg.ttf", fontWeight: 700 },
  ],
});

/* ═══════ Color Palette ═══════ */
const C = {
  bg: "#0a0a2e",
  fg: "#fafafa",
  accent: "#e8663c",
  muted: "#8b92ab",
  card: "#141442",
  border: "#2a2a5c",
  dim: "#6b7190",
};

/* ═══════ Page dimensions (A4 landscape in pt: 841.89 × 595.28) ═══════ */
const PW = 841.89;
const PH = 595.28;
const PAD = 50;
const CONTENT_W = PW - PAD * 2;

/* ═══════ Base Styles ═══════ */
const base = StyleSheet.create({
  page: {
    width: PW, height: PH,
    backgroundColor: C.bg, color: C.fg,
    fontFamily: "Inter", fontSize: 11,
    padding: PAD,
    position: "relative",
  },
  heading: { fontFamily: "Inter", fontWeight: 700 },
  brand: {
    position: "absolute", bottom: 18, left: PAD,
    fontFamily: "Inter", fontSize: 7, letterSpacing: 1.8,
    color: "#4a4f70",
  },
  header: {
    flexDirection: "row", justifyContent: "space-between", marginBottom: 20,
  },
  headerLabel: {
    fontFamily: "Inter", fontSize: 8, letterSpacing: 1.5,
    textTransform: "uppercase", color: C.muted,
  },
  headerNum: { fontSize: 8, color: C.muted },
});

/* ─── Shared layout components ─── */
const SlideHeader = ({ label, num }) => (
  <View style={base.header}>
    <Text style={base.headerLabel}>{label}</Text>
    <Text style={base.headerNum}>{String(num).padStart(2, "0")} / 14</Text>
  </View>
);

const Brand = () => (
  <Text style={base.brand}>
    HOP<Text style={{ color: "#7a3d2a" }}>.</Text>AGENCY
  </Text>
);

/* Accent dot */
const Dot = ({ size = 5, color = C.accent }) => (
  <Svg width={size} height={size} style={{ marginTop: 4, flexShrink: 0 }}>
    <Circle cx={size / 2} cy={size / 2} r={size / 2} fill={color} />
  </Svg>
);

/* ════════════════════════════════════════════
   SLIDE 1: TITLE
   ════════════════════════════════════════════ */
const S1 = () => (
  <Page size={[PW, PH]} style={[base.page, { justifyContent: "center", alignItems: "center" }]}>
    <Text style={[base.heading, { fontSize: 18, letterSpacing: 5, marginBottom: 40 }]}>
      HOP<Text style={{ color: C.accent }}>.</Text>AGEN<Text style={{ color: C.accent }}>C</Text>Y
    </Text>
    <Text style={[base.heading, { fontSize: 34, textAlign: "center", lineHeight: 1.2, maxWidth: 620 }]}>
      Сопровождение вывода внутренних продуктов{" "}
      <Text style={{ color: C.accent }}>ПАО «Ростелеком»</Text>{" "}
      на общероссийский рынок
    </Text>
    <Text style={{ fontSize: 14, color: C.muted, marginTop: 28, letterSpacing: 1 }}>
      Коммерческое предложение
    </Text>
    <View style={{ width: 40, height: 1.5, backgroundColor: C.accent, opacity: 0.5, marginTop: 32 }} />
    <Text style={{ fontSize: 10, color: C.dim, marginTop: 16 }}>2025</Text>
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
  <Page size={[PW, PH]} style={base.page}>
    <SlideHeader label="Контекст" num={2} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[base.heading, { fontSize: 30, lineHeight: 1.2, marginBottom: 30 }]}>
        Контекст и основание{"\n"}
        <Text style={{ color: C.accent }}>для предложения</Text>
      </Text>
      <View style={{ flexDirection: "row", gap: 40 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 13, color: C.muted, lineHeight: 1.7 }}>
            Предложение подготовлено по итогам рабочей встречи команд
            Hop.Agency и ПАО «Ростелеком», на которой обсуждались
            практические форматы сотрудничества и отдельный трек по проверке
            внешнего спроса на внутренние продукты.
          </Text>
        </View>
        <View style={{ flex: 1, gap: 12 }}>
          {contextBullets.map((t, i) => (
            <View key={i} style={{ flexDirection: "row", gap: 8, alignItems: "flex-start" }}>
              <Dot size={5} />
              <Text style={{ fontSize: 12, color: "#d0d4e0", lineHeight: 1.5, flex: 1 }}>{t}</Text>
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
  <Page size={[PW, PH]} style={base.page}>
    <SlideHeader label="Предмет предложения" num={3} />
    <Text style={[base.heading, { fontSize: 30, marginBottom: 24 }]}>
      Три фокуса <Text style={{ color: C.accent }}>сотрудничества</Text>
    </Text>
    <View style={{ flexDirection: "row", gap: 16, flex: 1 }}>
      {focusAreas.map((a, i) => (
        <View key={i} style={{
          flex: 1, backgroundColor: C.card, borderRadius: 10, padding: 24,
          borderWidth: 1, borderColor: C.border,
        }}>
          <View style={{
            width: 28, height: 28, borderRadius: 6, backgroundColor: "#2a1a14",
            marginBottom: 16, justifyContent: "center", alignItems: "center",
          }}>
            <Text style={{ color: C.accent, fontSize: 14, fontWeight: 700 }}>{i + 1}</Text>
          </View>
          <Text style={[base.heading, { fontSize: 16, marginBottom: 4 }]}>{a.title}</Text>
          <Text style={{ fontSize: 10, color: C.accent, marginBottom: 16 }}>{a.sub}</Text>
          <Text style={{ fontSize: 11, color: C.muted, lineHeight: 1.5, marginTop: "auto" }}>{a.desc}</Text>
        </View>
      ))}
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 4: GOAL
   ════════════════════════════════════════════ */
const S4 = () => (
  <Page size={[PW, PH]} style={base.page}>
    <SlideHeader label="Цель программы" num={4} />
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Svg width={36} height={36} style={{ marginBottom: 24 }}>
        <Circle cx={18} cy={18} r={16} fill="none" stroke={C.accent} strokeWidth={1.5} />
        <Circle cx={18} cy={18} r={8} fill="none" stroke={C.accent} strokeWidth={1.5} />
        <Circle cx={18} cy={18} r={2} fill={C.accent} />
      </Svg>
      <Text style={[base.heading, { fontSize: 26, textAlign: "center", lineHeight: 1.25, maxWidth: 580 }]}>
        Сформировать для выбранных внутренних продуктов Ростелекома{" "}
        <Text style={{ color: C.accent }}>готовность к внешнему рынку</Text>{" "}
        и подтвердить спрос на целевых сегментах
      </Text>
      <View style={{ width: 50, height: 1.5, backgroundColor: C.border, marginTop: 28 }} />
      <Text style={{ fontSize: 14, color: C.muted, marginTop: 22, textAlign: "center", maxWidth: 480, lineHeight: 1.5 }}>
        Чтобы ускорить коммерческий запуск в масштабе РФ
        после завершения внутренних циклов доработки
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
  <Page size={[PW, PH]} style={base.page}>
    <SlideHeader label="Задачи" num={5} />
    <Text style={[base.heading, { fontSize: 30, marginBottom: 28 }]}>
      Задачи <Text style={{ color: C.accent }}>программы</Text>
    </Text>
    <View style={{ flexDirection: "row", gap: 40, flex: 1 }}>
      <View style={{ flex: 1, gap: 16 }}>
        {tasks.slice(0, 4).map((t, i) => (
          <View key={i} style={{ flexDirection: "row", gap: 12, alignItems: "flex-start" }}>
            <Text style={[base.heading, { fontSize: 14, color: C.accent, width: 24 }]}>
              {String(i + 1).padStart(2, "0")}
            </Text>
            <Text style={{ fontSize: 12, color: "#d0d4e0", lineHeight: 1.5, flex: 1 }}>{t}</Text>
          </View>
        ))}
      </View>
      <View style={{ flex: 1, gap: 16 }}>
        {tasks.slice(4).map((t, i) => (
          <View key={i} style={{ flexDirection: "row", gap: 12, alignItems: "flex-start" }}>
            <Text style={[base.heading, { fontSize: 14, color: C.accent, width: 24 }]}>
              {String(i + 5).padStart(2, "0")}
            </Text>
            <Text style={{ fontSize: 12, color: "#d0d4e0", lineHeight: 1.5, flex: 1 }}>{t}</Text>
          </View>
        ))}
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
  <Page size={[PW, PH]} style={base.page}>
    <SlideHeader label="Результаты" num={6} />
    <Text style={[base.heading, { fontSize: 28 }]}>
      Пакет готовности <Text style={{ color: C.accent }}>к рынку</Text>
    </Text>
    <Text style={{ fontSize: 11, color: C.muted, marginTop: 6, marginBottom: 18 }}>
      По каждому продукту — до 5 продуктов на цикл
    </Text>
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10, flex: 1 }}>
      {results.map((r, i) => (
        <View key={i} style={{
          width: "31%", backgroundColor: C.card, borderRadius: 8, padding: "14 16",
          borderWidth: 1, borderColor: "#22224a",
          flexDirection: "row", gap: 10, alignItems: "flex-start",
        }}>
          <Dot size={6} />
          <View style={{ flex: 1 }}>
            <Text style={[base.heading, { fontSize: 11 }]}>{r.l}</Text>
            <Text style={{ fontSize: 9, color: C.muted, marginTop: 4 }}>{r.d}</Text>
          </View>
        </View>
      ))}
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
  <Page size={[PW, PH]} style={base.page}>
    <SlideHeader label="Сводные результаты" num={7} />
    <Text style={[base.heading, { fontSize: 30, marginBottom: 28 }]}>
      Сводные результаты <Text style={{ color: C.accent }}>программы</Text>
    </Text>
    <View style={{ flexDirection: "row", gap: 16, flex: 1 }}>
      {summary.map((s, i) => (
        <View key={i} style={{
          flex: 1, backgroundColor: C.card, borderRadius: 10, padding: 24,
          borderWidth: 1, borderColor: C.border,
        }}>
          <View style={{
            width: 32, height: 32, borderRadius: 8, backgroundColor: "#2a1a14",
            marginBottom: 16, justifyContent: "center", alignItems: "center",
          }}>
            <Text style={{ color: C.accent, fontSize: 16, fontWeight: 700 }}>{i + 1}</Text>
          </View>
          <Text style={[base.heading, { fontSize: 15, marginBottom: 10 }]}>{s.t}</Text>
          <Text style={{ fontSize: 11, color: C.muted, lineHeight: 1.5, marginTop: "auto" }}>{s.d}</Text>
        </View>
      ))}
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 8: WHY HOP (stats)
   ════════════════════════════════════════════ */
const stats = [
  { n: "38", l: "программ", s: "акселерации за 2023–2025" },
  { n: "600+", l: "проектов", s: "прошли полную оценку" },
  { n: "900+", l: "участников", s: "инвестиционного клуба" },
];
const S8 = () => (
  <Page size={[PW, PH]} style={base.page}>
    <SlideHeader label="О нас" num={8} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[base.heading, { fontSize: 32, marginBottom: 36 }]}>
        Почему <Text style={{ color: C.accent }}>Hop.Agency</Text>
      </Text>
      <View style={{ flexDirection: "row", gap: 30, marginBottom: 36 }}>
        {stats.map((s, i) => (
          <View key={i} style={{ flex: 1 }}>
            <Text style={[base.heading, { fontSize: 56, color: C.accent, lineHeight: 1 }]}>{s.n}</Text>
            <Text style={[base.heading, { fontSize: 14, marginTop: 8 }]}>{s.l}</Text>
            <Text style={{ fontSize: 11, color: C.muted, marginTop: 4 }}>{s.s}</Text>
          </View>
        ))}
      </View>
      <Text style={{ fontSize: 13, color: C.muted, lineHeight: 1.7, maxWidth: 580 }}>
        Работаем на стыке корпоративных инноваций, управления развитием компаний
        на ранних стадиях и инвестиционной экспертизы. Практический опыт продвижения
        внутренних продуктов корпоративных партнёров на внешний рынок через программы
        пилотирования и коммерциализации.
      </Text>
    </View>
    <Brand />
  </Page>
);

/* ─── Scope card helper ─── */
const ScopeCard = ({ num, title, tasks: t, results: r }) => (
  <View style={{
    flex: 1, backgroundColor: C.card, borderRadius: 10, padding: "16 20",
    borderLeftWidth: 3, borderLeftColor: C.accent,
  }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 10 }}>
      <View style={{
        backgroundColor: "#2a1a14", borderRadius: 4, padding: "3 8",
      }}>
        <Text style={[base.heading, { fontSize: 9, color: C.accent }]}>{num}</Text>
      </View>
      <Text style={[base.heading, { fontSize: 12 }]}>{title}</Text>
    </View>
    <Text style={{ fontSize: 10, color: C.muted, lineHeight: 1.5, marginBottom: 6 }}>
      <Text style={{ color: "#b0b4c8", fontWeight: 600 }}>Задачи: </Text>{t}
    </Text>
    <Text style={{ fontSize: 10, color: C.muted, lineHeight: 1.5 }}>
      <Text style={{ color: "#b0b4c8", fontWeight: 600 }}>Результаты: </Text>{r}
    </Text>
  </View>
);

/* ════════════════════════════════════════════
   SLIDE 9: SCOPE 1 (stages 1-4)
   ════════════════════════════════════════════ */
const S9 = () => (
  <Page size={[PW, PH]} style={base.page}>
    <SlideHeader label="Содержание работ · 1/2" num={9} />
    <Text style={[base.heading, { fontSize: 26, marginBottom: 20 }]}>
      Содержание работ <Text style={{ color: C.muted, fontWeight: 400, fontSize: 16 }}>(этапы 1–4)</Text>
    </Text>
    <View style={{ flex: 1, gap: 12 }}>
      <View style={{ flexDirection: "row", gap: 12, flex: 1 }}>
        <ScopeCard num="01" title="Запуск и процедурные решения" tasks="Список продуктов, рабочий календарь, правила работы с данными, шаблоны" results="Паспорт программы, матрица ролей, чек-лист ограничений" />
        <ScopeCard num="02" title="Отбор и приоритезация продуктов" tasks="Критерии выхода, экспресс-оценка готовности, выбор до 5 продуктов" results="Карта показателей, финальный список, карта зависимостей" />
      </View>
      <View style={{ flexDirection: "row", gap: 12, flex: 1 }}>
        <ScopeCard num="03" title="Диагностика продукта и ценность" tasks="Сбор фактуры, сценарии применения, эффекты, позиционирование" results="JTBD/сценарии, ценностное предложение, профиль клиента" />
        <ScopeCard num="04" title="Анализ рынка и конкурентов" tasks="Кабинетное исследование, конкурентная карта, анализ аналогов" results="Карта конкурентов, сегментация, гипотезы дифференциации" />
      </View>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 10: SCOPE 2 (stages 5-8)
   ════════════════════════════════════════════ */
const S10 = () => (
  <Page size={[PW, PH]} style={base.page}>
    <SlideHeader label="Содержание работ · 2/2" num={10} />
    <Text style={[base.heading, { fontSize: 26, marginBottom: 20 }]}>
      Содержание работ <Text style={{ color: C.muted, fontWeight: 400, fontSize: 16 }}>(этапы 5–8)</Text>
    </Text>
    <View style={{ flex: 1, gap: 12 }}>
      <View style={{ flexDirection: "row", gap: 12, flex: 1 }}>
        <ScopeCard num="05" title="Коммерческая упаковка" tasks="Набор материалов, структура предложения, экономический эффект, возражения" results="Одностраничник, презентация, FAQ, шаблоны, калькулятор эффекта" />
        <ScopeCard num="06" title="Проверка внешнего спроса" tasks="Интервью, встречи, фиксация сигналов интереса и условий пилота" results="Реестр контактов, протоколы, карта интереса, список для пилотов" />
      </View>
      <View style={{ flexDirection: "row", gap: 12, flex: 1 }}>
        <ScopeCard num="07" title="Проектирование пилотов" tasks="Дизайн пилота, критерии успеха, роли сторон, требования по безопасности" results="Паспорт пилота, KPI, план-график, реестр рисков" />
        <ScopeCard num="08" title="Финальная защита и план" tasks="Итоговая сессия, фиксация решений, рекомендации по следующей волне" results="Итоговый отчёт, решения по продуктам, дорожная карта" />
      </View>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 11: TEAM
   ════════════════════════════════════════════ */
const team = [
  { role: "Аналитик", count: "2 чел.", tasks: "Анализ рынка, сбор и структурирование данных, построение моделей" },
  { role: "Старший аналитик", count: "1 чел.", tasks: "Методология исследования, анализ трендов, подготовка выводов" },
  { role: "Дизайнер", count: "1 чел.", tasks: "Подготовка executive-презентации и резюме проекта" },
  { role: "Координатор", count: "1 чел.", tasks: "Контроль сроков, взаимодействие с заказчиком" },
];
const S11 = () => (
  <Page size={[PW, PH]} style={base.page}>
    <SlideHeader label="Команда" num={11} />
    <Text style={[base.heading, { fontSize: 30, marginBottom: 24 }]}>
      Команда <Text style={{ color: C.accent }}>проекта</Text>
    </Text>
    <View style={{ flexDirection: "row", gap: 14, flex: 1 }}>
      {team.map((m, i) => (
        <View key={i} style={{
          flex: 1, backgroundColor: C.card, borderRadius: 10, padding: 20,
          borderWidth: 1, borderColor: C.border,
        }}>
          <View style={{
            width: 30, height: 30, borderRadius: 8, backgroundColor: "#2a1a14",
            marginBottom: 14, justifyContent: "center", alignItems: "center",
          }}>
            <Text style={{ color: C.accent, fontSize: 12, fontWeight: 700 }}>{i + 1}</Text>
          </View>
          <Text style={[base.heading, { fontSize: 14 }]}>{m.role}</Text>
          <Text style={{ fontSize: 10, color: C.accent, marginTop: 4, marginBottom: 12 }}>{m.count}</Text>
          <Text style={{ fontSize: 10, color: C.muted, lineHeight: 1.5, marginTop: "auto" }}>{m.tasks}</Text>
        </View>
      ))}
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginTop: 16 }}>
      <Text style={{ fontSize: 12, color: C.muted }}>Итого:</Text>
      <Text style={[base.heading, { fontSize: 18 }]}>5 специалистов</Text>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 12: ROADMAP
   ════════════════════════════════════════════ */
const TW = 12;
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
const BAR_W = CONTENT_W - 160;
const S12 = () => (
  <Page size={[PW, PH]} style={base.page}>
    <SlideHeader label="Дорожная карта" num={12} />
    <Text style={[base.heading, { fontSize: 28, marginBottom: 24 }]}>
      Дорожная карта <Text style={{ color: C.accent }}>· 12 недель</Text>
    </Text>
    <View style={{ flex: 1, justifyContent: "center" }}>
      {/* week numbers */}
      <View style={{ flexDirection: "row", marginBottom: 10, paddingLeft: 160 }}>
        {Array.from({ length: TW }, (_, i) => (
          <View key={i} style={{ width: BAR_W / TW, alignItems: "center" }}>
            <Text style={{ fontSize: 8, color: C.dim }}>{i + 1}</Text>
          </View>
        ))}
      </View>
      {stages.map((st, i) => (
        <View key={i} style={{ flexDirection: "row", alignItems: "center", marginBottom: 6, height: 26 }}>
          <View style={{ width: 160 }}>
            <Text style={{ fontSize: 10, color: "#b0b4c8", textAlign: "right", paddingRight: 14 }}>{st.name}</Text>
          </View>
          <View style={{ width: BAR_W, height: 22, backgroundColor: "#12123a", borderRadius: 4, position: "relative" }}>
            <View style={{
              position: "absolute", top: 0, height: 22, borderRadius: 4,
              backgroundColor: C.accent, opacity: 0.75,
              left: ((st.s - 1) / TW) * BAR_W,
              width: ((st.e - st.s + 1) / TW) * BAR_W,
            }} />
          </View>
        </View>
      ))}
    </View>
    <Text style={{ fontSize: 8, color: C.dim, marginTop: 10 }}>
      * Длительность зависит от скорости обработки и анализа материалов со стороны клиента
    </Text>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 13: PRICING
   ════════════════════════════════════════════ */
const S13 = () => (
  <Page size={[PW, PH]} style={base.page}>
    <SlideHeader label="Стоимость" num={13} />
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={[base.heading, { fontSize: 30, marginBottom: 36 }]}>
        Стоимость <Text style={{ color: C.accent }}>проекта</Text>
      </Text>
      <Text style={[base.heading, { fontSize: 18, color: C.muted, textDecoration: "line-through" }]}>
        3 500 000 ₽
      </Text>
      <View style={{
        backgroundColor: "#2a1a14", borderRadius: 20, padding: "5 16", marginTop: 14,
      }}>
        <Text style={[base.heading, { fontSize: 8, color: C.accent, letterSpacing: 1.5 }]}>СКИДКА 15%</Text>
      </View>
      <Text style={[base.heading, { fontSize: 60, marginTop: 18, lineHeight: 1 }]}>
        2 975 000 <Text style={{ fontSize: 28, color: C.muted }}>₽</Text>
      </Text>
      <View style={{ width: 40, height: 1.5, backgroundColor: C.border, marginTop: 24 }} />
      <Text style={{ fontSize: 13, color: C.muted, marginTop: 18 }}>В том числе НДС 5%</Text>
      <Text style={{ fontSize: 10, color: C.dim, marginTop: 6 }}>Предложение действительно 2 месяца</Text>
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
  <Page size={[PW, PH]} style={[base.page, { justifyContent: "center", alignItems: "center" }]}>
    <Text style={[base.heading, { fontSize: 34, marginBottom: 36 }]}>Спасибо за внимание</Text>
    <View style={{ flexDirection: "row", gap: 60, marginBottom: 28 }}>
      {contacts.map((c, i) => (
        <View key={i} style={{ alignItems: "center" }}>
          <Text style={[base.heading, { fontSize: 15, marginBottom: 10 }]}>{c.name}</Text>
          <Text style={{ fontSize: 11, color: C.muted, marginBottom: 4 }}>{c.phone}</Text>
          <Text style={{ fontSize: 11, color: C.muted }}>{c.tg}</Text>
        </View>
      ))}
    </View>
    <Text style={{ fontSize: 11, color: C.muted, marginBottom: 28 }}>hello@hop.agency</Text>
    <Text style={[base.heading, { fontSize: 17, letterSpacing: 4 }]}>
      HOP<Text style={{ color: C.accent }}>.</Text>AGEN<Text style={{ color: C.accent }}>C</Text>Y
    </Text>
  </Page>
);

/* ═══════ Full Document ═══════ */
const PresentationDocument = () => (
  <Document title="Презентация Ростелеком — Hop.Agency" author="Hop.Agency">
    <S1 /><S2 /><S3 /><S4 /><S5 /><S6 /><S7 /><S8 /><S9 /><S10 /><S11 /><S12 /><S13 /><S14 />
  </Document>
);

/* ═══════ Generate & Download ═══════ */
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
