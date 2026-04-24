/**
 * Perviy Bit Presentation PDF Generator
 * 13 slides, A4 Landscape, Noteall teal brand colors
 * Pre-generates Light and Dark themes on page load.
 */
import React from "react";
import {
  Document, Page, View, Text, Image, Link, pdf,
} from "@react-pdf/renderer";
import { registerInterFont, getImageBase } from "./pdf-shared/PdfComponents";

registerInterFont();

const PW = 841.89;
const PH = 595.28;

const THEMES = {
  light: {
    bg: "#ffffff", fg: "#0f172a", fg2: "#1e293b",
    muted: "#475569", dim: "#94a3b8",
    accent: "#0d9488",
    border: "#e2e8f0", card: "#f8fafc",
    accentBg: "rgba(13,148,136,0.1)",
    dimDot: "#cbd5e1",
  },
  dark: {
    bg: "#0f172a", fg: "#f1f5f9", fg2: "#e2e8f0",
    muted: "#94a3b8", dim: "#64748b",
    accent: "#2dd4bf",
    border: "#334155", card: "#1e293b",
    accentBg: "rgba(45,212,191,0.15)",
    dimDot: "#475569",
  },
};

let T = THEMES.light;
const TOTAL = 13;

const f = { fontFamily: "Inter" };
const ps = () => ({ ...f, width: PW, height: PH, backgroundColor: T.bg, color: T.fg, padding: 30 });

const Header = ({ num, label }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 14 }}>
    <Text style={{ fontSize: 11, fontWeight: 700, color: T.accent, letterSpacing: 1.5, textTransform: "uppercase" }}>{label}</Text>
    <Text style={{ fontSize: 11, color: T.dim }}>{String(num).padStart(2, "0")} / {TOTAL}</Text>
  </View>
);
const H = ({ children }) => <Text style={{ fontSize: 26, fontWeight: 700, color: T.fg, marginBottom: 6, lineHeight: 1.2 }}>{children}</Text>;
const HA = ({ children }) => <Text style={{ fontSize: 26, fontWeight: 700, color: T.accent, lineHeight: 1.2 }}>{children}</Text>;
const Sub = ({ children }) => <Text style={{ fontSize: 13, color: T.muted, lineHeight: 1.4, marginBottom: 14, maxWidth: 600 }}>{children}</Text>;
const Li = ({ children, color }) => (
  <View style={{ flexDirection: "row", gap: 4, alignItems: "flex-start", marginBottom: 3 }}>
    <View style={{ width: 5, height: 5, borderRadius: 3, backgroundColor: color || T.accent, marginTop: 5 }} />
    <Text style={{ fontSize: 12, color: T.muted, lineHeight: 1.4, flex: 1 }}>{children}</Text>
  </View>
);
const Card = ({ children, accent, style }) => (
  <View style={{ flex: 1, backgroundColor: T.card, borderRadius: 4, padding: 12, borderWidth: 0.5, borderColor: accent ? T.accent : T.border, borderTopWidth: accent ? 3 : 0.5, borderTopColor: accent ? T.accent : T.border, ...style }}>{children}</View>
);
const CardTitle = ({ children }) => <Text style={{ fontSize: 14, fontWeight: 700, color: T.fg, marginBottom: 4 }}>{children}</Text>;
const BigNum = ({ children }) => <Text style={{ fontSize: 20, fontWeight: 700, color: T.accent, opacity: 0.7, marginBottom: 2 }}>{children}</Text>;
const Tag = ({ children, bg, color }) => (
  <View style={{ backgroundColor: bg || T.accentBg, borderRadius: 3, paddingHorizontal: 6, paddingVertical: 2 }}>
    <Text style={{ fontSize: 10, fontWeight: 600, color: color || T.accent }}>{children}</Text>
  </View>
);

/* ══ SLIDES ══ */

const S01 = ({ imgBase }) => (
  <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: T.bg, padding: 0, justifyContent: "center", alignItems: "center" }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 20, marginBottom: 24 }}>
      <Image src={`${imgBase}/images/noteall/logo-noteall.png`} style={{ width: 100, height: 34, objectFit: "contain" }} />
      <View style={{ width: 1, height: 30, backgroundColor: T.dim, opacity: 0.3 }} />
      <Image src={`${imgBase}/images/perviy-bit/logo-perviy-bit.jpg`} style={{ width: 100, height: 34, objectFit: "contain", borderRadius: 3 }} />
    </View>
    <Text style={{ fontSize: 28, fontWeight: 700, color: T.fg, textAlign: "center", maxWidth: 600, lineHeight: 1.3 }}>
      Автоматизация пресейла{" "}
    </Text>
    <Text style={{ fontSize: 28, fontWeight: 700, color: T.accent, textAlign: "center", maxWidth: 600, lineHeight: 1.3 }}>для 1С-доработок</Text>
    <Text style={{ fontSize: 13, color: T.muted, textAlign: "center", maxWidth: 500, marginTop: 12, lineHeight: 1.4 }}>
      От интервью с клиентом — к готовому ТЗ и коммерческому предложению
    </Text>
    <View style={{ width: 40, height: 2, backgroundColor: T.accent, marginTop: 20, opacity: 0.5 }} />
    <Text style={{ fontSize: 10, color: T.dim, marginTop: 12 }}>noteall.ru</Text>
  </Page>
);

const S02 = () => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={2} label="ПРОБЛЕМА" />
    <H>Разговор с клиентом <HA>не превращается в результат</HA></H>
    <Sub>Процесс неформализован и зависит от менеджера</Sub>
    <View style={{ flexDirection: "row", gap: 8 }}>
      {[
        { n: "01", t: "Потери", d: "Часть проблематики клиента теряется при переходе от интервью к ТЗ" },
        { n: "02", t: "Искажения", d: "Что-то не выявляется, что-то не фиксируется, что-то искажается при ручной обработке" },
        { n: "03", t: "Недовольство", d: "Клиенты часто недовольны результатом доработок, потому что их не до конца поняли" },
      ].map((c, i) => (
        <Card key={i}><BigNum>{c.n}</BigNum><CardTitle>{c.t}</CardTitle><Text style={{ fontSize: 12, color: T.muted, lineHeight: 1.4 }}>{c.d}</Text></Card>
      ))}
    </View>
  </Page>
);

const S03 = () => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={3} label="АНАЛИЗ" />
    <H>Между встречей и ТЗ — <HA>разрыв</HA></H>
    <Sub>Недостатки текущего процесса преобразования интервью в техническое задание</Sub>
    <View style={{ gap: 6 }}>
      {[
        "Менеджер полагается на заметки, память, повторное прослушивание или транскрипт",
        "8-10 часов ручной работы после каждого интервью",
        "Результат зависит от опыта конкретного человека",
        "Нет единой основы для поддержания стандарта качества пресейла",
      ].map((t, i) => (
        <View key={i} style={{ flexDirection: "row", gap: 6, alignItems: "flex-start", backgroundColor: T.card, borderRadius: 4, padding: 8, borderWidth: 0.5, borderColor: T.border }}>
          <View style={{ width: 5, height: 5, borderRadius: 3, backgroundColor: "#ef4444", opacity: 0.6, marginTop: 4 }} />
          <Text style={{ fontSize: 12, color: T.fg, lineHeight: 1.4, flex: 1, opacity: 0.8 }}>{t}</Text>
        </View>
      ))}
    </View>
  </Page>
);

const S04 = () => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={4} label="РЕШЕНИЕ" />
    <H>Сквозной pipeline — <HA>от записи к готовым стандартизированным артефактам</HA></H>
    <Sub>Noteall превращает разговор с клиентом в структурированный рабочий материал</Sub>
    <View style={{ flexDirection: "row", gap: 8 }}>
      {[
        { n: "01", t: "Стандартизированное интервью", d: "Менеджер проводит встречу по скрипту" },
        { n: "02", t: "AI-анализ записи", d: "Извлечение проблем и потребностей клиента" },
        { n: "03", t: "Диагностический документ", d: "Верифицируемый промежуточный артефакт" },
        { n: "04", t: "Генерация ТЗ, оценки и КП", d: "Готовый пакет документов для клиента" },
      ].map((s, i) => (
        <Card key={i} accent><BigNum>{s.n}</BigNum><CardTitle>{s.t}</CardTitle><Text style={{ fontSize: 11, color: T.muted, lineHeight: 1.4 }}>{s.d}</Text></Card>
      ))}
    </View>
  </Page>
);

const S05 = ({ imgBase }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={5} label="ПЛАТФОРМА" />
    <H>Noteall — это <HA>AI-среда для анализа</HA></H>
    <Sub>Не просто транскрибатор, а инструмент извлечения смыслов из разговора</Sub>
    <View style={{ flexDirection: "row", gap: 12 }}>
      <View style={{ flex: 1 }}>
        {["Разметка спикеров и структуризация по темам", "Наложение специализированных фреймворков анализа", "Учёт дополнительных файлов и контекста", "Коррекция по контексту предметной области"].map((t, i) => <Li key={i}>{t}</Li>)}
      </View>
      <Image src={`${imgBase}/images/noteall/screenshot-scenarios.png`} style={{ width: 320, height: 220, objectFit: "contain", borderRadius: 4 }} />
    </View>
  </Page>
);

const S06 = () => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={6} label="ВИДЕОАНАЛИЗ" />
    <H>Анализ того, что клиент <HA>показывает на экране</HA></H>
    <Sub>Noteall извлекает визуальный контекст из видеозвонков и демонстраций экрана</Sub>
    <View style={{ flexDirection: "row", gap: 8 }}>
      {[
        { n: "01", t: "Захват ключевых кадров", d: "Автоматическое извлечение скриншотов интерфейса клиента из видеозвонка" },
        { n: "02", t: "Привязка к проблеме", d: "Каждый кадр связан с обсуждаемой проблемой — визуальное доказательство" },
        { n: "03", t: "В диагностике и ТЗ", d: "Скриншоты попадают в итоговые документы для точного понимания контекста" },
      ].map((s, i) => (
        <Card key={i}><BigNum>{s.n}</BigNum><CardTitle>{s.t}</CardTitle><Text style={{ fontSize: 12, color: T.muted, lineHeight: 1.4 }}>{s.d}</Text></Card>
      ))}
    </View>
  </Page>
);

const S07 = () => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={7} label="АРТЕФАКТ" />
    <H>Промежуточный артефакт — <HA>диагностика клиента</HA></H>
    <Sub>Верифицируемый документ перед началом разработки ТЗ</Sub>
    <View style={{ flexDirection: "row", gap: 10 }}>
      <Card>
        <Tag>СТРУКТУРА</Tag>
        <View style={{ marginTop: 8, gap: 4 }}>
          {["Выявленные проблемы клиента, ранжированные по приоритету", "Текущие процессы и их узкие места", "Ожидания и ограничения клиента"].map((t, i) => <Li key={i}>{t}</Li>)}
        </View>
      </Card>
      <View style={{ flex: 1, backgroundColor: T.card, borderRadius: 4, padding: 12, borderWidth: 2, borderColor: T.accent }}>
        <Tag bg={T.accentBg} color={T.accent}>ЦЕННОСТЬ</Tag>
        <View style={{ marginTop: 8, gap: 4 }}>
          {["Клиент видит, что его поняли правильно", "Возможность скорректировать до начала разработки", "Снижение рисков непонимания"].map((t, i) => <Li key={i}>{t}</Li>)}
        </View>
      </View>
    </View>
  </Page>
);

const S08 = () => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={8} label="ГЕНЕРАЦИЯ" />
    <H>Автоматическая генерация <HA>ТЗ и декомпозиция</HA></H>
    <Sub>На основе утверждённой диагностики система формирует готовое к работе ТЗ</Sub>
    <View style={{ gap: 6 }}>
      {[
        { from: "Диагностика", to: "Техническое задание" },
        { from: "ТЗ", to: "Декомпозиция на скоупы и задачи" },
        { from: "Задачи", to: "Расчёт трудоёмкости по внутренней сетке" },
        { from: "Трудоёмкость", to: "Себестоимость и цена для клиента" },
      ].map((c, i) => (
        <View key={i} style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <View style={{ backgroundColor: T.card, borderRadius: 4, padding: 8, borderWidth: 0.5, borderColor: T.border, minWidth: 140 }}>
            <Text style={{ fontSize: 12, fontWeight: 700, color: T.muted }}>{c.from}</Text>
          </View>
          <Text style={{ fontSize: 14, color: T.accent }}>→</Text>
          <View style={{ flex: 1, backgroundColor: T.card, borderRadius: 4, padding: 8, borderLeftWidth: 3, borderLeftColor: T.accent, borderWidth: 0.5, borderColor: T.border }}>
            <Text style={{ fontSize: 12, color: T.fg }}>{c.to}</Text>
          </View>
        </View>
      ))}
    </View>
  </Page>
);

const S09 = () => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={9} label="ПОДГОТОВКА КОММЕРЧЕСКИХ ПРЕДЛОЖЕНИЙ" />
    <H>Готовое КП — <HA>за минуты, а не за дни</HA></H>
    <Sub>Автоматическая сборка коммерческого предложения из данных pipeline</Sub>
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
      {[
        { t: "Перечень задач и результатов", d: "Чёткий список того, что будет сделано" },
        { t: "Стоимость по блокам", d: "Прозрачная структура ценообразования" },
        { t: "Дорожная карта проекта", d: "Последовательность этапов и зависимости" },
        { t: "Календарный план", d: "Сроки по каждому блоку работ" },
      ].map((s, i) => (
        <View key={i} style={{ width: "48%", backgroundColor: T.card, borderRadius: 4, padding: 10, borderWidth: 0.5, borderColor: T.border }}>
          <CardTitle>{s.t}</CardTitle>
          <Text style={{ fontSize: 12, color: T.muted, lineHeight: 1.4 }}>{s.d}</Text>
        </View>
      ))}
    </View>
  </Page>
);

const S10 = () => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={10} label="ЭКОНОМИКА" />
    <H>Себестоимость обработки — <HA>в 10 раз ниже</HA></H>
    <Sub>Сравнение ручного пресейла и автоматизированного pipeline</Sub>
    <View style={{ flexDirection: "row", gap: 10, marginBottom: 10 }}>
      <Card>
        <Tag bg={T.dimDot + "22"} color={T.muted}>СЕЙЧАС</Tag>
        <Text style={{ fontSize: 28, fontWeight: 700, color: T.fg, marginTop: 8, marginBottom: 4 }}>~16 000 руб</Text>
        <Text style={{ fontSize: 12, color: T.muted }}>8-10 часов менеджера x 2 000 руб/час</Text>
      </Card>
      <View style={{ flex: 1, backgroundColor: T.card, borderRadius: 4, padding: 12, borderWidth: 2, borderColor: T.accent }}>
        <Tag>С NOTEALL</Tag>
        <Text style={{ fontSize: 28, fontWeight: 700, color: T.accent, marginTop: 8, marginBottom: 4 }}>1 000-1 500 руб</Text>
        <Text style={{ fontSize: 12, color: T.muted }}>Полный цикл pipeline</Text>
      </View>
    </View>
    <View style={{ backgroundColor: T.card, borderRadius: 4, padding: 10, borderLeftWidth: 3, borderLeftColor: T.accent, borderWidth: 0.5, borderColor: T.border }}>
      <Text style={{ fontSize: 13, color: T.muted, lineHeight: 1.4 }}><Text style={{ fontWeight: 700, color: T.fg }}>Экономия ~15 000 руб</Text> на каждом клиентском обращении</Text>
    </View>
  </Page>
);

const S11 = () => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={11} label="ЭФФЕКТИВНОСТЬ" />
    <H>Менеджер <HA>продаёт, а не пишет</HA></H>
    <Sub>Высвобождение 7-9 часов на каждое интервью</Sub>
    <View style={{ flexDirection: "row", gap: 8 }}>
      <Card><Tag bg={T.dimDot + "22"} color={T.muted}>БЫЛО</Tag><Text style={{ fontSize: 12, color: T.fg, opacity: 0.7, marginTop: 8, lineHeight: 1.5 }}>Интервью — 8-10 ч ручной обработки — ТЗ — расчёт — КП</Text></Card>
      <View style={{ flex: 1, backgroundColor: T.card, borderRadius: 4, padding: 12, borderWidth: 2, borderColor: T.accent }}><Tag>СТАЛО</Tag><Text style={{ fontSize: 12, color: T.fg, marginTop: 8, lineHeight: 1.5 }}>Интервью — 1 ч проверки — готовый пакет документов</Text></View>
      <Card><Tag>РЕЗУЛЬТАТ</Tag><Text style={{ fontSize: 12, color: T.fg, marginTop: 8, lineHeight: 1.5 }}>Менеджер может обрабатывать в 5-8 раз больше обращений</Text></Card>
    </View>
  </Page>
);

const S12 = () => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={12} label="МАСШТАБ" />
    <H>Сотни менеджеров — <HA>единый стандарт</HA></H>
    <Sub>Масштабирование пресейла на всю компанию с одновременным ростом качества обслуживания</Sub>
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
      {["Сокращение трудозатрат в 8-10 раз", "Рост конверсии и дополнительная выручка", "Единый процесс для всех менеджеров и офисов", "Воспроизводимое качество вне зависимости от опыта сотрудника"].map((t, i) => (
        <View key={i} style={{ width: "48%", flexDirection: "row", gap: 6, alignItems: "flex-start", backgroundColor: T.card, borderRadius: 4, padding: 10, borderWidth: 0.5, borderColor: T.border }}>
          <View style={{ width: 5, height: 5, borderRadius: 3, backgroundColor: T.accent, marginTop: 4 }} />
          <Text style={{ fontSize: 13, color: T.fg, lineHeight: 1.4, flex: 1 }}>{t}</Text>
        </View>
      ))}
    </View>
  </Page>
);

const S13 = ({ imgBase }) => (
  <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: T.bg, padding: 0, justifyContent: "center", alignItems: "center" }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 20, marginBottom: 20 }}>
      <Image src={`${imgBase}/images/noteall/logo-noteall.png`} style={{ width: 90, height: 30, objectFit: "contain" }} />
      <View style={{ width: 1, height: 24, backgroundColor: T.dim, opacity: 0.3 }} />
      <Image src={`${imgBase}/images/perviy-bit/logo-perviy-bit.jpg`} style={{ width: 90, height: 30, objectFit: "contain", borderRadius: 3 }} />
    </View>
    <Text style={{ fontSize: 22, fontWeight: 700, color: T.fg, textAlign: "center", maxWidth: 600, lineHeight: 1.3 }}>
      От головной боли пресейла —
    </Text>
    <Text style={{ fontSize: 22, fontWeight: 700, color: T.accent, textAlign: "center", maxWidth: 600, lineHeight: 1.3 }}>
      к стандартизированному, проверяемому и экономически выгодному процессу
    </Text>
    <View style={{ flexDirection: "row", gap: 6, maxWidth: 600, justifyContent: "center", marginTop: 18, flexWrap: "wrap" }}>
      {["Стоимость пресейла x10 ниже", "Время менеджера x8 меньше", "Качество ТЗ: стандартное и проверяемое", "Конверсия продаж: рост"].map((t, i) => (
        <View key={i} style={{ backgroundColor: T.card, borderRadius: 4, padding: 8, borderWidth: 0.5, borderColor: T.border }}>
          <Text style={{ fontSize: 10, color: T.fg, textAlign: "center" }}>{t}</Text>
        </View>
      ))}
    </View>
    <Link src="https://noteall.ru" style={{ fontSize: 12, color: T.accent, marginTop: 18, textDecoration: "none", fontWeight: 700 }}>noteall.ru</Link>
    <Text style={{ fontSize: 8, color: T.dim, marginTop: 8 }}>{TOTAL} / {TOTAL}</Text>
  </Page>
);

const PBDoc = ({ imgBase }) => (
  <Document title="Noteall x Первый Бит — Автоматизация пресейла" author="Noteall">
    <S01 imgBase={imgBase} />
    <S02 /><S03 /><S04 /><S05 imgBase={imgBase} /><S06 /><S07 /><S08 /><S09 /><S10 /><S11 /><S12 />
    <S13 imgBase={imgBase} />
  </Document>
);

export async function preGeneratePerviyBitPdfs() {
  const imgBase = getImageBase();

  T = THEMES.light;
  const lightBlob = await pdf(<PBDoc imgBase={imgBase} />).toBlob();

  T = THEMES.dark;
  const darkBlob = await pdf(<PBDoc imgBase={imgBase} />).toBlob();

  return { light: lightBlob, dark: darkBlob };
}
