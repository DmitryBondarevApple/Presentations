/**
 * Emergent Masterclass PDF Generator
 * Matches the web slide design exactly
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

Font.register({
  family: "Inter",
  fonts: [
    { src: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf", fontWeight: 400 },
    { src: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYMZg.ttf", fontWeight: 600 },
    { src: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZg.ttf", fontWeight: 700 },
  ],
});

const T = {
  bg: "#0a0a2e", bg2: "#141442", fg: "#fafafa", fg2: "#d0d4e0",
  muted: "#8b92ab", dim: "#6b7190", accent: "#a6e126", accentDim: "#7ab01a",
  accentBg: "rgba(166,225,38,0.12)", red: "#ef4444", redBg: "rgba(239,68,68,0.12)",
  border: "#2a2a5c", secBg: "#1e1e50",
};
const PW = 841.89;
const PH = 595.28;
const PAD = 40;
const TOTAL = 15;

const s = StyleSheet.create({
  page: {
    width: PW, height: PH, backgroundColor: T.bg, color: T.fg,
    fontFamily: "Inter", fontSize: 11, padding: PAD,
    position: "relative", overflow: "hidden",
  },
  h2: { fontWeight: 700, fontSize: 26, letterSpacing: -0.3, lineHeight: 1.25 },
  sub: { fontSize: 12, color: T.muted, lineHeight: 1.5, marginBottom: 18 },
  conclusion: { fontSize: 11, color: T.fg2, lineHeight: 1.5, marginTop: 14 },
});

/* Reusable */
const Header = ({ label, num }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12, flexShrink: 0 }}>
    {label ? <Text style={{ fontWeight: 700, fontSize: 8, letterSpacing: 1.5, textTransform: "uppercase", color: T.muted }}>{label}</Text> : <View />}
    {num && <Text style={{ fontSize: 8, color: T.dim }}>{String(num).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}</Text>}
  </View>
);

const Brand = () => (
  <Text style={{ position: "absolute", bottom: 14, left: PAD, fontSize: 7, letterSpacing: 1.8, color: "#3a3f5a" }}>
    EMERGENT<Text style={{ color: T.accentDim }}>.</Text>SH
  </Text>
);

const Dot = ({ size = 6, color }) => (
  <Svg width={size} height={size} style={{ marginTop: 3, flexShrink: 0 }}>
    <Circle cx={size / 2} cy={size / 2} r={size / 2} fill={color || T.accent} />
  </Svg>
);

const BadgeLabel = ({ children, color, bg }) => (
  <View style={{ backgroundColor: bg || T.accentBg, borderRadius: 4, padding: "4 10", alignSelf: "flex-start", marginBottom: 12 }}>
    <Text style={{ fontSize: 8, fontWeight: 700, letterSpacing: 1.2, color: color || T.accent }}>{children}</Text>
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

const NumBadge = ({ n }) => (
  <View style={{ width: 28, height: 28, borderRadius: 6, backgroundColor: T.accentBg, justifyContent: "center", alignItems: "center", marginBottom: 10 }}>
    <Text style={{ fontSize: 10, fontWeight: 700, color: T.accent }}>{n}</Text>
  </View>
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

/* ═══════ SLIDE 1: COVER ═══════ */
const S1 = () => (
  <Page size={[PW, PH]} style={[s.page, { justifyContent: "center", alignItems: "center" }]}>
    <BgDeco />
    <BadgeLabel>МАСТЕР-КЛАСС</BadgeLabel>
    <Text style={{ fontWeight: 700, fontSize: 32, textAlign: "center", maxWidth: 620, marginTop: 16, lineHeight: 1.2 }}>
      От идеи до продукта{"\n"}<Text style={{ color: T.accent }}>с ИИ-агентами</Text>
    </Text>
    <Text style={{ fontSize: 13, color: T.muted, marginTop: 18, textAlign: "center", maxWidth: 520, lineHeight: 1.6 }}>
      Как превратить идею в работающий цифровой продукт на примере Emergent.sh
    </Text>
    <Divider width={50} mt={24} mb={14} />
    <Text style={{ fontSize: 10, color: T.dim }}>Для студентов университета</Text>
  </Page>
);

/* ═══════ SLIDE 2: KNOWN ═══════ */
const S2 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Контекст" num={2} />
    <View style={{ flex: 1 }}>
      <Text style={[s.h2, { marginBottom: 4 }]}>
        Вы уже знаете ИИ <Text style={{ color: T.accent }}>как сервис</Text>
      </Text>
      <Text style={s.sub}>Сегодня посмотрим на ИИ как на команду</Text>
      <View style={{ flexDirection: "row", gap: 12, flex: 1 }}>
        {[
          { title: "ЧАТ И ПОИСК", items: ["GigaChat", "ChatGPT", "Perplexity", "Алиса"] },
          { title: "ГЕНЕРАЦИЯ", items: ["Midjourney", "DALL-E", "Suno", "NotebookLM"] },
          { title: "КОД", items: ["Cursor", "Claude Code", "Codex"] },
        ].map((c, i) => (
          <Card key={i} style={{ flex: 1 }}>
            <BadgeLabel>{c.title}</BadgeLabel>
            <View style={{ gap: 8 }}>
              {c.items.map((item, j) => (
                <View key={j} style={{ backgroundColor: T.bg, borderRadius: 4, padding: "6 12" }}>
                  <Text style={{ fontSize: 12, color: T.fg2 }}>{item}</Text>
                </View>
              ))}
            </View>
          </Card>
        ))}
      </View>
      <Text style={{ fontSize: 10, color: T.dim, marginTop: 10 }}>
        Все эти инструменты решают отдельные задачи. Но ни один из них не собирает продукт целиком.
      </Text>
    </View>
    <Brand />
  </Page>
);

/* ═══════ SLIDE 3: ABOUT ═══════ */
const S3 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Фокус" num={3} />
    <View style={{ flex: 1 }}>
      <Text style={[s.h2, { marginBottom: 4 }]}>
        Речь не о том, как получить ответ.{"\n"}<Text style={{ color: T.accent }}>Речь о пути до продукта.</Text>
      </Text>
      <Text style={s.sub}>Разница между инструментом и системой</Text>
      <View style={{ flexDirection: "row", gap: 12, flex: 1 }}>
        <Card style={{ flex: 1 }}>
          <BadgeLabel color={T.muted} bg={T.secBg}>ОБЫЧНЫЙ ИИ-ИНСТРУМЕНТ</BadgeLabel>
          <View style={{ gap: 12 }}>
            {["Ответить на вопрос", "Сгенерировать текст", "Подсказать решение"].map((a, i) => (
              <View key={i} style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                <Dot size={6} color={T.dim} />
                <Text style={{ fontSize: 13, color: T.dim }}>{a}</Text>
              </View>
            ))}
          </View>
        </Card>
        <Card accentBorder style={{ flex: 1 }}>
          <BadgeLabel>ПЛАТФОРМА С ИИ-АГЕНТАМИ</BadgeLabel>
          <View style={{ gap: 12 }}>
            {["Спроектировать архитектуру", "Собрать работающий продукт", "Доработать и протестировать"].map((a, i) => (
              <View key={i} style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                <Dot size={6} />
                <Text style={{ fontSize: 13, color: T.fg }}>{a}</Text>
              </View>
            ))}
          </View>
        </Card>
      </View>
      <Text style={s.conclusion}>
        <Text style={{ fontWeight: 600, color: T.fg }}>Ключевое: </Text>
        обычный ИИ помогает на одном шаге. Платформа с агентами проходит весь путь: от задачи до работающего продукта.
      </Text>
    </View>
    <Brand />
  </Page>
);

/* ═══════ SLIDE 4: PATH ═══════ */
const S4 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Сдвиг" num={4} />
    <View style={{ flex: 1 }}>
      <Text style={[s.h2, { marginBottom: 4 }]}>
        Путь стал <Text style={{ color: T.accent }}>короче в разы</Text>
      </Text>
      <Text style={s.sub}>MVP и коммерчески применимый продукт — разница сокращается</Text>
      <View style={{ flex: 1, justifyContent: "center", gap: 12 }}>
        <Card style={{ padding: 18 }}>
          <BadgeLabel color={T.muted} bg={T.secBg}>РАНЬШЕ · МЕСЯЦЫ</BadgeLabel>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            {["Идея", "Команда", "Разработка", "Тесты", "Запуск"].map((step, i) => (
              <React.Fragment key={i}>
                <View style={{ backgroundColor: T.bg, borderRadius: 4, padding: "6 14" }}>
                  <Text style={{ fontSize: 12, color: T.dim }}>{step}</Text>
                </View>
                {i < 4 && <Text style={{ fontSize: 12, color: T.dim }}>→</Text>}
              </React.Fragment>
            ))}
          </View>
        </Card>
        <Card accentBorder style={{ padding: 18 }}>
          <BadgeLabel>СЕЙЧАС · ЧАСЫ ИЛИ ДНИ</BadgeLabel>
          <View style={{ flexDirection: "row", gap: 14, alignItems: "center" }}>
            {["Идея", "ИИ-агенты", "Продукт"].map((step, i) => (
              <React.Fragment key={i}>
                <View style={{ backgroundColor: T.accentBg, borderRadius: 4, padding: "7 18", borderWidth: 1, borderColor: "rgba(166,225,38,0.2)" }}>
                  <Text style={{ fontSize: 14, fontWeight: 600, color: T.fg }}>{step}</Text>
                </View>
                {i < 2 && <Text style={{ fontSize: 16, color: T.accent }}>→</Text>}
              </React.Fragment>
            ))}
          </View>
        </Card>
      </View>
      <Text style={s.conclusion}>
        <Text style={{ fontWeight: 600, color: T.fg }}>Маршрут: </Text>
        от формулировки идеи к пониманию пользователя и далее — к рабочему продукту.
      </Text>
    </View>
    <Brand />
  </Page>
);

/* ═══════ SLIDE 5: MAP ═══════ */
const S5 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Маршрут" num={5} />
    <View style={{ flex: 1 }}>
      <Text style={[s.h2, { marginBottom: 4 }]}>
        Три шага <Text style={{ color: T.accent }}>к продукту</Text>
      </Text>
      <Text style={s.sub}>Каждый шаг — фундамент для следующего</Text>
      <View style={{ flexDirection: "row", gap: 12, flex: 1 }}>
        {[
          { n: "01", t: "Сформулировать идею", d: "Точно сказать, что вы делаете, для кого и зачем" },
          { n: "02", t: "Понять проблему пользователя", d: "Разобраться, у кого болит, как болит и почему текущие решения не работают" },
          { n: "03", t: "Превратить в требования", d: "Перевести найденные потребности в конкретный набор функций продукта" },
        ].map((st, i) => (
          <Card key={i} accentBorder style={{ flex: 1 }}>
            <NumBadge n={st.n} />
            <Text style={{ fontSize: 15, fontWeight: 700, color: T.fg, marginBottom: 8 }}>{st.t}</Text>
            <Text style={{ fontSize: 11, color: T.muted, lineHeight: 1.5 }}>{st.d}</Text>
          </Card>
        ))}
      </View>
      <Text style={{ fontSize: 10, color: T.dim, marginTop: 10 }}>
        Без первого шага второй не имеет смысла. Без второго — третий будет придуманным.
      </Text>
    </View>
    <Brand />
  </Page>
);

/* ═══════ SLIDE 6: IDEA ═══════ */
const S6 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Шаг 1 · Идея" num={6} />
    <View style={{ flex: 1 }}>
      <Text style={[s.h2, { marginBottom: 4 }]}>
        Плохая формулировка <Text style={{ color: T.accent }}>=</Text> плохой результат
      </Text>
      <Text style={s.sub}>Даже если инструмент сильный</Text>
      <View style={{ flexDirection: "row", gap: 12, flex: 1 }}>
        <Card redBorder style={{ flex: 1 }}>
          <BadgeLabel color={T.red} bg={T.redBg}>СЛИШКОМ ОБЩЕЕ</BadgeLabel>
          <Text style={{ fontSize: 14, color: T.dim, lineHeight: 1.6 }}>
            «Хочу сервис для студентов»
          </Text>
          <Text style={{ fontSize: 10, color: T.dim, lineHeight: 1.5, marginTop: 10, opacity: 0.7 }}>
            Непонятно, что делает сервис, для кого именно, какую задачу решает
          </Text>
        </Card>
        <Card accentBorder style={{ flex: 1 }}>
          <BadgeLabel>ДОСТАТОЧНО КОНКРЕТНО</BadgeLabel>
          <Text style={{ fontSize: 13, color: T.fg, lineHeight: 1.6 }}>
            «Хочу сервис, который помогает студентам готовиться к экзаменам по билетам и автоматически собирать персональный план подготовки»
          </Text>
        </Card>
      </View>
      <Text style={s.conclusion}>
        <Text style={{ fontWeight: 600, color: T.fg }}>Вывод: </Text>
        чем точнее сформулирована идея, тем лучше результат, который вы получите от ИИ.
      </Text>
    </View>
    <Brand />
  </Page>
);

/* ═══════ SLIDE 7: PROBLEM ═══════ */
const S7 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Шаг 2 · Пользователь" num={7} />
    <View style={{ flex: 1 }}>
      <Text style={[s.h2, { marginBottom: 4 }]}>
        Продукт нужен не потому, что идея интересная
      </Text>
      <Text style={{ fontSize: 13, color: T.accent, marginBottom: 18 }}>А потому, что у пользователя есть реальная задача</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10, flex: 1 }}>
        {[
          { q: "У кого эта проблема есть?", h: "Определите целевую аудиторию" },
          { q: "В чём она проявляется?", h: "Опишите конкретные ситуации" },
          { q: "Как решают сейчас?", h: "Текущие альтернативы и конкуренты" },
          { q: "Почему не устраивает?", h: "Что именно можно улучшить" },
        ].map((item, i) => (
          <Card key={i} style={{ width: "48%", padding: 16 }}>
            <NumBadge n={String(i + 1).padStart(2, "0")} />
            <Text style={{ fontSize: 14, fontWeight: 700, color: T.fg, marginBottom: 6 }}>{item.q}</Text>
            <Text style={{ fontSize: 11, color: T.muted, lineHeight: 1.5 }}>{item.h}</Text>
          </Card>
        ))}
      </View>
      <Text style={{ fontSize: 10, color: T.dim, marginTop: 10 }}>
        Если на эти вопросы нет ответа — продукт строится на догадках.
      </Text>
    </View>
    <Brand />
  </Page>
);

/* ═══════ SLIDE 8: MARKET ═══════ */
const S8 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Шаг 2 · Рынок" num={8} />
    <View style={{ flex: 1 }}>
      <Text style={[s.h2, { marginBottom: 4 }]}>
        Проверь не только проблему, <Text style={{ color: T.accent }}>но и силу спроса</Text>
      </Text>
      <Text style={s.sub}>Если продукт не решает важную и понятную задачу — он не нужен</Text>
      <View style={{ flex: 1, justifyContent: "center", gap: 8 }}>
        {[
          { q: "Сколько людей с этим сталкиваются?", h: "Объём рынка" },
          { q: "Насколько это болезненно?", h: "Интенсивность проблемы" },
          { q: "Готовы ли они платить за решение?", h: "Платёжеспособность" },
          { q: "Как часто будут возвращаться?", h: "Частота использования" },
          { q: "Разовая покупка или долгий сценарий?", h: "Модель монетизации" },
        ].map((item, i) => (
          <View key={i} style={{ flexDirection: "row", gap: 12, alignItems: "center", backgroundColor: T.bg2, borderRadius: 8, padding: "10 16", borderWidth: 1, borderColor: T.border }}>
            <NumBadge n={String(i + 1).padStart(2, "0")} />
            <Text style={{ fontSize: 13, color: T.fg, flex: 1 }}>{item.q}</Text>
            <Text style={{ fontSize: 10, color: T.dim }}>{item.h}</Text>
          </View>
        ))}
      </View>
      <Text style={{ fontSize: 10, color: T.dim, marginTop: 10 }}>
        Эти пять вопросов определяют, стоит ли вообще начинать разработку.
      </Text>
    </View>
    <Brand />
  </Page>
);

/* ═══════ SLIDE 9: REQUIREMENTS ═══════ */
const S9 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Шаг 3 · Требования" num={9} />
    <View style={{ flex: 1 }}>
      <Text style={[s.h2, { marginBottom: 4 }]}>
        Требования <Text style={{ color: T.accent }}>нельзя придумывать</Text> в отрыве от пользователя
      </Text>
      <Text style={s.sub}>Конкретный пример: от боли к ценности</Text>
      <View style={{ flexDirection: "row", gap: 8, alignItems: "stretch", flex: 1 }}>
        <Card style={{ flex: 1 }}>
          <BadgeLabel>БОЛЬ</BadgeLabel>
          <Text style={{ fontSize: 13, color: T.fg, lineHeight: 1.6 }}>
            Студент не понимает, что учить в первую очередь — времени мало, материала много
          </Text>
        </Card>
        <View style={{ justifyContent: "center" }}><Text style={{ fontSize: 20, color: T.accent }}>→</Text></View>
        <Card style={{ flex: 1, borderWidth: 1, borderColor: "rgba(166,225,38,0.2)" }}>
          <BadgeLabel>ФУНКЦИЯ</BadgeLabel>
          <Text style={{ fontSize: 13, color: T.fg, lineHeight: 1.6 }}>
            Персональный план подготовки к экзамену на основе списка билетов
          </Text>
        </Card>
        <View style={{ justifyContent: "center" }}><Text style={{ fontSize: 20, color: T.accent }}>→</Text></View>
        <Card accentBorder style={{ flex: 1 }}>
          <BadgeLabel>ЦЕННОСТЬ</BadgeLabel>
          <Text style={{ fontSize: 13, color: T.fg, lineHeight: 1.6 }}>
            Меньше хаоса, выше шанс подготовиться и сдать вовремя
          </Text>
        </Card>
      </View>
      <Text style={s.conclusion}>
        <Text style={{ fontWeight: 600, color: T.fg }}>Ключевое: </Text>
        требования должны вытекать из того, что вы узнали о пользователях, а не из собственных догадок.
      </Text>
    </View>
    <Brand />
  </Page>
);

/* ═══════ SLIDE 10: EMERGENT ═══════ */
const S10 = () => (
  <Page size={[PW, PH]} style={[s.page, { justifyContent: "center", alignItems: "center" }]}>
    <BgDeco />
    <Text style={{ fontWeight: 700, fontSize: 32, textAlign: "center", maxWidth: 620, lineHeight: 1.2 }}>
      Emergent — это{"\n"}<Text style={{ color: T.accent }}>цифровая команда</Text>
    </Text>
    <Text style={{ fontSize: 13, color: T.muted, marginTop: 18, textAlign: "center", maxWidth: 520, lineHeight: 1.6 }}>
      Не просто чат с искусственным интеллектом. Система, которая помогает довести идею до рабочего продукта.
    </Text>
    <Divider width={50} mt={24} mb={14} />
    <Text style={{ fontSize: 11, color: T.dim, textAlign: "center", maxWidth: 480, lineHeight: 1.5 }}>
      У вас в руках остаётся главное — постановка задачи и направление
    </Text>
  </Page>
);

/* ═══════ SLIDE 11: TEAM ═══════ */
const S11 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Emergent · Команда" num={11} />
    <View style={{ flex: 1 }}>
      <Text style={[s.h2, { marginBottom: 4 }]}>
        Кто входит в <Text style={{ color: T.accent }}>цифровую команду</Text>
      </Text>
      <Text style={s.sub}>Каждая роль закрывает свой участок работы</Text>
      <View style={{ flexDirection: "row", gap: 10, flex: 1 }}>
        <View style={{ width: 100, backgroundColor: T.accentBg, borderRadius: 8, justifyContent: "center", alignItems: "center", padding: 14, borderWidth: 1, borderColor: "rgba(166,225,38,0.2)" }}>
          <Text style={{ fontSize: 14, fontWeight: 700, color: T.accent, textAlign: "center" }}>Ваша{"\n"}идея</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
          {[
            { t: "Бизнес-аналитик", d: "Переводит задачу на язык разработки" },
            { t: "Дизайнер", d: "Создаёт интерфейс и UX" },
            { t: "Full-stack разработчик", d: "Пишет код, связывает всё воедино" },
            { t: "Тестировщик", d: "Проверяет сценарии, ищет ошибки" },
            { t: "Project-менеджер", d: "Ваш основной собеседник" },
          ].map((r, i) => (
            <Card key={i} style={{ width: "48%", padding: 12 }}>
              <NumBadge n={String(i + 1).padStart(2, "0")} />
              <Text style={{ fontSize: 12, fontWeight: 700, color: T.fg, marginBottom: 4 }}>{r.t}</Text>
              <Text style={{ fontSize: 10, color: T.muted }}>{r.d}</Text>
            </Card>
          ))}
        </View>
      </View>
      <Text style={{ fontSize: 10, color: T.dim, marginTop: 10 }}>
        У вас в руках остаётся главное — постановка задачи и направление.
      </Text>
    </View>
    <Brand />
  </Page>
);

/* ═══════ SLIDE 12: TASKS ═══════ */
const S12 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Практика" num={12} />
    <View style={{ flex: 1 }}>
      <Text style={[s.h2, { marginBottom: 4 }]}>
        Как правильно <Text style={{ color: T.accent }}>ставить задачу</Text>
      </Text>
      <Text style={s.sub}>Разговаривайте как с умным исполнителем, который впервые слышит о задаче</Text>
      <View style={{ flexDirection: "row", gap: 12, flex: 1 }}>
        <Card accentBorder style={{ flex: 1 }}>
          <BadgeLabel>ДЕЛАТЬ</BadgeLabel>
          <View style={{ gap: 10 }}>
            {[
              { t: "Объяснять простым языком", h: "Как новому сотруднику" },
              { t: "Давать контекст и детали", h: "Что, для кого, зачем" },
              { t: "Описывать желаемый результат", h: "Что должно получиться" },
              { t: "Уточнять ограничения", h: "Бюджет, сроки, технологии" },
            ].map((item, i) => (
              <View key={i} style={{ flexDirection: "row", gap: 10, alignItems: "flex-start" }}>
                <Dot size={6} />
                <View>
                  <Text style={{ fontSize: 13, color: T.fg }}>{item.t}</Text>
                  <Text style={{ fontSize: 9, color: T.dim }}>— {item.h}</Text>
                </View>
              </View>
            ))}
          </View>
        </Card>
        <Card redBorder style={{ flex: 1 }}>
          <BadgeLabel color={T.red} bg={T.redBg}>НЕ ДЕЛАТЬ</BadgeLabel>
          <View style={{ gap: 10 }}>
            {[
              { t: "Говорить слишком общо", h: "«Сделай красиво»" },
              { t: "Использовать много сленга", h: "Без контекста непонятно" },
              { t: "Надеяться, что додумает сам", h: "Агент не телепат" },
              { t: "Перескакивать между задачами", h: "Одна задача за раз" },
            ].map((item, i) => (
              <View key={i} style={{ flexDirection: "row", gap: 10, alignItems: "flex-start" }}>
                <Dot size={6} color={T.red} />
                <View>
                  <Text style={{ fontSize: 13, color: T.dim }}>{item.t}</Text>
                  <Text style={{ fontSize: 9, color: T.dim, opacity: 0.6 }}>— {item.h}</Text>
                </View>
              </View>
            ))}
          </View>
        </Card>
      </View>
      <Text style={s.conclusion}>
        <Text style={{ fontWeight: 600, color: T.fg }}>Ключевой тезис: </Text>
        одна задача = один чёткий запрос с контекстом, ожиданиями и ограничениями.
      </Text>
    </View>
    <Brand />
  </Page>
);

/* ═══════ SLIDE 13: CONTEXT ═══════ */
const S13 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Процесс" num={13} />
    <View style={{ flex: 1 }}>
      <Text style={[s.h2, { marginBottom: 4 }]}>
        Агенты могут <Text style={{ color: T.accent }}>меняться</Text>
      </Text>
      <Text style={s.sub}>Контекст нужно удерживать через документацию</Text>
      <View style={{ flexDirection: "row", gap: 8, flex: 1 }}>
        {[
          { n: "01", t: "Чат растёт", d: "Вы общаетесь, ставите задачи, уточняете детали — контекст накапливается", accent: false },
          { n: "02", t: "Окно внимания", d: "Объём контекста заканчивается — агент «забывает» начало разговора", accent: false },
          { n: "03", t: "Fork", d: "Создаётся новая ветка — с чистым контекстом и новыми агентами", accent: true },
        ].map((step, i) => (
          <React.Fragment key={i}>
            <Card style={[{ flex: 1 }, step.accent && { borderLeftWidth: 3, borderLeftColor: T.accent }]}>
              <NumBadge n={step.n} />
              <Text style={{ fontSize: 14, fontWeight: 700, color: step.accent ? T.accent : T.fg, marginBottom: 6 }}>{step.t}</Text>
              <Text style={{ fontSize: 11, color: T.muted, lineHeight: 1.5 }}>{step.d}</Text>
            </Card>
            {i < 2 && <View style={{ justifyContent: "center" }}><Text style={{ fontSize: 16, color: T.accent }}>→</Text></View>}
          </React.Fragment>
        ))}
      </View>
      <Text style={s.conclusion}>
        <Text style={{ fontWeight: 600, color: T.fg }}>Ключевое: </Text>
        новые агенты опираются на документацию внутри проекта. Без неё — часть деталей теряется. Документация удерживает память проекта.
      </Text>
    </View>
    <Brand />
  </Page>
);

/* ═══════ SLIDE 14: DOCS ═══════ */
const S14 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Документация" num={14} />
    <View style={{ flex: 1 }}>
      <Text style={[s.h2, { marginBottom: 4 }]}>
        Если не фиксировать решения — <Text style={{ color: T.accent }}>детали потеряются</Text>
      </Text>
      <Text style={s.sub}>Документация — не формальность, а необходимая часть процесса</Text>
      <View style={{ flexDirection: "row", gap: 12, flex: 1 }}>
        {[
          { n: "01", t: "Документировать крупные фичи", d: "Фиксировать что реализовано, как устроено, какие решения приняты" },
          { n: "02", t: "Фиксировать ключевые решения", d: "Ограничения, архитектурные выборы и важные договорённости — всё должно быть записано" },
          { n: "03", t: "Переносить контекст", d: "При необходимости — переносить важный контекст в новую ветку вручную" },
        ].map((r, i) => (
          <Card key={i} accentBorder style={{ flex: 1 }}>
            <NumBadge n={r.n} />
            <Text style={{ fontSize: 14, fontWeight: 700, color: T.fg, marginBottom: 6 }}>{r.t}</Text>
            <Text style={{ fontSize: 11, color: T.muted, lineHeight: 1.5 }}>{r.d}</Text>
          </Card>
        ))}
      </View>
      <Text style={{ fontSize: 10, color: T.dim, marginTop: 10 }}>
        Просите project-менеджера фиксировать всё, что важно для продолжения работы.
      </Text>
    </View>
    <Brand />
  </Page>
);

/* ═══════ SLIDE 15: FINAL ═══════ */
const S15 = () => (
  <Page size={[PW, PH]} style={[s.page, { justifyContent: "center", alignItems: "center" }]}>
    <BgDeco />
    <Text style={{ fontWeight: 700, fontSize: 24, textAlign: "center", maxWidth: 600, marginBottom: 20, lineHeight: 1.3 }}>
      Преимущество получает тот, кто умеет превращать идею{"\n"}
      <Text style={{ color: T.accent }}>в понятную задачу и рабочий продукт</Text>
    </Text>
    <Divider width={50} mb={20} />
    <View style={{ flexDirection: "row", gap: 12, marginBottom: 20 }}>
      {[
        "Идею нужно уточнять",
        "Пользователя нужно понимать",
        "ИИ-агентами нужно управлять",
      ].map((c, i) => (
        <Card key={i} style={{ flex: 1, alignItems: "center", padding: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: 700, color: "rgba(166,225,38,0.25)", marginBottom: 6 }}>{String(i + 1).padStart(2, "0")}</Text>
          <Text style={{ fontSize: 11, color: T.fg, textAlign: "center", lineHeight: 1.5 }}>{c}</Text>
        </Card>
      ))}
    </View>
    <Text style={{ fontSize: 10, color: T.muted }}>emergent.sh</Text>
  </Page>
);

/* ═══════ DOCUMENT ═══════ */
const EmergentDocument = () => (
  <Document title="От идеи до продукта с ИИ-агентами — Мастер-класс" author="Emergent.sh">
    <S1 /><S2 /><S3 /><S4 /><S5 /><S6 /><S7 /><S8 /><S9 /><S10 /><S11 /><S12 /><S13 /><S14 /><S15 />
  </Document>
);

/* ═══════ GENERATE & DOWNLOAD ═══════ */
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
