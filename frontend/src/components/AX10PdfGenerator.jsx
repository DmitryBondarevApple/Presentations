/**
 * AX10 PDF Generator
 * A4 Landscape (841.89 x 595.28 pt)
 * Theme: Dark navy + blue accent (hsl 217 91% 60%)
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
  bg: "#0b1120", bg2: "#131d2e", fg: "#f0f4f8", fg2: "#c4d0dc",
  muted: "#7a8d9e", dim: "#5a6d80", accent: "#3b82f6", accent2: "#60a5fa",
  accentBg: "rgba(59,130,246,0.12)", border: "#1a2a3e", border2: "#243550",
};

const PW = PAGE.W;
const PH = PAGE.H;
const PX = PAGE.PX;
const PY = PAGE.PY;
const TOTAL = 16;

const pg = {
  width: PW, height: PH, backgroundColor: T.bg, color: T.fg,
  fontFamily: "Inter", padding: `${PY} ${PX}`, position: "relative",
};

const Hdr = ({ label, num }) => <Header label={label} num={num} total={TOTAL} theme={T} />;
const Br = () => <Brand text="AX10" accentText="DIGITAL" theme={T} />;

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 1: COVER                                         */
/* ═══════════════════════════════════════════════════════ */
const S1 = ({ imgBase }) => (
  <Page size={[PW, PH]} style={{ ...pg, justifyContent: "center", alignItems: "center" }}>
    <Image src={`${imgBase}/images/ax10/logo-ax10.png`}
      style={{ width: 120, height: 44, objectFit: "contain", marginBottom: 20 }} />
    <View style={{ alignItems: "center", marginBottom: 16 }}>
      <Badge theme={T}>КЛИЕНТСКАЯ ПРЕЗЕНТАЦИЯ</Badge>
    </View>
    <Text style={{ ...FONT.h1, fontSize: 34, textAlign: "center", lineHeight: 1.2, maxWidth: 620 }}>
      От идеи цифрового сервиса к{"\n"}
      <Text style={{ color: T.accent }}>готовому ТЗ на разработку</Text>
    </Text>
    <Text style={{ fontSize: 14, color: T.muted, marginTop: 18, textAlign: "center", maxWidth: 520, lineHeight: 1.6 }}>
      Проверяем гипотезы, исследуем рынок и пользователей, формируем продуктовое решение и техническое задание — до начала разработки
    </Text>
    <Divider width={50} color={T.accent} mt={20} mb={14} />
    <Text style={{ fontSize: 12, color: T.dim, textAlign: "center", maxWidth: 480, lineHeight: 1.5 }}>
      Без догадок, лишних затрат и привязки к одному подрядчику
    </Text>
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 2: PROBLEM                                       */
/* ═══════════════════════════════════════════════════════ */
const S2 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Проблема" num={2} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ ...FONT.h1, marginBottom: 10, lineHeight: 1.15 }}>
        Цифровой сервис начинают <Text style={{ color: T.accent }}>с предположений</Text>
      </Text>
      <Text style={{ fontSize: 14, color: T.fg2, lineHeight: 1.6, marginBottom: 18, maxWidth: 660 }}>
        На старте у компании есть идея и гипотезы, но ключевые вопросы остаются без ответа:
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 14 }}>
        {[
          { title: "Кто пользователь?", desc: "Неясно, кто станет ранним пользователем и какие сценарии востребованы" },
          { title: "Что в первый релиз?", desc: "Не определён состав MVP — что включить, а что оставить" },
          { title: "Какие гипотезы верны?", desc: "Часть представлений о рынке может не подтвердиться" },
          { title: "Сколько стоит ошибка?", desc: "Первая версия на предположениях обходится в месяцы и миллионы" },
        ].map((q, i) => (
          <Card key={i} theme={T} style={{ width: "48%", padding: 16 }}>
            <Text style={{ fontSize: 14, fontWeight: 700, color: T.accent, marginBottom: 6 }}>{q.title}</Text>
            <Text style={{ fontSize: 12, color: T.fg2, lineHeight: 1.5 }}>{q.desc}</Text>
          </Card>
        ))}
      </View>
      <Card theme={T} accentBorder style={{ padding: 14, marginTop: 14 }}>
        <Text style={{ fontSize: 13, color: T.fg2, lineHeight: 1.5 }}>
          <Text style={{ fontWeight: 700, color: T.fg }}>Итог: </Text>
          если идти в разработку без проверки, первая версия собирается на догадках, а не на данных.
        </Text>
      </Card>
    </View>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 3: SOLUTION                                      */
/* ═══════════════════════════════════════════════════════ */
const solutionItems = [
  { title: "Подтверждённые гипотезы", desc: "Какие предположения о рынке выдержали проверку, а какие — нет" },
  { title: "Пользовательские сценарии", desc: "Приоритетные задачи и поведение ранних пользователей" },
  { title: "Структура первого решения", desc: "Портрет пользователя, состав MVP и приоритизированный функционал" },
  { title: "Готовое ТЗ", desc: "Техническое задание для передачи любой команде разработки" },
];
const S3 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Решение" num={3} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ ...FONT.h1, marginBottom: 6, lineHeight: 1.15 }}>
        AX10 готовит <Text style={{ color: T.accent }}>основу для разработки</Text>
      </Text>
      <Text style={{ fontSize: 14, color: T.muted, marginBottom: 18, lineHeight: 1.5 }}>
        Исследовательский и продуктово-аналитический проект. Результат — пакет решений для запуска:
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 14 }}>
        {solutionItems.map((item, i) => (
          <Card key={i} theme={T} accentBorder style={{ width: "48%", padding: 16 }}>
            <Text style={{ fontSize: 15, fontWeight: 700, color: T.fg, marginBottom: 6 }}>{item.title}</Text>
            <Text style={{ fontSize: 12, color: T.muted, lineHeight: 1.5 }}>{item.desc}</Text>
          </Card>
        ))}
      </View>
    </View>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 4: PROCESS (7 steps)                             */
/* ═══════════════════════════════════════════════════════ */
const steps = [
  { num: "01", title: "Параметры", desc: "Уточнение задачи и границ" },
  { num: "02", title: "Дизайн", desc: "Методология и инструменты" },
  { num: "03", title: "Полевой этап", desc: "Интервью, анкеты, данные" },
  { num: "04", title: "ИИ-аналитика", desc: "Обработка и структуризация" },
  { num: "05", title: "Кабинетное", desc: "Рынок, конкуренты, контекст" },
  { num: "06", title: "Синтез", desc: "Продуктовые сценарии" },
  { num: "07", title: "ТЗ", desc: "Документация для разработки" },
];
const S4 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Процесс" num={4} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ ...FONT.h1, marginBottom: 6, lineHeight: 1.15 }}>
        Семь этапов <Text style={{ color: T.accent }}>от идеи до ТЗ</Text>
      </Text>
      <Text style={{ fontSize: 14, color: T.muted, marginBottom: 18, lineHeight: 1.5 }}>
        Последовательный проект без лишних итераций и преждевременного ухода в код
      </Text>
      <View style={{ flexDirection: "row", gap: 12, marginBottom: 12 }}>
        {steps.slice(0, 4).map((s, i) => (
          <View key={i} style={{ flex: 1, backgroundColor: T.bg2, borderRadius: 8, borderTopWidth: 3, borderTopColor: T.accent, borderWidth: 1, borderColor: T.border, padding: 14 }}>
            <Text style={{ fontSize: 11, fontWeight: 700, color: T.accent, opacity: 0.7 }}>{s.num}</Text>
            <Text style={{ fontSize: 14, fontWeight: 700, color: T.fg, marginTop: 8 }}>{s.title}</Text>
            <Text style={{ fontSize: 11, color: T.muted, marginTop: 6, lineHeight: 1.5 }}>{s.desc}</Text>
          </View>
        ))}
      </View>
      <View style={{ flexDirection: "row", gap: 12 }}>
        {steps.slice(4).map((s, i) => (
          <View key={i} style={{ flex: 1, backgroundColor: T.bg2, borderRadius: 8, borderTopWidth: 3, borderTopColor: T.accent, borderWidth: 1, borderColor: T.border, padding: 14 }}>
            <Text style={{ fontSize: 11, fontWeight: 700, color: T.accent, opacity: 0.7 }}>{s.num}</Text>
            <Text style={{ fontSize: 14, fontWeight: 700, color: T.fg, marginTop: 8 }}>{s.title}</Text>
            <Text style={{ fontSize: 11, color: T.muted, marginTop: 6, lineHeight: 1.5 }}>{s.desc}</Text>
          </View>
        ))}
      </View>
    </View>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 5: DATA SOURCES                                  */
/* ═══════════════════════════════════════════════════════ */
const sources = [
  { tag: "ПОЛЬЗОВАТЕЛИ", title: "Интервью и анкеты", desc: "Глубинные разговоры с потенциальными пользователями, выявление реальных задач и барьеров" },
  { tag: "РЫНОК", title: "Кабинетное исследование", desc: "Анализ конкурентов, трендов, объёмов рынка и позиционирования" },
  { tag: "КОНТЕКСТ", title: "Инфраструктура и ограничения", desc: "Отраслевые, технические и регуляторные ограничения" },
  { tag: "КЛИЕНТ", title: "Внутренние материалы", desc: "Стратегии, аналитика, внутренние документы и гипотезы заказчика" },
];
const S5 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Данные" num={5} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ ...FONT.h1, marginBottom: 6, lineHeight: 1.15 }}>
        Выводы строятся на <Text style={{ color: T.accent }}>нескольких источниках</Text>
      </Text>
      <Text style={{ fontSize: 14, color: T.muted, marginBottom: 18, lineHeight: 1.5 }}>
        Данные проверяются с нескольких сторон — так формируется база для продуктовых решений.
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 14 }}>
        {sources.map((s, i) => (
          <Card key={i} theme={T} style={{ width: "48%", padding: 16 }}>
            <Badge theme={T}>{s.tag}</Badge>
            <Text style={{ fontSize: 15, fontWeight: 700, color: T.fg, marginTop: 10, marginBottom: 6 }}>{s.title}</Text>
            <Text style={{ fontSize: 12, color: T.muted, lineHeight: 1.5 }}>{s.desc}</Text>
          </Card>
        ))}
      </View>
    </View>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 6: AI ROLE                                       */
/* ═══════════════════════════════════════════════════════ */
const aiPipeline = [
  { num: "01", title: "Транскрипт", desc: "Запись интервью переводится в точный текст" },
  { num: "02", title: "Summary", desc: "Автоматическая выжимка ключевых тезисов" },
  { num: "03", title: "Структура", desc: "Цитаты, темы, задачи, барьеры, мотивы" },
  { num: "04", title: "Выводы", desc: "Прикладные продуктовые решения" },
];
const S6 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Технология" num={6} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ ...FONT.h1, marginBottom: 6, lineHeight: 1.15 }}>
        ИИ — <Text style={{ color: T.accent }}>рабочий инструмент</Text>, не вывеска
      </Text>
      <Text style={{ fontSize: 14, color: T.muted, marginBottom: 18, lineHeight: 1.5 }}>
        ИИ встроен в полный цикл аналитики — от массива разговоров к продуктовым выводам
      </Text>
      <View style={{ flexDirection: "row", gap: 14, marginBottom: 14 }}>
        {aiPipeline.map((s, i) => (
          <View key={i} style={{ flex: 1, backgroundColor: T.bg2, borderRadius: 8, borderTopWidth: 3, borderTopColor: T.accent, borderWidth: 1, borderColor: T.border, padding: 16 }}>
            <Text style={{ fontSize: 11, fontWeight: 700, color: T.accent, opacity: 0.7 }}>{s.num}</Text>
            <Text style={{ fontSize: 16, fontWeight: 700, color: T.fg, marginTop: 10 }}>{s.title}</Text>
            <Text style={{ fontSize: 12, color: T.muted, marginTop: 8, lineHeight: 1.5 }}>{s.desc}</Text>
          </View>
        ))}
      </View>
      <Card theme={T} accentBorder style={{ padding: 14 }}>
        <Text style={{ fontSize: 13, color: T.fg2, lineHeight: 1.5 }}>
          <Text style={{ fontWeight: 700, color: T.fg }}>Результат: </Text>
          из десятков интервью — <Text style={{ fontWeight: 700, color: T.accent }}>структурированная база инсайтов</Text>, готовая для продуктовых решений.
        </Text>
      </Card>
    </View>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 7: TRANSPARENCY                                  */
/* ═══════════════════════════════════════════════════════ */
const transpFeatures = [
  { title: "Интервью и транскрипты", desc: "Полный доступ к записям и текстовым расшифровкам" },
  { title: "Summary и аналитика", desc: "Автоматические выжимки и аналитические документы" },
  { title: "Статус проекта", desc: "Прогресс работ и завершённые этапы" },
];
const S7 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Прозрачность" num={7} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ ...FONT.h1, marginBottom: 6, lineHeight: 1.15 }}>
        Клиент видит <Text style={{ color: T.accent }}>весь процесс</Text>
      </Text>
      <Text style={{ fontSize: 14, color: T.muted, marginBottom: 18, lineHeight: 1.5 }}>
        Все материалы собираются в едином онлайн-дашборде, доступном клиенту
      </Text>
      <View style={{ flexDirection: "row", gap: 14, marginBottom: 14 }}>
        {transpFeatures.map((f, i) => (
          <Card key={i} theme={T} style={{ flex: 1, padding: 18 }}>
            <Text style={{ fontSize: 15, fontWeight: 700, color: T.fg, marginBottom: 8 }}>{f.title}</Text>
            <Text style={{ fontSize: 12, color: T.muted, lineHeight: 1.5 }}>{f.desc}</Text>
          </Card>
        ))}
      </View>
      <View style={{ flexDirection: "row", gap: 14 }}>
        <View style={{ flex: 1, backgroundColor: T.bg2, borderRadius: 8, borderWidth: 2, borderColor: T.accent, padding: 20, alignItems: "center" }}>
          <Text style={{ fontSize: 36, fontWeight: 700, color: T.accent, lineHeight: 1 }}>3 года</Text>
          <Text style={{ fontSize: 12, color: T.fg2, marginTop: 10 }}>доступ к материалам после завершения</Text>
        </View>
        <Card theme={T} accentBorder style={{ flex: 1, padding: 18 }}>
          <Text style={{ fontSize: 13, color: T.fg2, lineHeight: 1.6 }}>
            Упрощает контроль хода работ, согласование выводов и использование данных на следующих этапах.
          </Text>
        </Card>
      </View>
    </View>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 8: DELIVERABLES                                  */
/* ═══════════════════════════════════════════════════════ */
const deliverables = [
  { title: "База инсайтов", desc: "Результаты интервью с цитатами и выводами" },
  { title: "Кабинетное исследование", desc: "Рынок, конкуренты, тренды и контекст" },
  { title: "Аналитический документ", desc: "Сводный документ с рекомендациями" },
  { title: "Карта сценариев", desc: "Пользовательские сценарии с приоритетами" },
  { title: "Портрет пользователя", desc: "Профиль раннего пользователя" },
  { title: "Структура MVP", desc: "Функционал и требования к данным" },
];
const S8 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Результат" num={8} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ ...FONT.h1, marginBottom: 6, lineHeight: 1.15 }}>
        Полноценный <Text style={{ color: T.accent }}>пакет для старта</Text>
      </Text>
      <Text style={{ fontSize: 14, color: T.muted, marginBottom: 18, lineHeight: 1.5 }}>
        Не отчёт, а готовый набор материалов для запуска разработки:
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12, marginBottom: 14 }}>
        {deliverables.map((d, i) => (
          <Card key={i} theme={T} style={{ width: "31.5%", padding: 14 }}>
            <Text style={{ fontSize: 13, fontWeight: 700, color: T.fg, marginBottom: 6 }}>{d.title}</Text>
            <Text style={{ fontSize: 11, color: T.muted, lineHeight: 1.5 }}>{d.desc}</Text>
          </Card>
        ))}
      </View>
      <View style={{ backgroundColor: T.bg2, borderRadius: 8, borderWidth: 2, borderColor: T.accent, padding: 14 }}>
        <Text style={{ fontSize: 13, color: T.fg2, lineHeight: 1.5 }}>
          <Text style={{ fontWeight: 700, color: T.accent }}>+ Техническое задание </Text>
          и дорожная карта — исчерпывающее задание для оценки трудозатрат, сроков и стоимости.
        </Text>
      </View>
    </View>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 9: INDEPENDENT TZ                                */
/* ═══════════════════════════════════════════════════════ */
const tzPoints = [
  "Можно передать любой внутренней или внешней команде",
  "Достаточно для оценки трудозатрат, сроков и стоимости",
  "Не требует дополнительных консультаций с AX10",
];
const S9 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Свобода выбора" num={9} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ ...FONT.h1, marginBottom: 10, lineHeight: 1.15 }}>
        ТЗ <Text style={{ color: T.accent }}>не привязано</Text> к AX10
      </Text>
      <Text style={{ fontSize: 14, color: T.fg2, lineHeight: 1.6, marginBottom: 18, maxWidth: 660 }}>
        Подготовленное ТЗ не замыкает клиента на AX10 как на единственного исполнителя.
      </Text>
      <View style={{ flexDirection: "row", gap: 16 }}>
        <View style={{ flex: 1, backgroundColor: T.bg2, borderRadius: 8, borderWidth: 2, borderColor: T.accent, padding: 22 }}>
          <Badge theme={T} solid>НЕЗАВИСИМОЕ ТЗ</Badge>
          <Text style={{ fontSize: 18, fontWeight: 700, color: T.fg, marginTop: 14, marginBottom: 10 }}>Комплект материалов для любой команды</Text>
          <View style={{ gap: 10 }}>
            {tzPoints.map((p, i) => (
              <View key={i} style={{ flexDirection: "row", gap: 8, alignItems: "flex-start" }}>
                <Dot size={5} color={T.accent} />
                <Text style={{ fontSize: 13, color: T.fg2, lineHeight: 1.5, flex: 1 }}>{p}</Text>
              </View>
            ))}
          </View>
        </View>
        <Card theme={T} style={{ width: 220, padding: 22, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 42, fontWeight: 700, color: T.accent, lineHeight: 1 }}>100%</Text>
          <Text style={{ fontSize: 12, color: T.muted, marginTop: 10, textAlign: "center" }}>материалов остаётся у клиента</Text>
        </Card>
      </View>
    </View>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 10: CLIENT CHOICE                                */
/* ═══════════════════════════════════════════════════════ */
const S10 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Следующий шаг" num={10} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ ...FONT.h1, marginBottom: 10, lineHeight: 1.15 }}>
        После проекта — <Text style={{ color: T.accent }}>выбор за клиентом</Text>
      </Text>
      <Text style={{ fontSize: 14, color: T.muted, marginBottom: 20, lineHeight: 1.5 }}>
        Исследовательский этап и разработка — два отдельных решения.
      </Text>
      <View style={{ flexDirection: "row", gap: 16 }}>
        <Card theme={T} style={{ flex: 1, padding: 22 }}>
          <Badge theme={T}>ВАРИАНТ 1</Badge>
          <Text style={{ fontSize: 18, fontWeight: 700, color: T.fg, marginTop: 14, marginBottom: 8 }}>Любая команда разработки</Text>
          <Text style={{ fontSize: 12, color: T.fg2, lineHeight: 1.6 }}>
            Передать ТЗ своей или внешней команде и реализовать продукт в привычной модели. ТЗ самодостаточно.
          </Text>
        </Card>
        <View style={{ flex: 1, backgroundColor: T.bg2, borderRadius: 8, borderWidth: 2, borderColor: T.accent, padding: 22 }}>
          <Badge theme={T} solid>ВАРИАНТ 2</Badge>
          <Text style={{ fontSize: 18, fontWeight: 700, color: T.fg, marginTop: 14, marginBottom: 8 }}>Разработка силами AX10</Text>
          <Text style={{ fontSize: 12, color: T.fg2, lineHeight: 1.6 }}>
            Поручить реализацию AX10 с AI-first подходом. Это отдельный этап, а не обязательная часть проекта.
          </Text>
        </View>
      </View>
      <Card theme={T} accentBorder style={{ padding: 14, marginTop: 14 }}>
        <Text style={{ fontSize: 13, color: T.fg2, lineHeight: 1.5 }}>
          <Text style={{ fontWeight: 700, color: T.fg }}>Ключевой принцип: </Text>
          разработка не навязывается. Клиент получает свободу выбора на каждом этапе.
        </Text>
      </Card>
    </View>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 11: DEV PARTNER                                  */
/* ═══════════════════════════════════════════════════════ */
const advantages = [
  { title: "Непрерывность контекста", desc: "Команда знает продукт изнутри — нет потерь при передаче" },
  { title: "AI-first методы", desc: "Быстрее и дешевле традиционной модели разработки" },
  { title: "Единый партнёр", desc: "От идеи через исследование до рабочего продукта" },
];
const S11 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Разработка" num={11} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ ...FONT.h1, marginBottom: 6, lineHeight: 1.15 }}>
        AX10 может <Text style={{ color: T.accent }}>реализовать ТЗ</Text>
      </Text>
      <Text style={{ fontSize: 14, color: T.muted, marginBottom: 20, lineHeight: 1.5 }}>
        Если важны скорость и снижение бюджета — AX10 может стать технологическим партнёром
      </Text>
      <View style={{ flexDirection: "row", gap: 14, marginBottom: 14 }}>
        {advantages.map((a, i) => (
          <Card key={i} theme={T} accentBorder style={{ flex: 1, padding: 18 }}>
            <Text style={{ fontSize: 15, fontWeight: 700, color: T.fg, marginBottom: 8 }}>{a.title}</Text>
            <Text style={{ fontSize: 12, color: T.muted, lineHeight: 1.5 }}>{a.desc}</Text>
          </Card>
        ))}
      </View>
      <Card theme={T} accentBorder style={{ padding: 14 }}>
        <Text style={{ fontSize: 13, color: T.fg2, lineHeight: 1.5 }}>
          <Text style={{ fontWeight: 700, color: T.fg }}>Важно: </Text>
          это опция, а не условие. Разработка предлагается только после завершения исследовательского этапа.
        </Text>
      </Card>
    </View>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 12: AI-FIRST BENEFITS                            */
/* ═══════════════════════════════════════════════════════ */
const S12 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="AI-first" num={12} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ ...FONT.h1, marginBottom: 6, lineHeight: 1.15 }}>
        AI-first подход: <Text style={{ color: T.accent }}>скорость и экономия</Text>
      </Text>
      <Text style={{ fontSize: 14, color: T.muted, marginBottom: 20, lineHeight: 1.5 }}>
        AX10 имеет практический опыт запуска коммерческих сервисов с использованием нейросетевых методов
      </Text>
      <View style={{ flexDirection: "row", gap: 16, marginBottom: 16 }}>
        <View style={{ flex: 1, backgroundColor: T.bg2, borderRadius: 8, borderWidth: 2, borderColor: T.accent, padding: 24, alignItems: "center" }}>
          <Text style={{ fontSize: 42, fontWeight: 700, color: T.accent, lineHeight: 1 }}>5-6x</Text>
          <Text style={{ fontSize: 13, color: T.fg2, marginTop: 12, textAlign: "center" }}>ниже затраты по сравнению с традиционной моделью</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: T.bg2, borderRadius: 8, borderWidth: 2, borderColor: T.accent, padding: 24, alignItems: "center" }}>
          <Text style={{ fontSize: 42, fontWeight: 700, color: T.accent, lineHeight: 1 }}>10x+</Text>
          <Text style={{ fontSize: 13, color: T.fg2, marginTop: 12, textAlign: "center" }}>быстрее сроки выхода на рынок</Text>
        </View>
      </View>
      <Card theme={T} accentBorder style={{ padding: 14 }}>
        <Text style={{ fontSize: 13, color: T.fg2, lineHeight: 1.5 }}>
          <Text style={{ fontWeight: 700, color: T.fg }}>Практический опыт: </Text>
          коммерческие сервисы, созданные с AI-first подходом, уже работают в продакшне.
        </Text>
      </Card>
    </View>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 13: NO VENDOR LOCK-IN                            */
/* ═══════════════════════════════════════════════════════ */
const guarantees = [
  { title: "Читаемый код", desc: "Структурированный, понятный код — не «чёрный ящик»" },
  { title: "Полная документация", desc: "Техническая документация и архитектурные решения" },
  { title: "Возможность передачи", desc: "Код можно передать другой команде без привязки" },
];
const S13 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Независимость" num={13} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ ...FONT.h1, marginBottom: 6, lineHeight: 1.15 }}>
        AI-first <Text style={{ color: T.accent }}>не создаёт зависимость</Text>
      </Text>
      <Text style={{ fontSize: 14, color: T.muted, marginBottom: 20, lineHeight: 1.5 }}>
        Результат — читаемый, структурированный код с документацией
      </Text>
      <View style={{ flexDirection: "row", gap: 14, marginBottom: 14 }}>
        {guarantees.map((g, i) => (
          <View key={i} style={{ flex: 1, backgroundColor: T.bg2, borderRadius: 8, borderTopWidth: 3, borderTopColor: T.accent, borderWidth: 1, borderColor: T.border, padding: 18 }}>
            <Text style={{ fontSize: 15, fontWeight: 700, color: T.fg, marginBottom: 8 }}>{g.title}</Text>
            <Text style={{ fontSize: 12, color: T.muted, lineHeight: 1.5 }}>{g.desc}</Text>
          </View>
        ))}
      </View>
      <Card theme={T} accentBorder style={{ padding: 14 }}>
        <Text style={{ fontSize: 13, color: T.fg2, lineHeight: 1.5 }}>
          <Text style={{ fontWeight: 700, color: T.fg }}>Для клиента: </Text>
          высокая скорость, более низкий бюджет и <Text style={{ fontWeight: 700, color: T.accent }}>свобода смены исполнителя</Text> в будущем.
        </Text>
      </Card>
    </View>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 14: BUSINESS EFFECT                              */
/* ═══════════════════════════════════════════════════════ */
const effects = [
  { title: "Снижение риска", desc: "Первый релиз строится на данных, а не предположениях" },
  { title: "Экономия бюджета", desc: "Инвестиции только в подтверждённые функции" },
  { title: "Ускорение запуска", desc: "Готовое ТЗ сокращает фазу планирования" },
  { title: "Свобода выбора", desc: "Клиент сам решает: кто будет разработчиком" },
];
const S14 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Бизнес-эффект" num={14} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ ...FONT.h1, marginBottom: 6, lineHeight: 1.15 }}>
        Управляемый путь <Text style={{ color: T.accent }}>к запуску</Text>
      </Text>
      <Text style={{ fontSize: 14, color: T.muted, marginBottom: 18, lineHeight: 1.5 }}>
        Подход AX10 превращает неопределённость в последовательность шагов:
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 14, marginBottom: 14 }}>
        {effects.map((e, i) => (
          <Card key={i} theme={T} accentBorder style={{ width: "48%", padding: 16 }}>
            <Text style={{ fontSize: 15, fontWeight: 700, color: T.fg, marginBottom: 6 }}>{e.title}</Text>
            <Text style={{ fontSize: 12, color: T.muted, lineHeight: 1.5 }}>{e.desc}</Text>
          </Card>
        ))}
      </View>
      <View style={{ backgroundColor: T.bg2, borderRadius: 8, borderWidth: 2, borderColor: T.accent, padding: 14 }}>
        <Text style={{ fontSize: 13, color: T.fg2, lineHeight: 1.5 }}>
          <Text style={{ fontWeight: 700, color: T.accent }}>Итог: </Text>
          подтверждённый продуктовый фокус, независимое ТЗ, затем реализация с любой командой или AI-first разработка силами AX10.
        </Text>
      </View>
    </View>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 15: PROJECT FORMAT                               */
/* ═══════════════════════════════════════════════════════ */
const phases = [
  { period: "НЕДЕЛИ 1–2", title: "Подготовка", items: ["Уточнение параметров", "Дизайн исследования", "Подготовка инструментов"] },
  { period: "НЕДЕЛИ 3–5", title: "Полевой этап", items: ["Интервью и анкетирование", "ИИ-обработка данных", "Кабинетное исследование"] },
  { period: "НЕДЕЛИ 6–9", title: "Синтез и ТЗ", items: ["Продуктовые сценарии", "Структура MVP", "ТЗ и дорожная карта"] },
];
const S15 = () => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Формат проекта" num={15} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ ...FONT.h1, marginBottom: 6, lineHeight: 1.15 }}>
        <Text style={{ color: T.accent }}>7–9 недель</Text> до результата
      </Text>
      <Text style={{ fontSize: 14, color: T.muted, marginBottom: 20, lineHeight: 1.5 }}>
        В базовом варианте — 7 недель, при расширенном полевом этапе — до 9 недель
      </Text>
      <View style={{ flexDirection: "row", gap: 14 }}>
        {phases.map((p, i) => (
          <View key={i} style={{
            flex: 1, backgroundColor: T.bg2, borderRadius: 8, padding: 20,
            borderWidth: 2, borderColor: T.accent,
          }}>
            <Badge theme={T} solid>{p.period}</Badge>
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
    </View>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* SLIDE 16: FINAL / CTA                                  */
/* ═══════════════════════════════════════════════════════ */
const team = [
  { name: "С. Мартюшев", role: "Финансы", exp: "20+ лет" },
  { name: "С. Бобылев", role: "Продажи", exp: "7+ лет" },
  { name: "Д. Бондарев", role: "Разработка", exp: "30+ лет" },
  { name: "С. Томилов", role: "PR", exp: "7+ лет" },
];
const S16 = ({ imgBase }) => (
  <Page size={[PW, PH]} style={pg}>
    <Hdr label="Контакты" num={16} />
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ ...FONT.h1, marginBottom: 10, lineHeight: 1.15 }}>
        Начните с <Text style={{ color: T.accent }}>проверенного фундамента</Text>
      </Text>
      <Text style={{ fontSize: 14, color: T.muted, marginBottom: 18, lineHeight: 1.5 }}>
        AX10 помогает сделать первый шаг к запуску цифрового сервиса быстрым, обоснованным и управляемым.
      </Text>
      <View style={{ flexDirection: "row", gap: 12, marginBottom: 16 }}>
        {team.map((t, i) => (
          <Card key={i} theme={T} style={{ flex: 1, padding: 14, alignItems: "center" }}>
            <Text style={{ fontSize: 12, fontWeight: 700, color: T.fg }}>{t.name}</Text>
            <Text style={{ fontSize: 11, color: T.accent, marginTop: 2 }}>{t.role}</Text>
            <Text style={{ fontSize: 10, color: T.muted, marginTop: 2 }}>{t.exp}</Text>
          </Card>
        ))}
      </View>
      <View style={{ backgroundColor: T.bg2, borderRadius: 8, borderWidth: 2, borderColor: T.accent, padding: 18, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: 700, color: T.fg, marginBottom: 4 }}>Следующий шаг — диагностическая сессия</Text>
          <Text style={{ fontSize: 12, color: T.muted, lineHeight: 1.5 }}>Расскажите о задаче. Мы дадим аналитику бесплатно на первом звонке.</Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Image src={`${imgBase}/images/ax10/logo-ax10.png`}
            style={{ width: 80, height: 30, objectFit: "contain", marginBottom: 6 }} />
          <Text style={{ fontSize: 14, fontWeight: 700, color: T.accent }}>ax10.ru</Text>
          <Text style={{ fontSize: 11, color: T.fg2, marginTop: 4 }}>Сергей Мартюшев</Text>
          <Text style={{ fontSize: 10, color: T.muted, marginTop: 2 }}>@smartfincons</Text>
          <Text style={{ fontSize: 10, color: T.muted, marginTop: 1 }}>+7(900)916-73-69</Text>
        </View>
      </View>
    </View>
    <Br />
  </Page>
);

/* ═══════════════════════════════════════════════════════ */
/* DOCUMENT                                               */
/* ═══════════════════════════════════════════════════════ */
const AXDoc = ({ imgBase }) => (
  <Document title="AX10 — От идеи к ТЗ" author="AX10">
    <S1 imgBase={imgBase} />
    <S2 /><S3 /><S4 /><S5 /><S6 /><S7 /><S8 /><S9 /><S10 /><S11 /><S12 /><S13 /><S14 /><S15 />
    <S16 imgBase={imgBase} />
  </Document>
);

export async function generateAX10Pdf(onProgress) {
  if (onProgress) onProgress("Генерация PDF...");
  const imgBase = getImageBase();
  const blob = await pdf(<AXDoc imgBase={imgBase} />).toBlob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "AX10_Presentation.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
