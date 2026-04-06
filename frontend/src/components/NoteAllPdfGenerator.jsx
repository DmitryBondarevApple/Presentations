/**
 * NoteAll Investment PDF Generator
 * A4 Landscape (841.89 x 595.28 pt)
 * Theme: Dark navy + teal accent (hsl 174 80% 42%)
 *
 * Uses shared components from pdf-shared/PdfComponents.jsx
 * Follows /app/docs/PDF_GENERATION_GUIDE.md
 */
import React from "react";
import {
  Document, Page, View, Text, Image, pdf,
} from "@react-pdf/renderer";
import {
  registerInterFont, PAGE, Header, Brand, Dot, Badge, Card, Divider,
  FONT, getImageBase,
} from "./pdf-shared/PdfComponents";

registerInterFont();

/* ── Theme ── */
const T = {
  bg: "#0a1118", bg2: "#111c26", fg: "#f0f4f8", fg2: "#c0ccd8",
  muted: "#7a8d9e", dim: "#5a6d7e", accent: "#15b89b", accent2: "#20d0ad",
  accentBg: "rgba(21,184,155,0.12)", border: "#162030", border2: "#1e3040",
};

const PW = PAGE.W;
const PH = PAGE.H;
const PX = PAGE.PX;
const PY = PAGE.PY;
const TOTAL = 14;

const pg = {
  width: PW, height: PH, backgroundColor: T.bg, color: T.fg,
  fontFamily: "Inter", padding: `${PY} ${PX}`, position: "relative",
};

const Hdr = ({ label, num }) => <Header label={label} num={num} total={TOTAL} theme={T} />;
const Br = () => <Brand text="NOTEALL" accentText="INVEST" theme={T} />;

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 1: COVER                                         */
/* ═══════════════════════════════════════════════════════ */
const S1 = ({ imgBase }) => (
  <Page size={[PW, PH]} style={{ ...pg, justifyContent: "center", alignItems: "center" }}>
    <Image src={`${imgBase}/images/noteall/logo-noteall.png`}
      style={{ width: 140, height: 50, objectFit: "contain", marginBottom: 20 }} />
    <View style={{ alignItems: "center", marginBottom: 16 }}>
      <Badge theme={T}>ИНВЕСТИЦИОННАЯ ПРЕЗЕНТАЦИЯ</Badge>
    </View>
    <Text style={{ ...FONT.h1, fontSize: 34, textAlign: "center", lineHeight: 1.2, maxWidth: 620 }}>
      AI-сервис, который превращает{"\n"}встречи и видео в{" "}
      <Text style={{ color: T.accent }}>структурированный результат</Text>
    </Text>
    <Text style={{ fontSize: 14, color: T.muted, marginTop: 18, textAlign: "center", maxWidth: 520, lineHeight: 1.6 }}>
      От транскрипта и саммари — к решениям, задачам, требованиям и аналитическим выводам
    </Text>
    <Divider width={50} color={T.accent} mt={20} mb={14} />
    <Text style={{ fontSize: 12, color: T.dim, textAlign: "center", maxWidth: 480, lineHeight: 1.5 }}>
      Транскрибация, распознавание спикеров, сценарный анализ, работа с видео, документами и публичным контентом
    </Text>
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 2: PROBLEM                                       */
/* ═══════════════════════════════════════════════════════ */
const S2 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Проблема" num={2} />
    <Text style={{ ...FONT.h1, marginBottom: 10, lineHeight: 1.15 }}>
      Информация <Text style={{ color: T.accent }}>не превращается в данные</Text>
    </Text>
    <Text style={{ fontSize: 14, color: T.fg2, lineHeight: 1.6, marginBottom: 18, maxWidth: 660 }}>
      Команды живут в потоке созвонов, интервью, вебинаров и документов. Ценная информация распределена по десяткам форматов, а ручная обработка занимает часы.
    </Text>
    <View style={{ flexDirection: "row", gap: 16, marginBottom: 18 }}>
      <Card theme={T} style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 42, fontWeight: 700, color: T.accent, lineHeight: 1 }}>78%</Text>
        <Text style={{ fontSize: 12, color: T.fg2, marginTop: 10, lineHeight: 1.5 }}>
          сотрудников говорят, что перегрузка встречами мешает основной работе
        </Text>
        <Text style={{ fontSize: 10, color: T.dim, marginTop: 8 }}>Atlassian</Text>
      </Card>
      <Card theme={T} style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 42, fontWeight: 700, color: T.accent, lineHeight: 1 }}>275</Text>
        <Text style={{ fontSize: 12, color: T.fg2, marginTop: 10, lineHeight: 1.5 }}>
          прерываний в день — встречами, письмами или чатами. В среднем раз в 2 минуты
        </Text>
        <Text style={{ fontSize: 10, color: T.dim, marginTop: 8 }}>Microsoft, 2025</Text>
      </Card>
    </View>
    <Card theme={T} accentBorder style={{ padding: 16 }}>
      <Text style={{ fontSize: 13, color: T.fg2, lineHeight: 1.6 }}>
        <Text style={{ fontWeight: 700, color: T.fg }}>Суть проблемы: </Text>
        информация в аудио и видео не превращается в данные, доступные для использования. Бизнес теряет контекст, решения и задачи.
      </Text>
    </Card>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 3: SOLUTION                                      */
/* ═══════════════════════════════════════════════════════ */
const features = [
  { title: "Транскрибация", desc: "Полная расшифровка аудио и видео с автоматическим определением спикеров по голосовым профилям" },
  { title: "Сценарный анализ", desc: "Готовые и кастомные сценарии: от краткого саммари до детального протокола с решениями и задачами" },
  { title: "Работа с видео", desc: "Загрузка с любых видеохостингов, извлечение ключевых кадров по обсуждаемым темам" },
  { title: "Документы и контекст", desc: "Прикрепляйте PDF, ссылки и материалы — система учтёт их при анализе для глубоких выводов" },
];
const S3 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Решение" num={3} />
    <Text style={{ ...FONT.h1, marginBottom: 6, lineHeight: 1.15 }}>
      Noteall забирает <Text style={{ color: T.accent }}>рутинную работу</Text>
    </Text>
    <Text style={{ fontSize: 14, color: T.muted, marginBottom: 18, lineHeight: 1.5 }}>
      Пользователь загружает запись, документ или ссылку — а сервис превращает материал в структурированный результат
    </Text>
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 14 }}>
      {features.map((f, i) => (
        <Card key={i} theme={T} style={{ width: "48%", padding: 18 }}>
          <View style={{ flexDirection: "row", gap: 8, alignItems: "center", marginBottom: 8 }}>
            <Dot size={7} color={T.accent} />
            <Text style={{ ...FONT.cardTitle, fontSize: 15, color: T.fg }}>{f.title}</Text>
          </View>
          <Text style={{ ...FONT.cardBody, color: T.muted, lineHeight: 1.5 }}>{f.desc}</Text>
        </Card>
      ))}
    </View>
    <Card theme={T} accentBorder style={{ padding: 14, marginTop: 14 }}>
      <Text style={{ fontSize: 13, color: T.fg2, lineHeight: 1.5 }}>
        На выходе — не транскрипт, а <Text style={{ fontWeight: 700, color: T.accent }}>заранее заданный формат результата</Text>: саммари, ТЗ/PRD, анализ проблем, список задач, аналитическая выжимка.
      </Text>
    </Card>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 4: HOW IT WORKS                                  */
/* ═══════════════════════════════════════════════════════ */
const steps = [
  { num: "01", title: "Загрузка", desc: "Аудио, видео, документ или ссылка на видеохостинг" },
  { num: "02", title: "Обработка", desc: "Транскрибация, автоматическое определение спикеров, извлечение ключевых кадров" },
  { num: "03", title: "Анализ", desc: "Готовый или кастомный сценарий обработки с учётом контекста" },
  { num: "04", title: "Результат", desc: "Саммари, аналитика, задачи, требования — экспорт в DOCX или шаринг по ссылке" },
];
const S4 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Как работает" num={4} />
    <Text style={{ ...FONT.h1, marginBottom: 6, lineHeight: 1.15 }}>
      Четыре шага <Text style={{ color: T.accent }}>до результата</Text>
    </Text>
    <Text style={{ fontSize: 14, color: T.muted, marginBottom: 20, lineHeight: 1.5 }}>
      От загрузки записи до готового рабочего артефакта
    </Text>
    <View style={{ flexDirection: "row", gap: 14 }}>
      {steps.map((s, i) => (
        <View key={i} style={{
          flex: 1, backgroundColor: T.bg2, borderRadius: 8,
          borderTopWidth: 3, borderTopColor: T.accent,
          borderWidth: 1, borderColor: T.border, padding: 18,
        }}>
          <Text style={{ fontSize: 11, fontWeight: 700, color: T.accent, opacity: 0.7 }}>{s.num}</Text>
          <Text style={{ fontSize: 16, fontWeight: 700, color: T.fg, marginTop: 10 }}>{s.title}</Text>
          <Text style={{ fontSize: 12, color: T.muted, marginTop: 8, lineHeight: 1.5 }}>{s.desc}</Text>
        </View>
      ))}
    </View>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 5: WHY NOW                                       */
/* ═══════════════════════════════════════════════════════ */
const markets = [
  { title: "Speech Analytics", val: "$2.8 → $7.7 млрд", period: "2023–2030", src: "Grand View Research" },
  { title: "Speech-to-Text API", val: "$4.4 → $8.6 млрд", period: "2025–2030", src: "Grand View Research" },
  { title: "Document AI", val: "$14.7 → $27.6 млрд", period: "2025–2030", src: "MarketsandMarkets" },
];
const S5 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Почему сейчас" num={5} />
    <Text style={{ ...FONT.h1, marginBottom: 6, lineHeight: 1.15 }}>
      Рынок готов <Text style={{ color: T.accent }}>покупать прикладной AI</Text>
    </Text>
    <Text style={{ fontSize: 14, color: T.fg2, lineHeight: 1.6, marginBottom: 18, maxWidth: 640 }}>
      AI перестал быть экспериментом. 88% компаний уже используют AI хотя бы в одной функции, но две трети не масштабировали его. Рынок покупает инструменты с быстрым эффектом.
    </Text>
    <View style={{ flexDirection: "row", gap: 14, marginBottom: 18 }}>
      {markets.map((m, i) => (
        <Card key={i} theme={T} style={{ flex: 1, padding: 18 }}>
          <Badge theme={T}>{m.title.toUpperCase()}</Badge>
          <Text style={{ fontSize: 26, fontWeight: 700, color: T.accent, marginTop: 10, lineHeight: 1.1 }}>{m.val}</Text>
          <Text style={{ fontSize: 11, color: T.muted, marginTop: 8 }}>{m.period}</Text>
          <Text style={{ fontSize: 10, color: T.dim, marginTop: 4 }}>{m.src}</Text>
        </Card>
      ))}
    </View>
    <Card theme={T} accentBorder style={{ padding: 14 }}>
      <Text style={{ fontSize: 13, color: T.fg2, lineHeight: 1.5 }}>
        Noteall — на пересечении трёх быстрорастущих рынков: <Text style={{ fontWeight: 700, color: T.accent }}>speech analytics, speech-to-text и document AI</Text>
      </Text>
    </Card>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 6: MARKET (TAM/SAM/SOM)                          */
/* ═══════════════════════════════════════════════════════ */
const S6 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Анализ рынка" num={6} />
    <Text style={{ ...FONT.h1, marginBottom: 6, lineHeight: 1.15 }}>
      Рынок <Text style={{ color: T.accent }}>bottom-up</Text> (Россия)
    </Text>
    <Text style={{ fontSize: 14, color: T.muted, marginBottom: 18, lineHeight: 1.5 }}>
      Малые компании и ИП, активно использующие видео-конференции
    </Text>
    <View style={{ flexDirection: "row", gap: 16 }}>
      <View style={{ flex: 1, gap: 12 }}>
        <Card theme={T} style={{ padding: 18, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View>
            <Text style={{ fontSize: 12, color: T.muted }}>TAM — потенциальные клиенты</Text>
            <Text style={{ fontSize: 10, color: T.dim, marginTop: 3 }}>~1 млн компаний</Text>
          </View>
          <Text style={{ fontSize: 28, fontWeight: 700, color: T.accent }}>48 млрд ₽</Text>
        </Card>
        <Card theme={T} style={{ padding: 18, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View>
            <Text style={{ fontSize: 12, color: T.muted }}>SAM — активные пользователи ВКС</Text>
            <Text style={{ fontSize: 10, color: T.dim, marginTop: 3 }}>45% → 450 000 компаний</Text>
          </View>
          <Text style={{ fontSize: 28, fontWeight: 700, color: T.accent }}>21.6 млрд ₽</Text>
        </Card>
        <View style={{
          backgroundColor: T.bg2, borderRadius: 8, borderWidth: 2, borderColor: T.accent, padding: 18,
          flexDirection: "row", justifyContent: "space-between", alignItems: "center",
        }}>
          <View>
            <Text style={{ fontSize: 12, fontWeight: 600, color: T.fg }}>SOM — записывают встречи</Text>
            <Text style={{ fontSize: 10, color: T.dim, marginTop: 3 }}>15% → 67 500 компаний</Text>
          </View>
          <Text style={{ fontSize: 28, fontWeight: 700, color: T.accent }}>3.2 млрд ₽</Text>
        </View>
      </View>
      <Card theme={T} style={{ width: 240, padding: 20 }}>
        <Text style={{ fontSize: 14, fontWeight: 700, color: T.fg, marginBottom: 14 }}>Расчёт ARPU</Text>
        <View style={{ gap: 10 }}>
          <View>
            <Text style={{ fontSize: 11, color: T.muted }}>Средний чек за транскрибацию и анализ записи</Text>
            <Text style={{ fontSize: 18, fontWeight: 700, color: T.fg, marginTop: 2 }}>400 ₽</Text>
          </View>
          <View>
            <Text style={{ fontSize: 11, color: T.muted }}>Записей в месяц</Text>
            <Text style={{ fontSize: 18, fontWeight: 700, color: T.fg, marginTop: 2 }}>10</Text>
          </View>
          <Divider width={200} color={T.border} />
          <View>
            <Text style={{ fontSize: 11, color: T.muted }}>ARPU в месяц</Text>
            <Text style={{ fontSize: 22, fontWeight: 700, color: T.accent, marginTop: 2 }}>4 000 ₽</Text>
          </View>
          <View>
            <Text style={{ fontSize: 11, color: T.muted }}>ARPU в год</Text>
            <Text style={{ fontSize: 22, fontWeight: 700, color: T.accent, marginTop: 2 }}>48 000 ₽</Text>
          </View>
        </View>
      </Card>
    </View>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 7: AUDIENCE                                      */
/* ═══════════════════════════════════════════════════════ */
const segments = [
  { tag: "ПРОДУКТ", title: "Продуктовые и исследовательские команды", desc: "Превращают обсуждения и интервью в структурированные требования, приоритеты и PRD" },
  { tag: "МЕНЕДЖМЕНТ", title: "Руководители и операционные команды", desc: "Протоколы встреч, решения и задачи без ручного разбора записей" },
  { tag: "КОМАНДЫ", title: "Организации с совместной работой", desc: "Единая среда хранения, совместные сценарии анализа, общий баланс" },
  { tag: "АНАЛИТИКИ", title: "Маркетологи, аналитики, студенты", desc: "Ключевые тезисы из вебинаров, подкастов, выступлений, конспекты лекций" },
];
const S7 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Для кого" num={7} />
    <Text style={{ ...FONT.h1, marginBottom: 6, lineHeight: 1.15 }}>
      Для кого <Text style={{ color: T.accent }}>Noteall</Text>
    </Text>
    <Text style={{ fontSize: 14, color: T.muted, marginBottom: 18, lineHeight: 1.5 }}>
      Профессионалы и команды, которым нужен структурированный результат из неструктурированного контента
    </Text>
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 14 }}>
      {segments.map((s, i) => (
        <Card key={i} theme={T} style={{ width: "48%", padding: 18 }}>
          <Badge theme={T}>{s.tag}</Badge>
          <Text style={{ fontSize: 15, fontWeight: 700, color: T.fg, marginTop: 10, marginBottom: 6 }}>{s.title}</Text>
          <Text style={{ ...FONT.cardBody, color: T.muted, lineHeight: 1.5 }}>{s.desc}</Text>
        </Card>
      ))}
    </View>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 8: DIFFERENTIATION                               */
/* ═══════════════════════════════════════════════════════ */
const diffs = [
  { title: "Сценарный анализ", desc: "Не просто транскрипт, а заранее заданный формат результата — под конкретную задачу и роль" },
  { title: "Работа с видеоконтентом", desc: "Любые видеохостинги, извлечение ключевых кадров и привязка к контексту обсуждения" },
  { title: "Документы + записи", desc: "Единая платформа для встреч, документов и публичного контента — не только meeting notes" },
  { title: "Кастомизируемые шаблоны", desc: "Импорт и экспорт сценариев между коллегами, библиотека готовых шаблонов под отрасли" },
];
const S8 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Отличие" num={8} />
    <Text style={{ ...FONT.h1, marginBottom: 6, lineHeight: 1.15 }}>
      В чём отличие <Text style={{ color: T.accent }}>Noteall</Text>
    </Text>
    <Text style={{ fontSize: 14, color: T.fg2, lineHeight: 1.6, marginBottom: 18, maxWidth: 660 }}>
      Первое поколение продавало расшифровку. Следующее поколение продаёт рабочий результат. Noteall сфокусирован на пост-анализе.
    </Text>
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 14 }}>
      {diffs.map((d, i) => (
        <Card key={i} theme={T} accentBorder style={{ width: "48%", padding: 18 }}>
          <Text style={{ fontSize: 15, fontWeight: 700, color: T.fg, marginBottom: 8 }}>{d.title}</Text>
          <Text style={{ ...FONT.cardBody, color: T.muted, lineHeight: 1.5 }}>{d.desc}</Text>
        </Card>
      ))}
    </View>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 9: BUSINESS MODEL                                */
/* ═══════════════════════════════════════════════════════ */
const nowItems = [
  "Прозрачная стоимость каждого запроса",
  "Нет месячных платежей на старте",
  "Пополнение баланса в любой момент",
  "Общий баланс для команды",
];
const laterItems = [
  "Фиксированный бюджет для бизнеса",
  "Расширенные командные функции",
  "Приоритетная обработка",
  "Корпоративные интеграции",
];
const S9 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Бизнес-модель" num={9} />
    <Text style={{ ...FONT.h1, marginBottom: 6, lineHeight: 1.15 }}>
      <Text style={{ color: T.accent }}>Pay-as-you-go</Text> + подписка
    </Text>
    <Text style={{ fontSize: 14, color: T.muted, marginBottom: 20, lineHeight: 1.5 }}>
      Простая кредитная модель с низким порогом входа
    </Text>
    <View style={{ flexDirection: "row", gap: 16 }}>
      <View style={{ flex: 1, backgroundColor: T.bg2, borderRadius: 8, borderWidth: 2, borderColor: T.accent, padding: 22 }}>
        <Badge theme={T} solid>СЕЙЧАС</Badge>
        <Text style={{ fontSize: 20, fontWeight: 700, color: T.fg, marginTop: 14, marginBottom: 8 }}>Оплата за AI-вызовы</Text>
        <Text style={{ fontSize: 12, color: T.fg2, lineHeight: 1.6, marginBottom: 14 }}>
          Кредитная модель: пользователь платит только за реально потреблённые AI-запросы. Бесплатный старт с приветственным кредитом.
        </Text>
        <View style={{ gap: 8 }}>
          {nowItems.map((item, i) => (
            <View key={i} style={{ flexDirection: "row", gap: 8, alignItems: "flex-start" }}>
              <Dot size={5} color={T.accent} />
              <Text style={{ fontSize: 12, color: T.fg2, lineHeight: 1.4 }}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
      <Card theme={T} style={{ flex: 1, padding: 22 }}>
        <Badge theme={T}>ЧЕРЕЗ 2–3 МЕС.</Badge>
        <Text style={{ fontSize: 20, fontWeight: 700, color: T.fg, marginTop: 14, marginBottom: 8 }}>Подписная модель</Text>
        <Text style={{ fontSize: 12, color: T.fg2, lineHeight: 1.6, marginBottom: 14 }}>
          По мере развития функционала добавится подписка с включёнными объёмами обработки и расширенными командными функциями.
        </Text>
        <View style={{ gap: 8 }}>
          {laterItems.map((item, i) => (
            <View key={i} style={{ flexDirection: "row", gap: 8, alignItems: "flex-start" }}>
              <Dot size={5} color={T.dim} />
              <Text style={{ fontSize: 12, color: T.muted, lineHeight: 1.4 }}>{item}</Text>
            </View>
          ))}
        </View>
      </Card>
    </View>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 10: STAGE                                        */
/* ═══════════════════════════════════════════════════════ */
const S10 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Текущая стадия" num={10} />
    <Text style={{ ...FONT.h1, marginBottom: 6, lineHeight: 1.15 }}>
      Закрытое <Text style={{ color: T.accent }}>бета-тестирование</Text>
    </Text>
    <Text style={{ fontSize: 14, color: T.fg2, lineHeight: 1.6, marginBottom: 18, maxWidth: 640 }}>
      Сервис тестируется в компаниях, связанных со стартап-анализом (питч-дни, касдевы) и исследованиями рынка
    </Text>
    <View style={{ flexDirection: "row", gap: 14, marginBottom: 18 }}>
      <View style={{ flex: 1, backgroundColor: T.bg2, borderRadius: 8, borderWidth: 2, borderColor: T.accent, padding: 20, alignItems: "center" }}>
        <Text style={{ fontSize: 30, fontWeight: 700, color: T.accent, lineHeight: 1 }}>13.04.2026</Text>
        <Text style={{ fontSize: 12, color: T.fg2, marginTop: 10 }}>Запуск на открытый рынок</Text>
      </View>
      <Card theme={T} style={{ flex: 1, padding: 20, alignItems: "center" }}>
        <Text style={{ fontSize: 30, fontWeight: 700, color: T.fg, lineHeight: 1 }}>AI-first</Text>
        <Text style={{ fontSize: 12, color: T.muted, marginTop: 10 }}>Вся разработка с использованием AI-инструментов</Text>
      </Card>
      <Card theme={T} style={{ flex: 1, padding: 20, alignItems: "center" }}>
        <Text style={{ fontSize: 30, fontWeight: 700, color: T.fg, lineHeight: 1 }}>10–20x</Text>
        <Text style={{ fontSize: 12, color: T.muted, marginTop: 10 }}>Сокращение расходов на разработку</Text>
      </Card>
    </View>
    <Card theme={T} accentBorder style={{ padding: 14 }}>
      <Text style={{ fontSize: 13, color: T.fg2, lineHeight: 1.5 }}>
        Сроки внедрения функционала — <Text style={{ fontWeight: 700, color: T.accent }}>дни вместо недель и месяцев</Text> благодаря AI-инструментам разработки.
      </Text>
    </Card>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 11: GTM                                          */
/* ═══════════════════════════════════════════════════════ */
const gtmLines = [
  { num: "01", title: "Встроенные механики", items: [
    "Двусторонняя реферальная программа (бесплатные кредиты)",
    "Revenue-share аффилиат-программа для партнёров",
  ]},
  { num: "02", title: "Расширение на команды", items: [
    "Совместные сценарии анализа и общие папки",
    "Общий баланс использования",
  ]},
  { num: "03", title: "Точечные B2B-продажи", items: [
    "Вертикали: маркетинг, исследования, продукт, обучение",
    "Контент-маркетинг через блог и партнёрские каналы",
  ]},
];
const S11 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Go-to-Market" num={11} />
    <Text style={{ ...FONT.h1, marginBottom: 6, lineHeight: 1.15 }}>
      Стратегия <Text style={{ color: T.accent }}>роста</Text>
    </Text>
    <Text style={{ fontSize: 14, color: T.muted, marginBottom: 20, lineHeight: 1.5 }}>
      Три линии масштабирования — от виральности до B2B
    </Text>
    <View style={{ gap: 14 }}>
      {gtmLines.map((l, i) => (
        <View key={i} style={{ flexDirection: "row", backgroundColor: T.bg2, borderRadius: 8, borderWidth: 1, borderColor: T.border, overflow: "hidden" }}>
          <View style={{ width: 200, backgroundColor: T.accentBg, padding: 18, justifyContent: "center" }}>
            <Text style={{ fontSize: 12, fontWeight: 700, color: T.accent }}>{l.num}</Text>
            <Text style={{ fontSize: 15, fontWeight: 700, color: T.fg, marginTop: 4 }}>{l.title}</Text>
          </View>
          <View style={{ flex: 1, padding: 18, justifyContent: "center", gap: 8 }}>
            {l.items.map((item, j) => (
              <View key={j} style={{ flexDirection: "row", gap: 8, alignItems: "flex-start" }}>
                <Dot size={5} color={T.accent} />
                <Text style={{ fontSize: 12, color: T.fg2, lineHeight: 1.5, flex: 1 }}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 12: ROADMAP                                      */
/* ═══════════════════════════════════════════════════════ */
const phases = [
  { period: "АПР.–ИЮН. 2026", title: "Стандартные сценарии", items: ["Развитие сценариев под конкретные роли", "Упаковка лучших юз-кейсов", "Отраслевые шаблоны анализа"], active: true },
  { period: "ИЮЛ.–ОКТ. 2026", title: "База знаний + RAG", items: ["Шаблоны выходных артефактов", "Система хранения данных → база знаний", "RAG-анализ, MCP-интеграция"], active: false },
  { period: "НОЯБРЬ 2026+", title: "Marketplace + экспансия", items: ["Marketplace сценариев анализа", "Выход на внешний рынок", "Экосистема партнёрских интеграций"], active: false },
];
const S12 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Roadmap" num={12} />
    <Text style={{ ...FONT.h1, marginBottom: 6, lineHeight: 1.15 }}>
      Развитие <Text style={{ color: T.accent }}>продукта</Text>
    </Text>
    <Text style={{ fontSize: 14, color: T.muted, marginBottom: 20, lineHeight: 1.5 }}>
      От прикладных сценариев к экосистеме хранения и обработки данных
    </Text>
    <View style={{ flexDirection: "row", gap: 14 }}>
      {phases.map((p, i) => (
        <View key={i} style={{
          flex: 1, backgroundColor: T.bg2, borderRadius: 8, padding: 20,
          borderWidth: p.active ? 2 : 1, borderColor: p.active ? T.accent : T.border,
        }}>
          <Badge theme={T} solid={p.active}>{p.period}</Badge>
          <Text style={{ fontSize: 16, fontWeight: 700, color: T.fg, marginTop: 12, marginBottom: 10 }}>{p.title}</Text>
          <View style={{ gap: 8 }}>
            {p.items.map((item, j) => (
              <View key={j} style={{ flexDirection: "row", gap: 8, alignItems: "flex-start" }}>
                <Dot size={5} color={T.accent} />
                <Text style={{ fontSize: 12, color: T.muted, lineHeight: 1.4, flex: 1 }}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 13: TEAM                                         */
/* ═══════════════════════════════════════════════════════ */
const roundGoals = [
  { n: "400K ₽", l: "MRR" },
  { n: "> 100", l: "платящих клиентов" },
  { n: "< 3 мес.", l: "ROAS по платным каналам" },
];
const contacts = [
  { label: "Telegram", value: "@dmitrybondarev" },
  { label: "Email", value: "dmitry.bondarev@gmail.com" },
  { label: "Телефон", value: "+7 (921) 961-9644" },
];
const S13 = ({ imgBase }) => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Команда" num={13} />
    <View style={{ flexDirection: "row", gap: 20 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ ...FONT.h1, marginBottom: 6, lineHeight: 1.15 }}>
          Дмитрий <Text style={{ color: T.accent }}>Бондарев</Text>
        </Text>
        <Text style={{ fontSize: 14, color: T.muted, marginBottom: 14 }}>Основатель Noteall</Text>
        <View style={{ flexDirection: "row", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
          <Badge theme={T}>30+ ЛЕТ В БИЗНЕСЕ</Badge>
          <Badge theme={T}>10+ СТАРТАПОВ</Badge>
          <Badge theme={T}>4 ВЫХОДА</Badge>
          <Badge theme={T}>25 ЛЕТ В ВЕНЧУРЕ</Badge>
        </View>
        <Text style={{ fontSize: 12, color: T.fg2, lineHeight: 1.6, marginBottom: 10 }}>
          Опытный предприниматель на протяжении 30+ лет. Основатель и руководитель в 10+ оффлайн и цифровых стартапах, 4 выхода. Опыт создания компаний и продуктов с нуля до сервисов с миллионными аудиториями.
        </Text>
        <Text style={{ fontSize: 12, color: T.fg2, lineHeight: 1.6, marginBottom: 14 }}>
          В digital умею все, в том числе своими руками. Опыт руководства командами разработки веб- и мобильных сервисов. Большой опыт отраслевой и продуктовой аналитики.
        </Text>
        <Text style={{ fontSize: 13, fontWeight: 700, color: T.fg, marginBottom: 10 }}>
          Опыт в венчурных инвестициях — 25 лет, со всех сторон стола:
        </Text>
        <View style={{ gap: 8 }}>
          <Card theme={T} accentBorder style={{ padding: 12 }}>
            <View style={{ flexDirection: "row", gap: 8 }}>
              <Text style={{ fontSize: 12, fontWeight: 700, color: T.accent }}>Основатель</Text>
              <Text style={{ fontSize: 11, color: T.muted, flex: 1 }}>Опыт основателя стартапа и фандрайзинга</Text>
            </View>
          </Card>
          <Card theme={T} accentBorder style={{ padding: 12 }}>
            <View style={{ flexDirection: "row", gap: 8 }}>
              <Text style={{ fontSize: 12, fontWeight: 700, color: T.accent }}>Ангел</Text>
              <Text style={{ fontSize: 11, color: T.muted, flex: 1 }}>Собственный опыт ангельских инвестиций</Text>
            </View>
          </Card>
          <Card theme={T} accentBorder style={{ padding: 12 }}>
            <View style={{ flexDirection: "row", gap: 8 }}>
              <Text style={{ fontSize: 12, fontWeight: 700, color: T.accent }}>VC / Корп.</Text>
              <Text style={{ fontSize: 11, color: T.muted, flex: 1 }}>Работа с топовыми венчурными фондами и инвестиционный анализ стартапов</Text>
            </View>
          </Card>
        </View>
      </View>
      <View style={{ width: 200, alignItems: "center" }}>
        <Image src={`${imgBase}/images/noteall/founder.png`}
          style={{ width: 180, height: 180, objectFit: "cover", borderRadius: 12, marginBottom: 14 }} />
        <Card theme={T} style={{ padding: 16, alignItems: "center", width: 180 }}>
          <Text style={{ fontSize: 36, fontWeight: 700, color: T.accent, lineHeight: 1 }}>30+</Text>
          <Text style={{ fontSize: 11, color: T.muted, marginTop: 6, textAlign: "center" }}>лет предпринимательского опыта</Text>
        </Card>
      </View>
    </View>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 14: ROUND (CTA)                                  */
/* ═══════════════════════════════════════════════════════ */
const roundUses14 = [
  { title: "Product Development", desc: "Сценарии, интеграции, корпоративные функции, качество анализа" },
  { title: "Продвижение", desc: "Воспроизводимый и масштабируемый маркетинг в целевых сегментах" },
  { title: "Инфраструктура", desc: "Масштабирование и надёжность сервиса" },
];
const S14 = ({ imgBase }) => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Раунд" num={14} />
    <View style={{ flexDirection: "row", gap: 16 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ ...FONT.h1, marginBottom: 10, lineHeight: 1.15 }}>
          Раунд: <Text style={{ color: T.accent }}>5 млн ₽</Text>
        </Text>
        <Text style={{ fontSize: 13, color: T.muted, marginBottom: 14 }}>Burn-rate: 500 тыс. ₽/мес.</Text>
        <View style={{ gap: 10 }}>
          {roundUses14.map((u, i) => (
            <Card key={i} theme={T} accentBorder style={{ padding: 14 }}>
              <Text style={{ fontSize: 13, fontWeight: 700, color: T.fg }}>{u.title}</Text>
              <Text style={{ fontSize: 11, color: T.muted, marginTop: 4, lineHeight: 1.4 }}>{u.desc}</Text>
            </Card>
          ))}
        </View>
      </View>
      <View style={{ width: 220 }}>
        <Text style={{ fontSize: 13, fontWeight: 700, color: T.fg, marginBottom: 12 }}>Цели на 6 месяцев</Text>
        <View style={{ gap: 10, marginBottom: 18 }}>
          {roundGoals.map((g, i) => (
            <Card key={i} theme={T} style={{ padding: 14, alignItems: "center" }}>
              <Text style={{ fontSize: 20, fontWeight: 700, color: T.accent }}>{g.n}</Text>
              <Text style={{ fontSize: 11, color: T.muted, marginTop: 4 }}>{g.l}</Text>
            </Card>
          ))}
        </View>
      </View>
    </View>
    <Divider width={770} color={T.border} mt={12} mb={12} />
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
      <View>
        <Text style={{ fontSize: 16, fontWeight: 700, color: T.fg, marginBottom: 8 }}>Дмитрий Бондарев</Text>
        <View style={{ flexDirection: "row", gap: 40 }}>
          {contacts.map((c, i) => (
            <View key={i}>
              <Text style={{ fontSize: 10, color: T.dim }}>{c.label}</Text>
              <Text style={{ fontSize: 12, fontWeight: 600, color: T.fg, marginTop: 2 }}>{c.value}</Text>
            </View>
          ))}
        </View>
      </View>
      <Image src={`${imgBase}/images/noteall/logo-noteall.png`}
        style={{ width: 90, height: 32, objectFit: "contain", opacity: 0.6 }} />
    </View>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* DOCUMENT                                               */
/* ═══════════════════════════════════════════════════════ */
const NADoc = ({ imgBase }) => (
  <Document title="Noteall — Инвестиционная презентация" author="Noteall">
    <S1 imgBase={imgBase} />
    <S2 /><S3 /><S4 /><S5 /><S6 /><S7 /><S8 /><S9 /><S10 /><S11 /><S12 />
    <S13 imgBase={imgBase} />
    <S14 imgBase={imgBase} />
  </Document>
);

export async function generateNoteAllPdf(onProgress) {
  if (onProgress) onProgress("Генерация PDF...");
  const imgBase = getImageBase();
  const blob = await pdf(<NADoc imgBase={imgBase} />).toBlob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Noteall_Investment_Presentation.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
