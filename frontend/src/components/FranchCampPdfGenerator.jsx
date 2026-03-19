/**
 * FranchCamp PDF Generator
 * Built with @react-pdf/renderer following established design system
 *
 * Design: Dark Tech / Corporate Innovation (same as Rostelecom template)
 * Font: Inter (with Cyrillic)
 * Page: A4 Landscape (841.89 x 595.28 pt)
 * Slides: 9
 */
import React from "react";
import {
  Document, Page, View, Text, StyleSheet, Font, Svg, Circle, Rect, pdf,
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
const TOTAL = 9;

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
const Header = ({ label, num }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexShrink: 0 }}>
    {label ? <Text style={s.label}>{label}</Text> : <View />}
    {num && <Text style={{ fontSize: 8, color: T.dim }}>{String(num).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}</Text>}
  </View>
);

const Brand = () => (
  <Text style={{ position: "absolute", bottom: 16, left: PAD, fontSize: 7, letterSpacing: 1.8, color: "#3a3f5a" }}>
    HOP<Text style={{ color: "#5a3020" }}>.</Text>AGENCY
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

/* ════════════════════════════════════════════
   SLIDE 1: TITLE
   ════════════════════════════════════════════ */
const S1 = () => (
  <Page size={[PW, PH]} style={[s.page, { justifyContent: "center", alignItems: "center" }]}>
    <BgDeco />
    <Text style={{ fontSize: 18, fontWeight: 700, letterSpacing: 5, marginBottom: 40, color: T.fg }}>
      HOP<Text style={{ color: T.accent }}>.</Text>AGEN<Text style={{ color: T.accent }}>C</Text>Y
    </Text>
    <Badge>ПРЕДЛОЖЕНИЕ ДЛЯ FRANCHCAMP</Badge>
    <Text style={[s.h1, { fontSize: 32, textAlign: "center", maxWidth: 620, marginTop: 20 }]}>
      ИИ как часть пакета{"\n"}<Text style={{ color: T.accent }}>для франчайзи</Text>
    </Text>
    <Text style={{ fontSize: 12, color: T.muted, marginTop: 20, textAlign: "center", maxWidth: 520, lineHeight: 1.6 }}>
      Серия практических обучающих мероприятий для франчайзеров и их сетей.
      В основе программы — три прикладных блока: Noteall, EchoMind и Emergent.sh
    </Text>
    <Divider width={50} color={T.accent} mt={28} mb={16} />
    <Text style={{ fontSize: 10, color: T.dim, textAlign: "center", maxWidth: 480, lineHeight: 1.5 }}>
      От разговора с клиентом до контроля продавцов и быстрого запуска цифровых инструментов
    </Text>
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 2: ORGANIC FOR FRANCHCAMP
   ════════════════════════════════════════════ */
const fcStats = [
  { n: "5000+", l: "участников конкурса" },
  { n: "100+", l: "франшиз" },
  { n: "13", l: "победителей" },
  { n: "35", l: "финалистов" },
];
const S2 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Контекст" num={2} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 28, marginBottom: 24 }]}>
        Органично для <Text style={{ color: T.accent }}>FranchCamp</Text>
      </Text>
      <View style={{ flexDirection: "row", gap: 14, marginBottom: 24 }}>
        <View style={{ flex: 1.2 }}>
          <Text style={[s.body, { fontSize: 11, lineHeight: 1.7, marginBottom: 14 }]}>
            Предлагаемая серия мероприятий продолжает уже существующую образовательную
            и развивающую роль экосистемы FranchCamp.
          </Text>
          <View style={{ gap: 8 }}>
            {[
              "Объединяет обучение, аккредитацию франшиз и развитие сети",
              "Делает акцент на новых франчайзи и внедрении образовательного трека",
              "Допускает франчайзеров с программой долгосрочного развития партнёров",
            ].map((t, i) => (
              <View key={i} style={{ flexDirection: "row", gap: 8, alignItems: "flex-start" }}>
                <Dot size={5} />
                <Text style={{ fontSize: 10, color: T.fg2, lineHeight: 1.5, flex: 1 }}>{t}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={{ flex: 0.8 }}>
          <Card style={{ padding: 16 }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
              {fcStats.map((st, i) => (
                <View key={i} style={{ width: "44%" }}>
                  <Text style={{ fontSize: 22, fontWeight: 700, color: T.accent, lineHeight: 1 }}>{st.n}</Text>
                  <Text style={{ fontSize: 9, color: T.muted, marginTop: 4 }}>{st.l}</Text>
                </View>
              ))}
            </View>
          </Card>
        </View>
      </View>
      <Card accentBorder style={{ padding: 14 }}>
        <Text style={{ fontSize: 11, color: T.fg2, lineHeight: 1.5 }}>
          <Text style={{ fontWeight: 600, color: T.fg }}>Ключевой вывод: </Text>
          франчайзер на площадке FranchCamp уже думает не только о продаже франшизы,
          но и о том, как дольше и сильнее развивать партнёра. AI-трек — полезный элемент пакета поддержки.
        </Text>
      </Card>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 3: VALUE FOR FRANCHISOR
   ════════════════════════════════════════════ */
const values = [
  { title: "Более сильный старт франчайзи", desc: "Меньше потерь на первых переговорах, звонках и локальном маркетинге" },
  { title: "Единые стандарты сети", desc: "Одинаково высокий уровень работы с клиентом и продажами в разных точках" },
  { title: "Новый аргумент в продаже франшизы", desc: "Не только бренд и регламенты, но и конкретный современный AI-инструментарий" },
  { title: "Платформа для допродаж", desc: "Обучение можно включать в onboarding, годовую поддержку или отдельный premium-модуль" },
];
const S3 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Ценность" num={3} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 28, marginBottom: 6 }]}>
        Ценность <Text style={{ color: T.accent }}>для франчайзера</Text>
      </Text>
      <Text style={[s.body, { marginBottom: 24 }]}>
        Что получает франчайзер, если такая программа появится у него в пакете
      </Text>
      <View style={{ flexDirection: "row", gap: 12 }}>
        {values.map((v, i) => (
          <Card key={i} style={{ flex: 1 }}>
            <NumBadge n={String(i + 1).padStart(2, "0")} />
            <Text style={{ fontSize: 13, fontWeight: 700, color: T.fg, marginBottom: 10 }}>{v.title}</Text>
            <Text style={s.body}>{v.desc}</Text>
          </Card>
        ))}
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 10, color: T.muted, fontStyle: "italic", lineHeight: 1.5 }}>
          Это не просто AI-образование, а усиление пакета сопровождения франчайзи
          и повышение управляемости сети.
        </Text>
      </View>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 4: 3 BLOCKS
   ════════════════════════════════════════════ */
const blocks = [
  { tag: "NOTEALL", title: "Слушать клиента", desc: "Разбирать встречи и документы, получать транскрипт, summary, задачи, материалы для CRM и коммерческих предложений", url: "noteall.ru" },
  { tag: "ECHOMIND", title: "Слушать продавца", desc: "Анализировать 100% звонков и переписок, находить потери воронки, дообучать менеджеров и повышать конверсию", url: "unit.echomind.ru" },
  { tag: "EMERGENT", title: "Собирать инструменты", desc: "Создавать сайты, лендинги, дэшборды и внутренние решения для сети — за часы, а не недели и месяцы", url: "emergent.sh" },
];
const S4 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Программа" num={4} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 26, marginBottom: 6 }]}>
        Программа строится вокруг{"\n"}<Text style={{ color: T.accent }}>3 практических блоков</Text>
      </Text>
      <Text style={[s.body, { marginBottom: 24 }]}>
        От понимания клиента → к качеству продаж → к быстрым digital-инструментам
      </Text>
      <View style={{ flexDirection: "row", gap: 14 }}>
        {blocks.map((b, i) => (
          <Card key={i} accentBorder style={{ flex: 1 }}>
            <Badge>{b.tag}</Badge>
            <Text style={[s.h3, { fontSize: 15, marginTop: 12, marginBottom: 8 }]}>{b.title}</Text>
            <Text style={[s.body, { marginBottom: 12 }]}>{b.desc}</Text>
            <Text style={{ fontSize: 9, color: T.accent }}>{b.url}</Text>
          </Card>
        ))}
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 10, color: T.fg2, lineHeight: 1.5 }}>
          <Text style={{ fontWeight: 600 }}>Маршрут обучения: </Text>
          услышать клиента, увидеть слабые места в продажах, быстро внедрить нужный инструмент в точке или по всей сети.
        </Text>
      </View>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 5: NOTEALL DEEP DIVE
   ════════════════════════════════════════════ */
const noteallItems = [
  "Как разбирать запись встречи, звонка или интервью и получать структурированную выжимку",
  "Как превращать содержание разговора в follow-up, протокол, карточку для CRM и черновик КП",
  "Как собирать единую базу переговоров для последующей AI-обработки внутри сети",
  "Как сократить рутину руководителя точки, продавца или партнёра после каждого контакта",
];
const S5 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Блок 1 · Noteall" num={5} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ flexDirection: "row", gap: 24 }}>
        <View style={{ flex: 1 }}>
          <Badge>БЛОК 1</Badge>
          <Text style={[s.h2, { fontSize: 26, marginTop: 12, marginBottom: 6 }]}>
            Noteall
          </Text>
          <Text style={{ fontSize: 13, color: T.accent, marginBottom: 16 }}>
            Разговор превращается в артефакт
          </Text>
          <Text style={[s.body, { fontSize: 11, lineHeight: 1.7, marginBottom: 20 }]}>
            Научить франчайзи не терять ценность после встреч и переговоров.
            Одна встреча должна давать не хаотичные записи, а готовые действия
            и материалы для следующего шага продажи.
          </Text>
          <Card accentBorder style={{ padding: 14 }}>
            <Text style={{ fontSize: 10, fontWeight: 600, color: T.fg, marginBottom: 4 }}>Ключевой тезис</Text>
            <Text style={{ fontSize: 10, color: T.fg2, lineHeight: 1.5 }}>
              Одна встреча = готовые действия и материалы для следующего шага продажи
            </Text>
          </Card>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 11, fontWeight: 600, color: T.fg, marginBottom: 14 }}>
            Что показываем на мастер-классе
          </Text>
          <View style={{ gap: 12 }}>
            {noteallItems.map((t, i) => (
              <View key={i} style={{ flexDirection: "row", gap: 10, alignItems: "flex-start" }}>
                <Text style={{ fontSize: 13, fontWeight: 700, color: T.accent, width: 22 }}>{String(i + 1).padStart(2, "0")}</Text>
                <Text style={{ fontSize: 10, color: T.fg2, lineHeight: 1.5, flex: 1 }}>{t}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 6: ECHOMIND DEEP DIVE
   ════════════════════════════════════════════ */
const echoStats = [
  { n: "100%", l: "звонков и переписок" },
  { n: "1 день", l: "запуск по сайту" },
  { n: "+7–18%", l: "рост конверсии" },
  { n: "-14%", l: "отказов по заявкам" },
];
const echoFeatures = [
  "Контроль 100% звонков и переписок вместо выборочной прослушки",
  "Понимание, где менеджеры теряют клиента и какие возражения сливают сделки",
  "Быстрое обучение слабых менеджеров и рекомендации по каждому диалогу",
  "Рост продаж без увеличения рекламного бюджета за счёт улучшения конверсии",
];
const S6 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Блок 2 · EchoMind" num={6} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ flexDirection: "row", gap: 24 }}>
        <View style={{ flex: 1 }}>
          <Badge>БЛОК 2</Badge>
          <Text style={[s.h2, { fontSize: 26, marginTop: 12, marginBottom: 6 }]}>
            EchoMind
          </Text>
          <Text style={{ fontSize: 13, color: T.accent, marginBottom: 16 }}>
            Слышать продавцов и улучшать продажи
          </Text>
          <Text style={[s.body, { fontSize: 11, lineHeight: 1.7, marginBottom: 20 }]}>
            Этот блок отвечает за управляемость сети и качество работы менеджеров.
            ИИ подключается за 1 день и сразу начинает улучшать работу продавцов.
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
            {echoStats.map((st, i) => (
              <View key={i} style={{ width: "46%", backgroundColor: T.bg2, borderRadius: 6, padding: 10, borderWidth: 1, borderColor: T.border }}>
                <Text style={{ fontSize: 18, fontWeight: 700, color: T.accent, lineHeight: 1 }}>{st.n}</Text>
                <Text style={{ fontSize: 8, color: T.muted, marginTop: 4 }}>{st.l}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 11, fontWeight: 600, color: T.fg, marginBottom: 14 }}>
            Что может EchoMind
          </Text>
          <View style={{ gap: 12 }}>
            {echoFeatures.map((t, i) => (
              <View key={i} style={{ flexDirection: "row", gap: 10, alignItems: "flex-start" }}>
                <Dot size={6} />
                <Text style={{ fontSize: 10, color: T.fg2, lineHeight: 1.5, flex: 1 }}>{t}</Text>
              </View>
            ))}
          </View>
          <View style={{ marginTop: 16 }}>
            <Text style={{ fontSize: 9, color: T.dim, lineHeight: 1.5 }}>
              А также: рост конверсии звонка в визит на 19%, сокращение адаптации менеджеров до 4 дней
            </Text>
          </View>
        </View>
      </View>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 7: EMERGENT DEEP DIVE
   ════════════════════════════════════════════ */
const emergentFeatures = [
  { title: "AI-платформа", desc: "Описать идею на естественном языке и получить рабочее приложение без опыта программирования" },
  { title: "Для сети", desc: "Продающие лендинги, локальные сайты точек и мини-сервисы для внутренних нужд" },
  { title: "Для франчайзи", desc: "Калькуляторы, формы, справочники, страницы акций, вакансий и лидогенерации" },
  { title: "Для УК", desc: "Быстро проверять идеи и запускать MVP без подрядчика и долгих согласований" },
];
const S7 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Блок 3 · Emergent.sh" num={7} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Badge>БЛОК 3</Badge>
      <Text style={[s.h2, { fontSize: 26, marginTop: 12, marginBottom: 6 }]}>
        Emergent.sh
      </Text>
      <Text style={{ fontSize: 13, color: T.accent, marginBottom: 20 }}>
        Сайты, лендинги и инструменты в 100 раз быстрее
      </Text>
      <View style={{ flexDirection: "row", gap: 12 }}>
        {emergentFeatures.map((f, i) => (
          <Card key={i} style={{ flex: 1, padding: 16 }}>
            <NumBadge n={i + 1} />
            <Text style={{ fontSize: 12, fontWeight: 600, color: T.fg, marginBottom: 8 }}>{f.title}</Text>
            <Text style={[s.body, { fontSize: 10 }]}>{f.desc}</Text>
          </Card>
        ))}
      </View>
      <View style={{ marginTop: 20 }}>
        <Card accentBorder style={{ padding: 14 }}>
          <Text style={{ fontSize: 10, color: T.fg2, lineHeight: 1.5 }}>
            <Text style={{ fontWeight: 600, color: T.fg }}>Тезис: </Text>
            не просто AI ради AI, а ускорение запуска реального цифрового инструмента для точки или всей сети.
          </Text>
        </Card>
      </View>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 8: OFFER FOR FRANCHISORS
   ════════════════════════════════════════════ */
const offers = [
  { num: "01", title: "Бонус к стартовому пакету", desc: "Франчайзи получает серию вводных AI-сессий в первые месяцы после запуска точки" },
  { num: "02", title: "Модуль для действующей сети", desc: "Для действующих партнёров — как способ поднять продажи, дисциплину CRM и скорость маркетинга" },
  { num: "03", title: "Корпоративный формат для УК", desc: "Отдельный поток для команды франчайзера, кураторов и сильных партнёров сети" },
];
const programItems = [
  "Live-сессии с экспертами",
  "Шаблоны промптов",
  "Чек-листы",
  "Разбор реальных переговоров и звонков",
  "Домашние задания",
  "Материалы для масштабирования",
];
const S8 = () => (
  <Page size={[PW, PH]} style={s.page}>
    <Header label="Предложение" num={8} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[s.h2, { fontSize: 26, marginBottom: 6 }]}>
        Предложение <Text style={{ color: T.accent }}>для франчайзеров</Text>
      </Text>
      <Text style={[s.body, { marginBottom: 20 }]}>
        Важен не только контент, но и способ монетизации и внедрения в сеть
      </Text>
      <View style={{ flexDirection: "row", gap: 12, marginBottom: 20 }}>
        {offers.map((o, i) => (
          <Card key={i} accentBorder style={{ flex: 1 }}>
            <Badge>{o.num}</Badge>
            <Text style={{ fontSize: 12, fontWeight: 700, color: T.fg, marginTop: 10, marginBottom: 8 }}>{o.title}</Text>
            <Text style={[s.body, { fontSize: 10 }]}>{o.desc}</Text>
          </Card>
        ))}
      </View>
      <View style={{ backgroundColor: T.bg2, borderRadius: 8, padding: "12 18", borderWidth: 1, borderColor: T.border }}>
        <Text style={{ fontSize: 10, fontWeight: 600, color: T.fg, marginBottom: 8 }}>
          Что входит в состав программы:
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
          {programItems.map((item, i) => (
            <View key={i} style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
              <Dot size={4} />
              <Text style={{ fontSize: 9, color: T.fg2 }}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
    <Brand />
  </Page>
);

/* ════════════════════════════════════════════
   SLIDE 9: FINAL / CONTACT
   ════════════════════════════════════════════ */
const finalBlocks = [
  { name: "Noteall", desc: "помогает услышать клиента" },
  { name: "EchoMind", desc: "помогает услышать продавца" },
  { name: "Emergent.sh", desc: "помогает быстро собрать нужный инструмент" },
];
const contacts = [
  { name: "Ширшов Ярослав", phone: "+7-985-364-0416", tg: "@veronaj" },
  { name: "Старостина Наталья", phone: "+7-926-295-8288", tg: "@NataschaStar" },
];
const S9 = () => (
  <Page size={[PW, PH]} style={[s.page, { justifyContent: "center", alignItems: "center" }]}>
    <BgDeco />
    <Text style={[s.h2, { fontSize: 24, textAlign: "center", marginBottom: 24 }]}>
      Вместе — <Text style={{ color: T.accent }}>новый образовательный пакет</Text>
    </Text>
    <View style={{ flexDirection: "row", gap: 16, marginBottom: 28, maxWidth: 620 }}>
      {finalBlocks.map((b, i) => (
        <View key={i} style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ fontSize: 13, fontWeight: 700, color: T.fg, marginBottom: 6, textAlign: "center" }}>{b.name}</Text>
          <Text style={{ fontSize: 10, color: T.muted, textAlign: "center", lineHeight: 1.4 }}>{b.desc}</Text>
        </View>
      ))}
    </View>
    <Text style={{ fontSize: 10, color: T.fg2, textAlign: "center", maxWidth: 500, lineHeight: 1.5, marginBottom: 28 }}>
      Прикладной, понятный и напрямую связанный с ростом продаж и эффективности сети — готовый пакет для франчайзеров.
    </Text>
    <Divider width={50} color={T.accent} mb={20} />
    <View style={{ flexDirection: "row", gap: 56, marginBottom: 20 }}>
      {contacts.map((c, i) => (
        <View key={i} style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 13, fontWeight: 700, color: T.fg, marginBottom: 6 }}>{c.name}</Text>
          <Text style={{ fontSize: 10, color: T.muted, marginBottom: 2 }}>{c.phone}</Text>
          <Text style={{ fontSize: 10, color: T.muted }}>{c.tg}</Text>
        </View>
      ))}
    </View>
    <Text style={{ fontSize: 10, color: T.muted, marginBottom: 20 }}>hello@hop.agency</Text>
    <Text style={{ fontSize: 16, fontWeight: 700, letterSpacing: 4, color: T.fg }}>
      HOP<Text style={{ color: T.accent }}>.</Text>AGEN<Text style={{ color: T.accent }}>C</Text>Y
    </Text>
  </Page>
);

/* ═══════════════════════════════════════════
   DOCUMENT
   ═══════════════════════════════════════════ */
const FranchCampDocument = () => (
  <Document title="FranchCamp — AI для франчайзи — Hop.Agency" author="Hop.Agency">
    <S1 /><S2 /><S3 /><S4 /><S5 /><S6 /><S7 /><S8 /><S9 />
  </Document>
);

/* ═══════════════════════════════════════════
   GENERATE & DOWNLOAD
   ═══════════════════════════════════════════ */
export async function generateFranchCampPdf(onProgress) {
  if (onProgress) onProgress("Генерация PDF...");
  const blob = await pdf(<FranchCampDocument />).toBlob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "FranchCamp_AI_HopAgency.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
