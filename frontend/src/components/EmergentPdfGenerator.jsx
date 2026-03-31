/**
 * Emergent Masterclass PDF Generator
 * Built with @react-pdf/renderer
 *
 * Design: Dark Tech / Lime Accent
 * Font: Inter (with Cyrillic)
 * Page: A4 Landscape (841.89 x 595.28 pt)
 * Slides: 15
 */
import React from "react";
import {
  Document, Page, View, Text, StyleSheet, Font, Svg, Circle, pdf,
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
  fg:      "#fafafa",
  fg2:     "#d0d4e0",
  muted:   "#8b92ab",
  dim:     "#6b7190",
  accent:  "#a6e126",
  accentDim: "#7ab01a",
  accentBg: "rgba(166,225,38,0.12)",
  red:     "#ef4444",
  redBg:   "rgba(239,68,68,0.12)",
  border:  "#2a2a5c",
};

const PW = 841.89;
const PH = 595.28;
const PAD = 40;
const TOTAL = 15;

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
  label: { fontWeight: 700, fontSize: 8, letterSpacing: 1.5, textTransform: "uppercase", color: T.muted },
});

/* ═══════════════════════════════════════════
   REUSABLE COMPONENTS
   ═══════════════════════════════════════════ */
const Header = ({ label, num }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexShrink: 0 }}>
    {label ? <Text style={s.label}>{label}</Text> : <View />}
    {num && <Text style={{ fontSize: 8, color: T.dim }}>{String(num).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}</Text>}
  </View>
);

const Brand = () => (
  <Text style={{ position: "absolute", bottom: 16, left: PAD, fontSize: 7, letterSpacing: 1.8, color: "#3a3f5a" }}>
    EMERGENT<Text style={{ color: T.accentDim }}>.</Text>SH
  </Text>
);

const Dot = ({ size = 5, color }) => (
  <Svg width={size} height={size} style={{ marginTop: 4, flexShrink: 0 }}>
    <Circle cx={size / 2} cy={size / 2} r={size / 2} fill={color || T.accent} />
  </Svg>
);

const Badge = ({ children }) => (
  <View style={{
    backgroundColor: T.accentBg, borderRadius: 4, padding: "3 10", alignSelf: "flex-start",
  }}>
    <Text style={{ fontSize: 8, fontWeight: 700, letterSpacing: 1.2, color: T.accent }}>
      {children}
    </Text>
  </View>
);

const Card = ({ children, accentBorder, redBorder, style }) => (
  <View style={[{
    backgroundColor: T.bg2, borderRadius: 8,
    borderWidth: 1, borderColor: T.border, padding: 20,
  }, accentBorder && { borderLeftWidth: 3, borderLeftColor: T.accent },
     redBorder && { borderLeftWidth: 3, borderLeftColor: T.red },
     style]}>
    {children}
  </View>
);

const NumBig = ({ n }) => (
  <Text style={{ fontSize: 24, fontWeight: 700, color: T.accentBg.replace("0.12", "0.4"), lineHeight: 1 }}>{n}</Text>
);

const Divider = ({ width = 50, mt = 0, mb = 0 }) => (
  <View style={{ width, height: 1.5, backgroundColor: T.accent, marginTop: mt, marginBottom: mb, opacity: 0.5 }} />
);

const BgDeco = () => (
  <View style={{ position: "absolute", top: 0, right: 0, width: 300, height: 300, overflow: "hidden" }}>
    <Svg width={300} height={300}>
      <Circle cx={220} cy={80} r={140} fill="none" stroke={T.accent} strokeWidth={0.5} opacity={0.06} />
      <Circle cx={220} cy={80} r={80} fill="none" stroke={T.accent} strokeWidth={0.5} opacity={0.04} />
    </Svg>
  </View>
);

/* ════════════════════════════════════════════
   SLIDE 1: COVER
   ════════════════════════════════════════════ */
const S1 = () => (
  <Page size={[PW, PH]} style={[s.page, { justifyContent: "center", alignItems: "center" }]}>
    <BgDeco />
    <Badge>МАСТЕР-КЛАСС</Badge>
    <Text style={[s.h1, { fontSize: 32, textAlign: "center", maxWidth: 620, marginTop: 20 }]}>
      От идеи до продукта{"\n"}<Text style={{ color: T.accent }}>с ИИ-агентами</Text>
    </Text>
    <Text style={{ fontSize: 12, color: T.muted, marginTop: 20, textAlign: "center", maxWidth: 520, lineHeight: 1.6 }}>
      Как превратить идею в работающий цифровой продукт на примере Emergent.sh
    </Text>
    <Divider width={50} mt={28} mb={16} />
    <Text style={{ fontSize: 10, color: T.dim, textAlign: "center" }}>
      Для студентов университета
    </Text>
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 2: WHAT AUDIENCE KNOWS
   ════════════════════════════════════════════ */
const clusters = [
  { title: "ЧАТ И ПОИСК", items: ["GigaChat", "ChatGPT", "Perplexity", "Алиса"] },
  { title: "ГЕНЕРАЦИЯ", items: ["Midjourney", "DALL-E", "Suno", "NotebookLM"] },
  { title: "КОД", items: ["Cursor", "Claude Code", "Codex"] },
];
const S2 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Контекст" num={2} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 26, marginBottom: 6 }]}>
        Вы уже знаете ИИ <Text style={{ color: T.accent }}>как сервис</Text>
      </Text>
      <Text style={[s.body, { marginBottom: 24 }]}>Сегодня посмотрим на ИИ как на команду</Text>
      <View style={{ flexDirection: "row", gap: 14 }}>
        {clusters.map((c, i) => (
          <Card key={i} style={{ flex: 1 }}>
            <Text style={{ fontSize: 8, fontWeight: 700, letterSpacing: 1.2, color: T.accent, marginBottom: 14 }}>{c.title}</Text>
            <View style={{ gap: 8 }}>
              {c.items.map((item, j) => (
                <View key={j} style={{ backgroundColor: T.bg, borderRadius: 4, padding: "5 10" }}>
                  <Text style={{ fontSize: 10, color: T.fg2 }}>{item}</Text>
                </View>
              ))}
            </View>
          </Card>
        ))}
      </View>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 3: ABOUT
   ════════════════════════════════════════════ */
const S3 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Фокус" num={3} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 24, marginBottom: 24 }]}>
        Речь не о том, как получить ответ.{"\n"}<Text style={{ color: T.accent }}>Речь о пути до продукта.</Text>
      </Text>
      <View style={{ flexDirection: "row", gap: 14 }}>
        <Card style={{ flex: 1 }}>
          <Text style={[s.label, { marginBottom: 14 }]}>Обычный ИИ-инструмент</Text>
          {["Ответить на вопрос", "Сгенерировать текст", "Подсказать решение"].map((a, i) => (
            <View key={i} style={{ flexDirection: "row", gap: 8, alignItems: "center", marginBottom: 8 }}>
              <Dot size={5} color={T.dim} />
              <Text style={{ fontSize: 11, color: T.dim }}>{a}</Text>
            </View>
          ))}
        </Card>
        <Card accentBorder style={{ flex: 1 }}>
          <Text style={[s.label, { color: T.accent, marginBottom: 14 }]}>Платформа с ИИ-агентами</Text>
          {["Спроектировать архитектуру", "Собрать работающий продукт", "Доработать и протестировать"].map((a, i) => (
            <View key={i} style={{ flexDirection: "row", gap: 8, alignItems: "center", marginBottom: 8 }}>
              <Dot size={5} />
              <Text style={{ fontSize: 11, color: T.fg }}>{a}</Text>
            </View>
          ))}
        </Card>
      </View>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 4: PATH
   ════════════════════════════════════════════ */
const S4 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Сдвиг" num={4} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 26, marginBottom: 24 }]}>
        Путь стал <Text style={{ color: T.accent }}>короче в разы</Text>
      </Text>
      <Card style={{ marginBottom: 14, padding: 16 }}>
        <Text style={[s.label, { marginBottom: 12 }]}>Раньше · Месяцы</Text>
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          {["Идея", "Команда", "Разработка", "Тесты", "Запуск"].map((step, i) => (
            <React.Fragment key={i}>
              <View style={{ backgroundColor: T.bg, borderRadius: 4, padding: "5 12" }}>
                <Text style={{ fontSize: 10, color: T.dim }}>{step}</Text>
              </View>
              {i < 4 && <Text style={{ fontSize: 10, color: T.dim }}>→</Text>}
            </React.Fragment>
          ))}
        </View>
      </Card>
      <Card accentBorder style={{ padding: 16 }}>
        <Text style={[s.label, { color: T.accent, marginBottom: 12 }]}>Сейчас · Часы или дни</Text>
        <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
          {["Идея", "ИИ-агенты", "Продукт"].map((step, i) => (
            <React.Fragment key={i}>
              <View style={{ backgroundColor: T.accentBg, borderRadius: 4, padding: "6 16", borderWidth: 1, borderColor: T.accent + "30" }}>
                <Text style={{ fontSize: 12, fontWeight: 600, color: T.fg }}>{step}</Text>
              </View>
              {i < 2 && <Text style={{ fontSize: 14, color: T.accent }}>→</Text>}
            </React.Fragment>
          ))}
        </View>
      </Card>
      <Text style={[s.body, { marginTop: 16 }]}>MVP и коммерчески применимый продукт — разница сокращается</Text>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 5: MAP
   ════════════════════════════════════════════ */
const mapSteps = [
  { num: "01", title: "Сформулировать идею", desc: "Точно сказать, что вы делаете, для кого и зачем" },
  { num: "02", title: "Понять проблему пользователя", desc: "Разобраться, у кого болит, как болит и почему" },
  { num: "03", title: "Превратить в требования", desc: "Перевести потребности в конкретный набор функций" },
];
const S5 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Маршрут" num={5} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 28, marginBottom: 24 }]}>
        Три шага <Text style={{ color: T.accent }}>к продукту</Text>
      </Text>
      <View style={{ flexDirection: "row", gap: 14 }}>
        {mapSteps.map((st, i) => (
          <Card key={i} style={{ flex: 1 }}>
            <Text style={{ fontSize: 28, fontWeight: 700, color: T.accentBg.replace("0.12", "0.3"), marginBottom: 10 }}>{st.num}</Text>
            <Text style={{ fontSize: 14, fontWeight: 700, color: T.fg, marginBottom: 8 }}>{st.title}</Text>
            <Text style={s.body}>{st.desc}</Text>
          </Card>
        ))}
      </View>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 6: IDEA
   ════════════════════════════════════════════ */
const S6 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Шаг 1 · Идея" num={6} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 26, marginBottom: 6 }]}>
        Плохая формулировка <Text style={{ color: T.accent }}>=</Text> плохой результат
      </Text>
      <Text style={[s.body, { marginBottom: 24 }]}>Даже если инструмент сильный</Text>
      <View style={{ flexDirection: "row", gap: 14, marginBottom: 20 }}>
        <Card redBorder style={{ flex: 1 }}>
          <Text style={{ fontSize: 8, fontWeight: 700, letterSpacing: 1.2, color: T.red, marginBottom: 12 }}>СЛИШКОМ ОБЩЕЕ</Text>
          <Text style={{ fontSize: 14, color: T.dim, lineHeight: 1.5 }}>«Хочу сервис для студентов»</Text>
        </Card>
        <Card accentBorder style={{ flex: 1 }}>
          <Text style={{ fontSize: 8, fontWeight: 700, letterSpacing: 1.2, color: T.accent, marginBottom: 12 }}>ДОСТАТОЧНО КОНКРЕТНО</Text>
          <Text style={{ fontSize: 12, color: T.fg, lineHeight: 1.5 }}>
            «Хочу сервис, который помогает студентам готовиться к экзаменам по билетам и автоматически собирать персональный план подготовки»
          </Text>
        </Card>
      </View>
      <Card accentBorder style={{ padding: 14 }}>
        <Text style={{ fontSize: 11, color: T.fg2, lineHeight: 1.5 }}>
          <Text style={{ fontWeight: 600, color: T.fg }}>Вывод: </Text>
          чем точнее сформулирована идея, тем лучше результат от ИИ
        </Text>
      </Card>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 7: USER PROBLEM
   ════════════════════════════════════════════ */
const questions = [
  { q: "У кого эта проблема есть?", h: "Определите аудиторию" },
  { q: "В чём она проявляется?", h: "Конкретные ситуации" },
  { q: "Как решают сейчас?", h: "Альтернативы и конкуренты" },
  { q: "Почему не устраивает?", h: "Что можно улучшить" },
];
const S7 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Шаг 2 · Пользователь" num={7} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 24, marginBottom: 6 }]}>
        Продукт нужен не потому, что идея интересная
      </Text>
      <Text style={{ fontSize: 13, color: T.accent, marginBottom: 24 }}>А потому, что у пользователя есть реальная задача</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
        {questions.map((item, i) => (
          <Card key={i} style={{ width: "48%", padding: 16 }}>
            <Text style={{ fontSize: 20, fontWeight: 700, color: T.accentBg.replace("0.12", "0.3"), marginBottom: 8 }}>{String(i + 1).padStart(2, "0")}</Text>
            <Text style={{ fontSize: 13, fontWeight: 700, color: T.fg, marginBottom: 4 }}>{item.q}</Text>
            <Text style={{ fontSize: 10, color: T.muted }}>{item.h}</Text>
          </Card>
        ))}
      </View>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 8: MARKET
   ════════════════════════════════════════════ */
const checks = [
  "Сколько людей с этим сталкиваются?",
  "Насколько это болезненно?",
  "Готовы ли они платить за решение?",
  "Как часто будут возвращаться?",
  "Разовая покупка или долгий сценарий?",
];
const S8 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Шаг 2 · Рынок" num={8} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 24, marginBottom: 6 }]}>
        Проверь не только проблему, <Text style={{ color: T.accent }}>но и силу спроса</Text>
      </Text>
      <Text style={[s.body, { marginBottom: 24 }]}>Если продукт не решает важную задачу — он не нужен</Text>
      <View style={{ gap: 10 }}>
        {checks.map((q, i) => (
          <View key={i} style={{ flexDirection: "row", gap: 12, alignItems: "center", backgroundColor: T.bg2, borderRadius: 8, padding: "10 16", borderWidth: 1, borderColor: T.border }}>
            <Text style={{ fontSize: 16, fontWeight: 700, color: T.accentBg.replace("0.12", "0.3"), width: 26 }}>{String(i + 1).padStart(2, "0")}</Text>
            <Text style={{ fontSize: 12, color: T.fg, flex: 1 }}>{q}</Text>
          </View>
        ))}
      </View>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 9: REQUIREMENTS
   ════════════════════════════════════════════ */
const S9 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Шаг 3 · Требования" num={9} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 24, marginBottom: 24 }]}>
        Требования <Text style={{ color: T.accent }}>нельзя придумывать</Text> в отрыве от пользователя
      </Text>
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <Card style={{ flex: 1 }}>
          <Text style={[s.label, { color: T.accent, marginBottom: 12 }]}>БОЛЬ</Text>
          <Text style={{ fontSize: 12, color: T.fg, lineHeight: 1.5 }}>Студент не понимает, что учить в первую очередь</Text>
        </Card>
        <Text style={{ fontSize: 18, color: T.accent }}>→</Text>
        <Card style={{ flex: 1 }}>
          <Text style={[s.label, { color: T.accent, marginBottom: 12 }]}>ФУНКЦИЯ</Text>
          <Text style={{ fontSize: 12, color: T.fg, lineHeight: 1.5 }}>Персональный план подготовки к экзамену</Text>
        </Card>
        <Text style={{ fontSize: 18, color: T.accent }}>→</Text>
        <Card accentBorder style={{ flex: 1 }}>
          <Text style={[s.label, { color: T.accent, marginBottom: 12 }]}>ЦЕННОСТЬ</Text>
          <Text style={{ fontSize: 12, color: T.fg, lineHeight: 1.5 }}>Меньше хаоса, выше шанс успеть</Text>
        </Card>
      </View>
      <Text style={[s.body, { marginTop: 20 }]}>
        Требования должны вытекать из того, что вы узнали о пользователях
      </Text>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 10: EMERGENT
   ════════════════════════════════════════════ */
const S10 = () => (
  <Page size={[PW, PH]} style={[s.page, { justifyContent: "center", alignItems: "center" }]}>
    <BgDeco />
    <Text style={[s.h1, { fontSize: 32, textAlign: "center", maxWidth: 620 }]}>
      Emergent — это{"\n"}<Text style={{ color: T.accent }}>цифровая команда</Text>
    </Text>
    <Text style={{ fontSize: 12, color: T.muted, marginTop: 20, textAlign: "center", maxWidth: 520, lineHeight: 1.6 }}>
      Не просто чат с искусственным интеллектом. Система, которая помогает довести идею до рабочего продукта.
    </Text>
    <Divider width={50} mt={28} mb={16} />
    <Text style={{ fontSize: 10, color: T.dim, textAlign: "center", maxWidth: 480, lineHeight: 1.5 }}>
      У вас в руках остаётся главное — постановка задачи и направление
    </Text>
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 11: TEAM
   ════════════════════════════════════════════ */
const roles = [
  { title: "Бизнес-аналитик", desc: "Переводит задачу на язык разработки" },
  { title: "Дизайнер", desc: "Создаёт интерфейс и UX" },
  { title: "Full-stack разработчик", desc: "Пишет код, связывает всё воедино" },
  { title: "Тестировщик", desc: "Проверяет сценарии, ищет ошибки" },
  { title: "Project-менеджер", desc: "Ваш основной собеседник" },
];
const S11 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Emergent · Команда" num={11} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 24, marginBottom: 24 }]}>
        Кто входит в <Text style={{ color: T.accent }}>цифровую команду</Text>
      </Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View style={{ width: 110, backgroundColor: T.accentBg, borderRadius: 8, justifyContent: "center", alignItems: "center", padding: 16, borderWidth: 1, borderColor: T.accent + "30" }}>
          <Text style={{ fontSize: 13, fontWeight: 700, color: T.accent, textAlign: "center" }}>Ваша{"\n"}идея</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
          {roles.map((r, i) => (
            <Card key={i} style={{ width: "48%", padding: 14 }}>
              <Text style={{ fontSize: 16, fontWeight: 700, color: T.accentBg.replace("0.12", "0.25"), marginBottom: 6 }}>{String(i + 1).padStart(2, "0")}</Text>
              <Text style={{ fontSize: 12, fontWeight: 700, color: T.fg, marginBottom: 4 }}>{r.title}</Text>
              <Text style={{ fontSize: 9, color: T.muted }}>{r.desc}</Text>
            </Card>
          ))}
        </View>
      </View>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 12: TASKS
   ════════════════════════════════════════════ */
const doItems = ["Объяснять простым языком", "Давать контекст и детали", "Описывать желаемый результат", "Уточнять ограничения"];
const dontItems = ["Говорить слишком общо", "Использовать много сленга", "Надеяться, что додумает сам", "Перескакивать между задачами"];
const S12 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Практика" num={12} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 24, marginBottom: 6 }]}>
        Как правильно <Text style={{ color: T.accent }}>ставить задачу</Text>
      </Text>
      <Text style={[s.body, { marginBottom: 24 }]}>Разговаривайте как с умным исполнителем, который впервые слышит о задаче</Text>
      <View style={{ flexDirection: "row", gap: 14 }}>
        <Card accentBorder style={{ flex: 1 }}>
          <Text style={{ fontSize: 9, fontWeight: 700, letterSpacing: 1.2, color: T.accent, marginBottom: 14 }}>ДЕЛАТЬ</Text>
          {doItems.map((item, i) => (
            <View key={i} style={{ flexDirection: "row", gap: 8, alignItems: "center", marginBottom: 10 }}>
              <Dot size={5} />
              <Text style={{ fontSize: 12, color: T.fg }}>{item}</Text>
            </View>
          ))}
        </Card>
        <Card redBorder style={{ flex: 1 }}>
          <Text style={{ fontSize: 9, fontWeight: 700, letterSpacing: 1.2, color: T.red, marginBottom: 14 }}>НЕ ДЕЛАТЬ</Text>
          {dontItems.map((item, i) => (
            <View key={i} style={{ flexDirection: "row", gap: 8, alignItems: "center", marginBottom: 10 }}>
              <Dot size={5} color={T.red} />
              <Text style={{ fontSize: 12, color: T.dim }}>{item}</Text>
            </View>
          ))}
        </Card>
      </View>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 13: CONTEXT
   ════════════════════════════════════════════ */
const S13 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Процесс" num={13} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 24, marginBottom: 6 }]}>
        Агенты могут <Text style={{ color: T.accent }}>меняться</Text>
      </Text>
      <Text style={[s.body, { marginBottom: 24 }]}>Контекст нужно удерживать через документацию</Text>
      <View style={{ flexDirection: "row", gap: 10, marginBottom: 20 }}>
        {[
          { n: "01", t: "Чат растёт", d: "Вы общаетесь, ставите задачи" },
          { n: "02", t: "Окно внимания", d: "Объём контекста заканчивается" },
          { n: "03", t: "Fork", d: "Новая ветка — новые агенты" },
        ].map((step, i) => (
          <React.Fragment key={i}>
            <Card style={[{ flex: 1, padding: 14 }, i === 2 && { borderLeftWidth: 3, borderLeftColor: T.accent }]}>
              <Text style={{ fontSize: 16, fontWeight: 700, color: T.accentBg.replace("0.12", "0.3"), marginBottom: 6 }}>{step.n}</Text>
              <Text style={{ fontSize: 13, fontWeight: 700, color: i === 2 ? T.accent : T.fg, marginBottom: 4 }}>{step.t}</Text>
              <Text style={{ fontSize: 10, color: T.muted }}>{step.d}</Text>
            </Card>
            {i < 2 && <View style={{ justifyContent: "center" }}><Text style={{ fontSize: 14, color: T.accent }}>→</Text></View>}
          </React.Fragment>
        ))}
      </View>
      <Card accentBorder style={{ padding: 14 }}>
        <Text style={{ fontSize: 11, color: T.fg2, lineHeight: 1.5 }}>
          <Text style={{ fontWeight: 600, color: T.fg }}>Ключевое: </Text>
          новые агенты опираются на документацию. Без неё часть деталей теряется.
        </Text>
      </Card>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 14: DOCS
   ════════════════════════════════════════════ */
const docRules = [
  { n: "01", t: "Документировать крупные фичи", d: "Что реализовано, как устроено, какие решения приняты" },
  { n: "02", t: "Фиксировать ключевые решения", d: "Ограничения, архитектурные выборы и договорённости" },
  { n: "03", t: "Переносить контекст", d: "При необходимости — важный контекст в новую ветку" },
];
const S14 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Документация" num={14} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 24, marginBottom: 6 }]}>
        Если не фиксировать решения — <Text style={{ color: T.accent }}>детали потеряются</Text>
      </Text>
      <Text style={[s.body, { marginBottom: 24 }]}>Документация — необходимая часть процесса</Text>
      <View style={{ flexDirection: "row", gap: 14 }}>
        {docRules.map((r, i) => (
          <Card key={i} accentBorder style={{ flex: 1 }}>
            <Text style={{ fontSize: 24, fontWeight: 700, color: T.accentBg.replace("0.12", "0.3"), marginBottom: 10 }}>{r.n}</Text>
            <Text style={{ fontSize: 13, fontWeight: 700, color: T.fg, marginBottom: 6 }}>{r.t}</Text>
            <Text style={s.body}>{r.d}</Text>
          </Card>
        ))}
      </View>
      <Text style={[s.body, { marginTop: 16 }]}>
        Просите project-менеджера фиксировать всё, что важно для продолжения работы
      </Text>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 15: FINAL
   ════════════════════════════════════════════ */
const S15 = () => (
  <Page size={[PW, PH]} style={[s.page, { justifyContent: "center", alignItems: "center" }]}>
    <BgDeco />
    <Text style={[s.h2, { fontSize: 24, textAlign: "center", maxWidth: 600, marginBottom: 24 }]}>
      Преимущество получает тот, кто умеет превращать идею{"\n"}
      <Text style={{ color: T.accent }}>в понятную задачу и рабочий продукт</Text>
    </Text>
    <Divider width={50} mb={24} />
    <View style={{ flexDirection: "row", gap: 14, marginBottom: 24 }}>
      {[
        "Идею нужно уточнять",
        "Пользователя нужно понимать",
        "ИИ-агентами нужно управлять",
      ].map((c, i) => (
        <Card key={i} style={{ flex: 1, alignItems: "center", padding: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: 700, color: T.accentBg.replace("0.12", "0.3"), marginBottom: 6 }}>{String(i + 1).padStart(2, "0")}</Text>
          <Text style={{ fontSize: 11, color: T.fg, textAlign: "center", lineHeight: 1.5 }}>{c}</Text>
        </Card>
      ))}
    </View>
    <Text style={{ fontSize: 10, color: T.muted }}>emergent.sh</Text>
  </Page>
);

/* ═══════════════════════════════════════════
   DOCUMENT
   ═══════════════════════════════════════════ */
const EmergentDocument = () => (
  <Document title="От идеи до продукта с ИИ-агентами — Мастер-класс" author="Emergent.sh">
    <S1 /><S2 /><S3 /><S4 /><S5 /><S6 /><S7 /><S8 /><S9 /><S10 /><S11 /><S12 /><S13 /><S14 /><S15 />
  </Document>
);

/* ═══════════════════════════════════════════
   GENERATE & DOWNLOAD
   ═══════════════════════════════════════════ */
export async function generateEmergentPdf(onProgress) {
  if (onProgress) onProgress("Генерация PDF...");
  const blob = await pdf(<EmergentDocument />).toBlob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Emergent_Masterclass_AI_Agents.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
