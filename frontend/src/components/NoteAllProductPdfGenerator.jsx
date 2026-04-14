/**
 * NoteAll Product Presentation PDF Generator
 * Supports Light and Dark themes + optional Slide 13 exclusion.
 * Both PDFs are pre-generated on page load and stored as blobs.
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
  },
  dark: {
    bg: "#0f172a", fg: "#f1f5f9", fg2: "#e2e8f0",
    muted: "#94a3b8", dim: "#64748b",
    accent: "#2dd4bf",
    border: "#334155", card: "#1e293b",
    accentBg: "rgba(45,212,191,0.15)",
  },
};

/* Mutable theme ref — set before each pdf() call, read during render */
let T = THEMES.light;

const f = { fontFamily: "Inter" };
const ps = () => ({ ...f, width: PW, height: PH, backgroundColor: T.bg, color: T.fg, padding: 30 });

/* ── helpers ── */

const Header = ({ num, label, total }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 14 }}>
    <Text style={{ fontSize: 11, fontWeight: 700, color: T.accent, letterSpacing: 1.5, textTransform: "uppercase" }}>{label}</Text>
    <Text style={{ fontSize: 11, color: T.dim }}>{String(num).padStart(2, "0")} / {total}</Text>
  </View>
);

const H = ({ children }) => (
  <Text style={{ fontSize: 26, fontWeight: 700, color: T.fg, marginBottom: 6, lineHeight: 1.2 }}>{children}</Text>
);

const HA = ({ children }) => (
  <Text style={{ fontSize: 26, fontWeight: 700, color: T.accent, lineHeight: 1.2 }}>{children}</Text>
);

const Sub = ({ children }) => (
  <Text style={{ fontSize: 13, color: T.muted, lineHeight: 1.4, marginBottom: 14, maxWidth: 600 }}>{children}</Text>
);

const Li = ({ children }) => (
  <View style={{ flexDirection: "row", gap: 4, alignItems: "flex-start", marginBottom: 3 }}>
    <View style={{ width: 5, height: 5, borderRadius: 3, backgroundColor: T.accent, marginTop: 5 }} />
    <Text style={{ fontSize: 12, color: T.muted, lineHeight: 1.4, flex: 1 }}>{children}</Text>
  </View>
);

const Card = ({ children, accent, style }) => (
  <View style={{ flex: 1, backgroundColor: T.card, borderRadius: 4, padding: 12, borderWidth: 0.5, borderColor: accent ? T.accent : T.border, borderTopWidth: accent ? 3 : 0.5, borderTopColor: accent ? T.accent : T.border, ...style }}>
    {children}
  </View>
);

const CardTitle = ({ children }) => (
  <Text style={{ fontSize: 14, fontWeight: 700, color: T.fg, marginBottom: 4 }}>{children}</Text>
);

const BigNum = ({ children }) => (
  <Text style={{ fontSize: 32, fontWeight: 700, color: T.accent, marginBottom: 2 }}>{children}</Text>
);

const Tag = ({ children }) => (
  <View style={{ backgroundColor: T.accentBg, borderRadius: 3, paddingHorizontal: 6, paddingVertical: 2 }}>
    <Text style={{ fontSize: 10, fontWeight: 600, color: T.accent }}>{children}</Text>
  </View>
);

/* ════════════════════════════════════════════
   SLIDES
   ════════════════════════════════════════════ */

const Slide01 = ({ imgBase }) => (
  <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: T.bg, padding: 0, justifyContent: "center", alignItems: "center" }}>
    <Image src={`${imgBase}/images/noteall/logo-noteall.png`} style={{ width: 120, height: 40, marginBottom: 20, objectFit: "contain" }} />
    <Text style={{ fontSize: 28, fontWeight: 700, color: T.fg, textAlign: "center", maxWidth: 600, lineHeight: 1.3 }}>
      AI-платформа для анализа встреч, интервью и рабочих обсуждений
    </Text>
    <Text style={{ fontSize: 13, color: T.muted, textAlign: "center", maxWidth: 500, marginTop: 12, lineHeight: 1.4 }}>
      Убираем рутину между «мы поговорили» и «у нас есть готовый материал для работы»
    </Text>
    <View style={{ width: 40, height: 2, backgroundColor: T.accent, marginTop: 20, opacity: 0.5 }} />
    <Text style={{ fontSize: 10, color: T.dim, marginTop: 12 }}>noteall.ru</Text>
  </Page>
);

const Slide02 = ({ total }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={2} label="ПРОБЛЕМА" total={total} />
    <H>Большая часть ценности <HA>теряется после встречи</HA></H>
    <Sub>Сервисов транскрибации много — но сам по себе транскрипт мало что даёт. Он используется ненамного чаще, чем просто аудиозапись. Ценная информация из встреч так и не превращается в рабочие документы.</Sub>
    <View style={{ flexDirection: "row", gap: 8, marginBottom: 10 }}>
      <Card><BigNum>80%</BigNum><Text style={{ fontSize: 12, color: T.muted, lineHeight: 1.3 }}>записей остаются необработанными — транскрипт длинный и неудобный</Text></Card>
      <Card><BigNum>40%</BigNum><Text style={{ fontSize: 12, color: T.muted, lineHeight: 1.3 }}>информации теряется без фиксации решений, задач и выводов</Text></Card>
      <Card><BigNum>Много</BigNum><Text style={{ fontSize: 12, color: T.muted, lineHeight: 1.3 }}>разрозненных инструментов: запись отдельно, заметки отдельно, задачи отдельно</Text></Card>
    </View>
    <View style={{ backgroundColor: T.card, borderRadius: 4, padding: 10, borderLeftWidth: 3, borderLeftColor: T.accent, borderWidth: 0.5, borderColor: T.border }}>
      <Text style={{ fontSize: 13, color: T.muted, lineHeight: 1.4 }}>
        <Text style={{ fontWeight: 700, color: T.fg }}>Обычные инструменты дают текст и краткое summary</Text> — но не доводят записи встреч до формата, пригодного для внедрения и принятия решений.
      </Text>
    </View>
  </Page>
);

const Slide03 = ({ total }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={3} label="РЕШЕНИЕ" total={total} />
    <H>От записи — <HA>к структурированному результату</HA></H>
    <Sub>Noteall превращает неструктурированный разговор в рабочий материал: размечает спикеров, собирает реплики по темам, исправляет ошибки, применяет фреймворки.</Sub>
    <View style={{ flexDirection: "row", gap: 8 }}>
      {[
        { n: "01", t: "Обработка записи", items: ["Транскрибация аудио/видео", "Разметка спикеров", "Склейка фрагментов", "Коррекция по контексту"] },
        { n: "02", t: "Анализ содержания", items: ["Разбивка на темы и блоки", "AI-сценарий анализа", "Наложение фреймворков", "Учёт доп. файлов и контекста"] },
        { n: "03", t: "Результат", items: ["Структурированный документ", "Выводы и рекомендации", "Экспорт в DOCX", "Шаринг по ссылке"] },
      ].map((s, i) => (
        <Card key={i} accent>
          <Text style={{ fontSize: 11, fontWeight: 700, color: T.accent, opacity: 0.7 }}>{s.n}</Text>
          <Text style={{ fontSize: 15, fontWeight: 700, color: T.fg, marginTop: 4, marginBottom: 6 }}>{s.t}</Text>
          {s.items.map((it, j) => <Li key={j}>{it}</Li>)}
        </Card>
      ))}
    </View>
  </Page>
);

const Slide04 = ({ total }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={4} label="РЕЗУЛЬТАТ" total={total} />
    <H>На выходе — не транскрипт, <HA>а рабочий документ</HA></H>
    <Sub>Noteall превращает неструктурированную коммуникацию в структурированные артефакты для работы команды.</Sub>
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
      {["Summary встречи", "Тематическая структура обсуждения", "Выводы и рекомендации", "Дорожная карта", "Диагностика по фреймворку", "Материалы для проектирования", "Готовый к использованию ТЗ / PRD / backlog", "Синтез нескольких интервью"].map((t, i) => (
        <View key={i} style={{ width: "48%", flexDirection: "row", gap: 4, alignItems: "flex-start", backgroundColor: T.card, borderRadius: 4, padding: 8, borderWidth: 0.5, borderColor: T.border }}>
          <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: T.accent, marginTop: 3 }} />
          <Text style={{ fontSize: 13, color: T.fg, lineHeight: 1.3, flex: 1 }}>{t}</Text>
        </View>
      ))}
    </View>
  </Page>
);

const Slide05 = ({ total }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={5} label="СПИКЕРЫ" total={total} />
    <H>Система <HA>знает ваших собеседников</HA></H>
    <Sub>Голосовые профили участников — система узнаёт спикеров автоматически и с каждой записью становится точнее.</Sub>
    <View style={{ flexDirection: "row", gap: 8 }}>
      {[
        { t: "Справочник контактов", d: "Ведите базу участников. Система сохраняет голосовые профили и узнаёт их автоматически." },
        { t: "Авто-определение", d: "Спикеры назначаются по голосовым профилям. Можно подтвердить или скорректировать одним кликом." },
        { t: "Растущая точность", d: "С каждой записью профили точнее. Чем больше встреч — тем надёжнее определение участников." },
      ].map((s, i) => (
        <Card key={i}>
          <Text style={{ fontSize: 18, fontWeight: 700, color: T.accent, opacity: 0.5, marginBottom: 4 }}>{String(i + 1).padStart(2, "0")}</Text>
          <CardTitle>{s.t}</CardTitle>
          <Text style={{ fontSize: 12, color: T.muted, lineHeight: 1.4 }}>{s.d}</Text>
        </Card>
      ))}
    </View>
  </Page>
);

const Slide06 = ({ imgBase, total }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={6} label="СЦЕНАРИИ АНАЛИЗА" total={total} />
    <H>Гибкая настройка <HA>глубины и формата</HA></H>
    <Sub>Каждый сценарий определяет подробность, структуру и акценты анализа.</Sub>
    <View style={{ flexDirection: "row", gap: 12 }}>
      <View style={{ flex: 1 }}>
        {["Подробность, акценты и формат — под вашу задачу", "Кастомизируемый AI-анализ: резюме, задачи, риски, ключевые решения", "Импорт и экспорт сценариев между коллегами", "Мгновенное применение к любой записи"].map((t, i) => <Li key={i}>{t}</Li>)}
      </View>
      <Image src={`${imgBase}/images/noteall/screenshot-scenarios.png`} style={{ width: 340, height: 240, objectFit: "contain", borderRadius: 4 }} />
    </View>
  </Page>
);

const Slide07 = ({ total }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={7} label="ВИЗУАЛЬНЫЙ КОНТЕКСТ" total={total} />
    <H>Анализ слайдов и экранов <HA>из видео</HA></H>
    <Sub>Автоматическое извлечение ключевых кадров — скриншоты интерфейсов и презентаций, привязанные к обсуждению.</Sub>
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
      {[
        { t: "Извлечение кадров", d: "Автоматическое определение значимых моментов видео и захват скриншотов" },
        { t: "Привязка к контексту", d: "Каждый кадр связан с обсуждением: что показывали, какие решения принимались" },
        { t: "Визуальный отчёт", d: "Текст и изображения в едином документе — идеально для UI-ревью" },
        { t: "Анализ презентаций", d: "Обсуждения слайдов и графиков фиксируются с визуальными доказательствами" },
      ].map((s, i) => (
        <View key={i} style={{ width: "48%", backgroundColor: T.card, borderRadius: 4, padding: 10, borderWidth: 0.5, borderColor: T.border }}>
          <CardTitle>{s.t}</CardTitle>
          <Text style={{ fontSize: 12, color: T.muted, lineHeight: 1.4 }}>{s.d}</Text>
        </View>
      ))}
    </View>
  </Page>
);

const Slide08 = ({ total }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={8} label="ИСТОЧНИКИ ДАННЫХ" total={total} />
    <H>Анализируйте записи <HA>из любых источников</HA></H>
    <Sub>Аудио и видео файлы, ссылки на видео-хостинги, социальные сети и облачные хранилища.</Sub>
    <View style={{ flexDirection: "row", gap: 8 }}>
      {[
        { t: "Загрузка файлов", d: "Аудио или видео — любой формат. Полная транскрибация с определением спикеров.", tags: ["MP3", "MP4", "WAV", "WebM"] },
        { t: "Ссылки", d: "Вставьте ссылку на любой видео-хостинг, социальную сеть или облачное хранилище.", tags: ["Хостинги", "Соцсети", "Облака"] },
        { t: "Доп. контекст", d: "Прикрепите PDF и другие материалы — система учтёт их при анализе.", tags: ["PDF", "Ссылки", "Документы"] },
      ].map((s, i) => (
        <Card key={i}>
          <CardTitle>{s.t}</CardTitle>
          <Text style={{ fontSize: 12, color: T.muted, lineHeight: 1.4, marginBottom: 6 }}>{s.d}</Text>
          <View style={{ flexDirection: "row", gap: 4, flexWrap: "wrap" }}>
            {s.tags.map((tg, j) => <Tag key={j}>{tg}</Tag>)}
          </View>
        </Card>
      ))}
    </View>
  </Page>
);

const Slide09 = ({ imgBase, total }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={9} label="ШАРИНГ И ЭКСПОРТ" total={total} />
    <H>Делитесь <HA>результатами</HA></H>
    <Sub>Отправьте коллеге ссылку — результат откроется без регистрации. Или экспортируйте в DOCX по шаблону.</Sub>
    <View style={{ flexDirection: "row", gap: 16 }}>
      <View style={{ flex: 1 }}>
        {[
          { t: "Одна ссылка — доступ для всех", d: "Без регистрации, на любом устройстве" },
          { t: "Адаптивный вид", d: "Удобное чтение на смартфоне, планшете и компьютере" },
          { t: "Экспорт в DOCX", d: "По шаблону с плейсхолдерами — под корпоративный формат" },
          { t: "AI-переформулировка", d: "Перефразируйте отдельные блоки результата одним кликом" },
        ].map((s, i) => (
          <View key={i} style={{ flexDirection: "row", gap: 4, alignItems: "flex-start", marginBottom: 6 }}>
            <View style={{ width: 5, height: 5, borderRadius: 3, backgroundColor: T.accent, marginTop: 5 }} />
            <View>
              <Text style={{ fontSize: 13, fontWeight: 600, color: T.fg }}>{s.t}</Text>
              <Text style={{ fontSize: 12, color: T.muted }}>{s.d}</Text>
            </View>
          </View>
        ))}
      </View>
      <Image src={`${imgBase}/images/noteall/screenshot-phone.png`} style={{ width: 160, height: 300, objectFit: "contain" }} />
    </View>
  </Page>
);

const Slide10 = ({ total }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={10} label="КАЧЕСТВЕННЫЕ ИССЛЕДОВАНИЯ" total={total} />
    <H>Research Module: <HA>Customer Development</HA></H>
    <Sub>Полноценный инструмент для качественных исследований на основе интервью.</Sub>
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
      {[
        { t: "Фреймворки", d: "JTBD, SPACE/7Ways, VPC — сейчас. Десятки других в ближайшем будущем." },
        { t: "Дэшборд проекта", d: "Сегменты, квоты, статусы, календарь. Полный контроль хода исследования." },
        { t: "Полевой этап", d: "Реестр респондентов, pipeline-статусы, контроль качества интервью." },
        { t: "AI-пайплайн", d: "Загрузка записи, транскрипт, саммари, DOCX-артефакт — автоматически." },
        { t: "Кросс-анализ", d: "Синтез нескольких интервью в сводный аналитический документ." },
        { t: "Команда", d: "4 роли: владелец, менеджер, участник, клиент-просмотр." },
      ].map((s, i) => (
        <View key={i} style={{ width: "31%", backgroundColor: T.card, borderRadius: 4, padding: 8, borderWidth: 0.5, borderColor: T.border }}>
          <CardTitle>{s.t}</CardTitle>
          <Text style={{ fontSize: 11, color: T.muted, lineHeight: 1.4 }}>{s.d}</Text>
        </View>
      ))}
    </View>
  </Page>
);

const Slide11 = ({ total }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={11} label="ЦЕННОСТЬ" total={total} />
    <H>Универсальная платформа <HA>для трёх типов команд</HA></H>
    <View style={{ flexDirection: "row", gap: 8 }}>
      {[
        { t: "Для интеграторов", items: ["Ускоряет сбор требований и описание процессов", "Снижает нагрузку на аналитиков", "Помогает быстрее собирать ТЗ", "Фиксация изменений и обучение"] },
        { t: "Для консалтинга", items: ["Ускоряет интервью и диагностику", "Синтезирует массив интервью", "Оформляет результаты по фреймворкам", "Масштабирует работу экспертов"] },
        { t: "Для product-команд", items: ["Упрощает customer discovery", "Собирает инсайты по темам", "Переводит интервью в PRD и задачи", "Ускоряет цикл исследование - решение"] },
      ].map((s, i) => (
        <Card key={i} accent>
          <Text style={{ fontSize: 13, fontWeight: 700, color: T.fg, marginBottom: 8 }}>{s.t}</Text>
          {s.items.map((it, j) => <Li key={j}>{it}</Li>)}
        </Card>
      ))}
    </View>
  </Page>
);

const Slide12 = ({ total }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={12} label="ПРЕИМУЩЕСТВО" total={total} />
    <H>Глубже, <HA>чем обычный транскрибатор</HA></H>
    <Sub>Это не просто «перевод голоса в текст», а инструмент анализа и упаковки экспертного контекста.</Sub>
    <View style={{ flexDirection: "row", gap: 10, marginTop: 6 }}>
      <Card>
        <Text style={{ fontSize: 14, fontWeight: 700, color: T.dim, marginBottom: 8 }}>Обычные сервисы</Text>
        {["Транскрипт", "Короткое summary", "Мало структуры", "Слабая привязка к бизнес-задаче"].map((t, i) => (
          <View key={i} style={{ flexDirection: "row", gap: 5, marginBottom: 4, alignItems: "center" }}>
            <View style={{ width: 5, height: 5, borderRadius: 3, backgroundColor: T.dim, opacity: 0.4 }} />
            <Text style={{ fontSize: 12, color: T.dim }}>{t}</Text>
          </View>
        ))}
      </Card>
      <View style={{ flex: 1, backgroundColor: T.card, borderRadius: 6, padding: 12, borderWidth: 2.5, borderColor: T.accent, marginTop: 0 }}>
        <Text style={{ fontSize: 14, fontWeight: 700, color: T.accent, marginBottom: 8 }}>Noteall</Text>
        {["Тематическая сборка разговора", "Анализ по настраиваемым сценариям", "Поддержка исследовательских фреймворков", "Работа с несколькими интервью", "Итоговые артефакты под внедрение", "Настройка под конкретный процесс клиента"].map((t, i) => (
          <View key={i} style={{ flexDirection: "row", gap: 5, marginBottom: 4, alignItems: "center" }}>
            <View style={{ width: 5, height: 5, borderRadius: 3, backgroundColor: T.accent }} />
            <Text style={{ fontSize: 12, color: T.fg }}>{t}</Text>
          </View>
        ))}
      </View>
    </View>
  </Page>
);

const Slide13 = ({ total }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={13} label="МЕХАНИКИ ПРОДВИЖЕНИЯ" total={total} />
    <H>Встроенные механики <HA>продвижения</HA></H>
    <Sub>Платформа растёт вместе с пользователями — через реферальные программы, партнёрскую сеть и контент-маркетинг.</Sub>
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
      {[
        { t: "Промо-коды", d: "Гибкая система выдачи промо-кодов для привлечения и активации пользователей." },
        { t: "Реферальная программа", d: "Двусторонняя — бонусы и приглашающему, и приглашённому." },
        { t: "Revenue Share аффилиат", d: "Партнёрская программа с ЛК партнёра и возможностью контрольной закупки." },
        { t: "SEO и контент-маркетинг", d: "Системное продвижение через поисковую оптимизацию и контент-стратегию." },
      ].map((s, i) => (
        <View key={i} style={{ width: "48%", backgroundColor: T.card, borderRadius: 4, padding: 10, borderWidth: 0.5, borderColor: T.border }}>
          <CardTitle>{s.t}</CardTitle>
          <Text style={{ fontSize: 12, color: T.muted, lineHeight: 1.4 }}>{s.d}</Text>
        </View>
      ))}
    </View>
  </Page>
);

const Slide14 = ({ imgBase, total }) => (
  <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: T.bg, padding: 0, justifyContent: "center", alignItems: "center" }}>
    <Image src={`${imgBase}/images/noteall/logo-noteall.png`} style={{ width: 100, height: 34, marginBottom: 16, objectFit: "contain" }} />
    <Text style={{ fontSize: 24, fontWeight: 700, color: T.fg, textAlign: "center", maxWidth: 600, lineHeight: 1.3 }}>
      Быстрее понимать, точнее формулировать, дешевле внедрять
    </Text>
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6, maxWidth: 550, justifyContent: "center", marginTop: 16 }}>
      {["Сокращение времени обработки", "Снижение стоимости аналитики", "Качественная фиксация смыслов", "Экономия времени экспертов", "От обсуждения к действию", "Аналитика — доступная всем"].map((t, i) => (
        <View key={i} style={{ flexDirection: "row", gap: 3, alignItems: "center" }}>
          <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: T.accent }} />
          <Text style={{ fontSize: 9, color: T.muted }}>{t}</Text>
        </View>
      ))}
    </View>
    <View style={{ backgroundColor: T.accent, borderRadius: 6, paddingHorizontal: 24, paddingVertical: 10, marginTop: 20 }}>
      <Text style={{ fontSize: 14, fontWeight: 700, color: "#ffffff" }}>Начать бесплатно</Text>
    </View>
    <Link src="https://noteall.ru" style={{ fontSize: 10, color: T.dim, marginTop: 10, textDecoration: "none" }}>noteall.ru</Link>
    <Text style={{ fontSize: 8, color: T.dim, marginTop: 8 }}>{total} / {total}</Text>
  </Page>
);

/* ── Document ── */
const NoteAllProductDoc = ({ imgBase, total, excludeSlide13 }) => (
  <Document title="Noteall — Возможности платформы" author="Noteall">
    <Slide01 imgBase={imgBase} />
    <Slide02 total={total} />
    <Slide03 total={total} />
    <Slide04 total={total} />
    <Slide05 total={total} />
    <Slide06 imgBase={imgBase} total={total} />
    <Slide07 total={total} />
    <Slide08 total={total} />
    <Slide09 imgBase={imgBase} total={total} />
    <Slide10 total={total} />
    <Slide11 total={total} />
    <Slide12 total={total} />
    {!excludeSlide13 && <Slide13 total={total} />}
    <Slide14 imgBase={imgBase} total={total} />
  </Document>
);

/**
 * Pre-generate both Light and Dark PDF blobs.
 * Called once on page mount; blobs are stored in state for instant download.
 */
export async function preGenerateNoteAllProductPdfs({ excludeSlide13 = false } = {}) {
  const imgBase = getImageBase();
  const total = excludeSlide13 ? 13 : 14;

  T = THEMES.light;
  const lightBlob = await pdf(
    <NoteAllProductDoc imgBase={imgBase} total={total} excludeSlide13={excludeSlide13} />
  ).toBlob();

  T = THEMES.dark;
  const darkBlob = await pdf(
    <NoteAllProductDoc imgBase={imgBase} total={total} excludeSlide13={excludeSlide13} />
  ).toBlob();

  return { light: lightBlob, dark: darkBlob };
}

/** Trigger browser download from a pre-generated blob (cross-browser, Safari-safe) */
export function downloadBlob(blob, filename) {
  if (!blob || blob.size === 0) {
    console.error("downloadBlob: blob is empty or missing");
    return;
  }
  const blobUrl = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = blobUrl;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(blobUrl);
  }, 60000);
}
