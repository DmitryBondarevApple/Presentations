/**
 * Noteall × Точка Банк — PDF Generator (Light + Dark, teal accent).
 * Both PDFs are pre-generated on page load and stored as blobs.
 */
import React from "react";
import { Document, Page, View, Text, Image, pdf } from "@react-pdf/renderer";
import { registerInterFont, getImageBase } from "./pdf-shared/PdfComponents";

registerInterFont();

const PW = 841.89;
const PH = 595.28;

const THEMES = {
  light: {
    bg: "#ffffff", fg: "#0f172a", fg2: "#1e293b", muted: "#475569", dim: "#94a3b8",
    accent: "#0d9488", border: "#e2e8f0", card: "#f8fafc", accentBg: "rgba(13,148,136,0.08)",
    tochka: "tochka-dark.png",
  },
  dark: {
    bg: "#0f172a", fg: "#f1f5f9", fg2: "#e2e8f0", muted: "#94a3b8", dim: "#64748b",
    accent: "#2dd4bf", border: "#334155", card: "#1e293b", accentBg: "rgba(45,212,191,0.12)",
    tochka: "tochka-white.png",
  },
};

let T = THEMES.light;
const f = { fontFamily: "Inter" };
const ps = () => ({ ...f, width: PW, height: PH, backgroundColor: T.bg, color: T.fg, padding: 30 });

/* ── helpers ── */
const Header = ({ num, label, total }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 12 }}>
    <Text style={{ fontSize: 10, fontWeight: 700, color: T.accent, letterSpacing: 1.4, textTransform: "uppercase" }}>{label}</Text>
    <Text style={{ fontSize: 10, color: T.dim }}>Noteall × Точка   ·   {String(num).padStart(2, "0")} / {total}</Text>
  </View>
);

const H = ({ children, size = 24 }) => (
  <Text style={{ fontSize: size, fontWeight: 700, color: T.fg, marginBottom: 6, lineHeight: 1.2 }}>{children}</Text>
);
const HA = ({ children }) => <Text style={{ color: T.accent }}>{children}</Text>;
const Sub = ({ children }) => (
  <Text style={{ fontSize: 12, color: T.muted, lineHeight: 1.4, marginBottom: 12, maxWidth: 660 }}>{children}</Text>
);
const Eyebrow = ({ children }) => (
  <Text style={{ fontSize: 9.5, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 }}>{children}</Text>
);
const Li = ({ children, small }) => (
  <View style={{ flexDirection: "row", gap: 4, alignItems: "flex-start", marginBottom: 2.5, width: small ? "50%" : "100%", paddingRight: small ? 6 : 0 }}>
    <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: T.accent, marginTop: 4.5 }} />
    <Text style={{ fontSize: small ? 9.5 : 11, color: T.fg2, lineHeight: 1.35, flex: 1 }}>{children}</Text>
  </View>
);
const Card = ({ children, accent, style }) => (
  <View style={{ flex: 1, backgroundColor: T.card, borderRadius: 4, padding: 11, borderWidth: 0.5, borderColor: accent ? T.accent : T.border, borderTopWidth: accent ? 2.5 : 0.5, borderTopColor: accent ? T.accent : T.border, ...style }}>
    {children}
  </View>
);
const CardTitle = ({ children, color }) => (
  <Text style={{ fontSize: 13, fontWeight: 700, color: color || T.fg, marginBottom: 5 }}>{children}</Text>
);
const Callout = ({ title, children, style }) => (
  <View style={{ backgroundColor: T.card, borderRadius: 4, padding: 10, borderWidth: 0.5, borderColor: T.border, borderLeftWidth: 3, borderLeftColor: T.accent, ...style }}>
    {title && <Text style={{ fontSize: 9.5, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 3 }}>{title}</Text>}
    <Text style={{ fontSize: 11.5, color: T.fg2, lineHeight: 1.4 }}>{children}</Text>
  </View>
);
const KV = ({ headers, rows, lw = "34%", fs = 10 }) => (
  <View style={{ borderWidth: 0.5, borderColor: T.border, borderRadius: 4 }}>
    {headers && (
      <View style={{ flexDirection: "row", backgroundColor: T.accentBg, borderBottomWidth: 0.5, borderColor: T.border }}>
        <Text style={{ width: lw, paddingVertical: 5, paddingHorizontal: 8, fontSize: fs - 0.5, fontWeight: 700, color: T.accent, textTransform: "uppercase" }}>{headers[0]}</Text>
        <Text style={{ flex: 1, paddingVertical: 5, paddingHorizontal: 8, fontSize: fs - 0.5, fontWeight: 700, color: T.accent, textTransform: "uppercase", borderLeftWidth: 0.5, borderColor: T.border }}>{headers[1]}</Text>
      </View>
    )}
    {rows.map((r, i) => (
      <View key={i} style={{ flexDirection: "row", backgroundColor: i % 2 ? T.card : "transparent", borderBottomWidth: i < rows.length - 1 ? 0.5 : 0, borderColor: T.border }}>
        <Text style={{ width: lw, paddingVertical: 5, paddingHorizontal: 8, fontSize: fs, fontWeight: 600, color: T.fg, lineHeight: 1.3 }}>{r[0]}</Text>
        <Text style={{ flex: 1, paddingVertical: 5, paddingHorizontal: 8, fontSize: fs, color: T.muted, lineHeight: 1.3, borderLeftWidth: 0.5, borderColor: T.border }}>{r[1]}</Text>
      </View>
    ))}
  </View>
);

/* ════════════ SLIDES ════════════ */

const S01 = ({ imgBase }) => (
  <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: T.bg, padding: 0, justifyContent: "center", alignItems: "center" }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 22, marginBottom: 26 }}>
      <Image src={`${imgBase}/images/noteall/logo-noteall.png`} style={{ width: 130, height: 43, objectFit: "contain" }} />
      <Text style={{ fontSize: 22, color: T.dim }}>×</Text>
      <Image src={`${imgBase}/images/tochka/${T.tochka}`} style={{ width: 150, height: 20, objectFit: "contain" }} />
    </View>
    <Text style={{ fontSize: 26, fontWeight: 700, color: T.fg, textAlign: "center", maxWidth: 640, lineHeight: 1.3 }}>
      AI-сервис, который превращает встречи предпринимателей в <Text style={{ color: T.accent }}>рабочие документы, задачи и знания о клиентах</Text>
    </Text>
    <Text style={{ fontSize: 12.5, color: T.muted, textAlign: "center", maxWidth: 560, marginTop: 14, lineHeight: 1.4 }}>
      Для ИП, малого бизнеса, сервисных компаний, агентств, бухгалтеров, юристов, онлайн-школ, селлеров и B2B-команд
    </Text>
    <View style={{ width: 44, height: 2, backgroundColor: T.accent, marginTop: 18, opacity: 0.6 }} />
    <Text style={{ fontSize: 11, color: T.muted, marginTop: 14, textAlign: "center", maxWidth: 560 }}>
      Убираем разрыв между «мы поговорили» и «у нас есть готовый материал для дальнейшей работы»
    </Text>
    <Text style={{ fontSize: 10, color: T.dim, marginTop: 16 }}>noteall.ru · предложение для Точка Банка</Text>
  </Page>
);

const S02 = ({ total }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={2} label="Контекст" total={total} />
    <H>Почему это важно <HA>для Точки</HA></H>
    <Sub>Точка развивает AI-ассистента для предпринимателей. Noteall может стать прикладным AI-решением: предприниматель проводит встречу, консультацию или созвон — и сразу получает рабочий результат.</Sub>
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
      {["Черновик КП", "Оценка трудозатрат", "Протокол договорённостей", "Документ по фреймворкам (JTBD, MEDDIC, PPVVC, PRD Builder)", "Список задач по исполнителям", "Готовый follow-up", "Саммари встречи для CRM", "Функциональные и технические требования"].map((t, i) => (
        <View key={i} style={{ width: "48.5%", flexDirection: "row", gap: 5, alignItems: "flex-start", backgroundColor: T.card, borderRadius: 4, padding: 8, borderWidth: 0.5, borderColor: T.border }}>
          <View style={{ width: 5, height: 5, borderRadius: 3, backgroundColor: T.accent, marginTop: 3 }} />
          <Text style={{ fontSize: 11, color: T.fg2, lineHeight: 1.3, flex: 1 }}>{t}</Text>
        </View>
      ))}
    </View>
    <Callout title="Позиционирование для клиентов Точки">Noteall — это не сервис анализа ВКС и не просто транскрибатор. Это AI-инструмент, который помогает предпринимателю быстрее переходить от разговора к действию.</Callout>
  </Page>
);

const S03 = ({ total }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={3} label="Проблема" total={total} />
    <H>Большая часть ценности <HA>теряется после встречи</HA></H>
    <Sub>Продажи, консультации, найм, обучение, согласования, проектные встречи, обсуждения с подрядчиками. После встречи информация часто остаётся в разрозненном виде:</Sub>
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
      {["Запись — отдельно", "Заметки — отдельно", "Задачи — отдельно", "Документы — отдельно", "Договорённости — в мессенджерах", "Часть деталей — только в памяти"].map((t, i) => (
        <View key={i} style={{ width: "32%", flexDirection: "row", gap: 5, alignItems: "center", backgroundColor: T.card, borderRadius: 4, padding: 8, borderWidth: 0.5, borderColor: T.border }}>
          <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: T.dim }} />
          <Text style={{ fontSize: 10.5, color: T.muted, lineHeight: 1.3, flex: 1 }}>{t}</Text>
        </View>
      ))}
    </View>
    <View style={{ flexDirection: "row", gap: 8 }}>
      <Callout title="Что происходит дальше" style={{ flex: 1 }}>Сотрудник прослушивает запись, вспоминает договорённости и вручную переносит информацию в документы, CRM, задачи или письма.</Callout>
      <Callout title="Главная потеря" style={{ flex: 1 }}>Встреча состоялась, но её результат ещё не стал рабочим материалом. Может стать им через 1–2 дня или никогда.</Callout>
    </View>
  </Page>
);

const S04 = ({ total }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={4} label="Почему недостаточно" total={total} />
    <H>Почему обычного <HA>транскрипта недостаточно</HA></H>
    <Sub>Транскрипт сам по себе редко решает задачу предпринимателя. Ему нужен не просто текст, а понятный следующий шаг.</Sub>
    <View style={{ flexDirection: "row", gap: 10, marginBottom: 10 }}>
      <Card>
        <CardTitle color={T.muted}>Обычные сервисы дают</CardTitle>
        {["Аудиозапись", "Текстовую расшифровку", "Краткое summary", "Иногда — список задач"].map((t, i) => <Li key={i}>{t}</Li>)}
      </Card>
      <Card accent>
        <CardTitle color={T.accent}>Предпринимателю нужен следующий шаг</CardTitle>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {["что пообещали клиенту", "что передать команде", "что отправить после встречи", "что нужно сделать", "что занести в CRM", "какие документы запросить", "какие риски выявлены", "какие требования зафиксированы"].map((t, i) => <Li key={i} small>{t}</Li>)}
        </View>
      </Card>
    </View>
    <Callout title="Вывод">Рынку нужен инструмент, который превращает разговор в рабочий результат.</Callout>
  </Page>
);

const S05 = ({ total }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={5} label="Решение Noteall" total={total} />
    <H>От записи — <HA>к структурированному результату</HA></H>
    <Sub>Noteall превращает неструктурированный разговор в рабочий материал.</Sub>
    <View style={{ flexDirection: "row", gap: 8 }}>
      {[
        { n: "01", t: "Обработка записи", items: ["Транскрибация аудио и видео", "Разметка спикеров", "Сборка фрагментов речи", "Коррекция по контексту", "Авто-исправление ошибок"] },
        { n: "02", t: "Анализ содержания", items: ["Разбивка на темы и блоки", "Извлечение решений, задач, выводов", "Учёт файлов и контекста", "AI-сценарии анализа"] },
        { n: "03", t: "Рабочий результат", items: ["Структурированный документ", "Материалы для CRM, КП, ТЗ", "Выводы и задачи по исполнителям", "Экспорт в DOCX / PDF, шаринг"] },
      ].map((s, i) => (
        <Card key={i} accent>
          <Text style={{ fontSize: 16, fontWeight: 700, color: T.accent, opacity: 0.7 }}>{s.n}</Text>
          <Text style={{ fontSize: 14, fontWeight: 700, color: T.fg, marginTop: 3, marginBottom: 6 }}>{s.t}</Text>
          {s.items.map((it, j) => <Li key={j}>{it}</Li>)}
        </Card>
      ))}
    </View>
  </Page>
);

const S06 = ({ total }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={6} label="Результат для клиента" total={total} />
    <H>На выходе — не транскрипт, <HA>а документ для работы</HA></H>
    <Sub>В зависимости от сценария клиент Точки может получить:</Sub>
    <KV headers={["Сценарий", "Результат"]} fs={9.5} rows={[
      ["Продажа или пресейл", "Summary встречи, потребности клиента, следующие шаги, готовое КП, оценка трудозатрат, проект сметы"],
      ["Клиентская консультация", "Итоги, рекомендации, внутренние отчётные документы, задачи специалисту"],
      ["Проектная встреча", "Протокол, список требований, анализ рисков, ответственные, сроки"],
      ["Интервью с клиентом", "Карта проблем, документы по фреймворкам (JTBD, Value Proposition), инсайты, гипотезы"],
      ["Обучение, наставничество", "Конспект, домашнее задание, индивидуальная траектория обучения, план шагов"],
      ["Найм", "Summary интервью, оценка кандидата, вопросы для проверки"],
    ]} />
    <Callout title="Ключевая польза" style={{ marginTop: 8 }}>Предприниматель быстрее фиксирует смысл разговора и переводит его в действие.</Callout>
  </Page>
);

const S07 = ({ total }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={7} label="Технология" total={total} />
    <H>Почему Noteall <HA>не LLM-обёртка</HA></H>
    <Sub>Noteall создаёт ценность не только за счёт генерации текста. Это не интерфейс к готовой языковой модели, а продуктовая система обработки встреч. Внутри — несколько уровней ценности:</Sub>
    <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 8 }}>
      {["работа с аудио и видео", "определение и уточнение спикеров", "тематическая сборка разговора", "коррекция транскрипта по контексту", "сценарии анализа под разные задачи", "фреймворки: продажи, исследования, проектирование, диагностика", "учёт внешних данных (файлы, другие встречи)", "совокупный анализ нескольких встреч", "экспорт в корпоративные документы", "шеринг результата без регистрации"].map((t, i) => <Li key={i} small>{t}</Li>)}
    </View>
    <Callout title="Итог">LLM используется как часть продукта, но ценность Noteall создаётся организацией коллективной работы, управляемостью и единством процесса, широким набором готовых сценариев обработки, средствами структурирования и превращения встреч в готовый рабочий артефакт.</Callout>
  </Page>
);

const S08 = ({ total }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={8} label="Сегменты · Приоритет для пилота" total={total} />
    <H size={22}>Для каких клиентов Точки <HA>это наиболее актуально</HA></H>
    <KV headers={["Сегмент клиентов Точки", "Почему Noteall релевантен"]} fs={9.5} lw="32%" rows={[
      ["Селлеры с командами", "Нужно фиксировать задачи по поставкам, маркетингу, карточкам и подрядчикам"],
      ["Подрядчики и проектные компании", "Важно не терять требования, сроки, замечания и договорённости"],
      ["Бухгалтерские компании", "Много консультаций, документов, обязательств клиента и задач специалисту"],
      ["Юридические компании", "Важно точно фиксировать запрос, позицию клиента, риски и следующие действия"],
      ["Консалтинг и HR", "Много интервью, диагностик, встреч и отчётов"],
      ["ИТ-аутсорсинг и разработка", "Нужно переводить обсуждения в требования, backlog и ТЗ"],
      ["Онлайн-школы, эксперты, наставники", "Встречи и занятия можно превращать в материалы и домашние задания"],
      ["Digital-агентства", "ВКС — основной формат продаж и проектной работы"],
    ]} />
    <Callout title="Фокус для Точки" style={{ marginTop: 8 }}>Возможна как массовая продажа всем клиентам банка, так и точечный запуск в сегментах, где встречи являются частью операционной работы.</Callout>
  </Page>
);

const Case = ({ num, label, title, situation, problem, does, benefit, products, total }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={num} label={label} total={total} />
    <H size={21}>{title}</H>
    <View style={{ flexDirection: "row", gap: 10, marginBottom: 8 }}>
      <View style={{ flex: 1 }}>
        <Eyebrow>Ситуация</Eyebrow>
        <Text style={{ fontSize: 11, color: T.fg2, lineHeight: 1.35, marginBottom: 7 }}>{situation}</Text>
        <Eyebrow>Проблема</Eyebrow>
        {Array.isArray(problem)
          ? <View style={{ flexDirection: "row", flexWrap: "wrap" }}>{problem.map((p, i) => <Li key={i} small>{p}</Li>)}</View>
          : <Text style={{ fontSize: 11, color: T.muted, lineHeight: 1.35 }}>{problem}</Text>}
      </View>
      <Card accent style={{ flex: 1 }}>
        <CardTitle>Что делает Noteall</CardTitle>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>{does.map((d, i) => <Li key={i} small>{d}</Li>)}</View>
      </Card>
    </View>
    <View style={{ flexDirection: "row", gap: 8 }}>
      <Callout title="Польза для клиента Точки" style={{ flex: 1 }}>{benefit}</Callout>
      <Callout title="Связь с продуктами Точки" style={{ flex: 1 }}>{products}</Callout>
    </View>
  </Page>
);

const cases = [
  { num: 9, label: "Кейс 1 · Бухгалтерия", title: "Бухгалтерская компания",
    situation: "Бухгалтерская компания обслуживает десятки ИП и малых ООО. Клиенты регулярно задают вопросы по налогам, отчётности, кадрам, выплатам, документам и ошибкам в учёте.",
    problem: ["что спросил клиент", "какие документы нужны", "какие риски выявлены", "что обещал бухгалтер", "что должен сделать клиент", "какие сроки согласованы"],
    does: ["краткое резюме для клиента", "follow-up после встречи", "список документов для запроса", "задачи бухгалтеру", "заметка в карточку клиента", "паттерн ответов в базу знаний"],
    benefit: "Отпадает ручная фиксация, обслуживание ускоряется в 2–3 раза, снижаются трудозатраты, договорённости не теряются, качество сопровождения растёт.",
    products: "Онлайн-бухгалтерия, ЭДО, 1С-интеграции, кадровый учёт, банковские продукты для ИП и ООО." },
  { num: 10, label: "Кейс 2 · Digital / ИТ", title: "Digital-агентство или ИТ-аутсорсинг",
    situation: "Команда проводит discovery-встречу с клиентом: цели, проблемы, бюджет, требования, ограничения, сроки и критерии успеха.",
    problem: "После встречи менеджер или аналитик вручную собирает материалы для команды и коммерческого предложения.",
    does: ["карта потребностей клиента", "список функциональных требований", "черновик ТЗ", "основа для КП", "оценка трудозатрат", "открытые вопросы", "риски проекта", "следующие шаги и задачи команды"],
    benefit: "Переход от встречи к предложению ускоряется в 5–8 раз, трудозатраты менеджера снижаются в 8–10 раз, информация передаётся команде точно.",
    products: "CRM, РКО, онлайн-бухгалтерия, зарплатный проект, документооборот, сервисы для малого бизнеса." },
  { num: 11, label: "Кейс 3 · Онлайн-образование", title: "Онлайн-школа, эксперт, наставник",
    situation: "Эксперт, наставник или онлайн-школа проводят занятия, консультации и групповые разборы в ВКС.",
    problem: "Запись занятия есть, но её редко пересматривают. Участникам нужен короткий и полезный материал после встречи.",
    does: ["конспект", "ключевые выводы", "кастомизированное домашнее задание", "индивидуальные рекомендации", "список ошибок", "план следующего занятия", "материалы для повторения"],
    benefit: "Повышается ценность обучения, улучшается клиентский опыт, появляется дополнительный материал для удержания аудитории.",
    products: "Интернет-эквайринг, оплата по ссылке, СБП, онлайн-кассы, бухгалтерия, продукты для самозанятых и ИП." },
  { num: 12, label: "Кейс 4 · Селлеры", title: "Селлер маркетплейсов с командой",
    situation: "Селлер обсуждает с подрядчиками и сотрудниками закупки, поставки, производство и финансы, карточки товаров, рекламу, логистику, возвраты, фулфилмент, упаковку.",
    problem: "Решения остаются в чатах, созвонах и памяти участников. Теряются договорённости, свойства товаров, сроки, задачи и ответственность.",
    does: ["задачи по закупкам", "свойства товаров", "договорённости с подрядчиками", "решения по карточкам", "вопросы по рекламе", "риски по поставкам", "действия для команды", "follow-up"],
    benefit: "Команда быстро переводит обсуждения в действия, договорённости оцифровываются и доступны для поиска, собственник лучше контролирует операционку.",
    products: "Счёт для селлеров, маркетплейс-сервисы, ранний вывод выручки, бухгалтерия для селлеров, ВЭД, закупки из-за рубежа." },
  { num: 13, label: "Кейс 5 · Подрядчики", title: "Подрядчик, проектная компания, стройбригада",
    situation: "Подрядчик проводит встречи с заказчиком, проектировщиками, поставщиками и командой. Много требований, сроков, замечаний и изменений.",
    problem: "Если договорённости не зафиксированы точно, возникают споры, переделки, срыв сроков и потери маржи.",
    does: ["протокол встречи", "обязательства сторон", "перечень требований", "замечания заказчика", "риски", "спорные вопросы", "задачи по ответственным", "история изменений"],
    benefit: "Нет потерь информации, договорённости оцифрованы и доступны для поиска, единая по-проектная среда хранения, проще контролировать исполнение и защищать позицию.",
    products: "Банковские гарантии, спецсчета, финансирование госконтрактов, ЭДО, проверка контрагентов, РКО для подрядчиков." },
  { num: 14, label: "Кейс 6 · Customer Discovery", title: "Customer discovery для малого бизнеса",
    situation: "Предприниматель запускает новый продукт, услугу, онлайн-школу или направление и проводит интервью с клиентами.",
    problem: "Интервью остаются в виде записей и разрозненных выводов. Сложно увидеть повторяющиеся боли, сегменты, критерии выбора и причины отказа.",
    does: ["рекрутировать респондентов", "вести список респондентов", "контролировать статусы интервью", "анализировать каждое интервью", "применять JTBD, VPC и др.", "комплексный анализ интервью", "сводный аналитический документ", "готовое техзадание"],
    benefit: "Малым и средним компаниям доступны инструменты больших корпораций: точный анализ спроса, список функциональных характеристик, сформулированная ценность.",
    products: "AI-ассистент для предпринимателей, образовательные материалы, сервисы запуска бизнеса, платежи, бухгалтерия, маркетинг." },
];

const S15 = ({ total }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={15} label="Интеграция" total={total} />
    <H size={22}>Как Noteall может быть <HA>встроен в экосистему Точки</HA></H>
    <Sub>Четыре сценария встраивания — от быстрого лендинга до глубокой API-интеграции в AI-ассистента.</Sub>
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
      {[
        { n: "Вариант 1", t: "Навык внутри AI-ассистента Точки", d: "Пользователь загружает запись или ссылку, выбирает сценарий анализа и получает результат в нужном формате.", tag: "Требует API-интеграции" },
        { n: "Вариант 2", t: "Партнёрский сервис в каталоге Точки", d: "Noteall предлагается всем клиентам или сегментам, где встречи — важная часть работы.", tag: "Каталог сервисов" },
        { n: "Вариант 3", t: "Интеграция с продуктами Точки", d: "В результаты встреч встраиваются ссылки на продукты Точки: бухгалтерия, ЭДО, 1С, CRM, сервисы для селлеров, платежи.", tag: "Кросс-продажи" },
        { n: "Вариант 4", t: "Пилотный лендинг для сегментов", d: "Отдельные сценарии и офферы для разных типов предпринимателей.", tag: "Быстрый запуск" },
      ].map((v, i) => (
        <Card key={i} accent={i === 0} style={{ width: "48.5%", flex: undefined }}>
          <Text style={{ fontSize: 9.5, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 0.6 }}>{v.n}</Text>
          <Text style={{ fontSize: 13, fontWeight: 700, color: T.fg, marginTop: 2, marginBottom: 4 }}>{v.t}</Text>
          <Text style={{ fontSize: 10.5, color: T.muted, lineHeight: 1.35, marginBottom: 6 }}>{v.d}</Text>
          <View style={{ alignSelf: "flex-start", backgroundColor: T.accentBg, borderRadius: 8, paddingHorizontal: 7, paddingVertical: 2 }}>
            <Text style={{ fontSize: 9, color: T.accent, fontWeight: 600 }}>{v.tag}</Text>
          </View>
        </Card>
      ))}
    </View>
  </Page>
);

const S16 = ({ total }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={16} label="Метрики · Что измеряем в пилоте" total={total} />
    <H size={22}>Метрики результата <HA>для Точки</HA></H>
    <KV headers={["Метрика", "Как измерять"]} fs={9.5} lw="30%" rows={[
      ["Экономия времени", "Сколько минут ручной обработки экономит один обработанный разговор"],
      ["Повторное использование", "Доля пользователей, обработавших 2 и более встречи"],
      ["Полезность результата", "Оценка итогового документа пользователем"],
      ["Экспорт результата", "Доля встреч, по которым выгружен DOCX, отправлена ссылка или создан follow-up"],
      ["Качество сценария", "Оценка точности задач, выводов, требований и рекомендаций"],
      ["Активация продуктов Точки", "Переходы из результата в релевантные сервисы Точки"],
      ["Удержание", "Повторное использование через 7, 14 и 30 дней"],
      ["Готовность платить", "Конверсия из бесплатного использования в платный тариф или партнёрский пакет"],
    ]} />
    <Callout title="Главная метрика пилота" style={{ marginTop: 8 }}>Доля предпринимателей, которые после первой обработки встречи возвращаются и используют Noteall повторно.</Callout>
  </Page>
);

const S17 = ({ total }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={17} label="Аргументы для заказчика" total={total} />
    <H size={20}>Почему бизнес-заказчик Точки <HA>возьмёт Noteall в работу</HA></H>
    <KV headers={["Требование", "Как отвечает Noteall"]} fs={9} lw="26%" rows={[
      ["Конкретный юзкейс", "Обработка встреч предпринимателей и СМБ в рабочие документы и задачи"],
      ["Измеримый результат", "Экономия времени, снижение трудозатрат, рост метрик компаний (конверсия, цикл сделок, LTV), рост качества обслуживания"],
      ["Не LLM-обёртка", "Обработка записи, ситуационные сценарии, отраслевые фреймворки, внутренние данные, работа с несколькими транскриптами"],
      ["Повторяемость", "Один продукт применим к множеству сегментов МСП с похожими сценариями"],
      ["Потенциал для экосистемы", "Может быть навыком AI-ассистента и партнёрским сервисом для клиентов Точки"],
      ["Понятная бизнес-задача", "Помочь предпринимателю извлекать максимальную ценность встреч и переводить их в действия и результат"],
    ]} />
    <Callout title="Ключевой аргумент" style={{ marginTop: 7 }}>Noteall помогает Точке дать предпринимателю не очередной AI-ответ, а прикладной инструмент для ежедневной работы.</Callout>
  </Page>
);

const S18 = ({ total }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={18} label="Риски" total={total} />
    <H>Риски <HA>и способы их закрытия</HA></H>
    <Sub>Каждый риск имеет понятный способ снятия уже на этапе пилота.</Sub>
    <KV headers={["Риск", "Как закрываем"]} fs={9.5} lw="42%" rows={[
      ["Не все клиенты Точки регулярно используют ВКС", "Запускать пилот на сегментах с высокой частотой встреч"],
      ["У клиентов уже есть Zoom, Телемост, CRM и мессенджеры", "Позиционировать Noteall как инструмент обработки записей, а не замену ВКС"],
      ["Продукт могут воспринять как обычный summary-сервис", "Показывать конкретные выходы: КП, задачи, ТЗ, follow-up, CRM-summary"],
      ["У разных сегментов разные форматы работы", "Повторяемые сценарии по сегментам + глубокая кастомизация (самообслуживание)"],
      ["Есть требования к данным и безопасности", "Отдельно согласовать хранение, обработку, доступы, внешние модели и режимы"],
      ["Сложно сразу продавать всей базе", "Начать с пилота на 2–3 сегментах и масштабировать по метрикам"],
    ]} />
  </Page>
);

const S19 = ({ total }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={19} label="Предложение по пилоту" total={total} />
    <H>Предложение <HA>по пилоту</HA></H>
    <Callout title="Цель пилота" style={{ marginBottom: 8 }}>Проверить, насколько Noteall помогает клиентам Точки быстрее превращать встречи, консультации и проектные обсуждения в рабочие документы и действия.</Callout>
    <View style={{ flexDirection: "row", gap: 8, marginBottom: 8 }}>
      <Card>
        <CardTitle>Фокус пилота</CardTitle>
        {["селлеры с командами", "проектные подрядчики и стройбригады", "бухгалтерские и юридические компании", "digital-агентства", "ИТ-аутсорсинг", "онлайн-образование и эксперты"].map((t, i) => <Li key={i}>{t}</Li>)}
      </Card>
      <Card accent>
        <CardTitle>Формат</CardTitle>
        {["привлечь 100–200 компаний", "за 4–6 недель", "50–70 сценариев и 30–50 отраслевых фреймворков", "бесплатный тест и эксклюзивная скидка для клиентов Точки", "сбор обратной связи", "замер экономии времени и повторного использования"].map((t, i) => <Li key={i}>{t}</Li>)}
      </Card>
    </View>
    <Callout title="Результат пилота">Понятно, какие сегменты используют сервис чаще всего, какие сценарии дают наибольшую ценность и где есть потенциал масштабирования внутри клиентской базы Точки.</Callout>
  </Page>
);

const ecoRows = [
  ["селлеры с командами", "100 000", "2%", "2 000", "15 000 ₽", "15 млн ₽"],
  ["проектные подрядчики, стройбригады", "50 000", "1%", "500", "8 000 ₽", "2 млн ₽"],
  ["бухгалтерские и юридические компании", "25 000", "3%", "750", "10 000 ₽", "3,25 млн ₽"],
  ["digital-агентства", "15 000", "5%", "750", "15 000 ₽", "5,63 млн ₽"],
  ["ИТ-аутсорсинг", "10 000", "8%", "800", "15 000 ₽", "6 млн ₽"],
  ["онлайн-образование и эксперты", "10 000", "5%", "500", "10 000 ₽", "2,5 млн ₽"],
  ["прочие клиенты", "250 000", "0,5%", "1 250", "5 000 ₽", "3,13 млн ₽"],
];
const ECW = ["32%", "14%", "9%", "13%", "15%", "17%"];
const EcoCell = ({ children, i, head, strong }) => (
  <Text style={{ width: ECW[i], paddingVertical: 4, paddingHorizontal: 5, textAlign: i === 0 ? "left" : "right", fontSize: head ? 8.5 : 9.5, fontWeight: head || strong ? 700 : 400, color: head ? T.accent : strong ? T.fg : T.muted, textTransform: head ? "uppercase" : "none", lineHeight: 1.25 }}>{children}</Text>
);
const S20 = ({ total }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={20} label="Экономика сотрудничества" total={total} />
    <H size={22}>Оценка возможного <HA>экономического эффекта</HA></H>
    <Sub>Доход банка рассчитан как 50% revenue share от выручки Noteall.</Sub>
    <View style={{ borderWidth: 0.5, borderColor: T.border, borderRadius: 4 }}>
      <View style={{ flexDirection: "row", backgroundColor: T.accentBg, borderBottomWidth: 0.5, borderColor: T.border }}>
        {["Тип клиента", "База", "Конв.", "Клиентов", "ARPU / мес", "Доход банка / мес"].map((h, i) => <EcoCell key={i} i={i} head>{h}</EcoCell>)}
      </View>
      {ecoRows.map((r, ri) => (
        <View key={ri} style={{ flexDirection: "row", backgroundColor: ri % 2 ? T.card : "transparent", borderBottomWidth: 0.5, borderColor: T.border }}>
          {r.map((c, ci) => <EcoCell key={ci} i={ci} strong={ci === 0 || ci === 5}>{c}</EcoCell>)}
        </View>
      ))}
    </View>
    <View style={{ flexDirection: "row", gap: 10, marginTop: 12 }}>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: T.accentBg, borderWidth: 0.5, borderColor: T.accent, borderRadius: 4, paddingHorizontal: 12, paddingVertical: 9 }}>
        <Text style={{ fontSize: 10, color: T.muted, textTransform: "uppercase" }}>Итого в месяц</Text>
        <Text style={{ fontSize: 20, fontWeight: 700, color: T.accent }}>37,51 млн ₽</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: T.accentBg, borderWidth: 0.5, borderColor: T.accent, borderRadius: 4, paddingHorizontal: 12, paddingVertical: 9 }}>
        <Text style={{ fontSize: 10, color: T.muted, textTransform: "uppercase" }}>Итого в год</Text>
        <Text style={{ fontSize: 20, fontWeight: 700, color: T.accent }}>450,1 млн ₽</Text>
      </View>
    </View>
  </Page>
);

const S21 = ({ imgBase, total }) => (
  <Page size={[PW, PH]} style={{ ...ps(), justifyContent: "center" }}>
    <Text style={{ fontSize: 10, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 1.4, marginBottom: 8 }}>Следующий шаг · {String(total).padStart(2, "0")} / {total}</Text>
    <Text style={{ fontSize: 30, fontWeight: 700, color: T.fg, lineHeight: 1.2, marginBottom: 14 }}>Предлагаем совместную <Text style={{ color: T.accent }}>продуктовую сессию</Text> с Точкой</Text>
    <Text style={{ fontSize: 12, color: T.muted, marginBottom: 14 }}>На сессии:</Text>
    {["Подробно ознакомиться с интерфейсом и функционалом Noteall", "Выбрать приоритетные сегменты клиентов", "Обсудить необходимые сценарии обработки встреч", "Согласовать требования по данным и безопасности", "Подготовить пилотный оффер для клиентов"].map((s, i) => (
      <View key={i} style={{ flexDirection: "row", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: 700, color: T.accent, opacity: 0.7, width: 22 }}>{String(i + 1).padStart(2, "0")}</Text>
        <Text style={{ fontSize: 13, color: T.fg2, lineHeight: 1.35, flex: 1 }}>{s}</Text>
      </View>
    ))}
    <View style={{ flexDirection: "row", alignItems: "center", gap: 16, marginTop: 18, paddingTop: 14, borderTopWidth: 0.5, borderTopColor: T.border }}>
      <Image src={`${imgBase}/images/noteall/logo-noteall.png`} style={{ width: 96, height: 32, objectFit: "contain" }} />
      <Text style={{ fontSize: 16, color: T.dim }}>×</Text>
      <Image src={`${imgBase}/images/tochka/${T.tochka}`} style={{ width: 110, height: 15, objectFit: "contain" }} />
      <Text style={{ fontSize: 11, color: T.muted, marginLeft: "auto" }}>noteall.ru</Text>
    </View>
  </Page>
);

const TochkaDoc = ({ imgBase, total }) => (
  <Document>
    <S01 imgBase={imgBase} />
    <S02 total={total} /><S03 total={total} /><S04 total={total} /><S05 total={total} /><S06 total={total} />
    <S07 total={total} /><S08 total={total} />
    {cases.map((c) => <Case key={c.num} {...c} total={total} />)}
    <S15 total={total} /><S16 total={total} /><S17 total={total} /><S18 total={total} /><S19 total={total} />
    <S20 total={total} /><S21 imgBase={imgBase} total={total} />
  </Document>
);

export async function preGenerateTochkaPdfs() {
  const imgBase = getImageBase();
  const total = 21;
  T = THEMES.light;
  const light = await pdf(<TochkaDoc imgBase={imgBase} total={total} />).toBlob();
  T = THEMES.dark;
  const dark = await pdf(<TochkaDoc imgBase={imgBase} total={total} />).toBlob();
  return { light, dark };
}
